const stages = [
  {
    id: "intro",
    number: "00",
    title: "導入",
    tag: "物語",
    isIntro: true,
    type: "intro",
    mission: "現在異空間からの脱出",
    story:
      "マッシュ室で楽しく焼肉をしていた一行は突然、異空間へ飛ばされてしまった。その時、一枚の紙がヒラリと落ちた。",
    letter:
      "え~ちぇっくちぇっく、聞こえとる? あ、これは紙か。気を取り直して、ここは異空間。この空間にいる奴が自分で異空間って言うのは変かのう？ まあ細かい事はよい。ここは未来空間でも過去空間でもない、まさに現在異空間なんじゃ。キミタチには協力してこの空間からの脱出を目指してもらいたい。ここには全部で4つのステージがある。各ステージをクリアすると呪文を習得する事が可能じゃ。その呪文をうまく使い、試練を打開して先へ進んでもらいたい。キミタチナラ…どんな大きな壁も乗り越えられる！これはワシからのエールじゃ。信じておるぞ、ほいじゃあ、バーイ",
    rules: [
      "呪文は石板にカタカナで記入する。",
      "どこに、どの様に使うかを示す。",
      "石板の数に合った文字数の呪文しか唱えられない。",
      "習得した呪文には☆マークが付き、以後使用可能になる。",
    ],
  },
  {
    id: "gate",
    number: "01",
    title: "割れた足場",
    tag: "呪文組み立て",
    mission: "床が割れて先へ進めない。",
    shortMission: "床が割れて先へ進めない。穴を越える呪文を作る。",
    situation: "床が割れて先へ進めない",
    goal: "穴を越える呪文を作る",
    operation: "候補文字を選び、呪文欄に入れる",
    correctEffect: "光の橋が現れる",
    trialName: "穴を越える呪文",
    reward: "ツケモノ",
    type: "tiles",
    slots: 4,
    tiles: ["モ", "シ", "ケ", "ガ", "ノ", "テ", "ツ", "オ", "ミ", "マ"],
    correct: "ツケモノ",
    hints: [
      "赤い木札には「漬物石」。穴を越えるために、足場の代わりになるものを考えよう。",
      "呪文は4文字。床に散らばる音片の中から、赤枠の野菜名につながる音だけを選ぶ。",
      "「ツ」「ケ」「モ」「ノ」を順番に並べると、四角い石の呪文になる。",
    ],
    successMessage: "光の橋が現れた。",
    failMessage: "何も起こらない。",
    scene: "gate",
    sceneCaption: "左の足場から右の足場へ進みたいが、中央の穴で止まっている。",
    briefing: "赤い木札には「漬物石」。床の音片は、意味のある4音だけが反応する。",
    problems: [{ file: "page_02.jpg", title: "ステージ1 原問題" }],
    solutionImage: "stage01-02-solution.png",
    textProblem: {
      title: "ステージ1",
      subtitle: "穴が開いていて通ることが出来ない",
      rule: "呪文のルール: 呪文は石板にカタカナで記入し、石板の数に合った文字数の呪文しか唱えられない。",
      prompt: "赤枠内の漢字を変えて、上から下へ粘り強さを移動させて下さい。赤枠内に現れる野菜は？",
      answerHint: "①と②が解けたら「つかった①、②の答え」の下のカタカナを読む。",
      answerBoxes: 4,
      solvedNote: "ツケモノ: 漬物石だろうか？ 謎の四角を1個生成できる。この土台の上にのみ生成可能。",
    },
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
    tiles: ["サ", "ゴ", "キ", "ロ", "ア", "マ", "ウ", "ン", "ク", "イ", "オ", "リ"],
    correct: "ゴクロウサマ",
    scene: "corridor",
    sceneCaption: "壁の色マスが見えない扉の位置を示している。光の順路を読み取る。",
    briefing: "青い矢印の順に読む。最後に残るのは、通り抜けた者へ向けた六音の言葉。",
    problems: [{ file: "stage02-problem-clean.png", title: "ステージ2 原問題" }],
    sourceProblemImage: "stage02-problem-clean.png",
    solutionImage: "stage01-02-solution.png",
    textProblem: {
      title: "ステージ2",
      subtitle: "扉のあかない通路",
      rule: "壁の色が違う紙に、答えを順番に重ねていく。①②③④の矢印順に解く。",
      prompt: "色のついたマスと白丸の文字をたどり、最後に残る言葉を読む。",
      answerHint: "通路を抜けた相手へ向ける言葉。6文字。",
      answerBoxes: 6,
      solvedNote: "ゴクロウサマ: 「　」内の色を消すことが出来る。「　」内の内容の意味が通れば、それは現実となる。",
    },
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
    sceneCaption: "凍った足場を渡るには、氷に効くアイテムを選ぶ必要がある。",
    briefing: "式が指す番号は3。3番の棚には、口から火を出す道具が置かれている。",
    problems: [{ file: "stage03-problem-clean.png", title: "ステージ3 原問題" }],
    sourceProblemImage: "stage03-problem-clean.png",
    solutionImage: "stage03-solution-clean.png",
    textProblem: {
      title: "ステージ3",
      subtitle: "凍った足場",
      rule: "下のカッコの数字からひらがなを取り出す。最も関係するものをアイテム680の中から選ぶ。",
      prompt: "鉄の足場が凍っていて渡るのは危険だ。アイテム屋で氷を溶かせるものを探す。",
      shop: [
        "1. メラソード: 切ったものが燃える",
        "2. ソラブーツ: 装備すると素早くなる",
        "3. ドラブレス: 口から火が出せる",
        "4. マジホウキ: 飛べる、掃除もできる",
      ],
      answerBoxes: 5,
      solvedNote: "ドラブレス: 炎でどんな氷も溶かす事ができる。ただし炎は発射方向に注意。",
    },
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
    sceneCaption: "三つの色ランプと計器がずれている。時差を消す装置名を探す。",
    briefing: "青、緑、黄の順に読んで得た六音。時を移動する装置の名前を入力する。",
    problems: [{ file: "stage04-problem-clean.png", title: "ステージ4 原問題" }],
    sourceProblemImage: "stage04-problem-clean.png",
    solutionImage: "stage04-solution-clean.png",
    textProblem: {
      title: "ステージ4",
      subtitle: "時空が歪んで、時差が発生した",
      rule: "①〜④の謎を解いて、時差を無くすための手段を見つける。",
      prompt: "おじさんの間にあるもの、曜日の箱、THIS WEEK、投げられた球の軌跡を使って答えを出す。",
      answerHint: "答えは、差し示す先にある。青→緑→黄の順に読む。",
      answerBoxes: 6,
      solvedNote: "FINAL ANSWER: タイムマシン。",
    },
  },
  {
    id: "boss",
    number: "05",
    title: "出口前のラスボス",
    tag: "呪文戦",
    mission: "出口の前に白い獣が現れた。集めた呪文と追加呪文を、正しい順番で放って突破する。",
    type: "boss",
    scene: "boss",
    sceneCaption: "出口前にラスボスがいる。呪文は一度ずつしか使えない。",
    briefing: "上から順に呪文を放つ。間違えると獣が態勢を立て直す。",
    problems: [{ file: "stage05-problem-clean.png", title: "ラスボス 原問題" }],
    sourceProblemImage: "stage05-problem-clean.png",
    textProblem: {
      title: "ラスボス戦",
      subtitle: "出口を発見したが、ラスボスが立ちはだかった",
      rule: "ここで使える呪文は1呪文につき1回まで。状況に合う呪文を順番に放つ。",
      prompt: "ラスボスの攻撃や動きを読み、習得した呪文を正しい順で使う。",
      sequenceTitle: "使える呪文一覧",
      sequence: [
        "バリ: 瞬間的なバリアで弱攻撃を無効化する",
        "フユウ: ちょっとだけ空中に浮くことができる",
        "オバタンス: 次の呪文効果時間を2倍にする",
        "カタメ: 身体を硬化させ、弱攻撃を無効化する",
        "アイス: つるつるの氷を生成する",
        "ヘンガオ: 仲間一人を白目にさせる",
        "タメニタメル: 次の攻撃威力が2倍になる",
        "ガンリキ: 相手に恐怖感を与え隙を作る",
        "イノリ: 命中率を下げる",
      ],
      solvedNote: "最後は、今こそ共に歩んだ仲間の事を思い出す時。",
    },
  },
];

