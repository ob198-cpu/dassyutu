const stages = [
  {
    id: "gate",
    number: "01",
    title: "割れた足場",
    tag: "呪文組み立て",
    mission: "足場が裂けていて先へ進めない。床に散らばった音片から、穴をふさぐ呪文を組み立てる。",
    reward: "ツケモノ",
    type: "tiles",
    slots: 4,
    tiles: ["ツ", "ケ", "モ", "ノ", "マ", "テ", "オ", "シ", "ミ", "ガ"],
    correct: "ツケモノ",
    scene: "gate",
    briefing: "赤い木札には「漬物石」。床の音片は、意味のある5音だけが反応する。",
    problems: [{ file: "page_02.jpg", title: "ステージ1 原問題" }],
  },
  {
    id: "path",
    number: "02",
    title: "扉のない通路",
    tag: "経路解読",
    mission: "壁面の色マスが、見えない扉の位置を示している。光る経路をたどり、通路を開く言葉を作る。",
    reward: "ゴクロウサマ",
    type: "tiles",
    slots: 6,
    tiles: ["ゴ", "ク", "ロ", "ウ", "サ", "マ", "ア", "イ", "オ", "ン", "キ", "リ"],
    correct: "ゴクロウサマ",
    scene: "corridor",
    briefing: "青い矢印の順に読む。最後に残るのは、通り抜けた者へ向けた六音の言葉。",
    problems: [{ file: "page_03.jpg", title: "ステージ2 原問題" }],
  },
  {
    id: "shop",
    number: "03",
    title: "凍った足場",
    tag: "アイテム選択",
    mission: "足場が凍り、素足では渡れない。アイテム屋の棚から、氷を溶かせるものを選ぶ。",
    reward: "ドラブレス",
    type: "shop",
    correct: "ドラブレス",
    scene: "ice",
    briefing: "式が指す番号は3。3番の棚には、口から火を出す道具が置かれている。",
    problems: [
      { file: "page_04.jpg", title: "アイテム屋 原問題" },
      { file: "page_05.jpg", title: "ステージ3 原問題" },
    ],
    items: [
      { name: "メラソード", detail: "切ったものが燃える", icon: "sword" },
      { name: "ソラブーツ", detail: "装備すると素早くなる", icon: "boots" },
      { name: "ドラブレス", detail: "口から火が出せる", icon: "flame" },
      { name: "マジホウキ", detail: "掃除も移動もできる", icon: "broom" },
    ],
  },
  {
    id: "time",
    number: "04",
    title: "時差の機械室",
    tag: "FINAL ANSWER",
    mission: "時空のずれで出口が遠ざかっている。四つの計器を合わせ、時差を消す装置を起動する。",
    reward: "タイムマシン",
    type: "console",
    correct: "タイムマシン",
    scene: "time",
    briefing: "青、緑、黄の順に読んで得た六音。時を移動する装置の名前を入力する。",
    problems: [{ file: "page_06.jpg", title: "ステージ4 原問題" }],
  },
  {
    id: "boss",
    number: "05",
    title: "出口前のラスボス",
    tag: "呪文戦",
    mission: "出口の前に白い獣が現れた。集めた呪文と追加呪文を、正しい順番で放って突破する。",
    type: "boss",
    scene: "boss",
    briefing: "上から順に呪文を放つ。間違えると獣が態勢を立て直す。",
    problems: [{ file: "page_07.jpg", title: "ラスボス 原問題" }],
  },
];

const bossSequence = [
  "バリ",
  "フユウ",
  "ヘンガオ",
  "ツケモノ",
  "ゴクロウサマ",
  "カタメ",
  "タイムマシン",
  "バタフライエフェクト",
];

const spellBank = [
  "バリ",
  "フユウ",
  "オバタンス",
  "カタメ",
  "アイス",
  "ヘンガオ",
  "タメニタメル",
  "ガンリキ",
  "イノリ",
  "ツケモノ",
  "ゴクロウサマ",
  "ドラブレス",
  "タイムマシン",
  "バタフライエフェクト",
];

const storeKey = "tanohamaEscapeStateV3";

const elements = {
  game: document.querySelector("#game"),
  nav: document.querySelector("#stageNav"),
  stageCount: document.querySelector("#stageCount"),
  spellCount: document.querySelector("#spellCount"),
  reset: document.querySelector("#resetButton"),
  dialog: document.querySelector("#docDialog"),
  docImage: document.querySelector("#docImage"),
  docTitle: document.querySelector("#docTitle"),
  closeDoc: document.querySelector("#closeDoc"),
};

const state = loadState();

