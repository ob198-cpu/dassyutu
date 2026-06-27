const stages = [
  {
    id: "gate",
    number: "01",
    title: "入口と穴の通路",
    tag: "呪文獲得",
    mission: "異空間に飛ばされた。まずは穴をふさいで通路を作る呪文を見つける。",
    readable: [
      "読む場所: 「ステージ1の解き方」と、下部の答え欄。",
      "やること: 赤枠の漢字を見て、下のカタカナ列から5文字の呪文を読む。",
      "入力する形: カタカナ5文字。",
    ],
    docs: [
      { file: "page_02.jpg", title: "ステージ1の解き方" },
      { file: "page_01.jpg", title: "全体資料" },
    ],
    question: "穴をふさぐための呪文は？",
    answers: ["ツケモノ", "つけもの", "漬物"],
    reward: "ツケモノ",
    hint: "資料の赤いメモでは、漬物石をどう使うかが呪文名になっている。",
  },
  {
    id: "path",
    number: "02",
    title: "扉のない通路",
    tag: "色の迷路",
    mission: "扉のない通路に入った。色の迷路から、通れる道を作る呪文を読む。",
    readable: [
      "読む場所: ピンクの色マス全体と、左下の答え欄。",
      "やること: ①②③④の矢印順に進み、色と白丸の文字を追う。",
      "入力する形: ねぎらいの言葉、カタカナ6文字。",
    ],
    docs: [{ file: "page_03.jpg", title: "ステージ2 色の迷路" }],
    question: "扉のない通路を進む呪文は？",
    answers: ["ゴクロウサマ", "ごくろうさま", "御苦労様"],
    reward: "ゴクロウサマ",
    hint: "矢印の順番と白丸の文字を追う。最後は六文字のねぎらいの言葉。",
  },
  {
    id: "shop",
    number: "03",
    title: "アイテム屋と凍った足場",
    tag: "アイテム選択",
    mission: "凍った足場を渡るには、アイテム屋で正しい道具を選ぶ必要がある。",
    readable: [
      "読む場所: アイテム屋の表と、ステージ3の氷の足場。",
      "やること: 数字の式でアイテム番号を出し、氷を溶かせる道具を選ぶ。",
      "入力する形: アイテム名、または番号。",
    ],
    docs: [
      { file: "page_04.jpg", title: "アイテム屋" },
      { file: "page_05.jpg", title: "凍った足場" },
    ],
    question: "氷を溶かすために選ぶアイテム名は？",
    answers: ["ドラブレス", "どらぶれす", "3", "３"],
    reward: "ドラブレス",
    hint: "計算で出る番号は3。3番のアイテムは、炎を出せるもの。",
  },
  {
    id: "time",
    number: "04",
    title: "時差の部屋",
    tag: "FINAL ANSWER",
    mission: "時空が歪み、時差が発生した。四つの小謎を解き、時差を消す手段を見つける。",
    readable: [
      "読む場所: ①〜④の小謎と、下部の FINAL ANSWER。",
      "やること: それぞれの答えを、青→緑→黄の順で読んでつなげる。",
      "入力する形: 時間を移動する装置、カタカナ6文字。",
    ],
    docs: [{ file: "page_06.jpg", title: "ステージ4 時差の部屋" }],
    question: "時差をなくすための FINAL ANSWER は？",
    answers: ["タイムマシン", "たいむましん"],
    reward: "タイムマシン",
    hint: "青、緑、黄の順に読む。六文字の、時を移動する装置。",
  },
  {
    id: "boss",
    number: "05",
    title: "ラスボス戦",
    tag: "呪文順入力",
    mission: "出口を見つけたが、ラスボスが立ちはだかった。資料の順に呪文を放つ。",
    readable: [
      "読む場所: ラスボス戦の左側に並ぶ呪文欄。",
      "やること: 上から下へ、資料に書かれた順番で呪文ボタンを押す。",
      "間違えたら: 一つ戻すで直せる。",
    ],
    docs: [{ file: "page_07.jpg", title: "ラスボス戦 呪文一覧" }],
    boss: true,
    hint: "資料の左側、上から下へ。バリから始まり、最後はバタフライエフェクト。",
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

const storeKey = "tanohamaEscapeStateV1";

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
        isClear: Boolean(saved.isClear),
      };
    }
  } catch {
    localStorage.removeItem(storeKey);
  }
  return { stageIndex: 0, cleared: [], spells: [], bossInput: [], isClear: false };
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