const puzzleTotal = stages.filter((stage) => !stage.isIntro).length;

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

const storeKey = "tanohamaEscapeStateV4";

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
        hintLevels: saved.hintLevels && typeof saved.hintLevels === "object" ? saved.hintLevels : {},
        feedback: saved.feedback && typeof saved.feedback === "object" ? saved.feedback : null,
        isClear: Boolean(saved.isClear),
      };
    }
  } catch {
    localStorage.removeItem(storeKey);
  }
  return { stageIndex: 0, cleared: [], spells: [], bossInput: [], slotInput: [], hintLevels: {}, feedback: null, isClear: false };
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
  document.body.classList.toggle("stage-one-mode", !state.isClear && stage.id === "gate");
  document.body.classList.toggle("stage-intro-mode", !state.isClear && stage.id === "intro");
  elements.stageCount.textContent = stage.isIntro ? `00 / ${String(puzzleTotal).padStart(2, "0")}` : `${stage.number} / ${String(puzzleTotal).padStart(2, "0")}`;
  elements.spellCount.textContent = String(state.spells.length);
  renderNav();
  if (state.isClear) {
    renderClear();
  } else if (stage.type === "intro") {
    renderIntro(stage);
  } else if (stage.type === "boss") {
    renderBoss(stage);
  } else if (stage.id === "gate") {
    renderGateStage(stage);
  } else {
    renderStage(stage);
  }
  saveState();
}

