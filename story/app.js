const screen = document.getElementById("screen");
const chapter = document.getElementById("chapter");
const line = document.getElementById("line");
const actions = document.getElementById("actions");
const hotspots = document.getElementById("hotspots");
const toast = document.getElementById("toast");
const progressWrap = document.getElementById("progressWrap");
const progressBar = document.getElementById("progressBar");
const evidenceSlots = document.getElementById("evidenceSlots");
const objectiveChip = document.getElementById("objectiveChip");
const backButton = document.getElementById("backButton");
const audioToggle = document.getElementById("audioToggle");
const motionCut = document.getElementById("motionCut");
const storyBeat = document.getElementById("storyBeat");
const storyBeatKicker = document.getElementById("storyBeatKicker");
const storyBeatTitle = document.getElementById("storyBeatTitle");
const storyBeatText = document.getElementById("storyBeatText");
const actionCinema = document.getElementById("actionCinema");
const actionCinemaLabel = document.getElementById("actionCinemaLabel");
const evidenceDialog = document.getElementById("evidenceDialog");
const evidenceDialogTitle = document.getElementById("evidenceDialogTitle");
const evidenceDialogText = document.getElementById("evidenceDialogText");
const evidenceClose = document.getElementById("evidenceClose");
const clearDialog = document.getElementById("clearDialog");
const clearEvidence = document.getElementById("clearEvidence");
const clearRestart = document.getElementById("clearRestart");
const syncMeter = document.getElementById("syncMeter");
const syncFill = document.getElementById("syncFill");
const syncStatus = document.getElementById("syncStatus");
const syncBeats = Array.from(document.querySelectorAll("#syncBeats span"));

const evidenceDefs = [
  {
    id: "record",
    label: "記録",
    icon: "doc",
    title: "診療記録",
    text: "消えた患者の最後の記録。患者番号は314。記録、心拍、ベッドの配線をそろえると証拠カプセルへ進める。"
  },
  {
    id: "pulse",
    label: "心拍",
    icon: "pulse",
    title: "心拍図",
    text: "心電図は三回だけ強く跳ねている。カプセルの同期ボタンは、この鼓動に合わせて押し続ける必要がある。"
  },
  {
    id: "cable",
    label: "ケーブル",
    icon: "cable",
    title: "空のベッド",
    text: "ベッドは空だが、床のケーブルはまだ証拠カプセルにつながっている。患者が消えた直後に装置だけ残された。"
  },
  {
    id: "code",
    label: "314",
    icon: "code",
    title: "番号 314",
    text: "患者番号314。これを確認すると、カプセルの同期ロックを解除できる。"
  }
];

const sceneDefaults = {
  street: { x: "55%", y: "62%", dir: "front" },
  or: { x: "50%", y: "57%", dir: "back" },
  records: { x: "48%", y: "58%", dir: "back" },
  capsule: { x: "24%", y: "70%", dir: "side" },
  exit: { x: "50%", y: "66%", dir: "back" }
};