function render() {
  const stage = stages[state.stageIndex] || stages[0];
  elements.stageCount.textContent = `${Math.min(state.stageIndex + 1, stages.length)} / ${stages.length}`;
  elements.spellCount.textContent = String(state.spells.length);
  renderNav();
  if (state.isClear) {
    renderClear();
  } else if (stage.boss) {
    renderBoss(stage);
  } else {
    renderPuzzle(stage);
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
        render();
      }
    });
    elements.nav.appendChild(button);
  });
}

function docsMarkup(stage) {
  return `
    <div class="doc-stack">
      ${stage.docs
        .map(
          (doc, index) => `
            <article class="doc-card">
              <button type="button" data-doc="${doc.file}" data-title="${doc.title}">
                <img src="./assets/${doc.file}" alt="${doc.title}" loading="lazy" />
              </button>
              <div class="doc-caption">
                <span>${doc.title}</span>
                <span>拡大</span>
              </div>
            </article>
          `,
        )
        .join("")}
    </div>
  `;
}

function readableMarkup(stage) {
  if (!stage.readable?.length) return "";
  return `
    <section class="readable-card" aria-label="読める版の説明">
      <strong>このステージで見る場所</strong>
      ${stage.readable.map((line) => `<p>${line}</p>`).join("")}
    </section>
  `;
}

function renderPuzzle(stage) {
  const done = isStageCleared(stage.id);
  elements.game.innerHTML = `
    <section class="stage-panel">
      <div class="stage-title">
        <h2>${stage.number} / ${stage.title}</h2>
        <span class="tag">${stage.tag}</span>
      </div>
      <div class="portal" aria-hidden="true"></div>
      <p class="mission">${stage.mission}</p>
      ${readableMarkup(stage)}
      ${docsMarkup(stage)}
      <form class="answer-box" id="answerForm">
        <label for="answerInput">${stage.question}</label>
        <div class="answer-row">
          <input id="answerInput" name="answer" autocomplete="off" inputmode="text" ${done ? "disabled" : ""} />
          <button class="option-button" type="submit" ${done ? "disabled" : ""}>発動</button>
        </div>
        <div class="hint-row">
          <button class="ghost-button" id="hintButton" type="button">ヒント</button>
          <button class="ghost-button" id="giveUpButton" type="button">救済</button>
        </div>
        <p class="note ${done ? "is-ok" : ""}" id="stageNote">
          ${done ? `獲得済み: ${stage.reward}` : "資料を調べて、呪文を入力する。"}
        </p>
      </form>
      <div class="spell-ledger">${state.spells.map((spell) => `<span class="spell-chip">${spell}</span>`).join("")}</div>
      <div class="stage-actions">
        ${
          done
            ? `<button class="primary-button" id="nextButton" type="button">${state.stageIndex >= stages.length - 2 ? "ラスボスへ" : "次へ"}</button>`
            : ""
        }
      </div>
    </section>
  `;
  wireDocs();
  const form = document.querySelector("#answerForm");
  const note = document.querySelector("#stageNote");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (done) return;
    const input = document.querySelector("#answerInput");
    const answer = normalizeAnswer(input.value);
    const correct = stage.answers.some((value) => normalizeAnswer(value) === answer);
    if (!correct) {
      note.textContent = "まだ違う。資料を拡大して、答えの形を確認しよう。";
      note.className = "note is-error";
      return;
    }
    addUnique(state.cleared, stage.id);
    addUnique(state.spells, stage.reward);
    note.textContent = `正解。${stage.reward} を獲得した。`;
    note.className = "note is-ok";
    setTimeout(() => {
      state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
      render();
    }, 520);
  });
  document.querySelector("#hintButton").addEventListener("click", () => {
    note.textContent = stage.hint;
    note.className = "note";
  });
  document.querySelector("#giveUpButton").addEventListener("click", () => {
    note.textContent = `答え: ${stage.answers[0]}`;
    note.className = "note";
  });
  const next = document.querySelector("#nextButton");
  if (next) {
    next.addEventListener("click", () => {
      state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
      render();
    });
  }
}