function loadState() {
  try {
    const raw = localStorage.getItem(storeKey);
    if (raw) {
      const saved = JSON.parse(raw);
      return {
        stageIndex: Number.isInteger(saved.stageIndex) ? saved.stageIndex : 0,
        cleared: Array.isArray(saved.cleared) ? saved.cleared : [],
        spells: Array.isArray(saved.spells) ? saved.spells : [],
        bossInput: Array.isArray(saved.bossInput) ? saved.bossInput : [],
        slotInput: Array.isArray(saved.slotInput) ? saved.slotInput : [],
        isClear: Boolean(saved.isClear),
      };
    }
  } catch {
    localStorage.removeItem(storeKey);
  }
  return { stageIndex: 0, cleared: [], spells: [], bossInput: [], slotInput: [], isClear: false };
}

function saveState() {
  localStorage.setItem(storeKey, JSON.stringify(state));
}

function normalizeAnswer(value) {
  return value
    .normalize("NFKC")
    .trim()
    .replace(/[ 　\t\r\n・。、「」『』!！?？]/g, "")
    .replace(/[ぁ-ん]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60))
    .toUpperCase();
}

function isStageCleared(id) {
  return state.cleared.includes(id);
}

function addUnique(list, value) {
  if (!list.includes(value)) list.push(value);
}

function resetStageInput() {
  state.slotInput = [];
}

function render() {
  const stage = stages[state.stageIndex] || stages[0];
  elements.stageCount.textContent = `${Math.min(state.stageIndex + 1, stages.length)} / ${stages.length}`;
  elements.spellCount.textContent = String(state.spells.length);
  renderNav();
  if (state.isClear) {
    renderClear();
  } else if (stage.type === "boss") {
    renderBoss(stage);
  } else {
    renderStage(stage);
  }
  saveState();
}

function renderNav() {
  elements.nav.innerHTML = "";
  stages.forEach((stage, index) => {
    const button = document.createElement("button");
    button.className = "stage-dot";
    if (index === state.stageIndex) button.classList.add("is-current");
    if (isStageCleared(stage.id)) button.classList.add("is-done");
    button.type = "button";
    button.textContent = stage.number;
    button.addEventListener("click", () => {
      const maxOpen = Math.min(stages.length - 1, state.cleared.length);
      if (index <= maxOpen || isStageCleared(stage.id)) {
        state.stageIndex = index;
        resetStageInput();
        render();
      }
    });
    elements.nav.appendChild(button);
  });
}

function renderScene(stage) {
  const sceneClass = `scene-${stage.scene}`;
  return `
    <div class="scene ${sceneClass}" aria-hidden="true">
      <div class="void-grid"></div>
      ${stage.scene === "gate" ? gateScene() : ""}
      ${stage.scene === "corridor" ? corridorScene() : ""}
      ${stage.scene === "ice" ? iceScene() : ""}
      ${stage.scene === "time" ? timeScene() : ""}
      ${stage.scene === "boss" ? bossScene() : ""}
    </div>
  `;
}