const sceneData = {
  street: {
    chapter: "01 / 夜の病院",
    objective: "廃病院に入り証拠を探す",
    line: "患者314が消えた。あなたは心拍データと診療記録を回収するため、夜の病院へ入る。",
    actions: [{ label: "中へ入る", next: "or" }],
    hotspots: [
      { id: "door", label: "入口", action: "enter", x: "77%", y: "58%", dir: "side" }
    ]
  },
  or: {
    chapter: "02 / 手術室",
    objective: "3つの証拠を集める",
    line: "手術室には、診療記録、動き続ける心電図、空のベッドが残っている。光る場所を順番に調べる。",
    actions: [
      { label: "記録を見る", action: "inspectRecord", x: "24%", y: "45%", dir: "back", pose: "reach-back" },
      { label: "心電図を見る", action: "inspectMonitor", x: "76%", y: "47%", dir: "side", pose: "reach-side" },
      { label: "ベッドを見る", action: "inspectBed", x: "50%", y: "54%", dir: "back", pose: "crouch" }
    ],
    hotspots: [
      { id: "chart", label: "記録", action: "inspectRecord", x: "24%", y: "45%", dir: "back", pose: "reach-back" },
      { id: "monitor", label: "心電図", action: "inspectMonitor", x: "76%", y: "47%", dir: "side", pose: "reach-side" },
      { id: "bed", label: "ベッド", action: "inspectBed", x: "50%", y: "54%", dir: "back", pose: "crouch" }
    ]
  },
  records: {
    chapter: "03 / 記録",
    objective: "患者番号314を確認する",
    line: "三つの証拠がつながった。記録の患者番号314を確認し、証拠カプセルへ進む。",
    actions: [{ label: "カプセルへ", next: "capsule" }],
    hotspots: [
      { id: "recordSheet", label: "番号 314", action: "recordCode", x: "35%", y: "36%", dir: "back", pose: "reach-back" }
    ]
  },
  capsule: {
    chapter: "04 / 証拠カプセル",
    objective: "カプセルを長押しで同期する",
    line: "証拠カプセルの中で心臓だけが動いている。記録と心拍を合わせ、長押しで同期する。",
    actions: [{ label: "聴いて支える", hold: true, requires: ["record", "pulse", "code"] }],
    hotspots: [
      { id: "capsuleCore", label: "同期", action: "pulseHint", x: "50%", y: "42%", dir: "back", pose: "reach-back" }
    ]
  },
  exit: {
    chapter: "05 / 送信",
    objective: "出口へ進む",
    line: "カプセルが開き、患者314の証拠が外へ送信された。出口へ進む。",
    actions: [{ label: "最初から", next: "street" }],
    hotspots: [
      { id: "exitDoor", label: "出口", action: "exitHint", x: "50%", y: "45%", dir: "back" }
    ]
  }
};

const actionEvidenceMap = {
  inspectRecord: "record",
  inspectMonitor: "pulse",
  inspectBed: "cable",
  recordCode: "code"
};

const cinemaLabels = {
  ENTER: "潜入",
  RECORD: "記録取得",
  PULSE: "心拍確認",
  CABLE: "配線発見",
  LINK: "証拠接続",
  "314": "314確認",
  SYNC: "同期",
  OPEN: "開放"
};

const cinemaModes = {
  ENTER: "enter",
  RECORD: "record",
  PULSE: "pulse",
  CABLE: "cable",
  LINK: "link",
  "314": "code",
  SYNC: "sync",
  OPEN: "open"
};

let currentScene = "";
let sceneHistory = [];
let holdProgress = 0;
let holding = false;
let lastFrame = 0;
let toastTimer = null;
let moveTimer = null;
let cutTimer = null;
let storyBeatTimer = null;
let cinemaTimer = null;
let isMoving = false;
let recordSeen = false;
let monitorSeen = false;
let evidence = new Set();
let syncBeatCount = 0;
let audioContext = null;
let audioEnabled = false;
let ambienceTimer = null;

function hasRoomEvidence() {
  return recordSeen && monitorSeen && evidence.has("cable");
}

function roomObjectiveText() {
  const missing = [];
  if (!recordSeen) missing.push("記録");
  if (!monitorSeen) missing.push("心電図");
  if (!evidence.has("cable")) missing.push("ベッド");
  return missing.length ? `${missing.join("・")}を調べる` : "番号314を確認する";
}

function advanceIfRoomEvidenceComplete() {
  if (!hasRoomEvidence()) {
    updateObjective(roomObjectiveText());
    refreshGuides();
    return false;
  }

  showToast("証拠がつながった");
  playCut("LINK");
  showStoryBeat("EVIDENCE LINK", "証拠が接続", "記録、心電図、ベッドのケーブルが一本の線につながった。患者番号314を確認する。");
  updateObjective("番号314を確認する");
  refreshGuides();
  window.setTimeout(() => setScene("records"), 1500);
  return true;
}