function renderBoss(stage) {
  elements.game.innerHTML = `
    <section class="stage-panel">
      <div class="stage-title">
        <h2>${stage.number} / ${stage.title}</h2>
        <span class="tag">${stage.tag}</span>
      </div>
      <p class="mission">${stage.mission}</p>
      ${readableMarkup(stage)}
      ${docsMarkup(stage)}
      <div class="boss-arena">
        <div class="boss-visual" aria-label="ラスボス"></div>
        <div class="boss-box">
          <p class="label">発動した呪文</p>
          <div class="sequence">
            ${bossSequence
              .map((_, index) => `<span>${state.bossInput[index] ? index + 1 : ""}</span>`)
              .join("")}
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
          <div class="hint-row">
            <button class="ghost-button" id="bossHint" type="button">ヒント</button>
            <button class="ghost-button" id="bossUndo" type="button">一つ戻す</button>
          </div>
          <p class="note" id="bossNote">${state.bossInput.length ? `${state.bossInput.length}手目まで成功。` : "資料の順番で呪文を選ぶ。"}</p>
        </div>
      </div>
    </section>
  `;
  wireDocs();
  document.querySelectorAll(".spell-button").forEach((button) => {
    button.addEventListener("click", () => castSpell(button.dataset.spell));
  });
  document.querySelector("#bossHint").addEventListener("click", () => {
    document.querySelector("#bossNote").textContent = stage.hint;
  });
  document.querySelector("#bossUndo").addEventListener("click", () => {
    state.bossInput.pop();
    render();
  });
}

function castSpell(spell) {
  const note = document.querySelector("#bossNote");
  const expected = bossSequence[state.bossInput.length];
  if (spell !== expected) {
    note.textContent = `順番が違う。今は ${state.bossInput.length + 1} 手目。資料をもう一度確認する。`;
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
      <div class="portal" aria-hidden="true"></div>
      <h2>CLEAR</h2>
      <p>バタフライエフェクトが発動し、現在異空間が崩れた。田野浜の謎解きは脱出成功。</p>
      <div class="spell-ledger">${state.spells.map((spell) => `<span class="spell-chip">${spell}</span>`).join("")}</div>
      <div class="stage-actions">
        <button class="primary-button" id="replayButton" type="button">もう一度遊ぶ</button>
      </div>
    </section>
  `;
  document.querySelector("#replayButton").addEventListener("click", resetGame);
}

function wireDocs() {
  document.querySelectorAll("[data-doc]").forEach((button) => {
    button.addEventListener("click", () => {
      elements.docImage.src = `./assets/${button.dataset.doc}`;
      elements.docTitle.textContent = button.dataset.title || "資料";
      elements.dialog.showModal();
    });
  });
}

function resetGame() {
  state.stageIndex = 0;
  state.cleared = [];
  state.spells = [];
  state.bossInput = [];
  state.isClear = false;
  saveState();
  render();
}

elements.reset.addEventListener("click", resetGame);
elements.closeDoc.addEventListener("click", () => elements.dialog.close());
elements.dialog.addEventListener("click", (event) => {
  if (event.target === elements.dialog) elements.dialog.close();
});

render();