function renderProblems(stage) {
  if (!stage.problems?.length) return "";
  return `
    <section class="problem-section">
      <div class="section-head">
        <strong>原問題</strong>
        <span>タップで拡大</span>
      </div>
      <div class="problem-list">
        ${stage.problems
          .map(
            (problem) => `
              <button class="problem-card" type="button" data-problem="${problem.file}" data-title="${problem.title}">
                <img src="./assets/${problem.file}" alt="${problem.title}" loading="lazy" />
                <span>${problem.title}</span>
              </button>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function gateScene() {
  return `
    <div class="platform left"></div>
    <div class="platform right"></div>
    <div class="gap"></div>
    <div class="stone-card"><span>漬物石</span></div>
    <div class="avatar"></div>
  `;
}

function corridorScene() {
  return `
    <div class="corridor-wall">
      ${["G", "O", "K", "U", "R", "O", "U", "S", "A", "M", "A"].map((letter, i) => `<span style="--i:${i}">${letter}</span>`).join("")}
    </div>
    <div class="hidden-door"></div>
    <div class="avatar corridor-avatar"></div>
  `;
}

function iceScene() {
  return `
    <div class="ice-bridge"></div>
    <div class="shop-shelf"></div>
    <div class="ice-block block-a"></div>
    <div class="ice-block block-b"></div>
    <div class="avatar ice-avatar"></div>
  `;
}

function timeScene() {
  return `
    <div class="time-core"></div>
    <div class="dial dial-a"></div>
    <div class="dial dial-b"></div>
    <div class="dial dial-c"></div>
    <div class="time-beam"></div>
  `;
}

function bossScene() {
  return `
    <div class="exit-portal"></div>
    <div class="beast"></div>
    <div class="spell-lane"></div>
    <div class="avatar boss-avatar"></div>
  `;
}

function renderStage(stage) {
  const done = isStageCleared(stage.id);
  elements.game.innerHTML = `
    <section class="stage-panel">
      <div class="stage-title">
        <h2>${stage.number} / ${stage.title}</h2>
        <span class="tag">${stage.tag}</span>
      </div>
      ${renderScene(stage)}
      <p class="mission">${stage.mission}</p>
      ${renderProblems(stage)}
      <section class="brief-card">
        <strong>手がかり</strong>
        <p>${stage.briefing}</p>
      </section>
      ${stage.type === "tiles" ? tilePuzzle(stage, done) : ""}
      ${stage.type === "shop" ? shopPuzzle(stage, done) : ""}
      ${stage.type === "console" ? consolePuzzle(stage, done) : ""}
      <div class="spell-ledger">${state.spells.map((spell) => `<span class="spell-chip">${spell}</span>`).join("")}</div>
      <div class="stage-actions">
        ${done ? `<button class="primary-button" id="nextButton" type="button">${state.stageIndex >= stages.length - 2 ? "ラスボスへ" : "次へ"}</button>` : ""}
      </div>
    </section>
  `;
  wireStage(stage, done);
  wireProblems();
}

function tilePuzzle(stage, done) {
  return `
    <section class="play-box">
      <div class="slot-row" aria-label="呪文スロット">
        ${Array.from({ length: stage.slots })
          .map((_, i) => `<button class="slot" type="button" data-slot="${i}">${state.slotInput[i] || ""}</button>`)
          .join("")}
      </div>
      <div class="tile-grid">
        ${stage.tiles.map((tile) => `<button class="tile" type="button" data-tile="${tile}" ${done ? "disabled" : ""}>${tile}</button>`).join("")}
      </div>
      <div class="control-row">
        <button class="ghost-button" id="clearSlots" type="button">消す</button>
        <button class="primary-button" id="activateStage" type="button" ${done ? "disabled" : ""}>発動</button>
      </div>
      <p class="note ${done ? "is-ok" : ""}" id="stageNote">${done ? `獲得済み: ${stage.reward}` : "音片をタップして呪文を完成させる。"}</p>
    </section>
  `;
}

function shopPuzzle(stage, done) {
  return `
    <section class="play-box">
      <div class="item-grid">
        ${stage.items
          .map(
            (item, i) => `
              <button class="item-card" type="button" data-item="${item.name}" ${done ? "disabled" : ""}>
                <span class="item-icon icon-${item.icon}"></span>
                <strong>${i + 1}. ${item.name}</strong>
                <small>${item.detail}</small>
              </button>
            `,
          )
          .join("")}
      </div>
      <p class="note ${done ? "is-ok" : ""}" id="stageNote">${done ? `獲得済み: ${stage.reward}` : "氷を溶かせるアイテムを選ぶ。"}</p>
    </section>
  `;
}

function consolePuzzle(stage, done) {
  return `
    <section class="play-box">
      <div class="time-console">
        <div class="console-screen">BLUE → GREEN → YELLOW</div>
        <div class="console-lamps">
          <span class="lamp blue"></span>
          <span class="lamp green"></span>
          <span class="lamp yellow"></span>
        </div>
      </div>
      <form id="consoleForm" class="answer-form">
        <input id="answerInput" autocomplete="off" inputmode="text" placeholder="FINAL ANSWER" ${done ? "disabled" : ""} />
        <button class="primary-button" type="submit" ${done ? "disabled" : ""}>起動</button>
      </form>
      <p class="note ${done ? "is-ok" : ""}" id="stageNote">${done ? `獲得済み: ${stage.reward}` : "六文字の装置名を入力する。"}</p>
    </section>
  `;
}

function wireStage(stage, done) {
  const note = document.querySelector("#stageNote");
  if (stage.type === "tiles") {
    document.querySelectorAll(".tile").forEach((button) => {
      button.addEventListener("click", () => {
        if (done || state.slotInput.length >= stage.slots) return;
        state.slotInput.push(button.dataset.tile);
        render();
      });
    });
    document.querySelectorAll(".slot").forEach((button) => {
      button.addEventListener("click", () => {
        if (done) return;
        state.slotInput.splice(Number(button.dataset.slot), 1);
        render();
      });
    });
    document.querySelector("#clearSlots").addEventListener("click", () => {
      resetStageInput();
      render();
    });
    document.querySelector("#activateStage").addEventListener("click", () => {
      checkStage(stage, state.slotInput.join(""));
    });
  }
  if (stage.type === "shop") {
    document.querySelectorAll(".item-card").forEach((button) => {
      button.addEventListener("click", () => checkStage(stage, button.dataset.item));
    });
  }
  if (stage.type === "console") {
    document.querySelector("#consoleForm").addEventListener("submit", (event) => {
      event.preventDefault();
      checkStage(stage, document.querySelector("#answerInput").value);
    });
  }
  const next = document.querySelector("#nextButton");
  if (next) {
    next.addEventListener("click", () => {
      state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
      resetStageInput();
      render();
    });
  }
  if (note && !done) {
    note.addEventListener("click", () => {
      note.textContent = stage.briefing;
    });
  }
}

function checkStage(stage, value) {
  const note = document.querySelector("#stageNote");
  if (normalizeAnswer(value) !== normalizeAnswer(stage.correct)) {
    note.textContent = "反応しない。手がかりと選んだ順番を見直す。";
    note.className = "note is-error";
    return;
  }
  addUnique(state.cleared, stage.id);
  addUnique(state.spells, stage.reward);
  resetStageInput();
  note.textContent = `正解。${stage.reward} を獲得した。`;
  note.className = "note is-ok";
  setTimeout(() => {
    state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
    render();
  }, 520);
}

function renderBoss(stage) {
  elements.game.innerHTML = `
    <section class="stage-panel">
      <div class="stage-title">
        <h2>${stage.number} / ${stage.title}</h2>
        <span class="tag">${stage.tag}</span>
      </div>
      ${renderScene(stage)}
      <p class="mission">${stage.mission}</p>
      ${renderProblems(stage)}
      <section class="brief-card">
        <strong>戦闘方針</strong>
        <p>${stage.briefing}</p>
      </section>
      <div class="boss-box">
        <p class="label">発動順</p>
        <div class="sequence">
          ${bossSequence.map((spell, index) => `<span>${state.bossInput[index] ? spell : index + 1}</span>`).join("")}
        </div>
        <div class="spell-grid">
          ${spellBank
            .map(
              (spell) => `
                <button class="spell-button ${state.bossInput.includes(spell) ? "is-used" : ""}" type="button" data-spell="${spell}">
                  ${spell}
                </button>
              `,
            )
            .join("")}
        </div>
        <div class="control-row">
          <button class="ghost-button" id="bossUndo" type="button">一つ戻す</button>
          <button class="ghost-button" id="bossReset" type="button">戦闘リセット</button>
        </div>
        <p class="note" id="bossNote">${state.bossInput.length ? `${state.bossInput.length}手目まで成功。` : "一手目は、弱攻撃を無効化する呪文。"}</p>
      </div>
    </section>
  `;
  document.querySelectorAll(".spell-button").forEach((button) => {
    button.addEventListener("click", () => castSpell(button.dataset.spell));
  });
  document.querySelector("#bossUndo").addEventListener("click", () => {
    state.bossInput.pop();
    render();
  });
  document.querySelector("#bossReset").addEventListener("click", () => {
    state.bossInput = [];
    render();
  });
  wireProblems();
}

function castSpell(spell) {
  const note = document.querySelector("#bossNote");
  const expected = bossSequence[state.bossInput.length];
  if (spell !== expected) {
    note.textContent = `順番が違う。${state.bossInput.length + 1}手目の呪文を見直す。`;
    note.className = "note is-error";
    return;
  }
  state.bossInput.push(spell);
  if (state.bossInput.length === bossSequence.length) {
    addUnique(state.cleared, "boss");
    state.isClear = true;
    render();
    return;
  }
  render();
}

function renderClear() {
  elements.game.innerHTML = `
    <section class="stage-panel clear-screen">
      ${renderScene({ scene: "boss" })}
      <h2>CLEAR</h2>
      <p>最後の呪文が出口を固定し、現在異空間が崩れた。田野浜の脱出は成功。</p>
      <div class="spell-ledger">${state.spells.map((spell) => `<span class="spell-chip">${spell}</span>`).join("")}</div>
      <div class="stage-actions">
        <button class="primary-button" id="replayButton" type="button">もう一度遊ぶ</button>
      </div>
    </section>
  `;
  document.querySelector("#replayButton").addEventListener("click", resetGame);
}

function resetGame() {
  state.stageIndex = 0;
  state.cleared = [];
  state.spells = [];
  state.bossInput = [];
  state.slotInput = [];
  state.isClear = false;
  saveState();
  render();
}

function wireProblems() {
  document.querySelectorAll("[data-problem]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.docImage.src = `./assets/${button.dataset.problem}`;
      elements.docTitle.textContent = button.dataset.title || "原問題";
      elements.dialog.showModal();
    });
  });
}

elements.reset.addEventListener("click", resetGame);
if (elements.closeDoc) elements.closeDoc.addEventListener("click", () => elements.dialog.close());
if (elements.dialog) {
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
}

render();