function setScene(name, options = {}) {
  const { skipHistory = false, resetHistory = false, resetRun = false } = options;
  if (resetHistory) {
    sceneHistory = [];
  } else if (!skipHistory && currentScene && currentScene !== name) {
    sceneHistory.push(currentScene);
  }

  closeClear(false);
  closeEvidence(true);
  hideStoryBeat();
  currentScene = name;
  const defaults = sceneDefaults[name];
  screen.className = `screen scene-${name} figure-dir-${defaults.dir} is-transitioning`;
  setFigure(defaults, false);
  window.setTimeout(() => screen.classList.remove("is-transitioning"), 280);

  chapter.textContent = sceneData[name].chapter;
  line.textContent = sceneData[name].line;
  updateObjective(sceneData[name].objective);
  progressWrap.hidden = true;
  holdProgress = 0;

  if (resetRun) {
    recordSeen = false;
    monitorSeen = false;
    evidence = new Set();
  }

  resetSyncMeter(name !== "capsule");
  updateProgress();
  renderActions(sceneData[name].actions);
  renderHotspots(sceneData[name].hotspots || []);
  updateEvidence();
  syncSceneStateFromProgress();
  updateBackButton();
  playSceneSound();
}

function renderActions(items) {
  actions.innerHTML = "";
  items.forEach((item) => {
    const doneId = getCompletedEvidenceId(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = item.hold ? "primary hold-button" : "primary";
    if (doneId) button.classList.add("is-done");
    if (isGuidedItem(item)) button.classList.add("is-guided");
    button.textContent = doneId ? `${item.label} 済` : item.label;

    if (item.next) {
      button.addEventListener("click", () => {
        const restart = item.next === "street";
        setScene(item.next, { resetHistory: restart, resetRun: restart });
      });
    }

    if (item.action) {
      button.addEventListener("click", () => {
        if (doneId) {
          openEvidenceById(doneId);
          return;
        }
        moveThenRun(item);
      });
    }

    if (item.hold) {
      button.addEventListener("pointerdown", (event) => {
        event.preventDefault();
        if (item.requires && !hasEvidence(item.requires)) {
          showToast("証拠が不足");
          line.textContent = "記録、心拍、番号314をそろえると同期できる。";
          updateObjective("記録・心拍・314をそろえる");
          return;
        }
        holding = true;
        button.classList.add("is-holding");
        progressWrap.hidden = true;
        updateObjective("そのまま長押しして同期する");
        updateSyncMeter("同期中");
      });
      const release = () => {
        holding = false;
        button.classList.remove("is-holding");
        updateSyncMeter("待機");
      };
      button.addEventListener("pointerup", release);
      button.addEventListener("pointercancel", release);
      button.addEventListener("pointerleave", release);
    }

    actions.appendChild(button);
  });
}

function renderHotspots(items) {
  hotspots.innerHTML = "";
  items.forEach((item) => {
    const doneId = getCompletedEvidenceId(item);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `hotspot hotspot-${item.id}`;
    if (doneId) button.classList.add("is-done");
    if (isGuidedItem(item)) button.classList.add("is-guided");
    button.textContent = doneId ? "済" : item.label;
    button.addEventListener("click", () => {
      if (doneId) {
        openEvidenceById(doneId);
        return;
      }
      moveThenRun(item);
    });
    hotspots.appendChild(button);
  });
}

function getCompletedEvidenceId(item) {
  const evidenceId = actionEvidenceMap[item.action];
  if (!evidenceId || !evidence.has(evidenceId)) return "";
  return evidenceId;
}

function isGuidedItem(item) {
  if (currentScene === "street") return item.action === "enter" || item.next === "or";

  if (currentScene === "or") {
    if (item.action === "inspectRecord") return !recordSeen;
    if (item.action === "inspectMonitor") return !monitorSeen;
    if (item.action === "inspectBed") return !evidence.has("cable");
    return false;
  }

  if (currentScene === "records") {
    if (item.action === "recordCode") return !evidence.has("code");
    return item.next === "capsule" && evidence.has("code");
  }

  if (currentScene === "capsule") {
    if (item.action === "pulseHint") return !hasEvidence(["record", "pulse", "code"]);
    return item.hold && hasEvidence(["record", "pulse", "code"]);
  }

  if (currentScene === "exit") return item.action === "exitHint";
  return false;
}

function refreshGuides() {
  renderActions(sceneData[currentScene].actions);
  renderHotspots(sceneData[currentScene].hotspots || []);
}

function syncSceneStateFromProgress() {
  if (currentScene === "or" && (recordSeen || monitorSeen || evidence.has("cable"))) {
    updateObjective(roomObjectiveText());
  }

  if (currentScene === "records" && evidence.has("code")) {
    line.textContent = "患者番号314は確認済み。証拠カプセルへ進む。";
    updateObjective("カプセルへ進む");
  }

  if (currentScene === "capsule" && hasEvidence(["record", "pulse", "code"])) {
    updateObjective("下のボタンを長押しする");
  }
}

function updateBackButton() {
  backButton.disabled = sceneHistory.length === 0;
}

function goBack() {
  if (sceneHistory.length === 0) {
    showToast("戻れません");
    return;
  }

  const previousScene = sceneHistory.pop();
  holding = false;
  playUiClick();
  setScene(previousScene, { skipHistory: true });
}

function setFigure(target, walking = true) {
  screen.style.setProperty("--figure-x", target.x);
  screen.style.setProperty("--figure-y", target.y);
  clearFigurePose();
  screen.classList.add(`figure-dir-${target.dir || "front"}`);

  if (walking) {
    screen.classList.add("is-walking");
    window.clearTimeout(moveTimer);
    moveTimer = window.setTimeout(() => {
      screen.classList.remove("is-walking");
      isMoving = false;
    }, 520);
  }
}

function moveThenRun(item) {
  if (isMoving) return;
  isMoving = true;
  setFigure(item, true);
  window.clearTimeout(moveTimer);
  moveTimer = window.setTimeout(() => {
    screen.classList.remove("is-walking");
    isMoving = false;
    playActionPose(item);
  }, 540);
}

function clearFigurePose() {
  screen.classList.remove(
    "figure-dir-front",
    "figure-dir-side",
    "figure-dir-back",
    "figure-action-reach-side",
    "figure-action-reach-back",
    "figure-action-crouch"
  );
}

function playActionPose(item) {
  if (!item.pose) {
    runAction(item.action);
    return;
  }

  clearFigurePose();
  screen.classList.add(`figure-action-${item.pose}`);
  screen.classList.add("is-acting");
  window.setTimeout(() => {
    screen.classList.remove("is-acting");
    clearFigurePose();
    screen.classList.add(`figure-dir-${item.dir || "front"}`);
    runAction(item.action);
  }, 520);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => {
    toast.classList.remove("is-visible");
  }, 1200);
}

