/* 田野浜謎解きVR(試作) — WebXR版の土台
   マップ: 一本道ダンジョン(+X方向) / 移動: 床のテレポートパッド / 操作: レイ+トリガー
   Web版の謎データを再利用。ここでの空間構成はUnreal本格版の設計図を兼ねる。 */

(function () {
  "use strict";

  var SAVE_KEY = "tanohamaVRStateV1";
  if (/[?&]reset=1/.test(location.search)) localStorage.removeItem(SAVE_KEY);

  var save = { cleared: [], bossStep: 0 };
  try {
    var raw = localStorage.getItem(SAVE_KEY);
    if (raw) {
      var parsed = JSON.parse(raw);
      if (Array.isArray(parsed.cleared)) save.cleared = parsed.cleared;
      if (typeof parsed.bossStep === "number") save.bossStep = parsed.bossStep;
    }
  } catch (e) { /* 初期化 */ }

  function persist() { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); }
  function isCleared(id) { return save.cleared.indexOf(id) !== -1; }
  function markCleared(id) { if (!isCleared(id)) { save.cleared.push(id); persist(); } }

  /* ---------- 日本語ラベル(canvasテクスチャ) ---------- */
  AFRAME.registerComponent("jp-label", {
    schema: {
      value: { default: "" },
      color: { default: "#ffe999" },
      bg: { default: "rgba(0,0,0,0)" },
      size: { default: 48 },
      w: { default: 512 },
      h: { default: 128 },
      weight: { default: "900" },
    },
    init: function () {
      var self = this;
      this.el.addEventListener("object3dset", function () { self.draw(); });
      if (this.el.getObject3D("mesh")) this.draw();
    },
    update: function () { this.draw(); },
    draw: function () {
      var mesh = this.el.getObject3D("mesh");
      if (!mesh || !mesh.material) return;
      var d = this.data;
      var c = this.canvas || (this.canvas = document.createElement("canvas"));
      c.width = d.w; c.height = d.h;
      var g = c.getContext("2d");
      g.clearRect(0, 0, c.width, c.height);
      if (d.bg && d.bg !== "rgba(0,0,0,0)") {
        g.fillStyle = d.bg;
        g.fillRect(0, 0, c.width, c.height);
      }
      g.fillStyle = d.color;
      g.textAlign = "center";
      g.textBaseline = "middle";
      g.font = d.weight + " " + d.size + 'px "Hiragino Sans", "Yu Gothic", "Noto Sans CJK JP", sans-serif';
      var lines = String(d.value).split("\\n");
      var lh = d.size * 1.25;
      var y0 = c.height / 2 - (lines.length - 1) * lh / 2;
      lines.forEach(function (line, i) { g.fillText(line, c.width / 2, y0 + i * lh); });
      if (!this.tex) {
        this.tex = new THREE.CanvasTexture(c);
        this.tex.anisotropy = 4;
      } else {
        this.tex.needsUpdate = true;
      }
      mesh.material.map = this.tex;
      mesh.material.transparent = true;
      mesh.material.color = new THREE.Color("#ffffff");
      mesh.material.needsUpdate = true;
    },
  });

  /* ---------- ホバー演出 ---------- */
  AFRAME.registerComponent("hoverable", {
    init: function () {
      var el = this.el;
      var base = el.getAttribute("scale") || { x: 1, y: 1, z: 1 };
      el.addEventListener("mouseenter", function () {
        el.setAttribute("scale", (base.x * 1.06) + " " + (base.y * 1.06) + " " + (base.z * 1.06));
      });
      el.addEventListener("mouseleave", function () {
        el.setAttribute("scale", base.x + " " + base.y + " " + base.z);
      });
    },
  });

  /* ---------- データ(Web版と同じ謎) ---------- */
  var KANA_S1 = ["モ", "シ", "ケ", "ガ", "ノ", "テ", "ツ", "オ", "ミ", "マ"];
  var KANA_S2 = ["サ", "ゴ", "キ", "ロ", "ア", "マ", "ウ", "ン", "ク", "イ", "オ", "リ"];
  var BOSS_TILES = ["ア","イ","ウ","エ","ェ","オ","カ","ガ","キ","ク","ケ","ゲ","ゴ","サ","シ","ス","ゼ","タ","ダ","チ","ツ","デ","ト","ド","ニ","ノ","バ","フ","ブ","ヘ","マ","ム","メ","モ","ユ","ョ","ラ","リ","ル","レ","ロ","ン"];
  var BOSS_STEPS = [
    { slots: 2, answer: "バリ", after: "『一犬糸争』糸のような爪の弱攻撃!" },
    { slots: 3, answer: "フユウ", after: "『二脚地動』地面を叩く弱攻撃。空中には無効!" },
    { slots: 4, answer: "ヘンガオ", after: "獣は小幡の方へ…『三石化線』目が合うと石化!" },
    { slots: 4, answer: "ツケモノ", after: "獣は大技前の溜めで動かない…" },
    { slots: 6, answer: "ゴクロウサマ", after: "獣は動かない…" },
    { slots: 3, answer: "カタメ", after: "『百黙絶静』百発百中の即死攻撃が来る!" },
    { slots: 6, answer: "タイムマシン", after: "『零式空間』この空間から出られなくなる念!" },
    { slots: 10, answer: "バタフライエフェクト", after: "" },
  ];

  /* ---------- シーン構築ヘルパ ---------- */
  var world = document.querySelector("#world");
  var rig = document.querySelector("#rig");
  var html = [];

  function floor(x0, x1, z0, z1, color, y) {
    var w = x1 - x0, d = z1 - z0;
    html.push('<a-box position="' + ((x0 + x1) / 2) + ' ' + ((y || 0) - 0.15) + ' ' + ((z0 + z1) / 2) + '" width="' + w + '" depth="' + d + '" height="0.3" color="' + (color || "#2a2e3a") + '" roughness="0.95"></a-box>');
  }
  function wall(x, z, w, h, rotY, color) {
    html.push('<a-box position="' + x + ' ' + (h / 2) + ' ' + z + '" width="' + w + '" height="' + h + '" depth="0.3" rotation="0 ' + (rotY || 0) + ' 0" color="' + (color || "#1a1e28") + '" roughness="0.95"></a-box>');
  }
  function board(imgId, x, y, z, w, h, rotY, label) {
    html.push('<a-entity position="' + x + " " + y + " " + z + '" rotation="0 ' + (rotY || 0) + ' 0">' +
      '<a-plane width="' + (w + 0.24) + '" height="' + (h + 0.24) + '" color="#0b0f16"></a-plane>' +
      '<a-plane position="0 0 0.01" width="' + w + '" height="' + h + '" material="src: ' + imgId + '; shader: flat" class="clickable" hoverable></a-plane>' +
      (label ? '<a-plane position="0 ' + (h / 2 + 0.28) + ' 0" width="2.4" height="0.4" jp-label="value: ' + label + '; size: 54; color: #ffe999; w: 640; h: 110"></a-plane>' : "") +
      "</a-entity>");
  }
  function torch(x, z) {
    html.push('<a-entity position="' + x + ' 2.1 ' + z + '">' +
      '<a-cylinder height="0.5" radius="0.05" color="#5a4326"></a-cylinder>' +
      '<a-sphere position="0 0.35 0" radius="0.12" color="#ffb54d" material="emissive: #ff9a2a; emissiveIntensity: 1"></a-sphere>' +
      "</a-entity>");
  }

  /* ---------- マップ ---------- */
  // 照明
  html.push('<a-entity light="type: ambient; color: #8fa0c0; intensity: 0.7"></a-entity>');
  html.push('<a-entity light="type: directional; color: #ffffff; intensity: 0.55" position="-4 10 6"></a-entity>');

  // Z0 スタート
  floor(-4, 5, -4.5, 4.5, "#323545");
  wall(0.5, -4.5, 9, 4);
  board("#imgIntro", 0, 2, -4.3, 3.4, 1.9, 0, "現在異空間からの脱出");
  torch(-3, -4); torch(4, -4);

  // Z1 割れた足場 (x 8..22 / 穴 13.4..16.6)
  floor(8, 13.4, -5, 5, "#2c3040");
  floor(16.6, 22, -5, 5, "#2c3040");
  html.push('<a-plane position="15 -5 0" rotation="-90 0 0" width="18" height="12" color="#000000"></a-plane>');
  wall(15, -5, 14, 4.6);
  board("#imgS1", 12, 2.3, -4.8, 4.6, 2.5, 0, "ステージ1 問題");
  board("#imgSpell", 19.5, 2.1, -4.8, 3.2, 2.0, 0, "呪文のルール");
  torch(8.5, -4.6); torch(21.5, -4.6);
  // 岩(正解で落ちて橋になる)
  html.push('<a-box id="gateRock" position="15 9 0" width="3.1" height="1.5" depth="2.9" color="#6f665a" roughness="1" visible="false"></a-box>');

  // Z2 扉のない通路 (x 22..34)
  floor(22, 34, -2.6, 2.6, "#2a2c38");
  wall(28, -2.6, 12, 3.6);
  wall(28, 2.6, 12, 3.6);
  board("#imgS2", 26, 1.9, -2.42, 3.6, 2.0, 0, "ステージ2 問題");
  // 色紙の扉
  html.push('<a-entity id="pathDoor" position="31.5 0 0">' +
    '<a-box position="0 1.7 0" width="0.35" height="3.4" depth="5.2" color="#75581e"></a-box>' +
    '<a-box position="-0.19 1.7 -1.4" width="0.06" height="3.0" depth="0.5" color="#c0392b"></a-box>' +
    '<a-box position="-0.19 1.7 0" width="0.06" height="3.0" depth="0.5" color="#1a46a0"></a-box>' +
    '<a-box position="-0.19 1.7 1.4" width="0.06" height="3.0" depth="0.5" color="#f0c828"></a-box>' +
    "</a-entity>");
  torch(23, -2.3); torch(33, 2.3);

  // Z3 凍った足場 (x 34..46)
  floor(34, 46, -4.2, 4.2, "#2b3244");
  wall(40, -4.2, 12, 4.2);
  board("#imgS3", 37, 2.1, -4.0, 4.0, 1.9, 0, "ステージ3 問題");
  html.push('<a-box id="iceBlock" position="41.5 0.55 0" width="2.4" height="1.1" depth="8.4" color="#9fd6ff" material="opacity: 0.75; transparent: true; roughness: 0.2"></a-box>');
  html.push('<a-cone id="fireCone" position="41.5 0.8 0" radius-bottom="0.5" height="1.4" color="#ff7a1e" material="emissive: #ff5400; emissiveIntensity: 1" visible="false"></a-cone>');
  torch(34.6, -3.8); torch(45.4, -3.8);

  // Z4 時差の機械室 (x 46..58)
  floor(46, 58, -3.6, 3.6, "#242838");
  wall(52, -3.6, 12, 4.2, 0, "#171c2a");
  board("#imgS4", 49.5, 2.1, -3.42, 4.2, 2.3, 0, "ステージ4 問題");
  html.push('<a-sphere position="54 2.6 -3.0" radius="0.28" color="#2f66c4" material="emissive: #2f66c4; emissiveIntensity: 0.9"></a-sphere>');
  html.push('<a-sphere position="55 2.6 -3.0" radius="0.28" color="#3f9b3f" material="emissive: #3f9b3f; emissiveIntensity: 0.9"></a-sphere>');
  html.push('<a-sphere position="56 2.6 -3.0" radius="0.28" color="#e0b31e" material="emissive: #e0b31e; emissiveIntensity: 0.9"></a-sphere>');
  html.push('<a-torus id="timePortal" position="57.2 1.8 0" rotation="0 90 0" radius="1.3" radius-tubular="0.09" color="#4a5164"></a-torus>');

  // Z5 出口前のラスボス (x 58..76)
  floor(58, 76, -6, 6, "#262a38");
  wall(67, -6, 18, 5);
  board("#imgS5", 62, 2.4, -5.8, 4.4, 2.6, 0, "ラスボス 原問題");
  html.push('<a-entity id="beast" position="69 0 0">' +
    '<a-sphere position="0 1.7 0" radius="1.5" color="#d8d8e2" roughness="0.9"></a-sphere>' +
    '<a-sphere position="-0.5 2.3 -1.2" radius="0.14" color="#ffcf3d" material="emissive: #ffcf3d; emissiveIntensity: 1"></a-sphere>' +
    '<a-sphere position="0.5 2.3 -1.2" radius="0.14" color="#ffcf3d" material="emissive: #ffcf3d; emissiveIntensity: 1"></a-sphere>' +
    "</a-entity>");
  html.push('<a-torus id="exitPortal" position="74 2 0" rotation="0 90 0" radius="1.7" radius-tubular="0.12" color="#4a5164"></a-torus>');
  html.push('<a-plane id="clearLabel" position="69 3.9 0" rotation="0 -90 0" width="6" height="1.2" visible="false" jp-label="value: 脱出成功!CLEAR!; size: 96; color: #ffe999; w: 1024; h: 200"></a-plane>');
  torch(59, -5.6); torch(75, -5.6); torch(59, 5.6); torch(75, 5.6);

  world.innerHTML = html.join("");

  /* ---------- テレポートパッド ---------- */
  var PADS = [
    { x: 0, z: 2 }, { x: 10.5, z: 0 }, { x: 12.6, z: 0 },
    { x: 15, z: 0, req: "gate" }, { x: 18, z: 0, req: "gate" }, { x: 21, z: 0, req: "gate" },
    { x: 24.5, z: 0, req: "gate" }, { x: 27.5, z: 0, req: "gate" }, { x: 30.5, z: 0, req: "gate" },
    { x: 33, z: 0, req: "path" }, { x: 36.5, z: 0, req: "path" }, { x: 39.5, z: 0, req: "path" },
    { x: 43.5, z: 0, req: "shop" }, { x: 45.5, z: 0, req: "shop" },
    { x: 48.5, z: 0, req: "shop" }, { x: 51.5, z: 0, req: "shop" }, { x: 55, z: 0, req: "shop" },
    { x: 58.5, z: 0, req: "time" }, { x: 61.5, z: 2, req: "time" }, { x: 64.5, z: 0, req: "time" },
    { x: 72.5, z: 0, req: "boss" },
  ];
  var padEls = PADS.map(function (p) {
    var el = document.createElement("a-cylinder");
    el.setAttribute("position", p.x + " 0.02 " + p.z);
    el.setAttribute("radius", "0.55");
    el.setAttribute("height", "0.04");
    el.setAttribute("color", "#ffe166");
    el.setAttribute("material", "emissive: #b98a12; emissiveIntensity: 0.7; opacity: 0.85; transparent: true");
    el.classList.add("clickable");
    el.addEventListener("click", function () {
      rig.setAttribute("position", p.x + " 0 " + p.z);
      var cam = document.querySelector("#cam");
      var cp = cam.getAttribute("position");
      cam.setAttribute("position", "0 " + cp.y + " 0");
    });
    world.appendChild(el);
    return { def: p, el: el };
  });
  function updatePads() {
    padEls.forEach(function (p) {
      var ok = !p.def.req || isCleared(p.def.req);
      p.el.setAttribute("visible", ok);
      if (ok) p.el.classList.add("clickable"); else p.el.classList.remove("clickable");
    });
  }

  /* ---------- 石板ステーション ---------- */
  function makeStation(cfg) {
    var input = [];
    var active = 0;
    var solvedFlag = false;
    var slotEls = [];
    var cols = cfg.cols || Math.min(cfg.tiles.length, 6);
    var tileSize = 0.3, gap = 0.06;
    var slotW = Math.min(0.36, 2.3 / cfg.slots - 0.04);

    var panelH = 1.35 + Math.ceil(cfg.tiles.length / cols) * (tileSize + gap);
    var rootY = (panelH + 0.5) / 2 + 0.12; // パネル下端が床の少し上に来る高さ

    var root = document.createElement("a-entity");
    root.setAttribute("position", cfg.x + " " + rootY + " " + cfg.z);
    root.setAttribute("rotation", "0 " + (cfg.rotY || 180) + " 0");
    world.appendChild(root);
    var back = document.createElement("a-plane");
    back.setAttribute("width", "2.8");
    back.setAttribute("height", String(panelH + 0.5));
    back.setAttribute("color", "#0a0e15");
    back.setAttribute("material", "opacity: 0.96; transparent: true");
    root.appendChild(back);

    var title = document.createElement("a-plane");
    title.setAttribute("position", "0 " + (panelH / 2 + 0.02) + " 0.01");
    title.setAttribute("width", "2.6");
    title.setAttribute("height", "0.34");
    title.setAttribute("jp-label", "value: " + cfg.title + "; size: 46; color: #ffe999; w: 900; h: 110");
    root.appendChild(title);

    var msg = document.createElement("a-plane");
    msg.setAttribute("position", "0 " + (panelH / 2 - 0.34) + " 0.01");
    msg.setAttribute("width", "2.6");
    msg.setAttribute("height", "0.3");
    msg.setAttribute("jp-label", "value: " + (cfg.hint || "文字を選んで石板に刻み、唱えよ") + "; size: 38; color: #cfe0ee; w: 1000; h: 96");
    root.appendChild(msg);
    function setMsg(text, color) {
      msg.setAttribute("jp-label", { value: text, size: 38, color: color || "#cfe0ee", w: 1000, h: 96 });
    }

    var slotY = panelH / 2 - 0.75;
    function buildSlots() {
      slotEls.forEach(function (s) { s.parentNode && s.parentNode.removeChild(s); });
      slotEls = [];
      var totalW = cfg.slots * slotW + (cfg.slots - 1) * 0.05;
      for (var i = 0; i < cfg.slots; i++) {
        (function (idx) {
          var s = document.createElement("a-plane");
          s.setAttribute("position", (-totalW / 2 + slotW / 2 + idx * (slotW + 0.05)) + " " + slotY + " 0.01");
          s.setAttribute("width", String(slotW));
          s.setAttribute("height", "0.42");
          s.classList.add("clickable");
          s.setAttribute("hoverable", "");
          s.addEventListener("click", function () {
            if (solvedFlag) return;
            active = idx;
            refreshSlots();
          });
          root.appendChild(s);
          slotEls.push(s);
        })(i);
      }
      refreshSlots();
    }
    function refreshSlots() {
      slotEls.forEach(function (s, i) {
        s.setAttribute("jp-label", {
          value: input[i] || "",
          size: 96, color: "#ffe999", w: 128, h: 148,
          bg: i === active && !solvedFlag ? "rgba(180,140,20,0.85)" : "rgba(28,32,44,0.95)",
        });
      });
    }

    // 文字盤
    var rows = Math.ceil(cfg.tiles.length / cols);
    var gridW = cols * (tileSize + gap) - gap;
    cfg.tiles.forEach(function (ch, i) {
      var r = Math.floor(i / cols), c = i % cols;
      var t = document.createElement("a-plane");
      t.setAttribute("position", (-gridW / 2 + tileSize / 2 + c * (tileSize + gap)) + " " + (slotY - 0.55 - r * (tileSize + gap)) + " 0.01");
      t.setAttribute("width", String(tileSize));
      t.setAttribute("height", String(tileSize));
      t.classList.add("clickable");
      t.setAttribute("hoverable", "");
      t.setAttribute("jp-label", { value: ch, size: 84, color: "#fff0a7", w: 112, h: 112, bg: "rgba(48,44,30,0.95)" });
      t.addEventListener("click", function () {
        if (solvedFlag) return;
        input[active] = ch;
        active = Math.min(active + 1, cfg.slots - 1);
        refreshSlots();
      });
      root.appendChild(t);
    });

    // 消す / 唱える
    var clearBtn = document.createElement("a-plane");
    clearBtn.setAttribute("position", (-0.75) + " " + (-panelH / 2 + 0.06) + " 0.01");
    clearBtn.setAttribute("width", "0.9");
    clearBtn.setAttribute("height", "0.34");
    clearBtn.classList.add("clickable");
    clearBtn.setAttribute("hoverable", "");
    clearBtn.setAttribute("jp-label", { value: "消す", size: 52, color: "#dce9f4", w: 300, h: 110, bg: "rgba(30,36,48,0.95)" });
    clearBtn.addEventListener("click", function () {
      if (solvedFlag) return;
      input = []; active = 0; refreshSlots(); setMsg(cfg.hint || "文字を選んで石板に刻み、唱えよ");
    });
    root.appendChild(clearBtn);

    var castBtn = document.createElement("a-plane");
    castBtn.setAttribute("position", "0.65 " + (-panelH / 2 + 0.06) + " 0.01");
    castBtn.setAttribute("width", "1.3");
    castBtn.setAttribute("height", "0.34");
    castBtn.classList.add("clickable");
    castBtn.setAttribute("hoverable", "");
    castBtn.setAttribute("jp-label", { value: "呪文を唱える", size: 52, color: "#241a06", w: 460, h: 110, bg: "rgba(240,205,90,0.98)" });
    castBtn.addEventListener("click", function () {
      if (solvedFlag) return;
      var word = [];
      for (var i = 0; i < cfg.slots; i++) word.push(input[i] || "");
      if (word.some(function (chr) { return !chr; })) { setMsg("石板の全マスに文字を刻むのじゃ", "#ffd9df"); return; }
      cfg.onCast(word.join(""), {
        ok: function (text) { solvedFlag = true; setMsg(text || "扉がひらいた!", "#bfffe5"); refreshSlots(); },
        ng: function (text) { setMsg(text || "何も起こらない…", "#ffd9df"); },
        reset: function (text, keepMsgColor) { input = []; active = 0; refreshSlots(); if (text) setMsg(text, keepMsgColor || "#bfffe5"); },
      });
    });
    root.appendChild(castBtn);

    buildSlots();
    return {
      root: root,
      setTitle: function (text) { title.setAttribute("jp-label", { value: text, size: 46, color: "#ffe999", w: 900, h: 110 }); },
      setMsg: setMsg,
      setSolved: function (text) { solvedFlag = true; setMsg(text, "#bfffe5"); },
      reconfigure: function (slots) {
        cfg.slots = slots;
        slotW = Math.min(0.36, 2.3 / slots - 0.04);
        input = []; active = 0; solvedFlag = false;
        buildSlots();
      },
    };
  }

  /* ---------- ギミック ---------- */
  function dropRock(instant) {
    var rock = document.querySelector("#gateRock");
    rock.setAttribute("visible", "true");
    if (instant) {
      rock.setAttribute("position", "15 0.45 0");
    } else {
      rock.setAttribute("animation", "property: position; to: 15 0.45 0; dur: 900; easing: easeInQuad");
      // 描画ループが止まる環境でも最終位置を保証
      setTimeout(function () { rock.setAttribute("position", "15 0.45 0"); }, 1100);
    }
  }
  function openDoor(instant) {
    var door = document.querySelector("#pathDoor");
    if (instant) door.setAttribute("position", "31.5 -3.6 0");
    else {
      door.setAttribute("animation", "property: position; to: 31.5 -3.6 0; dur: 1200; easing: easeInOutQuad");
      setTimeout(function () { door.setAttribute("position", "31.5 -3.6 0"); }, 1400);
    }
  }
  function meltIce(instant) {
    var ice = document.querySelector("#iceBlock");
    if (instant) { ice.setAttribute("visible", "false"); return; }
    document.querySelector("#fireCone").setAttribute("visible", "true");
    ice.setAttribute("animation", "property: material.opacity; to: 0; dur: 1400");
    setTimeout(function () {
      ice.setAttribute("visible", "false");
      document.querySelector("#fireCone").setAttribute("visible", "false");
    }, 1500);
  }
  function goldPortal(sel) {
    var p = document.querySelector(sel);
    p.setAttribute("color", "#f2d56b");
    p.setAttribute("material", "emissive: #d8ab2e; emissiveIntensity: 0.9");
  }
  function beastDown() {
    var beast = document.querySelector("#beast");
    beast.setAttribute("animation", "property: position; to: 69 -4 0; dur: 1600; easing: easeInQuad");
    setTimeout(function () { beast.setAttribute("position", "69 -4 0"); }, 1800);
    document.querySelector("#clearLabel").setAttribute("visible", "true");
    goldPortal("#exitPortal");
  }

  /* ---------- ステージ1: 割れた足場 ---------- */
  var st1 = makeStation({
    x: 10.2, z: 3.6, rotY: 180, slots: 4, tiles: KANA_S1, cols: 5,
    title: "ステージ1『割れた足場』石板 4文字",
    hint: "壁の問題を解き、穴を越える呪文を刻め",
    onCast: function (word, r) {
      if (word === "ツケモノ") { r.ok("漬物石が現れた!穴がふさがる!"); markCleared("gate"); dropRock(false); updatePads(); }
      else r.ng("何も起こらない…");
    },
  });

  /* ---------- ステージ2: 扉のない通路 ---------- */
  var st2 = makeStation({
    x: 25, z: 2.1, rotY: 180, slots: 6, tiles: KANA_S2, cols: 6,
    title: "ステージ2『扉のあかない通路』石板 6文字",
    hint: "①②③④の矢印の順に紙を重ねて読め",
    onCast: function (word, r) {
      if (word === "ゴクロウサマ") { r.ok("色が消え、扉が現実にひらいた!"); markCleared("path"); openDoor(false); updatePads(); }
      else r.ng("何も起こらない…");
    },
  });

  /* ---------- ステージ3: 凍った足場(アイテム選択) ---------- */
  (function shopZone() {
    var items = [
      { n: "①メラソード", d: "切ったものが燃える" },
      { n: "②ソラブーツ", d: "装備すると素早くなる" },
      { n: "③ドラブレス", d: "口から火が出せる" },
      { n: "④マジホウキ", d: "飛べる、掃除もできる" },
    ];
    var msgEl = document.createElement("a-plane");
    msgEl.setAttribute("position", "40 3.1 -3.9");
    msgEl.setAttribute("width", "5");
    msgEl.setAttribute("height", "0.44");
    msgEl.setAttribute("jp-label", "value: 氷を溶かせるアイテムを1つ選べ; size: 44; color: #cfe0ee; w: 1100; h: 100");
    world.appendChild(msgEl);
    items.forEach(function (it, i) {
      var x = 38.4 + i * 1.65;
      var stand = document.createElement("a-box");
      stand.setAttribute("position", x + " 0.5 -3.6");
      stand.setAttribute("width", "1.2");
      stand.setAttribute("height", "1");
      stand.setAttribute("depth", "0.7");
      stand.setAttribute("color", "#3a3f52");
      world.appendChild(stand);
      var card = document.createElement("a-plane");
      card.setAttribute("position", x + " 1.55 -3.55");
      card.setAttribute("width", "1.5");
      card.setAttribute("height", "0.8");
      card.classList.add("clickable");
      card.setAttribute("hoverable", "");
      card.setAttribute("jp-label", { value: it.n + "\\n" + it.d, size: 46, color: "#fff0a7", w: 560, h: 300, bg: "rgba(20,24,34,0.96)" });
      card.addEventListener("click", function () {
        if (isCleared("shop")) return;
        if (i === 2) {
          msgEl.setAttribute("jp-label", { value: "ドラブレス!炎が氷を溶かした!", size: 44, color: "#bfffe5", w: 1100, h: 100 });
          markCleared("shop"); meltIce(false); updatePads();
        } else {
          msgEl.setAttribute("jp-label", { value: it.n + "…氷はビクともしない", size: 44, color: "#ffd9df", w: 1100, h: 100 });
        }
      });
      world.appendChild(card);
    });
  })();

  /* ---------- ステージ4: 時差の機械室 ---------- */
  var st4 = makeStation({
    x: 48.5, z: 2.8, rotY: 180, slots: 6, tiles: BOSS_TILES, cols: 7,
    title: "ステージ4『時差の機械室』FINAL ANSWER 6文字",
    hint: "青→緑→黄の順に読め。時を移す装置とは",
    onCast: function (word, r) {
      if (word === "タイムマシン") { r.ok("時差が消えた!先の道がひらく!"); markCleared("time"); goldPortal("#timePortal"); updatePads(); }
      else r.ng("計器は沈黙している…");
    },
  });

  /* ---------- ステージ5: ラスボス ---------- */
  var bossStation = makeStation({
    x: 61, z: 4.6, rotY: 180, slots: BOSS_STEPS[0].slots, tiles: BOSS_TILES, cols: 7,
    title: "ラスボス戦 石板 1/8(2文字)",
    hint: "呪文は1回ずつ。状況と文字数で見極めよ",
    onCast: function (word, r) {
      var step = BOSS_STEPS[save.bossStep];
      if (!step) return;
      if (word === step.answer) {
        save.bossStep += 1; persist();
        if (save.bossStep >= BOSS_STEPS.length) {
          markCleared("boss"); updatePads(); beastDown();
          bossStation.setSolved("とびきりの一撃!獣は崩れ去った!");
          bossStation.setTitle("ラスボス戦 完了!");
        } else {
          var nxt = BOSS_STEPS[save.bossStep];
          bossStation.reconfigure(nxt.slots);
          bossStation.setTitle("ラスボス戦 石板 " + (save.bossStep + 1) + "/8(" + nxt.slots + "文字)");
          bossStation.setMsg(step.after || "効いた!次の石板じゃ!", "#bfffe5");
        }
      } else {
        var used = BOSS_STEPS.slice(0, save.bossStep).some(function (s) { return s.answer === word; });
        if (used) r.ng("その呪文はもう使った!1回までじゃ");
        else if (word === "イチゲキゼンリョクデ") r.ng("仲間の命は差し出せない…エールを思い出せ");
        else r.ng("獣には通じない…");
      }
    },
  });

  /* ---------- セーブ復元 ---------- */
  if (isCleared("gate")) { dropRock(true); st1.setSolved("習得済み: ツケモノ"); }
  if (isCleared("path")) { openDoor(true); st2.setSolved("習得済み: ゴクロウサマ"); }
  if (isCleared("shop")) { meltIce(true); }
  if (isCleared("time")) { goldPortal("#timePortal"); st4.setSolved("習得済み: タイムマシン"); }
  if (isCleared("boss")) {
    beastDown();
    bossStation.setSolved("討伐済み!出口へ!");
    bossStation.setTitle("ラスボス戦 完了!");
  } else if (save.bossStep > 0 && save.bossStep < BOSS_STEPS.length) {
    var cur = BOSS_STEPS[save.bossStep];
    bossStation.reconfigure(cur.slots);
    bossStation.setTitle("ラスボス戦 石板 " + (save.bossStep + 1) + "/8(" + cur.slots + "文字)");
  }
  updatePads();

  window.__vrDebug = { save: save, isCleared: isCleared, pads: padEls.length };
})();