function renderIntro(stage) {
  elements.game.innerHTML = `
    <section class="intro-stage" aria-label="導入">
      <div class="intro-bg"></div>
      <div class="intro-vignette"></div>
      <article class="intro-scroll">
        <span>00 / 導入</span>
        <h2>現在異空間からの脱出</h2>
        <p>${stage.story}</p>
        <blockquote>${stage.letter}</blockquote>
        <ul>
          ${stage.rules.map((rule) => `<li>${rule}</li>`).join("")}
        </ul>
        <button class="primary-button intro-start-button" id="introStartButton" type="button">01へ進む</button>
      </article>
    </section>
  `;
  document.querySelector("#introStartButton")?.addEventListener("click", () => {
    addUnique(state.cleared, stage.id);
    state.stageIndex = 1;
    state.feedback = null;
    resetStageInput();
    render();
  });
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
        state.feedback = null;
        resetStageInput();
        render();
      }
    });
    elements.nav.appendChild(button);
  });
}

function renderScene(stage) {
  const sceneClass = `scene-${stage.scene}`;
  const isSourceScene = stage.scene === "gate" || stage.scene === "corridor";
  const done = stage.id ? isStageCleared(stage.id) : false;
  return `
    <div class="scene ${sceneClass} ${isSourceScene ? "source-scene" : ""}" aria-hidden="true">
      ${isSourceScene ? "" : `<div class="void-grid"></div>`}
      ${!isSourceScene && stage.sceneCaption ? `<div class="scene-caption">${stage.sceneCaption}</div>` : ""}
      ${stage.scene === "gate" ? gateScene(done) : ""}
      ${stage.scene === "corridor" ? corridorScene(done) : ""}
      ${stage.scene === "ice" ? iceScene() : ""}
      ${stage.scene === "time" ? timeScene() : ""}
      ${stage.scene === "boss" ? bossScene() : ""}
    </div>
  `;
}