function playCut(label) {
  playCinema(label);
  motionCut.querySelector("b").textContent = label;
  screen.classList.remove("is-cutting", "is-flashing");
  void motionCut.offsetWidth;
  screen.classList.add("is-cutting", "is-flashing");
  window.clearTimeout(cutTimer);
  cutTimer = window.setTimeout(() => {
    screen.classList.remove("is-cutting", "is-flashing");
  }, 1480);
}

function playCinema(label) {
  if (!actionCinema || !actionCinemaLabel) return;

  const key = String(label || "TRACE").toUpperCase();
  actionCinema.dataset.mode = cinemaModes[key] || "trace";
  actionCinemaLabel.textContent = cinemaLabels[key] || key;
  actionCinema.dataset.label = actionCinemaLabel.textContent;

  screen.classList.remove("is-cinema");
  void actionCinema.offsetWidth;
  screen.classList.add("is-cinema");

  window.clearTimeout(cinemaTimer);
  cinemaTimer = window.setTimeout(() => {
    screen.classList.remove("is-cinema");
  }, 2320);
}

function showStoryBeat(kicker, title, text) {
  storyBeatKicker.textContent = kicker;
  storyBeatTitle.textContent = title;
  storyBeatText.textContent = text;
  storyBeat.hidden = false;
  storyBeat.classList.remove("is-visible");
  void storyBeat.offsetWidth;
  storyBeat.classList.add("is-visible");
  window.clearTimeout(storyBeatTimer);
  storyBeatTimer = window.setTimeout(() => hideStoryBeat(), 1560);
}

function hideStoryBeat() {
  window.clearTimeout(storyBeatTimer);
  storyBeat.classList.remove("is-visible");
  storyBeat.hidden = true;
}

function getAudioContext() {
  if (!audioContext) {
    const AudioCtor = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtor) return null;
    audioContext = new AudioCtor();
  }
  return audioContext;
}

function playTone(frequency, duration = 0.08, type = "sine", volume = 0.035, delay = 0) {
  if (!audioEnabled) return;
  const context = getAudioContext();
  if (!context) return;

  const start = context.currentTime + delay;
  const oscillator = context.createOscillator();
  const gain = context.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.012);
  gain.gain.exponentialRampToValueAtTime(0.0001, start + duration);
  oscillator.connect(gain);
  gain.connect(context.destination);
  oscillator.start(start);
  oscillator.stop(start + duration + 0.02);
}

function playUiClick() {
  playTone(620, 0.045, "square", 0.018);
}

function playEvidenceSound() {
  playTone(520, 0.055, "triangle", 0.035);
  playTone(860, 0.075, "sine", 0.026, 0.055);
}

function playHeartbeatSound() {
  playTone(88, 0.055, "sine", 0.07);
  playTone(138, 0.055, "triangle", 0.038, 0.07);
}

function playSceneSound() {
  playTone(240, 0.06, "sine", 0.02);
  playTone(180, 0.08, "sine", 0.018, 0.065);
}

function playClearSound() {
  playTone(523.25, 0.1, "triangle", 0.045);
  playTone(659.25, 0.12, "triangle", 0.04, 0.1);
  playTone(987.77, 0.18, "sine", 0.035, 0.23);
}

function startAmbience() {
  window.clearInterval(ambienceTimer);
  ambienceTimer = window.setInterval(() => {
    if (!audioEnabled) return;
    playTone(74, 0.12, "sine", 0.012);
    playTone(111, 0.08, "triangle", 0.008, 0.09);
  }, 2800);
}

function stopAmbience() {
  window.clearInterval(ambienceTimer);
  ambienceTimer = null;
}

async function setAudioEnabled(enabled) {
  audioEnabled = enabled;
  const context = getAudioContext();
  if (enabled && context?.state === "suspended") {
    await context.resume();
  }

  audioToggle.textContent = enabled ? "音ON" : "音OFF";
  audioToggle.setAttribute("aria-pressed", String(enabled));
  audioToggle.classList.toggle("is-on", enabled);

  if (enabled) {
    startAmbience();
    playTone(440, 0.06, "triangle", 0.035);
    playTone(660, 0.08, "sine", 0.03, 0.07);
    showToast("音ON");
  } else {
    stopAmbience();
    showToast("音OFF");
  }
}

function addEvidence(id) {
  if (evidence.has(id)) return;
  evidence.add(id);
  updateEvidence(id);
  playEvidenceSound();
}

function hasEvidence(ids) {
  return ids.every((id) => evidence.has(id));
}

function updateObjective(text) {
  objectiveChip.textContent = `目的: ${text}`;
  objectiveChip.classList.remove("is-updated");
  void objectiveChip.offsetWidth;
  objectiveChip.classList.add("is-updated");
}

function updateEvidence(newId = "") {
  evidenceSlots.innerHTML = "";
  evidenceDefs.forEach((item) => {
    const slot = document.createElement("button");
    slot.type = "button";
    slot.className = `evidence-slot evidence-${item.icon}`;
    if (evidence.has(item.id)) slot.classList.add("is-found");
    if (newId === item.id) slot.classList.add("is-new");
    slot.setAttribute("aria-label", item.label);
    slot.innerHTML = `<span></span><b>${item.label}</b>`;
    slot.addEventListener("click", () => openEvidence(item));
    evidenceSlots.appendChild(slot);
  });
}

function openEvidenceById(id) {
  const item = evidenceDefs.find((entry) => entry.id === id);
  if (item) openEvidence(item);
}

function openEvidence(item) {
  playUiClick();
  if (!evidence.has(item.id)) {
    showToast("まだ未取得");
    line.textContent = "この証拠はまだ見つかっていない。光っている場所を調べる。";
    return;
  }

  evidenceDialogTitle.textContent = item.title;
  evidenceDialogText.textContent = item.text;
  evidenceDialog.hidden = false;
  screen.classList.add("has-evidence-dialog");
}

function closeEvidence(silent = false) {
  if (!silent) playUiClick();
  evidenceDialog.hidden = true;
  screen.classList.remove("has-evidence-dialog");
}