function renderProblems(stage, done = false) {
  if (stage.sourceProblemImage) {
    return `
      <section class="problem-section source-image-problem">
        <div class="section-head">
          <strong>原問題</strong>
          <span>タップで拡大</span>
        </div>
        <button class="source-problem-image-wrap" type="button" data-problem="${stage.sourceProblemImage}" data-title="${stage.number} ${stage.title} 原問題">
          <img src="./assets/${stage.sourceProblemImage}" alt="${stage.number} ${stage.title} 原問題" loading="eager" />
        </button>
      </section>
    `;
  }
  if (stage.textProblem) {
    const problem = stage.textProblem;
    return `
      <section class="problem-section text-problem">
        <div class="section-head">
          <strong>原問題を再構成</strong>
          <span>PDF画像ではなく文章化</span>
        </div>
        <article class="problem-paper">
          <h3>${problem.title}</h3>
          <p class="problem-subtitle">${problem.subtitle}</p>
          <p class="problem-rule">${problem.rule}</p>
          <p class="problem-prompt">${problem.prompt}</p>
          ${problem.answerHint ? `<p class="problem-hint">${problem.answerHint}</p>` : ""}
          ${problem.shop ? `<ul class="problem-shop">${problem.shop.map((line) => `<li>${line}</li>`).join("")}</ul>` : ""}
          ${problem.sequenceTitle ? `<p class="problem-list-title">${problem.sequenceTitle}</p>` : ""}
          ${problem.sequence ? `<ul class="problem-sequence">${problem.sequence.map((line) => `<li>${line}</li>`).join("")}</ul>` : ""}
          ${problem.answerBoxes ? `<div class="problem-blanks">${Array.from({ length: problem.answerBoxes }).map(() => `<span></span>`).join("")}</div>` : ""}
          ${done && problem.solvedNote ? `<p class="spell-note">${problem.solvedNote}</p>` : ""}
        </article>
      </section>
    `;
  }
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

function renderSolution(stage, done = false) {
  if (!done || !stage.solutionImage) return "";
  return `
    <section class="problem-section source-image-problem solution-section">
      <div class="section-head">
        <strong>正解後の解説</strong>
        <span>タップで拡大</span>
      </div>
      <button class="source-problem-image-wrap solution-image-wrap" type="button" data-problem="${stage.solutionImage}" data-title="${stage.number} ${stage.title} 解説">
        <img src="./assets/${stage.solutionImage}" alt="${stage.number} ${stage.title} 解説" loading="eager" />
      </button>
    </section>
  `;
}

function gateScene(done) {
  const spell = done ? "ツケモノ" : "□□□□";
  const slots = done ? ["ツ", "ケ", "モ", "ノ"] : ["", "", "", ""];
  return `
    <div class="case-sheet">
      <section class="case-prologue">
        <div class="case-title">【現在異空間　からの脱出】</div>
        <p>マッシュ室で楽しく焼肉をしていた一行は突然、異空間へ飛ばされてしまった。その時、一枚の紙がヒラリと落ちた。</p>
        <blockquote>「え~ちぇっくちぇっく、聞こえとる? あ、これは紙か。気を取り直して、ここは異空間。この空間にいる奴が自分で異空間って言うのは変かのう？ まあ細かい事はよい。ここは未来空間でも過去空間でもない、まさに現在異空間なんじゃ。キミタチには協力してこの空間からの脱出を目指してもらいたい。ここには全部で4つのステージがある。各ステージをクリアすると呪文を習得する事が可能じゃ。その呪文をうまく使い、試練を打開して先へ進んでもらいたい。キミタチナラ…どんな大きな壁も乗り越えられる！これはワシからのエールじゃ。信じておるぞ、ほいじゃあ、バーイ」</blockquote>
      </section>
      <section class="spell-rule-card">
        <strong>呪文のルール</strong>
        <ul>
          <li>呪文は石板にカタカナで記入する。</li>
          <li>どこに、どの様に使うかを示す。</li>
          <li>石板の数に合った文字数の呪文しか唱えられない。</li>
          <li>習得した呪文には☆マークが付き、以後使用可能になる。</li>
        </ul>
      </section>
      <div class="case-stage-grid">
        <section class="case-stage current-case">
          <div class="case-stage-head">
            <span>ステージ1</span>
            <strong>穴が開いていて通ることが出来ない</strong>
          </div>
          <div class="readable-diagram hole-diagram">
            <span class="diagram-label left-label">現在地</span>
            <span class="diagram-label center-label">穴</span>
            <span class="diagram-label right-label">進みたい場所</span>
            <div class="diagram-person"></div>
            <div class="diagram-platform left"></div>
            <div class="diagram-platform right"></div>
            <div class="diagram-gap"></div>
          </div>
          <p class="trial-copy">試練：穴が開いていて通ることが出来ない</p>
          <div class="stone-panel">
            <span class="stone-label">石板 4文字</span>
            <div class="stone-slots" aria-hidden="true">${slots.map((char) => `<span>${char}</span>`).join("")}</div>
          </div>
          <div class="spell-card">
            <span class="spell-status">${done ? "習得済み" : "未習得"}</span>
            <strong>☆${spell}</strong>
            <p>効果：謎の四角を1個生成できる。この土台の上にのみ生成可能。</p>
          </div>
        </section>
        <section class="case-stage next-case">
          <div class="case-stage-head">
            <span>次の試練</span>
            <strong>ステージ2『扉のあかない通路』</strong>
          </div>
          <div class="readable-diagram door-diagram">
            <span class="diagram-label left-label">通路</span>
            <span class="diagram-label right-label">閉じた扉</span>
            <div class="diagram-runner"></div>
            <div class="diagram-door"></div>
          </div>
          <p class="trial-copy">試練：扉があり通ることが出来ない</p>
          <div class="spell-card muted-spell">
            <strong>☆□□□□□□</strong>
            <p>効果：「　」内の色を消す事が出来る。内容の意味が通れば、それは現実となる。</p>
          </div>
        </section>
      </div>
    </div>
  `;
}

function corridorScene() {
  return `
    <div class="case-sheet single-stage-sheet stage02-source-visual">
      <section class="case-stage current-case">
        <div class="case-stage-head">
          <span>ステージ2</span>
          <strong>『扉のあかない通路』</strong>
        </div>
        <div class="source-crop-frame source-stage2-overview">
          <img src="./assets/stage02-overview-crop.png" alt="ステージ2 原案図">
        </div>
        <p class="trial-copy">試練：扉があり通ることが出来ない</p>
      </section>
    </div>
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

function renderGateStage(stage) {
  const done = isStageCleared(stage.id);
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const selected = done ? [...stage.correct].slice(0, stage.slots) : state.slotInput.slice(0, stage.slots);
  elements.game.innerHTML = `
    <section class="stage-panel premium-stage stage-one-redesign ${done ? "is-solved" : ""} ${feedback?.type === "fail" ? "is-fail" : ""}">
      ${gatePlayableVisual(stage, done, feedback)}

      <section class="spell-device" aria-label="呪文入力">
        ${gateProblemInscription(stage, done)}
        ${renderSolution(stage, done)}

        <div class="device-main-row">
          <div class="premium-slot-row magic-slots">
            ${Array.from({ length: stage.slots })
              .map((_, i) => `<button class="premium-slot" type="button" data-slot="${i}">${selected[i] || ""}</button>`)
              .join("")}
          </div>
          <button class="primary-button cast-button" id="activateStage" type="button" ${done ? "disabled" : ""}>${done ? "解決済み" : "呪文を唱える"}</button>
        </div>

        <div class="premium-tile-grid stone-tile-rack">
          ${stage.tiles
            .map((tile) => `<button class="word-button console-word-button" type="button" data-tile="${tile}" ${done ? "disabled" : ""}>${tile}</button>`)
            .join("")}
        </div>

        <div class="device-actions">
          <button class="text-button" id="clearSlots" type="button" ${done ? "disabled" : ""}>消す</button>
        </div>

        ${renderGateResult(stage, done, feedback)}

        <div class="stage-actions">
          ${done ? `<button class="primary-button" id="nextButton" type="button">次へ進む</button>` : ""}
        </div>
      </section>
    </section>
  `;
  wireGateStage(stage, done);
}

function gatePlayableVisual(stage, done, feedback) {
  return `
    <div class="gate-play-visual stage-world ${done ? "is-open" : ""} ${feedback?.type === "fail" ? "is-void-pulse" : ""}">
      <img class="stage-bg-art" src="./assets/stage01-broken-floor.png" alt="" loading="eager" />
      <div class="art-vignette"></div>
      <div class="far-door-aura"></div>
      <div class="glow-bridge"></div>
      <div class="stage-hud">
        <div>
          <span>異空間からの脱出</span>
          <strong>${stage.number} / ${stage.title}</strong>
        </div>
        <em>${stage.number} / ${puzzleTotal}</em>
      </div>
    </div>
  `;
}

function gateProblemInscription(stage, done) {
  const problem = stage.textProblem;
  if (!problem) return "";
  return `
    <section class="device-problem source-problem-card ${done ? "is-solved" : ""}" aria-label="問題文">
      <div class="source-problem-head">
        <span>問題文</span>
        <strong>試練</strong>
      </div>
      <div class="source-puzzle-sheet" aria-label="ステージ1の問題">
        <div class="source-puzzle-title-row">
          <h3>ステージ1</h3>
          <img src="./assets/stage01-overview-crop.png" alt="ステージ1 原案図">
        </div>
        <div class="source-question-grid">
          <section class="source-question-box">
            <b class="source-question-number">①</b>
            <div class="source-kanji-change">
              <div class="source-kanji-pair source-kanji-top">
                <span class="source-red-kanji">納</span><span>豆</span>
              </div>
              <div class="source-down-arrow">↓</div>
              <div class="source-kanji-pair source-kanji-bottom">
                <span class="source-red-kanji">短</span><span>気</span>
              </div>
            </div>
            <p>赤枠内の漢字を変えて<br>上から下へ粘り強さを<br>移動させて下さい。<br><strong>赤枠内に現れる<br>野菜は？</strong></p>
            <small>「粘り強さを分けてあげると、納豆は粘りが出る前のある物に変わり、短気は粘り強い言葉に変わるのぅ」</small>
          </section>
          <section class="source-question-box">
            <b class="source-question-number">②</b>
            <p class="source-question-two">給料日の曜日が無くなると現れる<br><strong>野菜は？</strong></p>
          </section>
        </div>
        <div class="source-katakana-image" aria-label="①、②が解けた後に読む下のカタカナ列">
          <img src="./assets/stage01-katakana-read-crop.png" alt="①、②が解けたら次は、つかった①、②の答えの下のカタカナを読む">
        </div>
        <div class="source-answer-row" aria-label="答え欄">
          <span>こたえ</span>
          <i></i><i></i><i></i><i></i>
          <small>「下線に気をつけるんじゃモ」</small>
        </div>
        ${done ? `
          <div class="source-spell-frame">
            <p><b>☆ツケモノ…</b>漬物石だろうか？ 謎の四角を1個生成できる！</p>
            <div class="source-effect-row">
              <span class="source-blank-box"></span>
              <span class="source-effect-copy">←この土台の上にのみ生成可能</span>
            </div>
            <div class="source-caption-row">
              <span>↑（呪文名）</span>
              <span>↑（効果）</span>
            </div>
          </div>
        ` : ""}
      </div>
    </section>
  `;
}

function renderGateResult(stage, done, feedback) {
  if (done) {
    return `<p class="result-message is-success">${stage.successMessage}</p>`;
  }
  if (feedback?.type === "fail") {
    return `<p class="result-message is-fail">${stage.failMessage}</p>`;
  }
  return "";
}

function wireGateStage(stage, done) {
  document.querySelectorAll(".word-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (done || state.slotInput.length >= stage.slots) return;
      state.slotInput.push(button.dataset.tile);
      state.feedback = null;
      render();
    });
  });

  document.querySelectorAll(".premium-slot").forEach((button) => {
    button.addEventListener("click", () => {
      if (done) return;
      state.slotInput.splice(Number(button.dataset.slot), 1);
      state.feedback = null;
      render();
    });
  });

  document.querySelector("#clearSlots")?.addEventListener("click", () => {
    resetStageInput();
    state.feedback = null;
    render();
  });

  document.querySelector("#activateStage")?.addEventListener("click", () => {
    if (normalizeAnswer(state.slotInput.join("")) !== normalizeAnswer(stage.correct)) {
      state.feedback = { stageId: stage.id, type: "fail" };
      render();
      return;
    }
    addUnique(state.cleared, stage.id);
    addUnique(state.spells, stage.reward);
    state.feedback = { stageId: stage.id, type: "success" };
    resetStageInput();
    render();
  });

  document.querySelector("#nextButton")?.addEventListener("click", () => {
    state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
    state.feedback = null;
    resetStageInput();
    render();
  });
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
      ${renderProblems(stage, done)}
      <section class="brief-card">
        <strong>手がかり</strong>
        <p>${stage.briefing}</p>
      </section>
      ${stage.type === "tiles" ? tilePuzzle(stage, done) : ""}
      ${stage.type === "shop" ? shopPuzzle(stage, done) : ""}
      ${stage.type === "console" ? consolePuzzle(stage, done) : ""}
      ${renderSolution(stage, done)}
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
  if (stage.solutionImage) {
    render();
    return;
  }
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
      ${renderProblems(stage, false)}
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
  state.hintLevels = {};
  state.feedback = null;
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