function showClear() {
  clearEvidence.innerHTML = "";
  evidenceDefs
    .filter((item) => evidence.has(item.id))
    .forEach((item) => {
      const badge = document.createElement("span");
      badge.textContent = item.label;
      clearEvidence.appendChild(badge);
    });

  clearDialog.hidden = false;
  screen.classList.add("has-clear-dialog");
  updateObjective("CLEAR");
  playClearSound();
}

function closeClear(resetObjective = true) {
  clearDialog.hidden = true;
  screen.classList.remove("has-clear-dialog");
  if (resetObjective && sceneData[currentScene]) {
    updateObjective(sceneData[currentScene].objective);
  }
}

function runAction(action) {
  if (action === "enter") {
    setScene("or");
    playCut("ENTER");
    return;
  }

  if (action === "inspectRecord") {
    recordSeen = true;
    addEvidence("record");
    playCut("RECORD");
    showToast("記録を確認");
    line.textContent = "記録には「314」と、心拍の乱れが書かれている。";
    advanceIfRoomEvidenceComplete();
    return;
  }

  if (action === "inspectMonitor") {
    monitorSeen = true;
    addEvidence("pulse");
    playCut("PULSE");
    showToast("心拍を確認");
    line.textContent = "心電図は三回だけ強く跳ねる。記録の番号と同期している。";
    advanceIfRoomEvidenceComplete();
    return;
  }

  if (action === "inspectBed") {
    addEvidence("cable");
    playCut("CABLE");
    showToast("ベッドは空");
    line.textContent = "ベッドは空だが、枕元にカプセル装置のケーブルが残っている。";
    advanceIfRoomEvidenceComplete();
    return;
  }

  if (action === "recordCode") {
    addEvidence("code");
    playCut("314");
    showStoryBeat("PATIENT ID", "患者番号 314", "同期ロックの番号が確定した。証拠カプセルへ進む。");
    showToast("314");
    line.textContent = "番号は314。記録と心拍を合わせるための同期キーだ。";
    updateObjective("カプセルへ進む");
    refreshGuides();
    return;
  }

  if (action === "pulseHint") {
    playCut("SYNC");
    showToast("長押しで同期");
    line.textContent = hasEvidence(["record", "pulse", "code"])
      ? "心拍の光に合わせて、ひとつのボタンを押し続ける。"
      : "まだ証拠が足りない。記録、心拍、番号314をそろえる。";
    updateObjective(hasEvidence(["record", "pulse", "code"]) ? "下のボタンを長押しする" : "記録・心拍・314をそろえる");
    refreshGuides();
    return;
  }

  if (action === "exitHint") {
    showToast("CLEAR");
    line.textContent = "出口が開いた。証拠は外へ送られた。";
    showClear();
  }
}

function updateProgress() {
  progressBar.style.width = `${Math.max(0, Math.min(100, holdProgress))}%`;
}

function resetSyncMeter(hidden = true) {
  syncBeatCount = 0;
  syncMeter.hidden = hidden;
  syncStatus.textContent = hidden ? "待機" : "準備";
  syncFill.style.width = "0%";
  syncBeats.forEach((beat) => beat.classList.remove("is-lit", "is-pop"));
}

function updateSyncMeter(status = "待機") {
  if (currentScene !== "capsule") {
    syncMeter.hidden = true;
    return;
  }

  syncMeter.hidden = false;
  const progress = Math.max(0, Math.min(100, holdProgress));
  const nextBeatCount = Math.min(3, [28, 62, 96].filter((point) => progress >= point).length);
  syncFill.style.width = `${progress}%`;
  syncStatus.textContent = progress >= 100 ? "完了" : status;

  if (nextBeatCount > syncBeatCount && navigator.vibrate) {
    navigator.vibrate(24);
  }
  if (nextBeatCount > syncBeatCount) {
    playHeartbeatSound();
  }

  syncBeatCount = nextBeatCount;
  syncBeats.forEach((beat, index) => {
    const lit = index < syncBeatCount;
    beat.classList.toggle("is-lit", lit);
    beat.classList.toggle("is-pop", lit && index === syncBeatCount - 1);
  });
}

function tick(timestamp) {
  const delta = Math.min(48, timestamp - lastFrame || 16);
  lastFrame = timestamp;

  if (currentScene === "capsule") {
    if (holding) {
      holdProgress += delta * 0.05;
      screen.classList.add("scene-pressing");
      updateSyncMeter("同期中");
      if (holdProgress >= 100) {
        holding = false;
        holdProgress = 100;
        updateProgress();
        updateSyncMeter("完了");
        screen.classList.remove("scene-pressing");
        setScene("exit");
        playCut("OPEN");
        showStoryBeat("CAPSULE OPEN", "証拠送信", "心拍同期が完了した。カプセルのロックが外れ、証拠が外部へ送られた。");
      }
    } else {
      holdProgress = Math.max(0, holdProgress - delta * 0.018);
      screen.classList.remove("scene-pressing");
      updateSyncMeter(holdProgress > 0 ? "維持" : "準備");
    }
    updateProgress();
  }

  requestAnimationFrame(tick);
}

screen.addEventListener("pointermove", (event) => {
  const rect = screen.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
  const y = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
  screen.style.setProperty("--tilt-x", x.toFixed(3));
  screen.style.setProperty("--tilt-y", y.toFixed(3));
});

audioToggle.addEventListener("click", () => {
  setAudioEnabled(!audioEnabled);
});
evidenceClose.addEventListener("click", closeEvidence);
evidenceDialog.addEventListener("click", (event) => {
  if (event.target === evidenceDialog) closeEvidence();
});
backButton.addEventListener("click", goBack);
clearRestart.addEventListener("click", () => setScene("street", { resetHistory: true, resetRun: true }));
clearDialog.addEventListener("click", (event) => {
  if (event.target === clearDialog) closeClear();
});

const params = new URLSearchParams(window.location.search);
const requestedScene = params.get("scene");
setScene(sceneData[requestedScene] ? requestedScene : "street", { resetHistory: true, resetRun: true });

const debugEvidence = params.get("evidence");
if (debugEvidence) {
  evidence = new Set(debugEvidence.split(",").filter(Boolean));
  recordSeen = evidence.has("record");
  monitorSeen = evidence.has("pulse");
  updateEvidence();
  refreshGuides();
  syncSceneStateFromProgress();
}

const debugEvidenceDialog = params.get("evidenceDialog");
if (debugEvidenceDialog) {
  const item = evidenceDefs.find((entry) => entry.id === debugEvidenceDialog);
  if (item) openEvidence(item);
}

if (params.get("clear") === "1") {
  showClear();
}

const debugSyncProgress = params.get("syncProgress");
if (debugSyncProgress && currentScene === "capsule") {
  holdProgress = Math.max(0, Math.min(100, Number(debugSyncProgress) || 0));
  progressWrap.hidden = true;
  updateProgress();
  updateSyncMeter("同期中");
}

const debugPose = params.get("pose");
if (debugPose) {
  const x = params.get("x") || sceneDefaults[currentScene].x;
  const y = params.get("y") || sceneDefaults[currentScene].y;
  screen.style.setProperty("--figure-x", x);
  screen.style.setProperty("--figure-y", y);
  clearFigurePose();
  screen.classList.add(`figure-action-${debugPose}`);
  screen.classList.add("is-acting");
}

const debugCut = params.get("cut");
if (debugCut) {
  window.setTimeout(() => playCut(debugCut), 80);
}

const debugCinema = params.get("cinema");
if (debugCinema) {
  window.setTimeout(() => playCinema(debugCinema), 120);
}

const debugCinemaHold = params.get("cinemaHold");
if (debugCinemaHold) {
  window.setTimeout(() => {
    playCinema(debugCinemaHold);
    window.clearTimeout(cinemaTimer);
    screen.classList.remove("is-cinema");
    screen.classList.add("is-cinema-hold");
  }, 120);
}

if (params.get("beat") === "1") {
  window.setTimeout(() => {
    showStoryBeat("EVIDENCE LINK", "証拠が接続", "記録、心電図、ベッドのケーブルが一本の線につながった。患者番号314を確認する。");
  }, 120);
}

requestAnimationFrame(tick);
