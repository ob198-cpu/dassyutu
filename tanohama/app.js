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
    title: "崩れた足場",
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
      "ヒント①「粘り強さを分けてあげると、納豆は粘りが出る前のある物に変わり、短気は粘り強い言葉に変わるのぅ」",
      "ヒント②「下線に気をつけるんじゃぞ」",
      "ヒント③「問題を解くと呪文が現れるかものう…」",
    ],
    successMessage: "漬物石のおかげで渡れるようになった！",
    failMessage: "何も起こらない。",
    scene: "gate",
    sceneCaption: "左の足場から右の足場へ進みたいが、中央の穴で止まっている。",
    briefing: "赤い木札には「漬物石」。床の音片は、意味のある4音だけが反応する。",
    problems: [{ file: "stage01-problem-ver2.webp", title: "ステージ1 原問題" }],
    sourceProblemImage: "stage01-problem-ver2.webp",
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
    title: "開かずの間",
    tag: "経路解読",
    mission: "壁面の色マスが、見えない扉の位置を示している。光る経路をたどり、通路を開く言葉を作る。",
    reward: "ゴクロウサマ",
    type: "tiles",
    slots: 6,
    tiles: ["サ", "ゴ", "キ", "ロ", "ア", "マ", "ウ", "ン", "ク", "イ", "オ", "リ"],
    correct: "ゴクロウサマ",
    successMessage: "「　」内の色が消え、扉が現実になって開いた！呪文「ゴクロウサマ」を習得した。",
    failMessage: "何も起こらない。",
    hints: [
      "ヒント①「様々な色がこの紙には書かれとってキレイじゃのう」",
      "ヒント②「壁の色が違う紙に、①②③④の矢印の順で答えを重ねていくんじゃ」",
      "ヒント③「色のついたマスと白丸の文字をたどるのじゃぞ」",
      "ヒント④「最後に残るのは、通り抜けた者へかける、ねぎらいの六文字じゃ」",
    ],
    scene: "corridor",
    sceneCaption: "壁の色マスが見えない扉の位置を示している。光の順路を読み取る。",
    briefing: "青い矢印の順に読む。最後に残るのは、通り抜けた者へ向けた六音の言葉。",
    problems: [{ file: "stage02-problem-clean.webp", title: "ステージ2 原問題" }],
    sourceProblemImage: "stage02-problem-clean.webp",
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
    mission: "急傾斜の通路が鏡面状の氷に覆われ、滑って登れない。アイテム屋の棚から、氷を溶かせるものを選ぶ。",
    reward: "ドラブレス",
    type: "shop",
    correct: "ドラブレス",
    successMessage: "ドラブレスの炎で氷が溶け、先へ進めるようになった！",
    scene: "ice",
    sceneCaption: "鏡面状に凍った急坂を登るには、氷に効くアイテムを選ぶ必要がある。",
    briefing: "式が指す番号は3。3番の棚には、口から火を出す道具が置かれている。",
    hints: [
      "ヒント①「５９６３は労いのことばじゃ」",
      "ヒント②「めがねはどう使うかのう」",
      "ヒント③「３３は散々とも耳とも言えるのう」",
    ],
    problems: [{ file: "stage03-problem-clean.webp", title: "ステージ3 原問題" }],
    sourceProblemImage: "stage03-problem-clean.webp",
    solutionImage: "stage03-solution-clean.png",
    textProblem: {
      title: "ステージ3",
      subtitle: "凍った足場",
      rule: "下のカッコの数字からひらがなを取り出す。最も関係するものをアイテム680の中から選ぶ。",
      prompt: "強い傾斜の石段が厚い氷に覆われ、足を掛けても滑り落ちる。アイテム屋で氷を溶かせるものを探す。",
      shop: [
        "1. メラソード: 切ったものが燃える",
        "2. ソラブーツ: 装備すると素早くなる",
        "3. ドラブレス: 口から火が出せる",
        "4. マジホウキ: 飛べる、掃除もできる",
      ],
      answerBoxes: 5,
      solvedNote: "ドラブレス: 龍の息のような高熱火炎を前方へ噴射し、氷を急速に融解する。大量の蒸気が発生するため発射方向に注意。",
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
    title: "そびえ立つ山",
    tag: "山を越える手段",
    mission: "そびえ立つ山の壁があり、乗り越える事が出来ない。",
    reward: "タイムマシン",
    type: "console",
    correct: "タイムマシン",
    scene: "time",
    sceneCaption: "そびえ立つ山の壁があり、乗り越える事が出来ない。",
    briefing: "①〜④を解き、青・緑・黄の順に拾った6文字で山を越える手段を見つける。",
    hints: [
      "ヒント①「①は『お→じ→さ→ん』の順に文字を線で結ぶのじゃ。線の途中にある文字を、通った順に拾うんじゃぞ」",
      "ヒント②「②のTUE・SAT・THUは曜日じゃ。日本語の曜日を表す漢字に直し、同じ読み方の言葉を後ろにつけて比べるのじゃ」",
      "ヒント③「③は位置関係が大事じゃ。THISの下にある空欄と、WEEKの下にあるGEを、上と下で対応させて考えるのじゃぞ」",
      "ヒント④「④は球を投げた位置から放物線の頂点へ進み、そこから真下へ落ちる軌道をたどるのじゃ。球が通る文字を順につなげるんじゃぞ」",
      "ヒント⑤「①〜④の答えが出たら、各欄の色数字が示す文字を記入し、青→緑→黄の順に読むのじゃ」",
      "ヒント⑥「最後の答えは6文字。時差を無くすために、時を移動する装置の名前を入力するのじゃ」",
    ],
    textProblem: {
      title: "ステージ4",
      subtitle: "そびえ立つ山の壁があり、乗り越える事が出来ない",
      rule: "①〜④の謎を解き、色数字が示す文字を青→緑→黄の順に読む。",
      prompt: "山の壁を越えるために使う6文字の手段を見つける。",
      answerHint: "答えは6文字。時を移動する装置の名前。",
      answerBoxes: 6,
      solvedNote: "タイムマシン: 一時的に未来空間へ移動し、まだ習得していない呪文を1つ唱えられる。効果は現在異空間で発動し、同時に自分も現在異空間へ戻る。",
    },
  },
  {
    id: "boss",
    number: "05",
    title: "出口前のラスボス",
    tag: "呪文戦",
    mission: "現在異空間からの出口を発見したが、ラスボスが立ちはだかった。呪文を駆使して全ての攻撃に耐え抜き、ラスボスを破壊せよ。",
    type: "boss",
    scene: "boss",
    sceneCaption: "出口前にラスボスがいる。呪文は一度ずつしか使えない。",
    briefing: "石板の文字数と獣の動きをよく見るのじゃ。ここで使える呪文は1呪文につき1回までじゃぞ。",
    hints: [
      "ヒント①「使える呪文は1呪文につき1回まで。石板の文字数に合う呪文を選ぶのじゃ」",
      "ヒント②「獣の技をよく読むのじゃ。空中には届かぬ技もあれば、目が合わねば効かぬ技もあるぞ」",
    ],
    problems: [{ file: "stage05-problem-clean.webp", title: "ラスボス 原問題" }],
    sourceProblemImage: "stage05-problem-clean.webp",
  },
];

const puzzleTotal = stages.filter((stage) => !stage.isIntro).length;

// ラスボス戦: 原案の紙面どおり「石板(文字数固定) → ボスの行動」のタイムライン。
// 石板に正しい呪文をカタカナで刻むと次へ進む。
const bossBattle = [
  { slots: 2, answer: "バリ", after: "『一犬糸争を放つ』糸のように繊細で鋭い爪による弱攻撃" },
  { slots: 3, answer: "フユウ", after: "『二脚地動を放つ』両の前足により地面を叩き揺らす弱攻撃。空中の相手へは無効" },
  { slots: 4, answer: "ヘンガオ", after: "ラスボスは小幡の方へ向かった<br>『三石化線を放つ』3秒間、目が合うと石化する視線を送る" },
  { slots: 4, answer: "ツケモノ", after: "ラスボスは大技前の溜めをしていて動かない" },
  { slots: 6, answer: "ゴクロウサマ", after: "『百黙絶静を放つ』百発百中の即死攻撃。放たれれば全空間が消滅し沈黙する" },
  { slots: 3, answer: "カタメ", after: "『一犬糸争を放つ』糸のように繊細で鋭い爪による弱攻撃" },
  { slots: 6, answer: "タイムマシン", after: "『零式空間を放つ』空間から出る事を不可能にする念。現在異空間にいる者にのみ有効" },
  { slots: 10, answer: "バタフライエフェクト", after: "" },
];

const bossNewSpells = [
  { name: "バリ", effect: "瞬間的なバリアで、弱攻撃を無効化する！" },
  { name: "フユウ", effect: "ちょっとだけ空中に浮くことが出来る！" },
  { name: "オバダンス", effect: "次の呪文効果時間を2倍にする！" },
  { name: "カタメ", effect: "身体を硬化させ、弱攻撃を無効化する！" },
  { name: "アイス", effect: "つるっつるの氷を生成する！" },
  { name: "ヘンガオ", effect: "自分が白目をむき、相手と視線が合わなくなる！" },
  { name: "タメニタメル", effect: "次の攻撃威力が2倍になる！" },
  { name: "ガンリキ", effect: "相手に恐怖感を与え隙を作る！" },
  { name: "イノリ", effect: "命中率を下げる！" },
  { name: "イチゲキゼンリョクデ", effect: "仲間1人の命と引き換えに全力の一撃を放つ！" },
];

const bossLearnedSpells = [
  { name: "ツケモノ", effect: "謎の四角を1個生成できる！" },
  { name: "ゴクロウサマ", effect: "『　』内の色を消す事が出来る。内容の意味が通れば、それは現実となる！" },
  { name: "ドラブレス", effect: "炎でどんな氷も溶かす事ができる！" },
  {
    name: "タイムマシン",
    effect: "一時的に未来空間へ移動する！",
    explanation: "未来空間では、まだ習得していない呪文を1つ唱えられる。『カタカナ…効果！』の形式なら呪文とみなされ、未習得でも発動できる。効果は現在異空間で発動し、発動と同時に自分も現在異空間へ戻る。",
  },
];

function normalizeSpellEffectCopy(effect) {
  const copy = String(effect || "").trim().replace(/[。！!]+$/u, "");
  return copy ? `${copy}！` : "効果は不明！";
}

function renderBossSpellEntry(spell) {
  return `
    <article class="boss-spell-entry">
      <p class="boss-spell-summary"><strong>☆${spell.name}</strong><span class="boss-spell-separator" aria-hidden="true">…</span><span>${normalizeSpellEffectCopy(spell.effect)}</span></p>
      ${spell.explanation ? `<p class="boss-spell-explanation"><b>解説</b> ${spell.explanation}</p>` : ""}
    </article>
  `;
}

const explorationSpellEffects = {
  コイシコロ: "手のひらに収まる小石を1個生成する。固さと重さは普通の小石と同じ。",
  スナケムリ: "足元に小さな砂煙を起こし、数秒だけ周囲の視界を遮る。",
  ハコアケ: "鍵のかかっていない箱のふたを、触れずに静かに開ける。",
  ホコリハライ: "物に積もったほこりを払い、隠れた文字や模様を見えるようにする。",
  タナユラシ: "目の前の棚を短く揺らし、奥に挟まった物を手前へ落とす。",
  コオリミチ: "足元に細い氷の道を作る。平地では進みやすいが、急斜面では滑ってしまう。",
  イシコロリ: "小石を転がし、地面の傾きや暗い場所にある段差を確かめる。",
  クサムスビ: "近くの草を結び合わせ、短い目印や簡単なひもを作る。",
};

function getExplorationSpellEffect(name) {
  return explorationSpellEffects[name] || "探索で見つけた、小さな効果を持つ呪文。";
}

function getLearnedExplorationSpells(stageId) {
  const names = Array.isArray(state.fakeSpells?.[stageId]) ? state.fakeSpells[stageId] : [];
  return [...new Set(names)]
    .filter((name) => typeof name === "string" && name.trim())
    .map((name) => ({ name, effect: getExplorationSpellEffect(name) }));
}

function getBossPastSpells() {
  const learnedFakeNames = Object.values(state.fakeSpells || {})
    .flatMap((names) => (Array.isArray(names) ? names : []))
    .filter((name) => typeof name === "string" && name.trim());
  const knownNames = new Set(bossLearnedSpells.map((spell) => spell.name));
  const learnedFakes = [...new Set(learnedFakeNames)]
    .filter((name) => !knownNames.has(name))
    .map((name) => ({ name, effect: getExplorationSpellEffect(name) }));
  return [...bossLearnedSpells, ...learnedFakes];
}

function seededShuffle(values, seedText) {
  const shuffled = [...values];
  let seed = 2166136261;
  for (const char of seedText) {
    seed ^= char.charCodeAt(0);
    seed = Math.imul(seed, 16777619);
  }
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    seed += 0x6d2b79f5;
    let random = seed;
    random = Math.imul(random ^ (random >>> 15), random | 1);
    random ^= random + Math.imul(random ^ (random >>> 7), random | 61);
    const target = Math.floor((((random ^ (random >>> 14)) >>> 0) / 4294967296) * (index + 1));
    [shuffled[index], shuffled[target]] = [shuffled[target], shuffled[index]];
  }
  return shuffled;
}

function getBossTiles(index) {
  const step = bossBattle[index] || bossBattle[0];
  const pastSpells = getBossPastSpells();
  const displayedNames = [...pastSpells, ...bossNewSpells].map((spell) => spell.name);
  const required = [...new Set([...step.answer])];
  const pool = [...new Set(displayedNames.flatMap((name) => [...name]))].filter((char) => !required.includes(char));
  const seedText = `${index}:${displayedNames.join("|")}`;
  const selected = [...required, ...seededShuffle(pool, seedText)].slice(0, 30);
  return seededShuffle(selected, `${seedText}:layout`);
}

const spellRuleText =
  "呪文のルール: 呪文は石板にカタカナで記入し、どこに、どの様に使うかを示す。石板の数に合った文字数の呪文しか唱える事が出来ない。習得した呪文には☆マークが付き、以後使用可能となる。";
const spellActivationText = "問題を解くと呪文が現れるかも…<br>各ステージの呪文は空欄に文字を正しく打ち込むと発動";

const storeKey = "tanohamaEscapeStateV4";

const audioDirector = (() => {
  const preferenceKey = "tanohamaSoundMutedV1";
  const themes = {
    intro: { bpm: 66, wave: "sine", notes: [48, 55, 60, 55, 51, 58, 63, 58], bass: [36, 39], color: 0.024 },
    gate: { bpm: 76, wave: "triangle", notes: [50, 57, 62, 65, 57, 62, 69, 65], bass: [38, 41], color: 0.026 },
    path: { bpm: 82, wave: "sine", notes: [45, 52, 57, 60, 52, 59, 62, 57], bass: [33, 36], color: 0.023 },
    shop: { bpm: 72, wave: "triangle", notes: [52, 59, 64, 67, 55, 62, 67, 71], bass: [40, 43], color: 0.025 },
    time: { bpm: 70, wave: "sine", notes: [47, 54, 59, 63, 50, 57, 62, 66], bass: [35, 38], color: 0.026 },
    boss: { bpm: 94, wave: "sawtooth", notes: [42, 49, 54, 48, 42, 51, 56, 49], bass: [30, 31], color: 0.021 },
    clear: { bpm: 78, wave: "triangle", notes: [60, 64, 67, 72, 64, 67, 72, 76], bass: [48, 52], color: 0.03 },
  };
  let context = null;
  let masterGain = null;
  let musicGain = null;
  let sfxGain = null;
  let scheduler = null;
  let nextNoteTime = 0;
  let noteIndex = 0;
  let currentTheme = "intro";
  let muted = localStorage.getItem(preferenceKey) === "1";

  const midiToHz = (midi) => 440 * (2 ** ((midi - 69) / 12));

  function ensureContext() {
    if (context) return context;
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (!AudioContextClass) return null;
    context = new AudioContextClass();
    masterGain = context.createGain();
    musicGain = context.createGain();
    sfxGain = context.createGain();
    masterGain.gain.value = muted ? 0 : 0.78;
    musicGain.gain.value = 0.62;
    sfxGain.gain.value = 0.9;
    musicGain.connect(masterGain);
    sfxGain.connect(masterGain);
    masterGain.connect(context.destination);
    nextNoteTime = context.currentTime + 0.08;
    scheduler = window.setInterval(scheduleMusic, 120);
    return context;
  }

  async function unlock() {
    const ctx = ensureContext();
    if (!ctx) return false;
    if (ctx.state === "suspended") await ctx.resume();
    nextNoteTime = Math.max(nextNoteTime, ctx.currentTime + 0.04);
    return true;
  }

  function scheduleOscillator(destination, frequency, start, duration, gainValue, wave = "sine", detune = 0) {
    if (!context || !destination || muted) return;
    const oscillator = context.createOscillator();
    const envelope = context.createGain();
    oscillator.type = wave;
    oscillator.frequency.setValueAtTime(frequency, start);
    oscillator.detune.setValueAtTime(detune, start);
    envelope.gain.setValueAtTime(0.0001, start);
    envelope.gain.exponentialRampToValueAtTime(Math.max(0.0002, gainValue), start + Math.min(0.05, duration * 0.18));
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    oscillator.connect(envelope);
    envelope.connect(destination);
    oscillator.start(start);
    oscillator.stop(start + duration + 0.03);
  }

  function scheduleNoise(start, duration, gainValue, cutoff = 1100) {
    if (!context || !sfxGain || muted) return;
    const frameCount = Math.max(1, Math.floor(context.sampleRate * duration));
    const buffer = context.createBuffer(1, frameCount, context.sampleRate);
    const data = buffer.getChannelData(0);
    for (let index = 0; index < frameCount; index += 1) data[index] = Math.random() * 2 - 1;
    const source = context.createBufferSource();
    const filter = context.createBiquadFilter();
    const envelope = context.createGain();
    source.buffer = buffer;
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(cutoff, start);
    envelope.gain.setValueAtTime(gainValue, start);
    envelope.gain.exponentialRampToValueAtTime(0.0001, start + duration);
    source.connect(filter);
    filter.connect(envelope);
    envelope.connect(sfxGain);
    source.start(start);
  }

  function scheduleMusic() {
    if (!context || context.state !== "running" || muted) return;
    const theme = themes[currentTheme] || themes.intro;
    const beat = 60 / theme.bpm;
    while (nextNoteTime < context.currentTime + 0.72) {
      const midi = theme.notes[noteIndex % theme.notes.length];
      scheduleOscillator(musicGain, midiToHz(midi), nextNoteTime, beat * 0.82, theme.color, theme.wave);
      scheduleOscillator(musicGain, midiToHz(midi + 12), nextNoteTime + 0.015, beat * 0.66, theme.color * 0.26, "sine", 4);
      if (noteIndex % 4 === 0) {
        const bass = theme.bass[Math.floor(noteIndex / 4) % theme.bass.length];
        scheduleOscillator(musicGain, midiToHz(bass), nextNoteTime, beat * 2.8, theme.color * 0.72, currentTheme === "boss" ? "sawtooth" : "sine");
      }
      noteIndex += 1;
      nextNoteTime += beat;
    }
  }

  function setStage(stageId) {
    const nextTheme = themes[stageId] ? stageId : "intro";
    if (nextTheme === currentTheme) return;
    currentTheme = nextTheme;
    noteIndex = 0;
    if (context) nextNoteTime = context.currentTime + 0.1;
  }

  function playEffect(name) {
    if (!context || context.state !== "running" || muted) return;
    const now = context.currentTime + 0.01;
    const tone = (midi, delay, duration, gain, wave = "sine") => scheduleOscillator(sfxGain, midiToHz(midi), now + delay, duration, gain, wave);
    if (name === "click") {
      tone(76, 0, 0.055, 0.055, "triangle");
    } else if (name === "stage") {
      [60, 67, 72].forEach((midi, index) => tone(midi, index * 0.07, 0.32, 0.07, "triangle"));
    } else if (name === "select") {
      tone(69, 0, 0.09, 0.06, "sine");
      tone(76, 0.045, 0.12, 0.05, "sine");
    } else if (name === "success") {
      [60, 64, 67, 72].forEach((midi, index) => tone(midi, index * 0.11, 0.5, 0.09, "triangle"));
    } else if (name === "fail") {
      tone(43, 0, 0.34, 0.11, "sawtooth");
      tone(40, 0.16, 0.38, 0.09, "square");
    } else if (name === "spell") {
      [72, 76, 79, 84, 88].forEach((midi, index) => tone(midi, index * 0.065, 0.42, 0.065, "sine"));
    } else if (name === "rock") {
      scheduleNoise(now, 0.62, 0.17, 560);
      tone(31, 0.2, 0.65, 0.16, "sine");
    } else if (name === "erase") {
      scheduleNoise(now, 0.8, 0.055, 2400);
      [72, 69, 65, 60].forEach((midi, index) => tone(midi, index * 0.14, 0.36, 0.055, "sine"));
    } else if (name === "fire") {
      scheduleNoise(now, 1.25, 0.11, 1700);
      tone(40, 0, 1.18, 0.095, "sawtooth");
      tone(52, 0.18, 0.9, 0.065, "triangle");
    } else if (name === "time") {
      for (let index = 0; index < 9; index += 1) tone(55 + index * 2, index * 0.07, 0.4, 0.052, "sine");
      scheduleNoise(now + 0.18, 0.72, 0.04, 3200);
    } else if (name === "boss-intro") {
      scheduleNoise(now, 1.15, 0.1, 820);
      [35, 32, 29].forEach((midi, index) => tone(midi, index * 0.18, 0.72, 0.13, "sawtooth"));
      [54, 59, 63].forEach((midi, index) => tone(midi, 0.72 + index * 0.1, 0.46, 0.065, "triangle"));
    } else if (name === "boss-hit") {
      scheduleNoise(now, 0.38, 0.18, 720);
      tone(29, 0, 0.55, 0.18, "sawtooth");
    } else if (name === "boss-guard") {
      tone(48, 0, 0.25, 0.11, "square");
      [67, 72, 79].forEach((midi, index) => tone(midi, 0.08 + index * 0.06, 0.38, 0.07, "triangle"));
    } else if (name === "color-remove") {
      [76, 73, 69, 66].forEach((midi, index) => tone(midi, index * 0.18, 0.5, 0.07, "sine"));
      [60, 64, 67, 72].forEach((midi, index) => tone(midi, 0.9 + index * 0.1, 0.55, 0.08, "triangle"));
    } else if (name === "clear") {
      [60, 64, 67, 72, 76, 79, 84].forEach((midi, index) => tone(midi, index * 0.11, 0.75, 0.09, "triangle"));
    }
  }

  function setMuted(value) {
    muted = Boolean(value);
    localStorage.setItem(preferenceKey, muted ? "1" : "0");
    if (context && masterGain) {
      masterGain.gain.cancelScheduledValues(context.currentTime);
      masterGain.gain.setTargetAtTime(muted ? 0.0001 : 0.78, context.currentTime, 0.035);
      if (!muted) nextNoteTime = context.currentTime + 0.06;
    }
  }

  function toggle() {
    setMuted(!muted);
    if (!muted) playEffect("select");
    return !muted;
  }

  document.addEventListener("visibilitychange", () => {
    if (!context) return;
    if (document.hidden) context.suspend();
  });

  return { unlock, setStage, playEffect, toggle, isMuted: () => muted };
})();

// ステージ2 とちゅうメモ: ①〜④の各ステップで読み取った文字を書き留める空欄
const stage2MemoRows = 4;
const stage2MemoCols = 12;
const stage2MemoTiles = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", "○"];
const stage2MemoSpots = [
  { row: 0, col: 0, x: 6.3, y: 23.5 },
  { row: 0, col: 1, x: 12.2, y: 23.5 },
  { row: 0, col: 2, x: 18.1, y: 23.5 },
  { row: 0, col: 3, x: 24.2, y: 23.5 },
  { row: 0, col: 4, x: 30.9, y: 23.5 },
  { row: 0, col: 5, x: 36.7, y: 23.5 },
  { row: 0, col: 6, x: 55.2, y: 34.3 },
  { row: 0, col: 7, x: 47.6, y: 43.2 },
  { row: 0, col: 8, x: 42.8, y: 85.2 },
];

const stage2Board = {"upper":{"cols":9,"rows":4,"x":[33,114,189,264,338,413,488,563,638,713],"y":[124,196,269,341,413],"h":[[{"black":-2},{"black":-2},{"yellow":-2},{"black":-2},{"black":-2},{"blue":-2},{"blue":-2},{"blue":-2},{"yellow":-2}],[{"white":-1},{"blue":-1},{"yellow":-1},{"red":-1},{"white":-1},{"blue":-1},{"blue":-1},{"red":-2},{"yellow":-2}],[{"blue":-2},{"black":-2},{"red":-2},{"blue":-1},{"red":-2},{"red":-2},{"red":-2},{"red":-2},{"blue":-2}],[{"red":-1},{"red":-1},{"white":-1},{"yellow":-2},{"yellow":-2},{"yellow":-2},{"blue":-2},{"blue":-1},{"yellow":-2}],[{"black":-1},{"black":-1},{"blue":0},{"blue":0},{"black":-2},{"yellow":-1},{"white":-1},{"red":-2},{"blue":0}]],"v":[[{"blue":-7,"black":4},{"blue":-7,"black":4},{"blue":-7,"black":5},{"blue":-7,"black":5}],[{"blue":-2},{"yellow":-2},{"red":-2},{"red":-2}],[{"blue":-2},{"blue":-2},{"black":-1},{"black":-1}],[{"black":-3},{"black":-2},{"black":-2},{"black":-2}],[{"blue":-2},{"red":-2},{"blue":-1},{"blue":-1}],[{"black":-2},{"black":-1},{"black":-1},{"black":-1}],[{"blue":-2},{"blue":-2},{"yellow":-2},{"yellow":-2}],[{"blue":-2},{"red":-2},{"white":-1},{"white":-1}],[{"blue":-2},{"blue":-2},{"red":-2},{"red":-2}],[{"white":-1},{"yellow":0},{"white":-1},{"blue":0}]],"cells":[{"r":0,"c":0,"circle":true,"memo":0},{"r":0,"c":1,"circle":true,"memo":1},{"r":0,"c":2,"circle":true,"memo":2},{"r":0,"c":3,"circle":true,"memo":3},{"r":0,"c":4,"circle":true,"memo":4},{"r":0,"c":5,"circle":true,"memo":5},{"r":0,"c":6,"char":"K","color":"black"},{"r":0,"c":7,"char":"K","color":"black"},{"r":0,"c":8,"char":"K","color":"yellow"},{"r":1,"c":0,"char":"I","color":"white"},{"r":1,"c":1,"char":"O","color":"blue"},{"r":1,"c":2,"char":"I","color":"yellow"},{"r":1,"c":3,"char":"K","color":"red"},{"r":1,"c":4,"char":"I","color":"white"},{"r":1,"c":5,"char":"O","color":"blue"},{"r":1,"c":6,"char":"U","color":"black"},{"r":1,"c":7,"char":"O","color":"black"},{"r":1,"c":8,"circle":true,"memo":6},{"r":2,"c":0,"char":"R","color":"white"},{"r":2,"c":3,"char":"A","color":"red"},{"r":2,"c":4,"char":"R","color":"white"},{"r":2,"c":6,"char":"R","color":"black"},{"r":2,"c":7,"circle":true,"memo":7},{"r":3,"c":0,"char":"O","color":"white"},{"r":3,"c":4,"char":"O","color":"white"},{"r":3,"c":6,"char":"O","color":"black"}]},"lower":{"cols":10,"rows":2,"x":[33,114,190,264,339,414,488,563,638,714,789],"y":[486,559,631],"h":[[{"blue":-1},{"red":-1},{"blue":-2},{"red":1},{"black":-2},{"yellow":-1},{"blue":-2},{"red":-2},{"yellow":-2},{"black":-2}],[{"red":-2},{"red":-2},{"red":-2},{"red":-2},{"black":-2},{"blue":-1},{"yellow":-2},{"yellow":-2},{"white":-2},{"black":-3}],[{"black":-2},{"black":-2},{"yellow":-2},{"blue":-1},{"blue":-2},{"blue":-2},{"blue":-2},{"red":-2},{"red":-2},{"blue":-2}]],"v":[[{"blue":-7,"black":5},{"blue":-7,"black":5}],[{"red":-1},{"yellow":-2}],[{"black":-2},{"black":-2}],[{"red":-2},{"red":-2}],[{"black":-1},{"black":-1}],[{"black":-2},{"black":-2}],[{"yellow":-2},{"yellow":-1}],[{"red":-2},{"blue":-1}],[{"yellow":-2},{"red":-2}],[{"black":-2},{"black":-2}],[{"black":-2,"blue":7},{"black":-2}]],"cells":[{"r":0,"c":0,"char":"o","color":"white"},{"r":0,"c":1,"char":"I","color":"red"},{"r":0,"c":2,"char":"I","color":"blue"},{"r":0,"c":3,"char":"s","color":"black"},{"r":0,"c":4,"char":"I","color":"red"},{"r":0,"c":5,"char":"N","color":"blue"},{"r":0,"c":6,"char":"「I」","color":"red"},{"r":0,"c":7,"char":"o","color":"red"},{"r":0,"c":8,"char":"M","color":"black"},{"r":1,"c":0,"char":"N","color":"blue"},{"r":1,"c":1,"char":"I","color":"white"},{"r":1,"c":2,"char":"o","color":"blue"},{"r":1,"c":3,"char":"q","color":"red"},{"r":1,"c":4,"char":"o","color":"blue"},{"r":1,"c":5,"char":"N","color":"red"},{"r":1,"c":6,"circle":true,"memo":8}]}};

// 下段右端は黒い枠線だけを残し、重なっていた青線は表示しない。
// 「紺」を示す K・O・N は、黒の KURO と混同しない専用色で描く。
[
  [stage2Board.upper, 0, 7],
  [stage2Board.upper, 1, 7],
  [stage2Board.lower, 0, 5],
].forEach(([board, row, col]) => {
  const cell = board.cells.find((entry) => entry.r === row && entry.c === col);
  if (cell) cell.color = "navy";
});

stage2Board.lower.v[10] = [{ black: -2 }, { black: -2 }];

// 左端で黒い盤面線と重なっていた青線は表示しない。
stage2Board.upper.v[0] = stage2Board.upper.v[0].map(({ blue, ...line }) => line);
stage2Board.lower.v[0] = stage2Board.lower.v[0].map(({ blue, ...line }) => line);

// 下段先頭の赤文字は小文字のエル。隣の青い大文字 I と区別する。
const stage2LowerRedEl = stage2Board.lower.cells.find((cell) => cell.r === 0 && cell.c === 1);
if (stage2LowerRedEl) stage2LowerRedEl.char = "l";

function normalizeStage2Memo(value) {
  const rows = Array.isArray(value) ? value : [];
  return Array.from({ length: stage2MemoRows }, (_, r) => {
    const row = Array.isArray(rows[r]) ? rows[r] : [];
    return Array.from({ length: stage2MemoCols }, (_, c) => (typeof row[c] === "string" ? row[c] : ""));
  });
}

const stage2KanjiRevealAnswer = "SIKISINI";

function isStage2KanjiClueRevealed(value) {
  const memo = normalizeStage2Memo(value);
  return memo[0]
    .slice(0, stage2KanjiRevealAnswer.length)
    .join("")
    .toUpperCase() === stage2KanjiRevealAnswer;
}

function normalizeStage2Sketch(value) {
  const strokes = Array.isArray(value) ? value : [];
  return strokes
    .slice(-120)
    .map((stroke) => {
      if (!Array.isArray(stroke)) return [];
      return stroke
        .slice(-600)
        .map((point) => {
          const x = Number(point?.[0]);
          const y = Number(point?.[1]);
          if (!Number.isFinite(x) || !Number.isFinite(y)) return null;
          return [Math.min(Math.max(x, 0), 1), Math.min(Math.max(y, 0), 1)];
        })
        .filter(Boolean);
    })
    .filter((stroke) => stroke.length >= 2);
}

const stage4MemoShape = [[4, 2, 3], [3, 8, 8, 1], [1, 3, 3, 1, 1], [2, 3, 2, 2]];

const stage4ChoiceCandidates = [
  Array.from(new Set(Array.from("ろうかのどきじませ"))),
  Array.from(new Set(Array.from("もくそくきんすいかし"))),
  Array.from(new Set(Array.from("こんじょうらいせげ"))),
  Array.from(new Set(Array.from("あせかきみせさきひめますつきみまうえ"))),
];

function normalizeStage4Memo(value) {
  const source = value && typeof value === "object" ? value : {};
  const answers = Array.from({ length: 4 }, (_, index) =>
    typeof source.answers?.[index] === "string" ? source.answers[index].slice(0, 40) : "",
  );
  const cells = stage4MemoShape.map((groups, questionIndex) =>
    groups.map((length, groupIndex) =>
      Array.from({ length }, (_, cellIndex) => {
        const cell = source.cells?.[questionIndex]?.[groupIndex]?.[cellIndex];
        return typeof cell === "string" ? Array.from(cell)[0] || "" : "";
      }),
    ),
  );
  return { answers, cells };
}

function escapeAttribute(value) {
  return String(value || "").replace(/[&"'<>]/g, (character) => ({
    "&": "&amp;",
    '"': "&quot;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
  })[character]);
}

const stage2BoardPalette = { black: "#1a1a1a", red: "#d61e1e", blue: "#1a46a0", navy: "#496fae", yellow: "#f0c828", white: "#ffffff" };

// 原本PDFから機械抽出+目視確認した盤面をSVGで再構成する。
// 返り値: { svg, spots } — spots は白丸メモ/文字タップ用のHTMLオーバーレイ。
function renderStage2Board(memo, active, pickerOpen) {
  const VBW = 1230;
  const VBH = 680;
  const marks = state.stage2CellMarks && typeof state.stage2CellMarks === "object" ? state.stage2CellMarks : {};
  const pal = stage2BoardPalette;
  const textPal = { ...pal, blue: pal.navy, navy: pal.blue };
  const kanjiRevealed = isStage2KanjiClueRevealed(memo);
  const kanjiClueAsset = kanjiRevealed
    ? "./assets/stage02-kanji-revealed.webp?v=20260720-3"
    : "./assets/stage02-kanji-fragments.webp?v=20260720-3";
  let svg = "";
  let spots = "";

  const drawBlock = (key, b) => {
    for (let r = 0; r <= b.rows; r++) {
      (b.h[r] || []).forEach((seg, c) => {
        Object.entries(seg).forEach(([color, off]) => {
          const y = b.y[r] + off;
          svg += `<line x1="${b.x[c]}" y1="${y}" x2="${b.x[c + 1]}" y2="${y}" stroke="${pal[color]}" stroke-width="5"/>`;
        });
      });
    }
    for (let c = 0; c <= b.cols; c++) {
      (b.v[c] || []).forEach((seg, r) => {
        Object.entries(seg).forEach(([color, off]) => {
          const x = b.x[c] + off;
          svg += `<line x1="${x}" y1="${b.y[r]}" x2="${x}" y2="${b.y[r + 1]}" stroke="${pal[color]}" stroke-width="5"/>`;
        });
      });
    }
    b.cells.forEach((cell) => {
      const cx = (b.x[cell.c] + b.x[cell.c + 1]) / 2;
      const cy = (b.y[cell.r] + b.y[cell.r + 1]) / 2;
      const sx = ((cx / VBW) * 100).toFixed(2);
      const sy = ((cy / VBH) * 100).toFixed(2);
      if (cell.circle) {
        svg += `<circle cx="${cx}" cy="${cy}" r="24" fill="#fbfbfb"/>`;
        const char = memo[0]?.[cell.memo] || "";
        if (char) {
          svg += `<text x="${cx}" y="${cy + 2}" fill="#111" font-size="34" font-weight="900" text-anchor="middle" dominant-baseline="central" font-family="'Hiragino Sans','Segoe UI',sans-serif">${escapeAttribute(char)}</text>`;
        }
        const sel = pickerOpen && active.row === 0 && active.col === cell.memo;
        svg += `<circle class="stage2-memo-hit ${sel ? "is-selected" : ""}" cx="${cx}" cy="${cy}" r="32" fill="transparent" role="button" tabindex="0" data-memo="0:${cell.memo}" aria-label="白丸に書き込む"/>`;
      } else {
        const dimmed = Boolean(marks[`${key}:${cell.r}:${cell.c}`]);
        const isLowercaseEl = cell.char === "l";
        const cellFont = isLowercaseEl ? "Georgia, 'Times New Roman', serif" : "'Hiragino Sans','Segoe UI',sans-serif";
        svg += `<text x="${cx}" y="${cy + 2}" fill="${textPal[cell.color]}" font-size="${isLowercaseEl ? 56 : 52}" font-weight="${isLowercaseEl ? 700 : 900}" text-anchor="middle" dominant-baseline="central" opacity="${dimmed ? 0.14 : 1}" font-family="${cellFont}">${cell.char}</text>`;
        spots += `<button class="stage2-cell-toggle ${dimmed ? "is-dimmed" : ""}" style="--spot-x:${sx}%;--spot-y:${sy}%;" type="button" data-cell="${key}:${cell.r}:${cell.c}" aria-label="${cell.char} の表示を切り替える"></button>`;
      }
    });
  };

  // 紙とピンクの盤面
  svg += `<rect x="0" y="0" width="${VBW}" height="${VBH}" fill="#f6f2ea"/>`;
  svg += `<rect x="18" y="52" width="1194" height="616" fill="#cf9d9d"/>`;
  // 外枠は左辺だけを除き、上・右・下を原本どおり残す。
  svg += `<path d="M18 52 H1212 V668 H18" fill="none" stroke="#2a56a8" stroke-width="4"/>`;
  svg += `<text x="30" y="38" fill="#2a56a8" font-size="34" font-weight="900" font-family="'Hiragino Sans','Segoe UI',sans-serif">ステージ2</text>`;
  // 凡例: ●×10 しろ + 手順
  for (let i = 0; i < 10; i++) {
    svg += `<circle cx="${494 + i * 24}" cy="90" r="10.5" fill="#fbfbfb"/>`;
  }
  svg += `<text x="732" y="100" fill="#fbfbfb" font-size="26" font-weight="900">しろ</text>`;
  svg += `<text x="800" y="99" fill="#2a56a8" font-size="24" font-weight="900">①②③④<tspan fill="#d61e1e">の矢印</tspan>の順に解くのじゃ</text>`;
  drawBlock("u", stage2Board.upper);
  drawBlock("l", stage2Board.lower);
  // 矢印(白地+青縁)と番号
  const arrowShape = "M-70,-20 L14,-20 L14,-42 L72,0 L14,42 L14,20 L-70,20 Z";
  const arrows = [
    { x: 330, y: 452, deg: 90, n: "①" },
    { x: 482, y: 452, deg: -90, n: "②" },
    { x: 776, y: 252, deg: 0, n: "③" },
    { x: 788, y: 342, deg: 180, n: "④" },
    { x: 880, y: 468, deg: 145, n: "④" },
  ];
  arrows.forEach((a) => {
    svg += `<g transform="translate(${a.x},${a.y}) rotate(${a.deg})"><path d="${arrowShape}" fill="#fdfdfd" stroke="#2a56a8" stroke-width="6" stroke-linejoin="round"/></g>`;
    svg += `<text x="${a.x - (Math.abs(a.deg) === 90 ? 0 : 14)}" y="${a.y + 1}" fill="#2a56a8" font-size="40" font-weight="900" text-anchor="middle" dominant-baseline="central">${a.n}</text>`;
  });
  // ③④で使う右枠は、線と記号の位置関係も含めて問題そのもの。
  svg += `<rect x="868" y="170" width="238" height="238" fill="#cf9d9d" stroke="#2a56a8" stroke-width="6"/>`;
  svg += `<image class="stage2-kanji-clue ${kanjiRevealed ? "is-revealed" : ""}" href="${kanjiClueAsset}" x="868" y="170" width="238" height="238" preserveAspectRatio="xMidYMid meet"/>`;

  return {
    svg: `<svg class="stage2-board-svg" viewBox="0 0 ${VBW} ${VBH}" role="img" aria-label="ステージ2 盤面(原本を再構成)">${svg}</svg>`,
    spots,
  };
}

const elements = {
  game: document.querySelector("#game"),
  nav: document.querySelector("#stageNav"),
  sideNav: document.querySelector("#sideStageNav"),
  topTitle: document.querySelector("#topTitle"),
  stageCount: document.querySelector("#stageCount"),
  spellCount: document.querySelector("#spellCount"),
  reset: document.querySelector("#menuReset"),
  menuProblem: document.querySelector("#menuProblem"),
  menuSealBook: document.querySelector("#menuSealBook"),
  menuMagic: document.querySelector("#menuMagic"),
  menuHint: document.querySelector("#menuHint"),
  menuSound: document.querySelector("#menuSound"),
  dialog: document.querySelector("#docDialog"),
  docImage: document.querySelector("#docImage"),
  docTitle: document.querySelector("#docTitle"),
  closeDoc: document.querySelector("#closeDoc"),
  hintDialog: document.querySelector("#hintDialog"),
  hintTitle: document.querySelector("#hintTitle"),
  hintBody: document.querySelector("#hintBody"),
  closeHint: document.querySelector("#closeHint"),
};

const stage1KanaBoardRows = [
  ["\u2192", "\u305f", "\u3060", "\u3044", "\u307e", "\u3061", "\u3053", "\u304f", "\u3042", "\u304b", "\u3093", "\u304d", "\u3085", "\u3046", "\u3074", "\u3063", "\u3068", "\u304f", "\u308b", "\u307e", "\u308a", "\u307e", "\u3059"],
  ["\u30de", "\u30b1", "\u30aa", "\u30b7", "\u30df", "\u30a4", "\u30a4", "\u30e2", "\u30ce", "\u30a2", "\u30ac", "\u30de", "\u30c1", "\u30ac", "\u300c\u30c4\u300d", "\u30c6", "\u30a6", "\u30c4", "\u30af", "\u30b7", "\u30a4", "\u30d2", "\u30c8"],
];

const state = loadState();
forceGateProblemClosedOnStartup();
state.feedback = null;
closeStagePanelsOnEntry(stages[state.stageIndex] || stages[0]);
let gateSuccessTimers = [];

// 岩落下演出の画像を先読みして、発動時に確実に表示されるようにする
const fallingRockPreload = new Image();
fallingRockPreload.src = "./assets/stage01-rock-small.webp";

// ステージ2は正解時に扉あり／扉なし背景を瞬時に切り替えるため、先読みしておく。
const openPathPreload = new Image();
openPathPreload.src = "./assets/stage02-bg-open.webp";

function loadState() {
  try {
    const raw = localStorage.getItem(storeKey);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.feedback?.stageId === "shop" && saved.feedback.type === "success" && saved.feedback.phase === "casting") {
        saved.feedback.phase = "done";
        saved.cleared = Array.isArray(saved.cleared) ? saved.cleared : [];
        saved.spells = Array.isArray(saved.spells) ? saved.spells : [];
        if (!saved.cleared.includes("shop")) saved.cleared.push("shop");
        if (!saved.spells.includes("ドラブレス")) saved.spells.push("ドラブレス");
        saved.genericPanelMode = "clear";
      } else if (saved.feedback && saved.feedback.type === "success" && saved.feedback.phase !== "done" && saved.feedback.stageId !== "shop") {
        saved.feedback = null;
      }
      saved.cleared = Array.isArray(saved.cleared) ? saved.cleared : [];
      saved.spells = Array.isArray(saved.spells) ? saved.spells : [];
      if (saved.cleared.includes("time") || saved.spells.includes("キミタチナラ")) {
        saved.spells = saved.spells.filter((spell) => spell !== "キミタチナラ");
        if (saved.cleared.includes("time") && !saved.spells.includes("タイムマシン")) saved.spells.push("タイムマシン");
      }
      const savedBossInput = Array.isArray(saved.bossInput) ? saved.bossInput : [];
      const usedTsukemonoInFourthBattle = normalizeAnswer(savedBossInput[3] || "") === normalizeAnswer("ツケモノ");
      const savedTsukemonoActivated = usedTsukemonoInFourthBattle && Boolean(saved.bossTsukemonoActivated);
      return {
        stageIndex: Number.isInteger(saved.stageIndex) ? saved.stageIndex : 0,
        cleared: Array.isArray(saved.cleared) ? saved.cleared : [],
        spells: Array.isArray(saved.spells) ? saved.spells : [],
        bossInput: savedBossInput,
        slotInput: Array.isArray(saved.slotInput) ? saved.slotInput : [],
        activeSlot: Number.isInteger(saved.activeSlot) ? saved.activeSlot : 0,
        slotPickerOpen: Boolean(saved.slotPickerOpen),
        hiddenProblems: saved.hiddenProblems && typeof saved.hiddenProblems === "object" ? saved.hiddenProblems : {},
        hiddenSpells: saved.hiddenSpells && typeof saved.hiddenSpells === "object" ? saved.hiddenSpells : {},
        gatePanelMode: saved.gatePanelMode === "problem" ? "problem" : "spell",
        gateAnswerOpen: Boolean(saved.gateAnswerOpen),
        hintLevels: saved.hintLevels && typeof saved.hintLevels === "object" ? saved.hintLevels : {},
        kanaBoardActive: Array.isArray(saved.kanaBoardActive) ? saved.kanaBoardActive : [],
        learnedSpellViewerOpen: Boolean(saved.learnedSpellViewerOpen),
        learnedSpellStage: saved.learnedSpellStage || "gate",
        feedback: saved.feedback && typeof saved.feedback === "object" ? saved.feedback : null,
        isClear: Boolean(saved.isClear),
        problemFit: saved.problemFit !== false,
        pathPanelMode: ["problem", "spell", "closed", "clear"].includes(saved.pathPanelMode) ? saved.pathPanelMode : "spell",
        pathAnswerOpen: Boolean(saved.pathAnswerOpen),
        stage2Memo: normalizeStage2Memo(saved.stage2Memo),
        memoActive: saved.memoActive && typeof saved.memoActive === "object" ? saved.memoActive : { row: 0, col: 0 },
        memoPickerOpen: Boolean(saved.memoPickerOpen),
        stage2CellMarks: saved.stage2CellMarks && typeof saved.stage2CellMarks === "object" ? saved.stage2CellMarks : {},
        stage2Rotated: Boolean(saved.stage2Rotated),
        stage2SketchLines: normalizeStage2Sketch(saved.stage2SketchLines),
        stage2SketchIsolated: Boolean(saved.stage2SketchIsolated),
        stage2SketchExpanded: Boolean(saved.stage2SketchExpanded),
        stage4Memo: normalizeStage4Memo(saved.stage4Memo),
        stage4ActiveGroup: saved.stage4ActiveGroup && Number.isInteger(saved.stage4ActiveGroup.question) && Number.isInteger(saved.stage4ActiveGroup.group)
          ? saved.stage4ActiveGroup
          : { question: 0, group: 0 },
        stage4PickerOpen: Boolean(saved.stage4PickerOpen),
        stage4FinalActive: Array.isArray(saved.stage4FinalActive) ? saved.stage4FinalActive : [],
        timeAnswerOpen: Boolean(saved.timeAnswerOpen),
        timeSequencePhase: ["learned", "explanation", "choose", "cast-fail", "casting-time"].includes(saved.timeSequencePhase) ? saved.timeSequencePhase : "",
        introReturnPhase: ["message", "ready"].includes(saved.introReturnPhase) ? saved.introReturnPhase : "",
        shopPendingItem: typeof saved.shopPendingItem === "string" ? saved.shopPendingItem : "",
        shopLockOpen: Boolean(saved.shopLockOpen),
        shopLockPromptOpen: Boolean(saved.shopLockPromptOpen),
        shopLockCode: typeof saved.shopLockCode === "string" ? saved.shopLockCode.replace(/\D/g, "").slice(0, 2) : "",
        shopLockError: Boolean(saved.shopLockError),
        revealed: saved.revealed && typeof saved.revealed === "object" ? saved.revealed : {},
        sealBooks: saved.sealBooks && typeof saved.sealBooks === "object" ? saved.sealBooks : {},
        fakeSpells: saved.fakeSpells && typeof saved.fakeSpells === "object" ? saved.fakeSpells : {},
        genericPanelMode: ["closed", "problem", "clear"].includes(saved.genericPanelMode) ? saved.genericPanelMode : saved.genericPanelMode === "play" ? "problem" : "closed",
        bossPanelMode: ["closed", "problem", "play", "spells"].includes(saved.bossPanelMode) ? saved.bossPanelMode : "closed",
        bossIntroOpen: Boolean(saved.bossIntroOpen),
        bossAnswerOpen: Boolean(saved.bossAnswerOpen),
        bossSlotCreationPending: savedTsukemonoActivated && Boolean(saved.bossSlotCreationPending),
        bossTsukemonoActivated: savedTsukemonoActivated,
        bossSixthSlotCreated: savedTsukemonoActivated && Boolean(saved.bossSixthSlotCreated),
        bossColorRemoved: Boolean(saved.bossColorRemoved),
        clearPhase: ["victory", "portal", "home"].includes(saved.clearPhase) ? saved.clearPhase : "victory",
      };
    }
  } catch {
    localStorage.removeItem(storeKey);
  }
  return { stageIndex: 0, cleared: [], spells: [], bossInput: [], slotInput: [], activeSlot: 0, slotPickerOpen: false, hiddenProblems: {}, hiddenSpells: {}, gatePanelMode: "spell", gateAnswerOpen: false, hintLevels: {}, kanaBoardActive: [], learnedSpellViewerOpen: false, learnedSpellStage: "gate", feedback: null, isClear: false, problemFit: true, pathPanelMode: "spell", pathAnswerOpen: false, stage2Memo: normalizeStage2Memo(null), memoActive: { row: 0, col: 0 }, memoPickerOpen: false, stage2CellMarks: {}, stage2Rotated: false, stage2SketchLines: [], stage2SketchIsolated: false, stage2SketchExpanded: false, stage4Memo: normalizeStage4Memo(null), stage4ActiveGroup: { question: 0, group: 0 }, stage4PickerOpen: false, stage4FinalActive: [], timeAnswerOpen: false, timeSequencePhase: "", introReturnPhase: "", shopPendingItem: "", shopLockOpen: false, shopLockPromptOpen: false, shopLockCode: "", shopLockError: false, revealed: {}, sealBooks: {}, fakeSpells: {}, genericPanelMode: "closed", bossPanelMode: "closed", bossIntroOpen: false, bossAnswerOpen: false, bossSlotCreationPending: false, bossTsukemonoActivated: false, bossSixthSlotCreated: false, bossColorRemoved: false, clearPhase: "victory" };
}

function saveState() {
  const snapshot = JSON.parse(JSON.stringify(state));
  if (snapshot.feedback && snapshot.feedback.type === "success" && snapshot.feedback.phase !== "done" && snapshot.feedback.stageId !== "shop") {
    snapshot.feedback = null;
  }
  localStorage.setItem(storeKey, JSON.stringify(snapshot));
}

function forceGateProblemClosedOnStartup() {
  // 起動時とステージ入場直後は、背景だけを見せる。
  state.hiddenProblems = { ...(state.hiddenProblems || {}), gate: true };
  state.hiddenSpells = { ...(state.hiddenSpells || {}), gate: true };
  if (state.gatePanelMode === "problem") state.gatePanelMode = "spell";
}

function hideProblemOnStageEntry(stage) {
  if (stage?.id !== "gate") return;
  state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
  state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: true };
  state.gatePanelMode = "spell";
}

function closeStagePanelsOnEntry(stage) {
  state.slotPickerOpen = false;
  state.gateAnswerOpen = false;
  state.pathAnswerOpen = false;
  state.timeAnswerOpen = false;
  state.memoPickerOpen = false;
  state.stage4PickerOpen = false;
  state.learnedSpellViewerOpen = false;
  if (stage?.id === "gate") {
    state.hiddenProblems = { ...(state.hiddenProblems || {}), gate: true };
    state.hiddenSpells = { ...(state.hiddenSpells || {}), gate: true };
    state.gatePanelMode = "spell";
    return;
  }
  state.hiddenProblems = { ...(state.hiddenProblems || {}), gate: true };
  state.hiddenSpells = { ...(state.hiddenSpells || {}), gate: true };
  state.gatePanelMode = "spell";
  state.genericPanelMode = "closed";
  state.bossPanelMode = "closed";
  state.bossIntroOpen = false;
  state.bossAnswerOpen = false;
  state.bossSlotCreationPending = false;
  state.bossTsukemonoActivated = false;
  state.bossSixthSlotCreated = false;
  if (stage?.id === "path") {
    state.pathPanelMode = "closed";
  }
  // 入場時は背景だけ見せる(未クリアの本編ステージのみ)
  if (stage && stage.id !== "gate" && stage.id !== "intro" && !isStageCleared(stage.id)) {
    state.revealed = { ...(state.revealed || {}), [stage.id]: false };
  }
}

function isStageRevealed(stage) {
  if (!stage || stage.id === "gate" || stage.id === "intro") return true;
  if (isStageCleared(stage.id)) return true;
  return state.revealed?.[stage.id] === true;
}

function renderStageIntro(stage) {
  elements.game.innerHTML = `
    <section class="stage-panel stage-reveal-gate" aria-label="${stage.number} ${stage.title}">
      ${renderScene(stage)}
      <div class="stage-reveal-overlay">
        <div class="stage-reveal-copy">
          <span class="stage-reveal-num">STAGE ${stage.number}</span>
          <h2 class="stage-reveal-title">${stage.title}</h2>
        </div>
        <button class="primary-button stage-reveal-start" id="revealStage" type="button">はじめる</button>
      </div>
    </section>
  `;
  wireProblems();
  document.querySelector("#revealStage")?.addEventListener("click", () => {
    state.revealed = { ...(state.revealed || {}), [stage.id]: true };
    render();
  });
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

function clearGateSuccessTimers() {
  gateSuccessTimers.forEach((timer) => window.clearTimeout(timer));
  gateSuccessTimers = [];
}

function closeInfoDialogs() {
  if (elements.dialog?.open) elements.dialog.close();
  if (elements.hintDialog?.open) elements.hintDialog.close();
}

function getUnlockedStageIndex() {
  return Math.min(stages.length - 1, Math.max(0, state.cleared.length));
}

function canOpenStage(index) {
  return index <= getUnlockedStageIndex();
}

function openStage(index) {
  if (!canOpenStage(index)) return false;
  closeInfoDialogs();
  const stage = stages[index] || stages[0];
  state.isClear = false;
  state.stageIndex = index;
  state.feedback = null;
  closeStagePanelsOnEntry(stage);
  resetStageInput();
  render();
  return true;
}

function resetStageInput() {
  state.slotInput = [];
  state.activeSlot = 0;
  state.slotPickerOpen = false;
  state.shopPendingItem = "";
}

let lastStageKey = null;

function updateSoundControl() {
  if (!elements.menuSound) return;
  const enabled = !audioDirector.isMuted();
  const status = elements.menuSound.querySelector("small");
  if (status) status.textContent = enabled ? "ON" : "OFF";
  elements.menuSound.classList.toggle("is-muted", !enabled);
  elements.menuSound.setAttribute("aria-pressed", String(enabled));
  elements.menuSound.setAttribute("aria-label", enabled ? "BGMと効果音をオフにする" : "BGMと効果音をオンにする");
}

// 直後の再描画で1回だけ再生する演出用クラス付与
function popOnce(selector, className = "slot-pop") {
  requestAnimationFrame(() => document.querySelector(selector)?.classList.add(className));
}

// 成功時の金色バースト(粒+リング)を一度だけ差し込む
function burstOnce(selector) {
  requestAnimationFrame(() => {
    const host = document.querySelector(selector);
    if (!host) return;
    const burst = document.createElement("div");
    burst.className = "spell-burst";
    burst.setAttribute("aria-hidden", "true");
    host.appendChild(burst);
    window.setTimeout(() => burst.remove(), 1000);
  });
}

function render() {
  if (!state.isClear) {
    const maxOpen = getUnlockedStageIndex();
    if (state.stageIndex > maxOpen) {
      state.stageIndex = maxOpen;
      resetStageInput();
    }
  }
  const stage = stages[state.stageIndex] || stages[0];
  audioDirector.setStage(state.isClear ? "clear" : stage.id);
  document.body.classList.toggle("stage-one-mode", !state.isClear && stage.id === "gate");
  document.body.classList.toggle("stage-intro-mode", !state.isClear && stage.id === "intro");
  document.body.classList.toggle("stage-path-mode", !state.isClear && stage.id === "path");
  document.body.classList.toggle("late-stage-mode", !state.isClear && ["shop", "time", "boss"].includes(stage.id));
  document.body.classList.toggle("game-clear-mode", state.isClear);
  elements.topTitle.textContent = state.isClear
    ? "異空間からの脱出 CLEAR"
    : `異空間からの脱出 ${stage.number} / ${stage.title}`;
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
  } else if (stage.id === "path") {
    renderPathStage(stage);
  } else {
    renderStage(stage);
  }
  const stageKey = state.isClear ? "clear" : `stage:${state.stageIndex}`;
  if (stageKey !== lastStageKey) {
    elements.game.firstElementChild?.classList.add("stage-enter");
    audioDirector.playEffect(state.isClear ? "clear" : "stage");
    lastStageKey = stageKey;
  }
  updateSoundControl();
  saveState();
}

function renderIntro(stage) {
  const returnedFromTimeMachine = state.introReturnPhase === "message";
  elements.game.innerHTML = `
    <section class="intro-stage intro-image-stage" aria-label="異世界へ！？">
      <img class="intro-opening-image" src="./assets/intro-current-isekai.webp" alt="現在異空間からの脱出">
      <button class="primary-button intro-start-button ${returnedFromTimeMachine ? "is-time-return-message" : ""}" id="introStartButton" type="button">${returnedFromTimeMachine ? "あれ？崖を越えられない。なぜ「ここ」に戻ったんだ？" : "つぎへ"}</button>
    </section>
  `;
  document.querySelector("#introStartButton")?.addEventListener("click", () => {
    closeInfoDialogs();
    if (state.introReturnPhase === "message") {
      state.introReturnPhase = "ready";
      render();
      return;
    }
    addUnique(state.cleared, stage.id);
    state.stageIndex = 1;
    state.feedback = null;
    resetStageInput();
    closeStagePanelsOnEntry(stages[state.stageIndex]);
    render();
  });
}

function renderPathStage(stage) {
  const done = isStageCleared(stage.id);
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const successPhase = feedback?.type === "success" ? feedback.phase : "";
  const casting = feedback?.type === "success" && feedback.phase === "casting";
  const successPrompt = successPhase === "learned" || successPhase === "confirm";
  const pathOpen = done && !casting;
  const panelClosed = state.pathPanelMode === "closed";
  const problemMode = state.pathPanelMode === "problem";
  const clearMode = done && state.pathPanelMode === "clear";
  elements.game.innerHTML = `
    <section class="stage-panel premium-stage path-stage-background-only ${pathOpen ? "is-path-open is-solved" : ""} ${casting ? "is-path-casting" : ""} ${feedback?.type === "fail" ? "is-fail" : ""}" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world">
        <img class="stage-bg-art" src="${pathOpen ? "./assets/stage02-bg-open.webp" : "./assets/stage02-bg.webp"}" alt="${pathOpen ? "扉が消えて通れるようになった古い石造りの通路" : `${stage.number} ${stage.title}`}" loading="eager">
        <div class="art-vignette"></div>
        <div class="path-stage-title ${casting ? "is-erasing" : ""}" aria-label="${pathOpen ? "扉のない通路" : "扉のあかない通路"}">
          ${pathOpen ? "『扉のない通路』" : `『扉の<span class="path-red-word">あか</span>ない通路』`}
        </div>
      </div>
      ${casting ? renderPathCastEffect(stage) : successPrompt ? renderPathSuccessStep(stage, successPhase) : clearMode ? renderPathStageClear(stage) : panelClosed ? "" : problemMode ? renderPathProblemCard(stage) : ""}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}
    </section>
  `;
  if (problemMode) {
    wirePathProblem(stage);
    wirePathStage(stage, done);
  } else if (successPrompt) {
    wirePathSuccessStep(stage);
  } else if (clearMode) {
    wirePathStage(stage, done);
  } else if (state.learnedSpellViewerOpen) {
    wirePathStage(stage, done);
  }
}

function renderPathProblemCard(stage) {
  const memo = normalizeStage2Memo(state.stage2Memo);
  const kanjiRevealed = isStage2KanjiClueRevealed(memo);
  const active = state.memoActive && Number.isInteger(state.memoActive.row) && Number.isInteger(state.memoActive.col)
    ? { row: Math.min(Math.max(state.memoActive.row, 0), stage2MemoRows - 1), col: Math.min(Math.max(state.memoActive.col, 0), stage2MemoCols - 1) }
    : { row: 0, col: 0 };
  const pickerOpen = state.memoPickerOpen === true;
  const answerOpen = state.pathAnswerOpen === true;
  const sketchExpanded = state.stage2SketchExpanded === true;
  const hasSketch = normalizeStage2Sketch(state.stage2SketchLines).length > 0;
  const sketchPad = (expanded = false) => `
    <div class="stage2-sketch-pad ${expanded ? "is-expanded" : ""} ${state.stage2SketchIsolated ? "is-isolated" : ""} ${kanjiRevealed ? "is-kanji-revealed" : ""}" id="stage2SketchPad" data-testid="stage2-sketch-pad">
      <canvas id="stage2SketchCanvas" width="768" height="768" aria-label="指またはマウスで赤い線を描く。短くタップすると背景表示を切り替える"></canvas>
    </div>`;
  return `
    <section class="spell-device path-spell-device path-problem-card ${answerOpen ? "is-answer-open" : ""} ${sketchExpanded ? "is-sketch-expanded" : ""}" aria-label="問題とメモ">
      <div class="path-device-head">
        <span class="path-device-title">問題とメモ</span>
        <div class="path-device-actions stage2-board-controls">
          <button class="secondary-button ${state.stage2Rotated ? "is-on" : ""}" id="rotateBoard" type="button" aria-pressed="${state.stage2Rotated}">⟳ 回転</button>
          <div class="stage2-drawing-actions">
            <button class="secondary-button" id="clearStage2Sketch" type="button" ${hasSketch ? "" : "disabled"}>消去</button>
            <button class="secondary-button ${sketchExpanded ? "is-on" : ""}" id="toggleStage2SketchZoom" type="button" aria-pressed="${sketchExpanded}">${sketchExpanded ? "縮小" : "拡大"}</button>
          </div>
        </div>
      </div>
      ${sketchExpanded
        ? `<div class="stage2-sketch-expanded-view">${sketchPad(true)}</div>`
        : `<div class="stage2-board-viewport">
            <div class="path-problem-image stage2-inline-memo stage2-board-wrap ${state.stage2Rotated ? "is-rotated" : ""}">
              ${(() => {
                const board = renderStage2Board(memo, active, pickerOpen);
                return `<div class="stage2-board-coordinate-layer">${board.svg}<div class="stage2-memo-spots" aria-label="盤面への書き込み">${board.spots}</div>${sketchPad()}</div>`;
              })()}
            </div>
          </div>`}
      <div class="memo-board memo-board-inline-only" aria-label="画像内メモ候補">
        ${pickerOpen
          ? `
            <div class="slot-choice-popover memo-picker" aria-label="メモの候補">
              <div class="slot-choice-head">
                <span>白丸 ${active.col + 1}</span>
                <div class="memo-picker-actions">
                  <button class="slot-choice-clear" id="clearMemoCell" type="button">空にする</button>
                  <button class="slot-choice-clear" id="closeMemoPicker" type="button">閉じる</button>
                </div>
              </div>
              <div class="slot-choice-grid memo-picker-grid">
                ${stage2MemoTiles.map((tile) => `<button class="slot-choice-button" type="button" data-memo-tile="${tile}">${tile}</button>`).join("")}
              </div>
            </div>
          `
          : ""}
      </div>
      <div class="problem-answer-launcher stage2-problem-footer">
        <p class="stage2-board-hint">白丸をタップして文字を書き込む</p>
        <button class="problem-answer-toggle" id="pathAnswerToggle" type="button" aria-expanded="${answerOpen}">${answerOpen ? "解答欄を閉じる" : "解答欄を開く"}</button>
      </div>
      ${answerOpen ? renderPathAnswerControls(stage) : ""}
    </section>
  `;
}

function renderPathAnswerControls(stage) {
  const done = isStageCleared(stage.id);
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const selected = done
    ? [...stage.correct].slice(0, stage.slots)
    : Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
  const pickerOpen = !done && state.slotPickerOpen === true;
  return `
    <section class="path-problem-answer" aria-label="問題の回答">
      <div class="path-problem-answer-head">
        <strong>回答</strong>
        <span>石板 ${stage.slots}文字</span>
      </div>
      <div class="device-main-row">
        <div class="premium-slot-row magic-slots">
          ${Array.from({ length: stage.slots })
            .map((_, i) => `<button class="premium-slot ${!done && i === activeSlot ? "is-selected" : ""}" type="button" data-slot="${i}" aria-pressed="${!done && i === activeSlot}" ${done ? "disabled" : ""}>${selected[i] || ""}</button>`)
            .join("")}
        </div>
        <button class="primary-button cast-button" id="activateStage" type="button" ${done ? "disabled" : ""}>${done ? "習得済み" : "呪文を唱える"}</button>
      </div>
      ${pickerOpen ? renderSlotPicker(stage, activeSlot) : ""}
      ${feedback?.type === "fail" ? `<p class="result-message is-fail">${stage.failMessage}</p>` : ""}
    </section>
  `;
}

function paintStage2Sketch(canvas, strokes) {
  const context = canvas?.getContext("2d");
  if (!context) return;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.strokeStyle = "#e01818";
  context.lineWidth = 11;
  context.lineCap = "round";
  context.lineJoin = "round";
  strokes.forEach((stroke) => {
    if (!Array.isArray(stroke) || stroke.length < 2) return;
    context.beginPath();
    stroke.forEach(([x, y], index) => {
      const px = x * canvas.width;
      const py = y * canvas.height;
      if (index === 0) context.moveTo(px, py);
      else context.lineTo(px, py);
    });
    context.stroke();
  });
}

function wireStage2Sketch() {
  const pad = document.querySelector("#stage2SketchPad");
  const canvas = document.querySelector("#stage2SketchCanvas");
  if (!pad || !canvas) return;

  let strokes = normalizeStage2Sketch(state.stage2SketchLines);
  let activeStroke = null;
  paintStage2Sketch(canvas, strokes);

  const pointFromEvent = (event) => {
    const bounds = canvas.getBoundingClientRect();
    let x = bounds.width ? (event.clientX - bounds.left) / bounds.width : 0;
    let y = bounds.height ? (event.clientY - bounds.top) / bounds.height : 0;
    if (state.stage2Rotated && !pad.classList.contains("is-expanded")) {
      x = 1 - x;
      y = 1 - y;
    }
    return [Math.min(Math.max(x, 0), 1), Math.min(Math.max(y, 0), 1)];
  };

  const finishStroke = (event, cancelled = false) => {
    if (!activeStroke || event.pointerId !== activeStroke.pointerId) return;
    if (canvas.hasPointerCapture?.(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
    if (activeStroke.moved) {
      const point = pointFromEvent(event);
      activeStroke.points.push(point);
      strokes = normalizeStage2Sketch([...strokes, activeStroke.points]);
      state.stage2SketchLines = strokes;
      paintStage2Sketch(canvas, strokes);
      saveState();
    } else if (!cancelled) {
      state.stage2SketchIsolated = !state.stage2SketchIsolated;
      pad.classList.toggle("is-isolated", state.stage2SketchIsolated);
      saveState();
    }
    activeStroke = null;
  };

  canvas.addEventListener("pointerdown", (event) => {
    if (event.button !== 0) return;
    event.preventDefault();
    canvas.setPointerCapture?.(event.pointerId);
    activeStroke = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      moved: false,
      points: [pointFromEvent(event)],
    };
  });
  canvas.addEventListener("pointermove", (event) => {
    if (!activeStroke || event.pointerId !== activeStroke.pointerId) return;
    const distance = Math.hypot(event.clientX - activeStroke.startX, event.clientY - activeStroke.startY);
    if (!activeStroke.moved && distance < 4) return;
    event.preventDefault();
    activeStroke.moved = true;
    activeStroke.points.push(pointFromEvent(event));
    paintStage2Sketch(canvas, [...strokes, activeStroke.points]);
  });
  canvas.addEventListener("pointerup", (event) => finishStroke(event));
  canvas.addEventListener("pointercancel", (event) => finishStroke(event, true));
}

function wirePathProblem(stage) {
  wireProblems();
  wireStage2Sketch();
  document.querySelector("#rotateBoard")?.addEventListener("click", () => {
    state.stage2Rotated = !state.stage2Rotated;
    render();
  });
  document.querySelector("#clearStage2Sketch")?.addEventListener("click", () => {
    state.stage2SketchLines = [];
    saveState();
    render();
  });
  document.querySelector("#toggleStage2SketchZoom")?.addEventListener("click", () => {
    state.stage2SketchExpanded = !state.stage2SketchExpanded;
    if (state.stage2SketchExpanded) state.pathAnswerOpen = false;
    state.memoPickerOpen = false;
    saveState();
    render();
  });
  document.querySelectorAll("[data-memo]").forEach((button) => {
    button.addEventListener("click", () => {
      const [row, col] = (button.dataset.memo || "0:0").split(":").map(Number);
      state.memoActive = { row, col };
      state.memoPickerOpen = true;
      render();
      requestAnimationFrame(() => document.querySelector(".memo-picker")?.scrollIntoView({ block: "nearest" }));
    });
  });
  document.querySelectorAll("[data-cell]").forEach((button) => {
    button.addEventListener("click", () => {
      const key = button.dataset.cell;
      if (!key) return;
      const marks = { ...(state.stage2CellMarks && typeof state.stage2CellMarks === "object" ? state.stage2CellMarks : {}) };
      if (marks[key]) {
        delete marks[key];
      } else {
        marks[key] = 1;
      }
      state.stage2CellMarks = marks;
      render();
    });
  });
  document.querySelectorAll("[data-memo-tile]").forEach((button) => {
    button.addEventListener("click", () => {
      const memo = normalizeStage2Memo(state.stage2Memo);
      const wasKanjiRevealed = isStage2KanjiClueRevealed(memo);
      const { row, col } = state.memoActive;
      memo[row][col] = button.dataset.memoTile || "";
      state.stage2Memo = memo;
      const kanjiRevealed = isStage2KanjiClueRevealed(memo);
      state.memoActive = { row, col: Math.min(col + 1, stage2MemoCols - 1) };
      state.memoPickerOpen = false;
      render();
      popOnce(`[data-memo="${row}:${col}"]`);
      if (!wasKanjiRevealed && kanjiRevealed) {
        audioDirector.playEffect("success");
        popOnce(".stage2-kanji-clue", "stage2-kanji-reveal");
        popOnce("#stage2SketchPad", "stage2-kanji-reveal");
      }
    });
  });
  document.querySelector("#clearMemoCell")?.addEventListener("click", () => {
    const memo = normalizeStage2Memo(state.stage2Memo);
    const { row, col } = state.memoActive;
    memo[row][col] = "";
    state.stage2Memo = memo;
    render();
  });
  document.querySelector("#closeMemoPicker")?.addEventListener("click", () => {
    state.memoPickerOpen = false;
    render();
  });
}

function wirePathStage(stage, done) {
  wireProblems();
  document.querySelector("#pathAnswerToggle")?.addEventListener("click", () => {
    state.pathAnswerOpen = !state.pathAnswerOpen;
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#pathToProblem")?.addEventListener("click", () => {
    state.pathPanelMode = "problem";
    state.slotPickerOpen = false;
    render();
  });
  document.querySelector("#toggleLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = !state.learnedSpellViewerOpen;
    render();
  });
  document.querySelector("#closeLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = false;
    render();
  });
  document.querySelectorAll("[data-learned-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.learnedSpellStage = button.dataset.learnedStage || "gate";
      render();
    });
  });
  if (!done && state.slotPickerOpen) {
    requestAnimationFrame(() => document.querySelector(".slot-choice-popover")?.scrollIntoView({ block: "nearest" }));
  }
  document.querySelector("#nextButton")?.addEventListener("click", () => {
    state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
    closeStagePanelsOnEntry(stages[state.stageIndex]);
    state.feedback = null;
    resetStageInput();
    render();
  });
  if (done) return;
  document.querySelectorAll(".premium-slot").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSlot = Number(button.dataset.slot);
      state.slotPickerOpen = true;
      state.feedback = null;
      render();
    });
  });
  document.querySelectorAll(".slot-choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
      state.slotInput = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
      state.slotInput[slot] = button.dataset.tile;
      state.activeSlot = Math.min(slot + 1, stage.slots - 1);
      state.slotPickerOpen = false;
      state.feedback = null;
      render();
      popOnce(`.premium-slot[data-slot="${slot}"]`);
    });
  });
  document.querySelector("#clearActiveSlot")?.addEventListener("click", () => {
    const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
    state.slotInput = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
    state.slotInput[slot] = "";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#activateStage")?.addEventListener("click", () => {
    const answer = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "").join("");
    state.slotPickerOpen = false;
    if (normalizeAnswer(answer) !== normalizeAnswer(stage.correct)) {
      state.feedback = { stageId: stage.id, type: "fail" };
      audioDirector.playEffect("fail");
      render();
      return;
    }
    addUnique(state.spells, stage.reward);
    state.feedback = { stageId: stage.id, type: "success", phase: "learned" };
    state.pathPanelMode = "closed";
    audioDirector.playEffect("success");
    resetStageInput();
    render();
    burstOnce(".path-sequence-card");
  });
}

function renderNav() {
  elements.nav.innerHTML = "";
  elements.sideNav.innerHTML = "";
  stages.forEach((stage, index) => {
    const unlocked = canOpenStage(index) || isStageCleared(stage.id);
    const locked = !unlocked;

    const button = document.createElement("button");
    button.className = "stage-dot";
    if (index === state.stageIndex) button.classList.add("is-current");
    if (isStageCleared(stage.id)) button.classList.add("is-done");
    if (locked) button.classList.add("is-locked");
    button.type = "button";
    button.textContent = stage.number;
    button.disabled = locked;
    button.title = locked ? "前の問題を解くと開けます" : "";
    button.addEventListener("click", () => openStage(index));
    elements.nav.appendChild(button);

    const shortcut = document.createElement("button");
    shortcut.className = "side-menu-button side-stage-button";
    if (index === state.stageIndex && !state.isClear) shortcut.classList.add("is-current");
    if (isStageCleared(stage.id)) shortcut.classList.add("is-done");
    if (locked) shortcut.classList.add("is-locked");
    shortcut.type = "button";
    shortcut.disabled = locked;
    shortcut.title = locked ? "前の問題を解くと開けます" : "";
    const menuLabel = sideStageLabel(stage);
    const menuNumber = document.createElement("span");
    menuNumber.className = "side-stage-number";
    menuNumber.textContent = menuLabel.number;
    const menuTitle = document.createElement("span");
    menuTitle.className = "side-stage-title";
    menuTitle.textContent = menuLabel.title;
    shortcut.append(menuNumber, menuTitle);
    shortcut.addEventListener("click", () => openStage(index));
    elements.sideNav.appendChild(shortcut);
  });
}

function sideStageLabel(stage) {
  const labels = {
    intro: { number: "00", title: "異世界へ！？" },
    gate: { number: "01", title: "崩れた足場" },
    path: { number: "02", title: "開かずの間" },
    shop: { number: "03", title: "凍った足場" },
    time: { number: "04", title: "そびえ立つ山" },
    boss: { number: "05", title: "出口前" },
  };
  return labels[stage.id] || { number: stage.number, title: stage.title };
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
      ${stage.id === "path" ? corridorScene(stage) : stage.scene === "corridor" ? corridorScene(done) : ""}
      ${stage.scene === "ice" ? iceScene() : ""}
      ${stage.scene === "time" ? timeScene() : ""}
      ${stage.scene === "boss" ? bossScene() : ""}
    </div>
  `;
}

function renderProblems(stage, done = false) {
  if (stage.id === "shop" || stage.id === "time") {
    return `
      <section class="problem-section sheet-problem">
        <div class="section-head">
          <strong>問題</strong>
          ${stage.sourceProblemImage ? `<button class="text-button sheet-source-button" type="button" data-problem="${stage.sourceProblemImage}" data-title="${stage.number} ${stage.title} 原本">原本を見る</button>` : ""}
        </div>
        ${stage.id === "shop" ? renderStage3Sheet() : renderStage4Sheet()}
      </section>
    `;
  }
  if (stage.id === "path" && stage.textProblem) {
    const problem = stage.textProblem;
    return `
      <section class="problem-section text-problem stage-two-text-problem">
        <div class="section-head">
          <strong>問題文</strong>
          <span>画像は使わない</span>
        </div>
        <article class="problem-paper">
          <h3>${problem.title}</h3>
          <p class="problem-subtitle">${problem.subtitle}</p>
          <p class="problem-rule">${problem.rule}</p>
          <p class="problem-prompt">${problem.prompt}</p>
          ${problem.answerHint ? `<p class="problem-hint">${problem.answerHint}</p>` : ""}
          ${problem.answerBoxes ? `<div class="problem-blanks">${Array.from({ length: problem.answerBoxes }).map(() => `<span></span>`).join("")}</div>` : ""}
          ${done && problem.solvedNote ? `<p class="spell-note">${problem.solvedNote}</p>` : ""}
        </article>
      </section>
    `;
  }
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
  if (stage.id === "path") return "";
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

function renderSpellReference(stage) {
  if (stage.id !== "gate") return "";
  return `
    <section class="spell-reference-card" aria-label="ステージ1 呪文欄">
      <img src="./assets/stage01-spell-reference.png" alt="ステージ1 呪文欄">
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

function corridorScene(stage) {
  if (stage?.id === "path") {
    return `
      <div class="stage-two-background-only" aria-hidden="true">
        <img src="./assets/stage02-bg.webp" alt="" loading="eager" />
      </div>
    `;
  }
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
    <div class="mountain-wall-art time-scene-mountain" role="img" aria-label="そびえ立つ山の壁と出口">
      <div class="mountain-wall-ridge"></div>
      <div class="mountain-wall-path"></div>
      <div class="mountain-wall-exit">出口</div>
      <div class="mountain-wall-figure"></div>
    </div>
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
  const rockDropping = feedback?.type === "success" && feedback.phase === "rock";
  const successAnimating = feedback?.type === "success" && feedback.phase !== "done";
  const problemHidden = state.hiddenProblems?.[stage.id] === true;
  const spellHidden = state.hiddenSpells?.[stage.id] === true;
  const backgroundOnly = problemHidden && spellHidden;
  const gatePanelMode = state.gatePanelMode === "problem" ? "problem" : "spell";
  const answerOpen = state.gateAnswerOpen === true;
  elements.game.innerHTML = `
    <section class="stage-panel premium-stage stage-one-redesign ${done ? "is-solved" : ""} ${rockDropping ? "is-rock-drop" : ""} ${feedback?.type === "fail" ? "is-fail" : ""}">
      ${gatePlayableVisual(stage, done, feedback, backgroundOnly)}

      ${successAnimating || gatePanelMode !== "problem" ? "" : `<section class="spell-device ${done ? "is-clear-compact" : ""} ${state.slotPickerOpen ? "has-picker" : ""} ${answerOpen ? "is-answer-open" : ""} is-problem-mode" aria-label="問題と回答">
        <button class="spell-window-close" id="closeSpellWindow" type="button" aria-label="問題ウィンドウを閉じる">×</button>
        ${gateProblemInscription(stage, done, false)}
        ${answerOpen ? "" : `<div class="problem-answer-launcher">
          <button class="problem-answer-toggle" id="gateAnswerToggle" type="button" aria-expanded="false">解答欄を開く</button>
        </div>`}
        ${answerOpen ? renderGateAnswerControls(stage, done, feedback) : ""}
      </section>`}

      ${successAnimating ? renderGateSuccessOverlay(feedback.phase) : ""}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}

      ${done && gatePanelMode === "problem" && !successAnimating ? `<div class="gate-clear-actions">
        <button class="primary-button" id="nextButton" type="button">${stage.id === "gate" ? "ステージ2へ" : "次へ進む"}</button>
      </div>` : ""}
    </section>
  `;
  wireGateStage(stage, done);
}

function renderLearnedSpellViewer() {
  const stageTabs = [
    { id: "gate", label: "ステージ1" },
    { id: "path", label: "ステージ2" },
    { id: "shop", label: "ステージ3" },
    { id: "time", label: "ステージ4" },
  ];
  const unlockedTabs = stageTabs.filter((tab) => isStageCleared(tab.id));
  const selectedStage = unlockedTabs.some((tab) => tab.id === state.learnedSpellStage)
    ? state.learnedSpellStage
    : unlockedTabs[0]?.id || "";
  return `
    <section class="learned-spell-viewer" aria-label="覚えた呪文">
      <div class="learned-spell-head">
        <strong>覚えた呪文</strong>
        <button class="text-button learned-spell-close" id="closeLearnedSpellViewer" type="button">閉じる</button>
      </div>
      <div class="learned-stage-tabs" aria-label="ステージ選択">
        ${stageTabs
          .map(
            (tab) => {
              const unlocked = isStageCleared(tab.id);
              const activeClass = selectedStage === tab.id ? " is-active" : "";
              if (!unlocked) {
                return `
              <span class="learned-stage-tab is-locked" aria-disabled="true">
                ${tab.label} 未クリア
              </span>
            `;
              }
              return `
              <button class="learned-stage-tab${activeClass}" type="button" data-learned-stage="${tab.id}">
                ${tab.label}
              </button>
            `;
            },
          )
          .join("")}
      </div>
      ${selectedStage && isStageCleared(selectedStage) ? renderLearnedSpellContent(selectedStage) : `<p class="learned-empty">クリア済みステージの呪文だけ確認できます。</p>`}
    </section>
  `;
}

function renderLearnedStageOneSpells() {
  return `
    <div class="learned-spell-images">
      <img src="./assets/stage01-spell.webp" alt="ステージ1 呪文">
      <img src="./assets/stage01-clear2.webp" alt="ステージ1 クリア資料">
    </div>
  `;
}

function renderGateSuccessOverlay(phase) {
  if (phase === "prompt1") {
    return `
      <section class="gate-success-sequence is-prompt1" aria-label="ステージ1 続行確認">
        <div class="gate-choice-card">
          <div class="gate-clear-heading">
            <span>STAGE 01 COMPLETE</span>
            <strong>崩れた足場 クリア</strong>
          </div>
          <div class="reward-card" aria-label="習得した呪文">
            <div class="reward-head">
              <span class="reward-badge">呪文を習得！</span>
              <strong class="reward-name">☆ ツケモノ</strong>
            </div>
            <p class="reward-desc">遺物石だろうか？ <b>謎の四角を1個生成できる！</b></p>
            <p class="reward-note"><span class="reward-stone" aria-hidden="true"></span>← この土台の上にのみ生成可能</p>
            <p class="reward-hint">※この呪文は後のステージで使います</p>
          </div>
          <div class="gate-choice-foot">
            <p class="gate-choice-question">進みますか？</p>
            <div class="gate-choice-actions">
              <button class="primary-button gate-choice-button" type="button" data-gate-choice="yes">はい</button>
              <button class="ghost-button gate-choice-button" type="button" data-gate-choice="no">いいえ</button>
            </div>
          </div>
        </div>
      </section>
    `;
  }
  if (phase === "prompt2") {
    return `
      <section class="gate-success-sequence is-prompt2" aria-label="ステージ2へ進む確認">
        <div class="gate-choice-bar">
          <div class="gate-choice-copy">
            <span>STAGE 01 COMPLETE</span>
            <p class="gate-choice-question">床がふさがった！ ステージ2に進みますか？</p>
          </div>
          <div class="gate-choice-actions">
            <button class="primary-button gate-choice-button" type="button" data-gate-choice="yes">はい</button>
            <button class="ghost-button gate-choice-button" type="button" data-gate-choice="no">いいえ</button>
          </div>
        </div>
      </section>
    `;
  }
  return "";
}

function renderSlotPicker(stage, activeSlot) {
  return `
    <div class="slot-choice-popover" aria-label="${activeSlot + 1}文字目の候補">
      <div class="slot-choice-head">
        <span>${activeSlot + 1}文字目</span>
        <button class="slot-choice-clear" id="clearActiveSlot" type="button">空にする</button>
      </div>
      <div class="slot-choice-grid">
        ${stage.tiles
          .map((tile) => `<button class="slot-choice-button" type="button" data-tile="${tile}">${tile}</button>`)
          .join("")}
      </div>
    </div>
  `;
}

function gatePlayableVisual(stage, done, feedback, backgroundOnly = false) {
  const successPhase = feedback?.type === "success" ? feedback.phase : null;
  const rockDropping = successPhase === "rock";
  const background = done || successPhase === "prompt2" ? "stage01-clear.webp" : "stage01-bg-clean.webp";
  return `
    <div class="gate-play-visual stage-world ${done ? "is-open" : ""} ${rockDropping ? "is-rock-dropping" : ""} ${feedback?.type === "fail" ? "is-void-pulse" : ""}">
      <img class="stage-bg-art" src="./assets/${background}" alt="" loading="eager" />
      <div class="art-vignette"></div>
      <div class="far-door-aura"></div>
      <div class="glow-bridge"></div>
      ${!done && !successPhase ? `<p class="gate-background-message">大きな穴が開いていて先に進めない</p>` : ""}
      ${rockDropping ? `<img class="falling-rock" src="./assets/stage01-rock-small.webp" alt="" aria-hidden="true" />` : ""}
    </div>
  `;
}

function gateProblemInscription(stage, done, hidden = false) {
  const problem = stage.textProblem;
  if (!problem || hidden) return "";
  return `
    <section class="device-problem gate-problem-card gate-sheet-panel ${done ? "is-solved" : ""}" aria-label="問題文">
      <div class="gate-sheet-scroll">
        ${renderStage1Sheet()}
      </div>
      ${stage.id === "gate" ? renderKanaBoard() : ""}
    </section>
  `;
}

function renderGateAnswerControls(stage, done, feedback) {
  const selected = done
    ? [...stage.correct].slice(0, stage.slots)
    : Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
  const pickerOpen = !done && state.slotPickerOpen === true;
  const locked = done || (feedback?.type === "success" && feedback.phase !== "done");
  return `
    <section class="gate-problem-answer" aria-label="問題の回答">
      <div class="gate-problem-answer-head">
        <strong>回答</strong>
        <span>石板 ${stage.slots}文字</span>
        <button class="gate-answer-close" id="gateAnswerClose" type="button">閉じる</button>
      </div>
      <div class="device-main-row">
        <div class="premium-slot-row magic-slots">
          ${Array.from({ length: stage.slots })
            .map((_, i) => `<button class="premium-slot ${!locked && i === activeSlot ? "is-selected" : ""}" type="button" data-slot="${i}" aria-pressed="${!locked && i === activeSlot}" ${locked ? "disabled" : ""}>${selected[i] || ""}</button>`)
            .join("")}
        </div>
        <button class="primary-button cast-button" id="activateStage" type="button" ${locked ? "disabled" : ""}>${locked && !done ? "発動中..." : done ? "習得済み" : "呪文を唱える"}</button>
      </div>
      ${pickerOpen ? renderSlotPicker(stage, activeSlot) : ""}
      ${renderGateResult(stage, done, feedback)}
    </section>
  `;
}

// ステージ1 問題シート(原本をHTMLで再構成)
function renderStage1Sheet() {
  return `
    <div class="sheet stage1-sheet" role="img" aria-label="ステージ1 問題">
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ1</h3>
      </div>
      <div class="stage1-cols">
        <div class="stage1-q stage1-q1">
          <span class="sheet-qnum">①</span>
          <div class="stage1-natto" aria-label="納豆が短気になる図">
            <div class="stage1-natto-col stage1-red-col"><span>納</span><span class="stage1-natto-arrow">↓</span><span>短</span></div>
            <div class="stage1-natto-col"><span>豆</span><span class="stage1-natto-arrow">&nbsp;</span><span>気</span></div>
          </div>
          <p class="stage1-inst"><em class="red-word">赤枠内</em>の漢字を変えて<br>上から下へ粘り強さを<br>移動させて下さい。<br><em class="red-word">赤枠内</em>に現れる<br><strong class="veg-word">野菜</strong>は?</p>
        </div>
        <div class="stage1-q stage1-q2">
          <span class="sheet-qnum">②</span>
          <p class="stage1-q2-text">給料日の曜日が無くなると現れる<br><strong class="veg-word">野菜</strong>は?</p>
        </div>
      </div>
      <p class="stage1-footer">①、②が解けたら次は「<u><span class="stage1-used-word">つかった</span>①、②の答え</u>」の下のカタカナを読むのじゃ！（下の文字を押すと赤くなるぞ！）</p>
    </div>
  `;
}

// ステージ3 問題シート(原本をHTMLで再構成)
function renderStage3Sheet() {
  const items = [
    { name: "メラソード", note: "切ったものが燃える" },
    { name: "ソラブーツ", note: "装備すると素早くなる" },
    { name: "ドラブレス", note: "口から火が出せる" },
    { name: "マジホウキ", note: "飛べる、掃除もできる" },
  ];
  const done = isStageCleared("shop");
  return `
    <div class="sheet stage3-sheet" role="group" aria-label="ステージ3 問題">
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ3</h3>
      </div>
      <div class="stage3-cols">
        <div class="stage3-left">
          <p class="stage3-cipher">下のカッコ71の、け134きから3ちびき出3れる数字8,ひらが7二文字で4めます。それ2最も関係するものをア1テ68の7かから5解109だ31。</p>
          <div class="stage3-target-wrap"><p class="stage3-target">「24まき2めがね8くじ7」</p></div>
          <p class="sheet-elder">「計算で出た数字とアイテムはどれも一見関係ありそうじゃが、他より多く合致しているのはどれかのう」</p>
        </div>
        <div class="stage3-right">
          <h4 class="stage3-shop-title">アイテム屋</h4>
          <ul class="stage3-items">
            ${items.map((item, index) => `<li><button class="stage3-answer-option ${state.shopPendingItem === item.name ? "is-selected" : ""}" type="button" data-item="${item.name}" aria-pressed="${state.shopPendingItem === item.name}" ${done ? "disabled" : ""}><span class="stage3-answer-number">${index + 1}</span><span class="stage3-item-main"><strong>${item.name}</strong><small>${item.note}</small></span></button></li>`).join("")}
          </ul>
          ${!done && !state.shopLockOpen ? `
            <div class="shop-chain-lock" aria-label="チェーンと鍵で封印されたアイテム屋">
              <img class="shop-chain-lock-asset" src="./assets/stage03-chain-lock-real.webp" alt="" aria-hidden="true">
              <button class="shop-padlock" id="shopLockButton" type="button" aria-label="中央の鍵を調べる">
              </button>
            </div>
          ` : ""}
        </div>
      </div>
      ${!done && !state.shopLockOpen && state.shopLockPromptOpen ? `
        <div class="shop-lock-dialog-screen" role="dialog" aria-modal="true" aria-label="鍵の解除番号">
          <form class="shop-lock-dialog" id="shopLockForm">
            <span>LOCKED</span>
            <h4>解除番号</h4>
            <p>2桁の番号を入力</p>
            <input id="shopLockInput" type="text" value="${state.shopLockCode}" inputmode="numeric" pattern="[0-9]*" maxlength="2" autocomplete="off" aria-label="2桁の解除番号">
            ${state.shopLockError ? `<p class="shop-lock-error" role="alert">番号が違う</p>` : ""}
            <div class="shop-lock-actions">
              <button class="secondary-button" id="shopLockCancel" type="button">閉じる</button>
              <button class="primary-button" type="submit">解除</button>
            </div>
          </form>
        </div>
      ` : ""}
    </div>
  `;
}

// ステージ4 問題シート(原本をHTMLで再構成。④の図のみ原本から切り出し)
function renderStage4MountainSheet() {
  return `
    <div class="sheet stage4-sheet stage4-mountain-sheet" role="img" aria-label="ステージ4 そびえ立つ山の壁">
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ4</h3>
        <span class="stage4-trial-label">試練</span>
      </div>
      <div class="stage4-mountain-illustration" aria-hidden="true">
        <div class="stage4-mountain-person"></div>
        <div class="stage4-mountain-ridge"></div>
        <div class="stage4-mountain-gap"></div>
        <div class="stage4-mountain-exit">出口</div>
      </div>
      <p class="stage4-mountain-copy">そびえ立つ山の壁があり、乗り越える事が出来ない</p>
      <p class="stage4-mountain-prompt">山の壁を越える呪文を入力せよ</p>
    </div>
  `;
}

const stage4Scatter = [
  ["A", 8.5, 5], ["い", 40, 5], ["ち", 61, 4], ["ん", 79, 5],
  ["う", 49, 22], ["か", 73, 23], ["た", 93, 23],
  ["G", 3, 37], ["す", 30, 38], ["F", 64, 37], ["E", 92, 37],
  ["じ", 2, 54], ["ど", 30, 55], ["さ", 63, 54], ["げ", 84, 54],
  ["の", 13, 72], ["に", 48, 72], ["う", 67, 71],
  ["ろ", 37, 79],
  ["お", 22, 90], ["C", 46, 90], ["D", 79, 90],
];

const stage4Numbers = [
  { label: "①", boxes: [[["3", "b"], ["7", "g"], ["2", "y"], ["10", "y"]], [["8", "b"], ["3", "y"]], [["2", "b"], ["2", "g"], ["13", "y"]]] },
  { label: "②", boxes: [[["7", "b"], ["4", "g"], ["1", "y"]], [], [], [["14", "y"]]] },
  { label: "③", boxes: [[["8", "y"]], [["6", "b"], ["3", "g"], ["9", "y"]], [["4", "b"], ["1", "g"], ["11", "y"]], [["5", "y"]], [["6", "y"]]] },
  { label: "④", boxes: [[["1", "b"], ["7", "y"]], [["9", "b"], ["6", "g"], ["15", "y"]], [["5", "b"], ["12", "y"]], [["5", "g"], ["4", "y"]]] },
];

const stage4FinalPhrase = Array.from("きじのくうきあしょうのみさきよらいじさめ");

function renderStage4FinalSection() {
  const active = new Set(Array.isArray(state.stage4FinalActive) ? state.stage4FinalActive : []);
  return `
    <section class="s4-final-section" aria-label="ステージ4 最終手掛かり">
      <div class="s4-final-clue">
        <strong>※ 時差を隠す時に使うのじゃ→</strong>
        <div class="s4-final-phrase" aria-label="文字を押すと赤くなる">
          ${stage4FinalPhrase.map((character, index) => `<button class="${active.has(index) ? "is-active" : ""}" type="button" data-s4-final-char="${index}" aria-pressed="${active.has(index)}">${character}</button>`).join("")}
        </div>
      </div>
      <div class="s4-final-answer-line">
        <div class="s4-final-answer-title">
          <span class="s4-final-kana" aria-label="ファイナルアンサー">
            <span class="s4-final-kana-prefix">ファイナル</span>
            <span class="s4-final-kana-char is-answer-a" aria-hidden="true">ア</span>
            <span class="s4-final-kana-char is-answer-n" aria-hidden="true">ン</span>
            <span class="s4-final-kana-char is-answer-sa" aria-hidden="true">サ</span>
            <span class="s4-final-kana-char is-answer-long" aria-hidden="true">ー</span>
          </span>
          <strong class="s4-final-english" aria-label="FINAL ANSWER:">
            <span aria-hidden="true">F</span><span aria-hidden="true">I</span><span aria-hidden="true">N</span><span aria-hidden="true">A</span><span aria-hidden="true">L</span><span aria-hidden="true">&nbsp;</span><span aria-hidden="true">A</span><span aria-hidden="true">N</span><span aria-hidden="true">S</span><span aria-hidden="true">W</span><span class="is-answer-e" aria-hidden="true">E</span><span aria-hidden="true">R</span><span aria-hidden="true">:</span>
          </strong>
        </div>
        <button class="primary-button stage4-answer-open s4-final-answer-submit" id="timeAnswerToggle" type="button" aria-expanded="${state.timeAnswerOpen}">${state.timeAnswerOpen ? "回答欄を閉じる" : "回答する"}</button>
      </div>
    </section>
  `;
}

function renderStage4ChoicePicker() {
  if (!state.stage4PickerOpen) return "";
  const questionIndex = Math.min(Math.max(state.stage4ActiveGroup?.question || 0, 0), 3);
  const groupIndex = Math.min(Math.max(state.stage4ActiveGroup?.group || 0, 0), stage4MemoShape[questionIndex].length - 1);
  const memo = normalizeStage4Memo(state.stage4Memo);
  const value = memo.cells[questionIndex][groupIndex].join("");
  return `
    <section class="s4-choice-picker" aria-label="${questionIndex + 1}番の文字候補">
      <div class="s4-choice-head">
        <div><span>途中回答 ${questionIndex + 1}-${groupIndex + 1}</span><strong>${value || "未入力"}</strong></div>
      </div>
      <div class="s4-choice-tiles" role="group" aria-label="選択候補">
        ${stage4ChoiceCandidates[questionIndex].map((character) => `<button type="button" data-s4-choice="${character}">${character}</button>`).join("")}
      </div>
      <div class="s4-choice-actions">
        <button class="secondary-button" id="stage4PickerBackspace" type="button">決定</button>
        <button class="secondary-button" id="stage4PickerClear" type="button">戻る</button>
        <button class="secondary-button" id="stage4PickerDelete" type="button">削除</button>
      </div>
    </section>
  `;
}

function renderStage4Sheet() {
  const memo = normalizeStage4Memo(state.stage4Memo);
  const numberRow = (group, questionIndex) => `
    <div class="s4-num-row">
      <span class="s4-num-label">${group.label}</span>
      ${group.boxes
        .map(
          (box, groupIndex) => {
            const inputLength = stage4MemoShape[questionIndex]?.[groupIndex] || box.length;
            const inputLabel = box.length
              ? `${group.label} ${box.map(([n]) => n).join("、")}に対応する文字`
              : `${group.label} 中央メモ ${groupIndex}`;
            const currentValue = memo.cells[questionIndex][groupIndex].join("");
            const isActive = state.stage4PickerOpen && state.stage4ActiveGroup?.question === questionIndex && state.stage4ActiveGroup?.group === groupIndex;
            return `<span class="s4-num-box ${box.length ? "" : "is-empty"}">
            <span class="s4-num-source">${box.length ? box.map(([n, c], i) => `${i ? "<i>,</i>" : ""}<b class="n-${c}">${n}</b>`).join("") : "-"}</span>
            ${inputLength ? `<button class="s4-map-input ${isActive ? "is-active" : ""}" type="button" data-s4-group="${questionIndex}:${groupIndex}" aria-expanded="${isActive}" aria-label="${inputLabel}">${currentValue || "―"}</button>` : ""}
          </span>`;
          },
        )
        .join("")}
    </div>
  `;
  return `
    <div class="sheet stage4-sheet stage4-static-sheet" role="group" aria-label="ステージ4 問題">
      <figure class="s4-static-problem-viewport">
        <img src="./assets/stage04-problem-questions.webp" alt="添付原稿から切り抜いたステージ4の①から④までの問題部分" />
      </figure>
      <section class="s4-static-answer-area" aria-label="①から④の途中回答">
        <p>途中回答</p>
        <div class="s4-static-answer-grid">
          ${stage4Numbers.map((group, questionIndex) => numberRow(group, questionIndex)).join("")}
        </div>
      </section>
      ${renderStage4ChoicePicker()}
      <p class="s4-footer-note">※<b class="n-b">青</b>→<b class="n-g">緑</b>→<b class="n-y">黄</b>の順に読め。答えは、それが差ししめす先にある。</p>
      ${renderStage4FinalSection()}
    </div>
  `;
}

function renderKanaBoard() {
  const active = new Set(
    (Array.isArray(state.kanaBoardActive) ? state.kanaBoardActive : [])
      .map((key) => {
        const value = String(key);
        if (value.startsWith("col:")) return Number(value.slice(4));
        const parts = value.split(":");
        return parts.length === 2 ? Number(parts[1]) : Number(value);
      })
      .filter((value) => Number.isInteger(value) && value >= 0 && value < stage1KanaBoardRows[0].length),
  );
  const reading = [...active]
    .sort((a, b) => a - b)
    .map((column) => stage1KanaBoardRows[1][column] || "")
    .join("")
    .replace(/[「」]/g, "");
  const decoded = reading === "ケモノガマチガイ";
  return `
    <div class="kana-board gate-kana-board" aria-label="文字盤">
      ${stage1KanaBoardRows
        .map(
          (line, rowIndex) => `
            <div class="kana-board-row" role="group" aria-label="行 ${rowIndex + 1}">
              ${line
                .map((char, index) => {
                  const activeClass = active.has(index) ? " is-active" : "";
                  const arrowClass = char === "\u2192" ? " is-arrow" : "";
                  const compositeClass = char === "\u300c\u30c4\u300d" ? " is-composite" : "";
                  return `<button type="button" class="kana-glyph${activeClass}${arrowClass}${compositeClass}" data-kana-col="${index}" aria-pressed="${active.has(index)}" ${index === 0 ? "disabled" : ""}>${char}</button>`;
                })
                .join("")}
            </div>
          `,
        )
        .join("")}
      ${reading ? `
        <div class="kana-reading ${decoded ? "is-decoded" : ""}" aria-live="polite">
          <strong>${reading}</strong>
          ${decoded ? `<p>上段に隠れた獣の名前の誤字を探せ。誤字の下にある一文字を「ケモノ」に加えると、石板の呪文になる。</p>` : ""}
        </div>
      ` : ""}
    </div>
  `;
}

function renderPathStageClear(stage) {
  return `
    <section class="stage-clear-overlay path-clear-overlay" aria-label="ステージ2 クリア">
      <div class="stage-clear-card path-clear-card">
        <div class="path-clear-copy">
          <span class="clear-kicker">STAGE ${stage.number} COMPLETE</span>
          <h2>『扉のない通路』</h2>
          <p><strong>${stage.reward}を唱えた！</strong>『』の中の<span class="path-red-word">あか</span>色を消したことで『扉のない通路』になった！</p>
        </div>
        <button class="primary-button" id="nextButton" type="button">次のステージへ</button>
      </div>
    </section>
  `;
}

function renderPathSuccessStep(stage, phase) {
  if (phase === "learned") {
    return `
      <section class="stage-clear-overlay path-sequence-overlay" aria-label="${stage.reward}を覚えた">
        <div class="stage-clear-card path-sequence-card">
          <span class="clear-kicker">STAGE ${stage.number} CLEAR</span>
          <h2>${stage.reward}を覚えた</h2>
          <div class="path-learned-spell">
            <strong>☆ ${stage.reward}</strong>
            <p>「　」内の色を消すことが出来る。</p>
            <p>「　」内の内容の意味が通れば、それは現実となる。</p>
          </div>
          <button class="primary-button" id="pathLearnedNext" type="button">つぎへ</button>
        </div>
      </section>
    `;
  }
  return `
    <section class="stage-clear-overlay path-sequence-overlay" aria-label="${stage.reward}を唱える確認">
      <div class="stage-clear-card path-sequence-card path-cast-confirm-card">
        <span class="clear-kicker">SPELL READY</span>
        <h2>${stage.reward}を唱えますか？</h2>
        <div class="path-sequence-actions">
          <button class="primary-button" id="pathCastYes" type="button">はい</button>
          <button class="secondary-button" id="pathCastNo" type="button">いいえ</button>
        </div>
      </div>
    </section>
  `;
}

function beginPathCast(stage) {
  audioDirector.playEffect("erase");
  state.feedback = { stageId: stage.id, type: "success", phase: "casting" };
  render();
  window.setTimeout(() => {
    if (stages[state.stageIndex]?.id !== stage.id) return;
    if (state.feedback?.stageId !== stage.id || state.feedback?.phase !== "casting") return;
    addUnique(state.cleared, stage.id);
    state.feedback = { stageId: stage.id, type: "success", phase: "done" };
    state.pathPanelMode = "clear";
    audioDirector.playEffect("success");
    render();
    burstOnce(".path-clear-card");
  }, 3400);
}

function wirePathSuccessStep(stage) {
  document.querySelector("#pathLearnedNext")?.addEventListener("click", () => {
    state.feedback = { stageId: stage.id, type: "success", phase: "confirm" };
    render();
  });
  document.querySelector("#pathCastYes")?.addEventListener("click", () => beginPathCast(stage));
  document.querySelector("#pathCastNo")?.addEventListener("click", () => {
    state.feedback = { stageId: stage.id, type: "success", phase: "learned" };
    render();
  });
}

function renderPathCastEffect(stage) {
  return `
    <section class="path-cast-effect" aria-live="assertive" aria-label="${stage.reward}を唱えた">
      <div class="path-cast-ring" aria-hidden="true"></div>
      <p><strong>${stage.reward}</strong>を唱えた！</p>
      <span>『』の中の「<strong class="stage2-color-word">いろ</strong>」を消去中…</span>
    </section>
  `;
}

function renderLearnedSpellContent(stageId) {
  const explorationSpells = getLearnedExplorationSpells(stageId);
  const explorationDetails = explorationSpells.length
    ? `
      <section class="learned-exploration-spells" aria-label="探索で覚えた呪文">
        <h3>探索で覚えた呪文</h3>
        <div class="learned-exploration-grid">
          ${explorationSpells.map((spell) => `<article><strong>☆ ${spell.name}</strong><p>${spell.effect}</p></article>`).join("")}
        </div>
      </section>
    `
    : "";
  if (stageId === "gate") return `${renderLearnedStageOneSpells()}${explorationDetails}`;
  const learnedStage = stages.find((stage) => stage.id === stageId);
  if (!learnedStage) return `<p class="learned-empty">この呪文はまだ確認できません。</p>`;
  return `
    <article class="learned-spell-detail">
      <span>${learnedStage.number} / ${learnedStage.title}</span>
      <strong>☆ ${learnedStage.reward}</strong>
      <p>${learnedStage.textProblem?.solvedNote || learnedStage.successMessage || "習得済みの呪文"}</p>
    </article>
    ${explorationDetails}
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
  wireProblems();
  const rockDropping = state.feedback?.stageId === stage.id && state.feedback?.type === "success" && state.feedback?.phase === "rock";
  if (rockDropping) positionFallingRock();
  const successAnimating = state.feedback?.stageId === stage.id && state.feedback?.type === "success" && state.feedback?.phase !== "done";
  const locked = done || rockDropping || successAnimating;

  document.querySelector("#closeProblemWindow")?.addEventListener("click", () => {
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: true };
    state.gatePanelMode = "spell";
    state.slotPickerOpen = false;
    render();
  });

  document.querySelector(".mobile-problem-fit-toggle input")?.addEventListener("change", (event) => {
    state.problemFit = event.target.checked;
    saveState();
  });

  document.querySelector("#reopenSpellWindow")?.addEventListener("click", () => {
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: false };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.gatePanelMode = "spell";
    state.slotPickerOpen = false;
    render();
  });

  document.querySelector("#reopenProblemWindow")?.addEventListener("click", () => {
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: false };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: false };
    state.gatePanelMode = "problem";
    state.slotPickerOpen = false;
    render();
  });

  document.querySelector("#mobileProblemToSpell")?.addEventListener("click", () => {
    state.gatePanelMode = "spell";
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: false };
    state.slotPickerOpen = false;
    render();
  });

  document.querySelectorAll("[data-kana-col]").forEach((button) => {
    button.addEventListener("click", () => {
      const column = Number(button.dataset.kanaCol);
      if (!Number.isInteger(column) || column <= 0) return;
      const active = new Set(
        (Array.isArray(state.kanaBoardActive) ? state.kanaBoardActive : [])
          .map((key) => String(key).startsWith("col:") ? Number(String(key).slice(4)) : Number(String(key).split(":").pop()))
          .filter(Number.isInteger),
      );
      if (active.has(column)) {
        active.delete(column);
      } else {
        active.add(column);
      }
      state.kanaBoardActive = [...active].sort((a, b) => a - b).map((value) => `col:${value}`);
      render();
    });
  });

  document.querySelector("#closeSpellWindow")?.addEventListener("click", () => {
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: true };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.gatePanelMode = "spell";
    state.slotPickerOpen = false;
    state.gateAnswerOpen = false;
    state.learnedSpellViewerOpen = false;
    render();
  });

  document.querySelector("#gateAnswerToggle")?.addEventListener("click", () => {
    state.gateAnswerOpen = !state.gateAnswerOpen;
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });

  document.querySelector("#gateAnswerClose")?.addEventListener("click", () => {
    state.gateAnswerOpen = false;
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });

  document.querySelector("#toggleLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = !state.learnedSpellViewerOpen;
    state.slotPickerOpen = false;
    render();
  });

  document.querySelector("#closeLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = false;
    render();
  });

  document.querySelectorAll("[data-learned-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.learnedSpellStage = button.dataset.learnedStage || "gate";
      render();
    });
  });

  document.querySelectorAll(".slot-choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      if (locked) return;
      const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
      state.slotInput = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
      state.slotInput[slot] = button.dataset.tile;
      const nextSlot = state.slotInput.findIndex((value) => !value);
      state.activeSlot = nextSlot >= 0 ? nextSlot : Math.min(slot + 1, stage.slots - 1);
      state.slotPickerOpen = nextSlot >= 0;
      state.feedback = null;
      render();
      popOnce(`.premium-slot[data-slot="${slot}"]`);
    });
  });

  document.querySelectorAll(".premium-slot").forEach((button) => {
    button.addEventListener("click", () => {
      if (locked) return;
      state.activeSlot = Number(button.dataset.slot);
      state.slotPickerOpen = true;
      state.feedback = null;
      render();
    });
  });

  document.querySelector("#clearActiveSlot")?.addEventListener("click", () => {
    if (locked) return;
    const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
    state.slotInput = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
    state.slotInput[slot] = "";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });

  document.querySelector("#activateStage")?.addEventListener("click", () => {
    if (locked) return;
    const answer = Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "").join("");
    if (normalizeAnswer(answer) !== normalizeAnswer(stage.correct)) {
      state.feedback = { stageId: stage.id, type: "fail" };
      state.slotPickerOpen = false;
      audioDirector.playEffect("fail");
      render();
      return;
    }
    state.slotPickerOpen = false;
    addUnique(state.spells, stage.reward);
    state.feedback = { stageId: stage.id, type: "success", phase: "prompt1" };
    audioDirector.playEffect("success");
    render();
    burstOnce(".gate-choice-card");
  });

  document.querySelectorAll("[data-gate-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      if (state.feedback?.stageId !== stage.id || state.feedback.type !== "success") return;
      const choice = button.dataset.gateChoice;
      const phase = state.feedback.phase;
      if (choice === "no") {
        render();
        return;
      }
      if (phase === "prompt1") {
        beginGateDescent(stage);
        return;
      }
      if (phase === "prompt2") {
        finishGateSuccess(stage);
      }
    });
  });

  if (!locked && state.slotPickerOpen) {
    requestAnimationFrame(() => document.querySelector(".slot-choice-popover")?.scrollIntoView({ block: "nearest" }));
  }

  document.querySelector("#nextButton")?.addEventListener("click", () => {
    state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
    const nextStage = stages[state.stageIndex];
    if (nextStage?.id === "gate") {
      state.hiddenProblems = { ...(state.hiddenProblems || {}), gate: true };
      state.hiddenSpells = { ...(state.hiddenSpells || {}), gate: true };
      state.gatePanelMode = "spell";
    }
    state.feedback = null;
    resetStageInput();
    render();
  });
}

// 落下する岩を、クリア背景に描かれた岩と同じ位置・大きさに着地させる。
// クリア画像(1672x941)内の岩: 中心(49%, 58%)・幅31%。岩画像は透明余白込みなので幅を割り戻す。
function positionFallingRock() {
  const world = document.querySelector(".gate-play-visual");
  const rock = document.querySelector(".falling-rock");
  if (!world || !rock) return;
  const rect = world.getBoundingClientRect();
  if (!rect.width || !rect.height) return;
  const clearRatio = 1672 / 941;
  let w = rect.width;
  let h = rect.height;
  let offX = 0;
  let offY = 0;
  if (rect.width / rect.height > clearRatio) {
    w = rect.height * clearRatio;
    offX = (rect.width - w) / 2;
  } else {
    h = rect.width / clearRatio;
    offY = (rect.height - h) / 2;
  }
  rock.style.left = `${offX + w * 0.49}px`;
  rock.style.top = `${offY + h * 0.58}px`;
  rock.style.width = `${(w * 0.31) / 0.8}px`;
  rock.style.maxWidth = "none";
  // 着地の砂煙と画面シェイク
  const impact = document.createElement("div");
  impact.className = "rock-impact";
  impact.setAttribute("aria-hidden", "true");
  impact.style.left = rock.style.left;
  impact.style.top = `${offY + h * 0.66}px`;
  impact.style.width = `${w * 0.4}px`;
  world.appendChild(impact);
  world.classList.add("is-impact-shake");
}

function beginGateDescent(stage) {
  clearGateSuccessTimers();
  const setPhase = (phase) => {
    if (phase === "background") audioDirector.playEffect("spell");
    if (phase === "rock") audioDirector.playEffect("rock");
    if (phase === "prompt2") audioDirector.playEffect("success");
    state.feedback = { stageId: stage.id, type: "success", phase };
    render();
  };
  setPhase("background");
  gateSuccessTimers.push(window.setTimeout(() => setPhase("rock"), 1100));
  gateSuccessTimers.push(window.setTimeout(() => setPhase("prompt2"), 2450));
}

function finishGateSuccess(stage) {
  clearGateSuccessTimers();
  addUnique(state.cleared, stage.id);
  addUnique(state.spells, stage.reward);
  state.feedback = null;
  resetStageInput();
  state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
  closeStagePanelsOnEntry(stages[state.stageIndex]);
  render();
}

function renderStage(stage) {
  const done = isStageCleared(stage.id);
  const panelMode = state.genericPanelMode || "closed";
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const timeSequencePhase = stage.id === "time" ? state.timeSequencePhase || "" : "";
  const shopSuccessPhase = stage.id === "shop" && feedback?.type === "success"
    ? feedback.phase === "clear" ? "learned" : feedback.phase || "learned"
    : stage.id === "shop" && done && panelMode === "clear"
      ? "done"
      : "";
  const showShopClearedBackground = stage.id === "shop" && (done || shopSuccessPhase === "casting" || shopSuccessPhase === "done");
  const background = stage.id === "shop"
    ? shopSuccessPhase === "casting"
      ? "stage03-cast-drabreath-v3.webp"
      : showShopClearedBackground
        ? "stage03-clear-steps-v3.webp"
        : "stage03-bg-steep-v3.webp"
    : done ? "stage04-clear-overcome-v3.webp" : "stage04-bg-mountain-v2.webp";
  const backgroundAlt = stage.id === "shop"
    ? shopSuccessPhase === "casting"
      ? "ドラブレスの高熱火炎が急な氷坂を焼き溶かし、大量の蒸気が上がる"
      : done
        ? "氷が溶け、登れる石段が露出した急傾斜の回廊"
        : "鏡面状の氷に覆われ、滑って登れない急傾斜の回廊"
    : done ? "そびえ立つ山壁を越え、山上の出口へ到達した" : "そびえ立つ山の壁と山上に光る出口";
  elements.game.innerHTML = `
    <section class="stage-panel immersive-stage generic-immersive-stage stage-${stage.id} ${done ? "is-solved" : ""} ${shopSuccessPhase === "casting" ? "is-shop-casting" : ""}" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world generic-stage-world">
        <img class="stage-bg-art" src="./assets/${background}" alt="${backgroundAlt}" loading="eager">
        <div class="art-vignette"></div>
      </div>
      <div class="stage-corner-label"><span>${stage.number}</span><strong>${stage.title}</strong></div>
      ${stage.id === "time" && !done ? `<p class="stage4-background-message">このままでは「乗り越える」ことができない</p>` : ""}
      ${panelMode === "problem" ? renderGenericProblemPanel(stage, done) : ""}
      ${timeSequencePhase ? renderTimeSuccessSequence(stage, timeSequencePhase) : shopSuccessPhase ? renderShopSuccessSequence(stage, shopSuccessPhase) : panelMode === "clear" && done ? renderGenericStageClear(stage) : ""}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}
    </section>
  `;
  wireStage(stage, done);
  wireProblems();
}

function renderGenericProblemPanel(stage, done) {
  const isTimeStage = stage.id === "time";
  return `
    <section class="immersive-panel generic-problem-panel ${isTimeStage ? "stage4-problem-panel" : ""}" aria-label="${stage.number} 問題">
      ${isTimeStage
        ? `<button class="panel-close-button stage4-panel-close" id="genericClosePanel" type="button" aria-label="問題を閉じる">×</button>`
        : `<div class="immersive-panel-head">
            <div><span>STAGE ${stage.number}</span><strong>${stage.title} / 問題</strong></div>
            <div class="immersive-panel-head-actions">
              <button class="panel-close-button" id="genericClosePanel" type="button" aria-label="問題を閉じる">×</button>
            </div>
          </div>`}
      <div class="immersive-panel-scroll">
        ${renderProblems(stage, done)}
        ${stage.type === "shop" ? `<div class="generic-problem-answer" aria-label="問題の回答">${shopPuzzle(stage, done)}</div>` : ""}
      </div>
      ${stage.id === "time" && state.timeAnswerOpen && !done ? renderStage4AnswerDrawer(stage) : ""}
    </section>
  `;
}

function renderShopSuccessSequence(stage, phase) {
  if (phase === "casting") {
    return `
      <section class="shop-success-sequence is-casting" aria-label="ドラブレス発動中">
        <div class="shop-ice-transition" aria-hidden="true"></div>
        <div class="shop-cast-status"><strong>ドラブレスを解き放った！</strong><span>高熱火炎が氷坂を割り、大量の蒸気と融水を発生させている</span></div>
      </section>
    `;
  }

  if (phase === "done") {
    return `
      <section class="shop-success-sequence is-done" aria-label="ステージ3 クリア">
        <div class="shop-completion-bar">
          <div><span>STAGE ${stage.number} COMPLETE</span><strong>氷坂が溶け、登れる石段が現れた！</strong></div>
          <button class="primary-button" id="nextButton" type="button">次のステージへ</button>
        </div>
      </section>
    `;
  }

  const content = phase === "confirm"
    ? `<span>SPELL READY</span><h2>ドラブレスを使いますか？</h2><p>鏡面状に凍った急坂へ高熱火炎を放つ。</p>`
    : `<span>NEW SPELL</span><h2>ドラブレスを覚えた！</h2><p><strong>ドラブレス：</strong>龍の息のような高熱火炎を前方へ噴射し、氷を急速に融解する。<br>大量の蒸気が発生するため、発射方向に注意。</p>`;
  const actions = phase === "confirm"
    ? `<div class="shop-sequence-actions"><button class="primary-button" id="shopCastYes" type="button">はい</button><button class="secondary-button" id="shopCastNo" type="button">いいえ</button></div>`
    : `<button class="primary-button" id="shopLearnedNext" type="button">つぎへ</button>`;

  return `
    <section class="shop-success-sequence is-${phase}" aria-label="ステージ3 クリア進行">
      <div class="shop-sequence-card">
        <div class="shop-sequence-copy">${content}</div>
        ${actions}
      </div>
    </section>
  `;
}

const timeCastTiles = ["ツ", "ケ", "モ", "ノ", "ゴ", "ク", "ロ", "ウ", "サ", "マ", "ド", "ラ", "ブ", "レ", "ス", "タ", "イ", "ム", "シ", "ン", "キ", "ミ", "チ", "ナ"];

function renderTimeSpellChooser(phase) {
  const selected = Array.from({ length: 6 }, (_, index) => state.slotInput[index] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), 5);
  const failed = phase === "cast-fail";
  return `
    <div class="time-spell-chooser" aria-label="唱える呪文を文字で選ぶ">
      <div class="stage4-answer-slots" aria-label="選択した6文字">
        ${selected.map((character, index) => `<button class="stage4-answer-slot ${index === activeSlot ? "is-active" : ""}" type="button" data-time-cast-slot="${index}" aria-pressed="${index === activeSlot}">${character || "―"}</button>`).join("")}
      </div>
      <div class="stage4-answer-tiles" aria-label="文字候補">
        ${timeCastTiles.map((tile) => `<button type="button" data-time-cast-tile="${tile}">${tile}</button>`).join("")}
      </div>
      <div class="stage4-answer-actions">
        <button class="secondary-button" id="timeCastClear" type="button">全消去</button>
        <button class="primary-button" id="timeCastSpell" type="button">この呪文を唱える</button>
      </div>
      ${failed ? `<p class="time-cast-result is-fail">呪文の光が一瞬だけ揺らめいた。しかし、山の壁は動かない。</p>` : ""}
    </div>
  `;
}

function renderTimeSuccessSequence(stage, phase) {
  if (phase === "casting-time") {
    return `
      <section class="stage-clear-overlay time-spell-sequence is-casting-time" aria-live="assertive">
        <div class="stage-clear-card time-spell-sequence-card">
          <span class="clear-kicker">TIME MACHINE</span>
          <h2>タイムマシンを唱えた！</h2>
          <p class="time-cast-effect-copy">空間が巻き戻り、「ここ」という言葉が残る過去へ移動する。</p>
          <div class="time-warp-effect" aria-hidden="true"></div>
        </div>
      </section>
    `;
  }

  const content = phase === "learned"
    ? `<span class="clear-kicker">NEW SPELL</span><h2>タイムマシンを覚えた</h2><button class="primary-button" id="timeLearnedNext" type="button">つぎへ</button>`
    : phase === "explanation"
      ? `<span class="clear-kicker">SPELL GUIDE</span><h2>タイムマシン</h2><p class="time-spell-explanation">一時的に未来空間へ移動し、まだ習得していない呪文を1つ唱えられる。効果は現在異空間で発動し、同時に自分も現在異空間へ戻る。</p><button class="primary-button" id="timeExplanationNext" type="button">つぎへ</button>`
      : `<span class="clear-kicker">SELECT SPELL</span><h2>どの呪文を唱えますか</h2>${renderTimeSpellChooser(phase)}`;

  return `
    <section class="stage-clear-overlay time-spell-sequence is-${phase}" aria-label="ステージ4 タイムマシン">
      <div class="stage-clear-card time-spell-sequence-card">${content}</div>
    </section>
  `;
}

function returnToIntroWithTimeMachine() {
  state.timeSequencePhase = "choose";
  state.introReturnPhase = "message";
  state.stageIndex = 0;
  state.genericPanelMode = "closed";
  state.feedback = null;
  resetStageInput();
  render();
}

function completeTimeStage(stage) {
  addUnique(state.cleared, stage.id);
  state.timeSequencePhase = "";
  state.introReturnPhase = "";
  state.feedback = { stageId: stage.id, type: "success" };
  state.genericPanelMode = "clear";
  audioDirector.playEffect("success");
  resetStageInput();
  render();
  burstOnce(".stage-clear-card");
}

function castSelectedTimeSpell(stage) {
  const value = Array.from({ length: 6 }, (_, index) => state.slotInput[index] || "").join("");
  const normalized = normalizeAnswer(value);
  if (normalized === normalizeAnswer("タイムマシン")) {
    audioDirector.playEffect("time");
    state.timeSequencePhase = "casting-time";
    state.feedback = null;
    render();
    window.setTimeout(() => {
      if (stages[state.stageIndex]?.id !== "time" || state.timeSequencePhase !== "casting-time") return;
      returnToIntroWithTimeMachine();
    }, 1600);
    return;
  }
  if (normalized === normalizeAnswer("キミタチナラ")) {
    audioDirector.playEffect("spell");
    completeTimeStage(stage);
    return;
  }
  state.timeSequencePhase = "cast-fail";
  state.feedback = { stageId: stage.id, type: "fail", phase: "cast" };
  audioDirector.playEffect("fail");
  render();
  burstOnce(".time-spell-sequence-card");
}

function wireTimeSuccessSequence(stage) {
  document.querySelector("#timeLearnedNext")?.addEventListener("click", () => {
    state.timeSequencePhase = "explanation";
    render();
  });
  document.querySelector("#timeExplanationNext")?.addEventListener("click", () => {
    state.timeSequencePhase = "choose";
    resetStageInput();
    render();
  });
  document.querySelectorAll("[data-time-cast-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSlot = Number(button.dataset.timeCastSlot);
      render();
    });
  });
  document.querySelectorAll("[data-time-cast-tile]").forEach((button) => {
    button.addEventListener("click", () => {
      const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), 5);
      state.slotInput = Array.from({ length: 6 }, (_, index) => state.slotInput[index] || "");
      state.slotInput[slot] = button.dataset.timeCastTile || "";
      const nextEmpty = state.slotInput.findIndex((value) => !value);
      state.activeSlot = nextEmpty >= 0 ? nextEmpty : Math.min(slot + 1, 5);
      state.timeSequencePhase = "choose";
      state.feedback = null;
      render();
    });
  });
  document.querySelector("#timeCastClear")?.addEventListener("click", () => {
    resetStageInput();
    state.timeSequencePhase = "choose";
    state.feedback = null;
    render();
  });
  document.querySelector("#timeCastSpell")?.addEventListener("click", () => castSelectedTimeSpell(stage));
}

function beginShopCast(stage) {
  audioDirector.playEffect("fire");
  addUnique(state.spells, stage.reward);
  addUnique(state.cleared, stage.id);
  state.feedback = { stageId: stage.id, type: "success", phase: "casting" };
  state.genericPanelMode = "clear";
  render();
  window.setTimeout(() => {
    if (stages[state.stageIndex]?.id !== stage.id) return;
    if (state.feedback?.stageId !== stage.id || state.feedback?.phase !== "casting") return;
    state.feedback = { stageId: stage.id, type: "success", phase: "done" };
    state.genericPanelMode = "clear";
    audioDirector.playEffect("success");
    render();
  }, 3800);
}

function wireShopSuccessSequence(stage) {
  document.querySelector("#shopLearnedNext")?.addEventListener("click", () => {
    state.feedback = { stageId: stage.id, type: "success", phase: "confirm" };
    render();
  });
  document.querySelector("#shopCastYes")?.addEventListener("click", () => beginShopCast(stage));
  document.querySelector("#shopCastNo")?.addEventListener("click", () => {
    state.feedback = { stageId: stage.id, type: "success", phase: "learned" };
    render();
  });
}

function renderGenericStageClear(stage) {
  const nextLabel = state.stageIndex >= stages.length - 2 ? "ラスボスへ" : "次のステージへ";
  const clearTitle = stage.id === "time" ? "山の壁を乗り越えた" : stage.id === "shop" ? "氷が溶けた" : `${stage.title} クリア`;
  const clearMessage = stage.id === "time"
    ? "<strong>「キミタチナラ」を唱えた！</strong><br>その言葉が仲間たちの背中を押し、諦めかけていた心にもう一度力が戻った。足場の少ない急斜面に手をかけ、互いに支え合いながら一歩ずつ登っていく。山の壁そのものが消えたわけではない。それでも進み続け、ついに全員で頂上を乗り越えた！"
    : stage.id === "shop"
      ? "「ドラブレス」を唱えた！炎で氷が溶け、先へ進めるようになった！"
    : stage.textProblem?.solvedNote || stage.successMessage || "新しい呪文を習得した。";
  return `
    <section class="stage-clear-overlay" aria-label="ステージクリア">
      <div class="stage-clear-card">
        <span class="clear-kicker">STAGE ${stage.number} COMPLETE</span>
        <h2>${clearTitle}</h2>
        ${stage.id === "time"
          ? `<div class="clear-spell-reward time-clear-story"><p>${clearMessage}</p></div>`
          : `<div class="clear-spell-reward"><span>呪文を習得</span><strong>☆ ${stage.reward}</strong><p>${clearMessage}</p></div>`}
        <div class="clear-actions">
          <button class="secondary-button" id="genericToProblem" type="button">問題を見直す</button>
          <button class="primary-button" id="nextButton" type="button">${nextLabel}</button>
        </div>
      </div>
    </section>
  `;
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
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const pending = stage.items.find((item) => item.name === state.shopPendingItem) || null;
  const pendingIndex = pending ? stage.items.findIndex((item) => item.name === pending.name) + 1 : 0;
  return `
    <section class="play-box stage3-answer-controls">
      ${pending && !done ? `
        <div class="stage3-confirmation-screen" role="dialog" aria-modal="true" aria-label="回答の確認">
          <div class="shop-confirmation stage3-confirmation-card">
            <span class="stage3-confirmation-kicker">回答番号 ${pendingIndex}</span>
            <strong class="stage3-confirmation-item">${pending.name}</strong>
            <p>${pending.name}で本当にいいか？</p>
            <div class="shop-confirmation-actions">
              <button class="primary-button" id="confirmShopItem" type="button">はい</button>
              <button class="secondary-button" id="cancelShopItem" type="button">いいえ</button>
            </div>
          </div>
        </div>
      ` : ""}
      <p class="note ${done ? "is-ok" : feedback?.type === "fail" ? "is-error" : ""}" id="stageNote">${done ? stage.successMessage || `獲得済み: ${stage.reward}` : feedback?.type === "fail" ? "違うようだ。問題の数字と、道具の効果を見直そう。" : "問題内の回答番号を押してください。"}</p>
    </section>
  `;
}

function renderStage4AnswerDrawer(stage) {
  const slotCount = stage.textProblem?.answerBoxes || 6;
  const selected = Array.from({ length: slotCount }, (_, index) => state.slotInput[index] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), slotCount - 1);
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
  const tiles = ["ア", "イ", "ウ", "オ", "カ", "キ", "ク", "ケ", "コ", "サ", "シ", "ス", "タ", "チ", "ツ", "ナ", "ニ", "ノ", "ハ", "ブ", "マ", "ミ", "ム", "モ", "ラ", "リ", "ル", "レ", "ロ", "ン"];
  return `
    <section class="stage4-answer-drawer" aria-label="ステージ4 解答">
      <div class="stage4-answer-head">
        <div><span>石板 6文字</span><strong>文字を選んで呪文を作る</strong></div>
        <button class="text-button" id="timeAnswerClose" type="button">閉じる</button>
      </div>
      <div class="stage4-answer-slots" aria-label="選択した6文字">
        ${selected.map((character, index) => `<button class="stage4-answer-slot ${index === activeSlot ? "is-active" : ""}" type="button" data-time-slot="${index}" aria-pressed="${index === activeSlot}">${character || "―"}</button>`).join("")}
      </div>
      <div class="stage4-answer-tiles" aria-label="文字候補">
        ${tiles.map((tile) => `<button type="button" data-time-tile="${tile}">${tile}</button>`).join("")}
      </div>
      <div class="stage4-answer-actions">
        <button class="secondary-button" id="timeAnswerClear" type="button">全消去</button>
        <button class="primary-button" id="timeAnswerCast" type="button">呪文を唱える</button>
      </div>
      ${feedback?.type === "fail" ? `<p class="result-message is-fail">山の壁は動かない。選んだ文字を確認しよう。</p>` : ""}
    </section>
  `;
}

function wireStage4Memo() {
  document.querySelectorAll("[data-s4-group]").forEach((button) => {
    button.addEventListener("click", () => {
      const [question, group] = (button.dataset.s4Group || "0:0").split(":").map(Number);
      state.stage4ActiveGroup = { question, group };
      state.stage4PickerOpen = true;
      render();
    });
  });
  document.querySelectorAll("[data-s4-choice]").forEach((button) => {
    button.addEventListener("click", () => {
      const question = Math.min(Math.max(state.stage4ActiveGroup?.question || 0, 0), 3);
      const group = Math.min(Math.max(state.stage4ActiveGroup?.group || 0, 0), stage4MemoShape[question].length - 1);
      const memo = normalizeStage4Memo(state.stage4Memo);
      const target = memo.cells[question][group];
      const emptyIndex = target.findIndex((character) => !character);
      if (emptyIndex < 0) return;
      target[emptyIndex] = button.dataset.s4Choice || "";
      state.stage4Memo = memo;
      if (emptyIndex === target.length - 1 && group < stage4MemoShape[question].length - 1) {
        state.stage4ActiveGroup = { question, group: group + 1 };
      }
      render();
    });
  });
  document.querySelector("#stage4PickerBackspace")?.addEventListener("click", () => {
    state.stage4PickerOpen = false;
    render();
  });
  document.querySelector("#stage4PickerClear")?.addEventListener("click", () => {
    state.stage4PickerOpen = false;
    render();
  });
  document.querySelector("#stage4PickerDelete")?.addEventListener("click", () => {
    const question = Math.min(Math.max(state.stage4ActiveGroup?.question || 0, 0), 3);
    const group = Math.min(Math.max(state.stage4ActiveGroup?.group || 0, 0), stage4MemoShape[question].length - 1);
    const memo = normalizeStage4Memo(state.stage4Memo);
    const target = memo.cells[question][group];
    let lastFilled = target.length - 1;
    while (lastFilled >= 0 && !target[lastFilled]) lastFilled -= 1;
    if (lastFilled >= 0) target[lastFilled] = "";
    state.stage4Memo = memo;
    render();
  });
  document.querySelectorAll("[data-s4-final-char]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.s4FinalChar);
      const active = new Set(Array.isArray(state.stage4FinalActive) ? state.stage4FinalActive : []);
      if (active.has(index)) active.delete(index);
      else active.add(index);
      state.stage4FinalActive = [...active].sort((a, b) => a - b);
      button.classList.toggle("is-active", active.has(index));
      button.setAttribute("aria-pressed", String(active.has(index)));
      saveState();
    });
  });
}

function wireStage(stage, done) {
  const note = document.querySelector("#stageNote");
  if (stage.id === "shop") wireShopSuccessSequence(stage);
  if (stage.id === "time") {
    wireStage4Memo();
    wireTimeSuccessSequence(stage);
  }
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
    document.querySelector("#clearSlots")?.addEventListener("click", () => {
      resetStageInput();
      render();
    });
    document.querySelector("#activateStage")?.addEventListener("click", () => {
      checkStage(stage, state.slotInput.join(""));
    });
  }
  if (stage.type === "shop") {
    document.querySelector("#shopLockButton")?.addEventListener("click", () => {
      state.shopLockPromptOpen = true;
      state.shopLockCode = "";
      state.shopLockError = false;
      render();
      requestAnimationFrame(() => document.querySelector("#shopLockInput")?.focus());
    });
    document.querySelector("#shopLockCancel")?.addEventListener("click", () => {
      state.shopLockPromptOpen = false;
      state.shopLockCode = "";
      state.shopLockError = false;
      render();
    });
    document.querySelector("#shopLockInput")?.addEventListener("input", (event) => {
      const input = event.currentTarget;
      input.value = input.value.replace(/\D/g, "").slice(0, 2);
      state.shopLockCode = input.value;
      state.shopLockError = false;
    });
    document.querySelector("#shopLockForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = document.querySelector("#shopLockInput");
      const code = (input?.value || "").replace(/\D/g, "").slice(0, 2);
      state.shopLockCode = code;
      if (code === "89") {
        state.shopLockOpen = true;
        state.shopLockPromptOpen = false;
        state.shopLockCode = "";
        state.shopLockError = false;
        audioDirector.playEffect("success");
        render();
        return;
      }
      state.shopLockError = true;
      audioDirector.playEffect("fail");
      render();
      requestAnimationFrame(() => {
        const nextInput = document.querySelector("#shopLockInput");
        nextInput?.focus();
        nextInput?.select();
      });
    });
    document.querySelectorAll(".stage3-answer-option").forEach((button) => {
      button.addEventListener("click", () => {
        if (done || !state.shopLockOpen) return;
        state.shopPendingItem = button.dataset.item || "";
        state.feedback = null;
        render();
      });
    });
    document.querySelector("#cancelShopItem")?.addEventListener("click", () => {
      state.shopPendingItem = "";
      render();
    });
    document.querySelector("#confirmShopItem")?.addEventListener("click", () => {
      const selected = state.shopPendingItem;
      state.shopPendingItem = "";
      checkStage(stage, selected);
    });
  }
  if (stage.id === "time") {
    document.querySelector("#timeAnswerToggle")?.addEventListener("click", () => {
      state.timeAnswerOpen = !state.timeAnswerOpen;
      state.feedback = null;
      render();
    });
    document.querySelector("#timeAnswerClose")?.addEventListener("click", () => {
      state.timeAnswerOpen = false;
      state.feedback = null;
      render();
    });
    document.querySelectorAll("[data-time-slot]").forEach((button) => {
      button.addEventListener("click", () => {
        state.activeSlot = Number(button.dataset.timeSlot);
        render();
      });
    });
    document.querySelectorAll("[data-time-tile]").forEach((button) => {
      button.addEventListener("click", () => {
        const slotCount = stage.textProblem?.answerBoxes || 6;
        const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), slotCount - 1);
        state.slotInput = Array.from({ length: slotCount }, (_, index) => state.slotInput[index] || "");
        state.slotInput[slot] = button.dataset.timeTile || "";
        const nextEmpty = state.slotInput.findIndex((value) => !value);
        state.activeSlot = nextEmpty >= 0 ? nextEmpty : Math.min(slot + 1, slotCount - 1);
        state.feedback = null;
        render();
      });
    });
    document.querySelector("#timeAnswerClear")?.addEventListener("click", () => {
      resetStageInput();
      state.feedback = null;
      render();
    });
    document.querySelector("#timeAnswerCast")?.addEventListener("click", () => {
      const slotCount = stage.textProblem?.answerBoxes || 6;
      checkStage(stage, Array.from({ length: slotCount }, (_, index) => state.slotInput[index] || "").join(""));
    });
  }
  document.querySelector("#genericClosePanel")?.addEventListener("click", () => {
    state.genericPanelMode = "closed";
    state.timeAnswerOpen = false;
    state.learnedSpellViewerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#genericToPlay")?.addEventListener("click", () => {
    state.genericPanelMode = "problem";
    state.feedback = null;
    render();
  });
  document.querySelector("#genericToProblem")?.addEventListener("click", () => {
    state.genericPanelMode = "problem";
    state.feedback = null;
    render();
  });
  document.querySelector("#toggleLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = !state.learnedSpellViewerOpen;
    render();
  });
  document.querySelector("#closeLearnedSpellViewer")?.addEventListener("click", () => {
    state.learnedSpellViewerOpen = false;
    render();
  });
  document.querySelectorAll("[data-learned-stage]").forEach((button) => {
    button.addEventListener("click", () => {
      state.learnedSpellStage = button.dataset.learnedStage || "gate";
      render();
    });
  });
  const next = document.querySelector("#nextButton");
  if (next) {
    next.addEventListener("click", () => {
      state.stageIndex = Math.min(state.stageIndex + 1, stages.length - 1);
      closeStagePanelsOnEntry(stages[state.stageIndex]);
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
  if (normalizeAnswer(value) !== normalizeAnswer(stage.correct)) {
    state.feedback = { stageId: stage.id, type: "fail" };
    audioDirector.playEffect("fail");
    render();
    return;
  }
  if (stage.id === "shop") {
    addUnique(state.spells, stage.reward);
    resetStageInput();
    state.feedback = { stageId: stage.id, type: "success", phase: "learned" };
    state.genericPanelMode = "clear";
    audioDirector.playEffect("success");
    render();
    burstOnce(".shop-sequence-card");
    return;
  }
  if (stage.id === "time") {
    addUnique(state.spells, stage.reward);
    state.timeAnswerOpen = false;
    state.timeSequencePhase = "learned";
    state.feedback = null;
    state.genericPanelMode = "clear";
    resetStageInput();
    audioDirector.playEffect("success");
    render();
    burstOnce(".time-spell-sequence-card");
    return;
  }
  addUnique(state.cleared, stage.id);
  addUnique(state.spells, stage.reward);
  resetStageInput();
  state.feedback = { stageId: stage.id, type: "success" };
  state.genericPanelMode = "clear";
  audioDirector.playEffect("success");
  render();
  burstOnce(".stage-clear-card");
}

function getBossAttackText(step, index) {
  if (!step.after) return "";
  if (index === 5 && state.bossColorRemoved) {
    return "『一犬糸争を放つ』糸のように繊細で鋭い爪による弱攻撃。カタメで防ぐ！";
  }
  return step.after;
}

const bossActionDescriptions = [
  "糸のように繊細で鋭い爪による弱攻撃『一犬糸争』を放とうとしている",
  "両の前足で地面を叩き、「二脚地動」で周囲を揺らそうとしている",
  "小幡の方へ向き、目が合うと石化する「三石化線」を放とうとしている",
  "大技を放つため、動かずに力を溜めようとしている",
  "『百黙絶静』を放とうとしている。百発百中の即死攻撃で、放たれれば全空間が消滅し沈黙する",
  "『一犬糸争』を放とうとしている",
  "「零式空間」を放とうとしている。空間から出る事を不可能にする念で、現在異空間にいる者にのみ有効",
  "最後の抵抗をしようとしている。仲間を思い出し、とびきりの一撃を放つ時だ",
];

const bossSuccessEffects = [
  "バリが鋭い爪の攻撃を弾いた！",
  "フユウで地面から離れ、揺れをかわした！",
  "ヘンガオで白目をむき、視線を合わせず石化を防いだ！",
  "ラスボスは大技前の溜めを続け、こちらの呪文には反応しない。",
  "ゴクロウサマが『百黙絶静』の中の色を消した！",
  "カタメで『一犬糸争』を防いだ！",
  "タイムマシンで一時的に未来空間へ移動し、零式空間の対象から外れた！",
  "バタフライエフェクトが未来を変え、とびきりの一撃を放った！",
];

const bossSuccessScenes = [
  {
    label: "防御成功",
    title: "鋭い爪を弾き返した！",
    story: "バリの光壁が一犬糸争を正面から受け止めた。火花を散らした爪が、ラスボスの腕ごと大きく押し戻される。",
  },
  {
    label: "回避成功",
    title: "地響きを飛び越えた！",
    story: "フユウで身体が宙へ浮かび、二脚地動の衝撃波が足元を通り抜けた。崩れた床の上へ静かに着地する。",
  },
  {
    label: "石化回避",
    title: "白目で魔眼をやり過ごした！",
    story: "ヘンガオで自分の両目を白目にした。ラスボスが三石化線を浴びせるが、三秒間視線が合わないため石化は成立しない。",
  },
  {
    label: "呪文使用",
    title: "大技の前に一手を打った！",
    story: "ラスボスは力を溜めたまま動かない。ここで選んだ呪文が、次の攻撃を切り抜けるための条件になる。",
  },
  {
    label: "色消去成功",
    title: "百黙絶静を書き換えた！",
    story: "ゴクロウサマが発動。百・黙・絶・静に潜む四つの色が引き抜かれ、必殺の言葉そのものが崩れ始める。",
  },
  {
    label: "防御成功",
    title: "変化した攻撃を受け止めた！",
    story: "弱体化した一犬糸争をカタメで真正面から防いだ。ラスボスの爪が砕け、巨体が初めて膝をつく。",
  },
  {
    label: "空間回避",
    title: "零式空間の外へ逃れた！",
    story: "タイムマシンで一瞬だけ未来へ移動した。現在異空間を閉ざす零式空間は対象を失い、空しく消滅する。",
  },
  {
    label: "最終撃破",
    title: "未来を変える一撃が届いた！",
    story: "仲間と積み重ねた選択が一つの力になった。バタフライエフェクトが運命を反転させ、最後の一撃が闇を貫く。",
  },
];

function getBossSuccessScene(index, castValue) {
  if (index === 3 && normalizeAnswer(castValue) === normalizeAnswer("ツケモノ")) {
    return {
      label: "足場生成",
      title: "言葉を置く足場ができた！",
      story: "ツケモノが石板の右端に四角い土台を生み出した。次の6文字呪文で、最後の一文字を置くための「言葉の足場」だ。",
      spell: "ツケモノ 発動",
    };
  }
  const scene = bossSuccessScenes[index] || bossSuccessScenes[bossSuccessScenes.length - 1];
  return {
    ...scene,
    spell: `${castValue || bossBattle[index]?.answer || "呪文"} 発動`,
  };
}

function renderBossTsukemonoBranch() {
  return `
    <div class="boss-tsukemono-branch" aria-label="ツケモノで言葉の足場を生成した">
      <div class="boss-word-platform" aria-hidden="true"><i></i><b>6</b></div>
      <div>
        <strong>6文字目の土台を生成</strong>
        <p>次の呪文では、一番右の空欄にも文字を置ける。</p>
      </div>
    </div>
  `;
}

function getBossActionDescription(index) {
  return bossActionDescriptions[index] || "最後の攻撃を放とうとしている";
}

function renderBossActionImage(index) {
  const column = index % 4;
  const row = Math.floor(index / 4);
  return `<div class="boss-action-image" role="img" aria-label="ラスボスの第${index + 1}行動" style="background-position:${column * 33.3333}% ${row * 100}%;"></div>`;
}

function renderBossForecast(index, label, className) {
  if (index >= bossBattle.length) return "";
  return `
    <article class="boss-forecast-card ${className}">
      <div class="boss-forecast-image">${renderBossActionImage(index)}</div>
      <div><span>${label}</span><p>ラスボスは${getBossActionDescription(index)}</p></div>
    </article>
  `;
}

function renderBossColorRemovalEffect() {
  const changes = [
    ["百", "白", "一"],
    ["黙", "黒", "犬"],
    ["絶", "色", "糸"],
    ["静", "青", "争"],
  ];
  return `
    <div class="boss-color-removal" aria-label="括弧内の百黙絶静から赤い白黒色青が消えて一犬糸争になる">
      <div class="boss-color-phrase" aria-hidden="true">
        <span class="boss-color-bracket">『</span>
        ${changes.map(([source, removed, result], index) => `
          <span class="boss-color-glyph" style="--remove-order:${index}">
            <b class="boss-color-original">${source}</b>
            <i class="boss-color-removed">${removed}</i>
            <em class="boss-color-survivor">${result}</em>
          </span>
        `).join("")}
        <span class="boss-color-bracket">』</span>
      </div>
      <p>『　』の中の「<strong class="boss-color-word">いろ</strong>」を消去中…</p>
      <strong class="boss-color-result-copy">『一犬糸争』になった！</strong>
    </div>
  `;
}

function renderBossSixthSlotBuilder() {
  return `
    <div class="boss-direct-slots boss-sixth-slot-builder" aria-label="6文字目が未完成の回答欄">
      ${Array.from({ length: 5 }).map(() => "<span></span>").join("")}
      <span class="boss-missing-slot" aria-label="6文字目の枠を置ける場所">
        <i class="boss-tsukemono-block-icon" aria-hidden="true"></i>
        <small>↑ ブロックを置ける</small>
      </span>
    </div>
    <button class="primary-button" id="useTsukemonoSlot" type="button">ツケモノで6文字目の枠を作る</button>
  `;
}

function canCreateBossSixthSlot() {
  const usedTsukemono = normalizeAnswer(state.bossInput[3] || "") === normalizeAnswer("ツケモノ");
  return usedTsukemono
    && state.bossTsukemonoActivated === true
    && state.bossSlotCreationPending === true
    && !state.bossSixthSlotCreated;
}

function renderBossIntro() {
  return `
    <section class="boss-intro-cinematic" aria-label="ラスボス戦 開幕">
      <button class="panel-close-button boss-intro-close" id="bossIntroClose" type="button" aria-label="戦闘導入を閉じる">×</button>
      <div class="boss-intro-warning" aria-hidden="true"><span></span><b>FINAL BATTLE</b><span></span></div>
      <div class="boss-intro-shockwave" aria-hidden="true"></div>
      <div class="boss-intro-copy">
        <span class="boss-intro-kicker">EXIT BLOCKED</span>
        <h2>出口の前に、巨大な影が立ちはだかった</h2>
        <p class="boss-intro-story">山を越え、ようやく見つけた異空間の出口。光へ手を伸ばしたその瞬間、地面が激しく揺れ、出口を守る獣が闇の中から姿を現した。</p>
        <blockquote class="boss-intro-enemy">「ここまで辿り着いたか。だが、この出口は渡さない。覚えた呪文ごと、すべて喰らい尽くしてやろう」</blockquote>
        <blockquote class="boss-intro-guide">「来るぞ！ 敵の次の行動を見極めるんじゃ。これまで覚えた呪文を一度ずつ使い、最後の試練を切り抜けろ！」</blockquote>
        <button class="primary-button boss-intro-start" id="bossIntroStart" type="button">戦闘開始</button>
      </div>
    </section>
  `;
}

function renderBoss(stage) {
  const mode = state.bossPanelMode || "closed";
  elements.game.innerHTML = `
    <section class="stage-panel immersive-stage boss-immersive-stage ${state.bossIntroOpen ? "is-intro" : ""}" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world boss-stage-world">
        <img class="stage-bg-art" src="./assets/stage05-bg-premium.webp" alt="出口を守るラスボス" loading="eager">
        <div class="art-vignette"></div>
      </div>
      <div class="stage-corner-label"><span>${stage.number}</span><strong>${stage.title}</strong></div>
      ${!state.bossIntroOpen && mode === "closed" ? `<button class="primary-button boss-fight-start" id="bossFightStart" type="button">ラスボスと戦う</button>` : ""}
      ${state.bossIntroOpen ? renderBossIntro() : mode === "spells" ? renderBossSpellBookPanel(stage) : ""}
      ${!state.bossIntroOpen && (mode === "problem" || mode === "play") ? renderBossProblemPanel(stage) : ""}
    </section>
  `;
  wireBoss();
}

function renderBossSpellBookPanel(stage) {
  const pastSpells = getBossPastSpells();
  return `
    <section class="immersive-panel boss-spell-book-panel" aria-label="過去と新しく覚えた呪文">
      <div class="immersive-panel-head">
        <div><span>STAGE ${stage.number}</span><strong>覚えた呪文</strong></div>
        <button class="panel-close-button" id="bossClosePanel" type="button" aria-label="呪文一覧を閉じる">×</button>
      </div>
      <div class="boss-spell-book-scroll">
        <section class="boss-spell-book-section">
          <h3>過去の呪文</h3>
          <div class="boss-spell-book-grid">
            ${pastSpells.map(renderBossSpellEntry).join("")}
          </div>
        </section>
        <section class="boss-spell-book-section">
          <h3>新しく覚えた呪文</h3>
          <div class="boss-spell-book-grid">
            ${bossNewSpells.map(renderBossSpellEntry).join("")}
          </div>
        </section>
      </div>
    </section>
  `;
}

function renderBossProblemPanel(stage) {
  const currentIndex = Math.min(state.bossInput.length, bossBattle.length - 1);
  const requestedReviewIndex = Number.isInteger(state.bossReviewIndex) ? state.bossReviewIndex : currentIndex;
  const index = Math.min(Math.max(requestedReviewIndex, 0), currentIndex);
  const reviewingPast = index < currentIndex;
  const step = bossBattle[index];
  const feedback = reviewingPast ? null : state.feedback?.stageId === "boss" ? state.feedback : null;
  const effectActive = feedback?.phase === "effect" || feedback?.phase === "hit";
  const tsukemonoBranch = feedback?.branch === "tsukemono";
  const needsSixthSlot = normalizeAnswer(step.answer) === normalizeAnswer("ゴクロウサマ") && !state.bossSixthSlotCreated;
  const canCreateSixthSlot = needsSixthSlot && canCreateBossSixthSlot();
  const missingTsukemonoSlot = needsSixthSlot && !canCreateSixthSlot;
  const slotCount = needsSixthSlot ? 5 : step.slots;
  const effectCopy = feedback?.phase === "effect"
    ? bossSuccessEffects[index]
    : feedback?.phase === "hit"
      ? "呪文が外れた。ラスボスの攻撃を受けた！"
      : "";
  const successScene = feedback?.phase === "effect" ? getBossSuccessScene(index, feedback.castValue) : null;
  return `
    <section class="immersive-panel boss-problem-panel boss-current-problem ${feedback?.phase === "hit" ? "is-hit" : ""}" aria-label="ラスボス 第${index + 1}問">
      <div class="immersive-panel-head">
        <div><span>FINAL BATTLE ${index + 1} / ${bossBattle.length}</span><strong>ラスボスの行動を見て呪文を選べ</strong></div>
        <div class="boss-review-nav" aria-label="過去の問題を見る">
          ${index > 0 ? `<button id="bossReviewPrev" type="button" aria-label="前の問題を見る">←</button>` : ""}
          ${reviewingPast ? `<button id="bossReviewCurrent" type="button">現在の問題へ →</button>` : ""}
        </div>
        <button class="panel-close-button" id="bossClosePanel" type="button" aria-label="問題を閉じる">×</button>
      </div>
      <div class="boss-current-layout">
        <div class="boss-visual-stack">
          <div class="boss-current-visual">
            ${renderBossActionImage(index)}
            <span class="boss-current-step">第${index + 1}問</span>
          </div>
          <div class="boss-forecast-strip" aria-label="この後の行動">
            ${renderBossForecast(index + 1, "次の行動", "is-next")}
          </div>
        </div>
        <section class="boss-current-copy ${effectActive ? "is-effect-mode" : ""}">
          <p class="boss-intent-text">ラスボスは${getBossActionDescription(index)}</p>
          <div class="boss-current-meta"><span>呪文は1種類につき1回</span></div>
          ${reviewingPast ? `
            <div class="boss-review-notice">回答済みの問題を表示しています。</div>
          ` : effectActive ? `
            <div class="boss-step-effect ${feedback.phase === "hit" ? "is-damage" : "is-success"} ${tsukemonoBranch ? "is-tsukemono-branch" : ""}" aria-live="assertive">
              ${feedback.phase === "hit" ? `
                <strong>${feedback.message || effectCopy}</strong>
              ` : `
                <div class="boss-clear-stamp"><span>FINAL BATTLE</span><b>${index + 1} / ${bossBattle.length} CLEARED</b></div>
                <div class="boss-spell-impact" aria-hidden="true"><i></i><i></i><i></i></div>
                <small class="boss-effect-spell">${successScene.spell}</small>
                <strong>${successScene.title}</strong>
                <p class="boss-effect-story">${successScene.story}</p>
                ${tsukemonoBranch ? renderBossTsukemonoBranch() : index === 4 ? renderBossColorRemovalEffect() : `<p class="boss-effect-result">${effectCopy}</p>`}
              `}
              ${feedback.phase === "hit" ? `<span>「最初からやり直す」を押すと第1問へ戻る。</span>` : ""}
              <button class="primary-button boss-effect-next" id="bossEffectNext" type="button">${feedback.phase === "hit" ? "最初からやり直す" : index === bossBattle.length - 1 ? "勝利を見届ける" : "次の攻撃へ"}</button>
            </div>
          ` : `
            <div class="boss-current-actions">
              <button class="primary-button" id="bossOpenAnswer" type="button">${state.bossAnswerOpen ? "呪文入力を閉じる" : "呪文を入力"}</button>
              <button class="secondary-button" id="bossOpenSpellBook" type="button">呪文の書</button>
            </div>
            ${state.bossAnswerOpen ? `
              <section class="boss-current-answer" aria-label="第${index + 1}問の呪文入力">
                ${canCreateSixthSlot ? `
                  ${renderBossSixthSlotBuilder()}
                ` : `
                  <div class="boss-slate boss-current-slate ${slotCount >= 8 ? "is-long-spell" : ""} ${missingTsukemonoSlot ? "has-transparent-sixth-slot" : ""}" style="--boss-slot-count:${missingTsukemonoSlot ? 6 : slotCount}" aria-label="${missingTsukemonoSlot ? "6文字の回答欄。6文字目の枠は未生成" : `${slotCount}文字の回答欄`}">
                    ${Array.from({ length: slotCount }, (_, slot) => `<button class="premium-slot ${slot === state.activeSlot ? "is-selected" : ""}" type="button" data-slot="${slot}" aria-label="${slot + 1}文字目">${state.slotInput[slot] || ""}</button>`).join("")}
                    ${missingTsukemonoSlot ? `<span class="boss-transparent-sixth-slot" aria-label="透明な6文字目の枠"></span>` : ""}
                  </div>
                  ${state.slotPickerOpen ? renderSlotPicker({ tiles: getBossTiles(index) }, state.activeSlot) : ""}
                  ${missingTsukemonoSlot ? `
                    <div class="boss-incomplete-cast-row">
                      <button class="primary-button cast-button" id="castBossSpell" type="button">呪文を唱える</button>
                      <div class="boss-tsukemono-base-image" aria-label="ツケモノを生成できる土台">
                        <img src="./assets/stage01-clear2.webp" alt="ツケモノの土台">
                      </div>
                    </div>
                  ` : `<button class="primary-button cast-button" id="castBossSpell" type="button">呪文を唱える</button>`}
                `}
              </section>
            ` : ""}
          `}
          ${index === bossBattle.length - 1 ? `<p class="boss-final-clue">「今こそ共に歩んだ仲間の事を思い出す時じゃ。どんなに離れても皆仲間、さぁとびきりの一撃を放つのじゃ」<span aria-label="蝶の印">蝶の印</span></p>` : ""}
        </section>
      </div>
    </section>
  `;
}

function renderBossDirectAnswer(stage) {
  const step = bossBattle[state.bossInput.length];
  if (!step) {
    return `<section class="boss-direct-answer is-complete"><h3>すべての攻撃を切り抜けた</h3><p>ラスボスへの回答は完了しています。</p></section>`;
  }
  const isGokurosama = normalizeAnswer(step.answer) === normalizeAnswer("ゴクロウサマ");
  const learnedTsukemono = state.bossInput.some((spell) => normalizeAnswer(spell) === normalizeAnswer("ツケモノ"));
  const hasTsukemono = state.bossTsukemonoActivated === true;
  const feedback = state.feedback?.stageId === "boss" && state.feedback.type === "fail" ? state.feedback.message : "";
  const colorRemovalNotice = state.bossColorRemoved && normalizeAnswer(step.answer) === normalizeAnswer("カタメ")
    ? `<p class="result-message is-success boss-gokurosama-effect">ゴクロウサマを唱えた！『百黙絶静』の中の色を消したことで『一犬糸争』になった！『カタメ』で防ぐ。</p>`
    : "";
  if (isGokurosama && !state.bossSixthSlotCreated) {
    return `
      <section class="boss-direct-answer boss-slot-creation" aria-label="ゴクロウサマの6文字目">
        <h3>ゴクロウサマの6文字目</h3>
        ${hasTsukemono
          ? renderBossSixthSlotBuilder()
          : learnedTsukemono
            ? `<p class="boss-direct-locked">6文字目の土台にツケモノを使う。</p><button class="primary-button" id="castTsukemonoForSlot" type="button">ツケモノを唱える</button>`
            : `<p class="boss-direct-locked">先にツケモノを習得して、この場所で使う。</p>`}
      </section>
    `;
  }
  return `
    <section class="boss-direct-answer" aria-label="呪文を直接回答">
      <h3>この問題に直接回答</h3>
      <p>第${state.bossInput.length + 1}手 / ${step.answer === "ゴクロウサマ" ? "6" : step.slots}文字</p>
      <div class="boss-direct-slots" aria-label="${step.slots}文字の回答欄">${Array.from({ length: step.slots }).map(() => "<span></span>").join("")}</div>
      <form id="bossDirectForm" class="boss-direct-form">
        <input id="bossDirectInput" type="text" maxlength="${step.slots}" autocomplete="off" inputmode="text" placeholder="呪文を入力" aria-label="呪文を直接入力" />
        <button class="primary-button" id="bossDirectSubmit" type="submit">回答する</button>
      </form>
      ${colorRemovalNotice}
      ${feedback ? `<p class="result-message is-fail">${feedback}</p>` : ""}
    </section>
  `;
}

function renderBossSlate(step, index, solved, active) {
  const chars = solved
    ? [...step.answer]
    : Array.from({ length: step.slots }, (_, i) => (active ? state.slotInput[i] || "" : ""));
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), step.slots - 1);
  const pickerOpen = active && state.slotPickerOpen === true;
  const feedback = active && state.feedback?.stageId === "boss" && state.feedback.type === "fail" ? state.feedback : null;
  return `
    <div class="boss-step ${solved ? "is-solved" : active ? "is-active" : "is-locked"}">
      <div class="boss-step-head">
        <span class="boss-step-label">石板 ${step.slots}文字</span>
        ${solved ? `<span class="boss-step-done">☆発動済み</span>` : active ? `<span class="boss-step-now">いま唱える</span>` : ""}
      </div>
      <div class="boss-slate">
        ${chars
          .map((char, i) =>
            active
              ? `<button class="premium-slot ${i === activeSlot ? "is-selected" : ""}" type="button" data-slot="${i}" aria-pressed="${i === activeSlot}">${char}</button>`
              : `<span class="premium-slot boss-slot-static">${char}</span>`,
          )
          .join("")}
      </div>
      ${active
        ? `
          ${pickerOpen ? renderSlotPicker({ tiles: getBossTiles(index) }, activeSlot) : ""}
          <button class="primary-button cast-button" id="castBossSpell" type="button">呪文を唱える</button>
          ${feedback ? `<p class="result-message is-fail">${feedback.message || "何も起こらない。"}</p>` : ""}
        `
        : ""}
    </div>
  `;
}

function wireBoss() {
  wireProblems();
  document.querySelector("#bossFightStart")?.addEventListener("click", () => {
    state.bossIntroOpen = state.bossInput.length === 0;
    state.bossPanelMode = state.bossIntroOpen ? "closed" : "problem";
    state.feedback = null;
    if (state.bossIntroOpen) audioDirector.playEffect("boss-intro");
    render();
  });
  document.querySelector("#bossReviewPrev")?.addEventListener("click", () => {
    const currentIndex = Math.min(state.bossInput.length, bossBattle.length - 1);
    const shownIndex = Number.isInteger(state.bossReviewIndex) ? state.bossReviewIndex : currentIndex;
    state.bossReviewIndex = Math.max(0, shownIndex - 1);
    state.bossAnswerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#bossReviewCurrent")?.addEventListener("click", () => {
    state.bossReviewIndex = null;
    state.bossAnswerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#bossIntroStart")?.addEventListener("click", () => {
    state.bossIntroOpen = false;
    state.bossPanelMode = "problem";
    state.feedback = null;
    audioDirector.playEffect("boss-guard");
    render();
  });
  document.querySelector("#bossIntroClose")?.addEventListener("click", () => {
    state.bossIntroOpen = false;
    state.bossPanelMode = "closed";
    state.feedback = null;
    render();
  });
  document.querySelector("#bossClosePanel")?.addEventListener("click", () => {
    state.bossPanelMode = state.bossPanelMode === "spells" ? "problem" : "closed";
    state.bossAnswerOpen = false;
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#bossOpenAnswer")?.addEventListener("click", () => {
    state.bossAnswerOpen = !state.bossAnswerOpen;
    state.feedback = null;
    render();
  });
  document.querySelector("#bossOpenSpellBook")?.addEventListener("click", () => {
    state.bossPanelMode = "spells";
    state.feedback = null;
    render();
  });
  document.querySelector("#bossToProblem")?.addEventListener("click", () => {
    state.bossPanelMode = "problem";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#bossToPlay")?.addEventListener("click", () => {
    state.bossPanelMode = "play";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#useTsukemonoSlot")?.addEventListener("click", () => {
    if (!canCreateBossSixthSlot()) return;
    state.bossSlotCreationPending = false;
    state.bossTsukemonoActivated = true;
    state.bossSixthSlotCreated = true;
    state.bossAnswerOpen = true;
    state.feedback = null;
    state.slotInput = [];
    render();
  });
  document.querySelector("#castTsukemonoForSlot")?.addEventListener("click", () => {
    if (!state.bossInput.some((spell) => normalizeAnswer(spell) === normalizeAnswer("ツケモノ"))) return;
    state.bossTsukemonoActivated = true;
    state.bossSixthSlotCreated = false;
    state.feedback = null;
    audioDirector.playEffect("spell-cast");
    render();
  });
  const step = bossBattle[state.bossInput.length];
  if (!step) return;
  const needsSixthSlot = normalizeAnswer(step.answer) === normalizeAnswer("ゴクロウサマ") && !state.bossSixthSlotCreated;
  const inputSlotCount = needsSixthSlot && !canCreateBossSixthSlot() ? 5 : step.slots;
  document.querySelector("#bossEffectNext")?.addEventListener("click", () => {
    const feedback = state.feedback?.stageId === "boss" ? state.feedback : null;
    if (feedback?.phase === "effect") completeBossStep(step);
    else if (feedback?.phase === "hit") resetBossAfterHit();
  });
  if (state.slotPickerOpen) {
    requestAnimationFrame(() => document.querySelector(".slot-choice-popover")?.scrollIntoView({ block: "nearest" }));
  }
  document.querySelectorAll(".boss-step.is-active .premium-slot[data-slot], .boss-current-answer .premium-slot[data-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSlot = Number(button.dataset.slot);
      state.slotPickerOpen = true;
      state.feedback = null;
      render();
    });
  });
  document.querySelectorAll(".slot-choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), inputSlotCount - 1);
      state.slotInput = Array.from({ length: inputSlotCount }, (_, i) => state.slotInput[i] || "");
      state.slotInput[slot] = button.dataset.tile;
      state.activeSlot = Math.min(slot + 1, inputSlotCount - 1);
      state.slotPickerOpen = false;
      state.feedback = null;
      render();
      popOnce(`.premium-slot[data-slot="${slot}"]`);
    });
  });
  document.querySelector("#clearActiveSlot")?.addEventListener("click", () => {
    const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), inputSlotCount - 1);
    state.slotInput = Array.from({ length: inputSlotCount }, (_, i) => state.slotInput[i] || "");
    state.slotInput[slot] = "";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#castBossSpell")?.addEventListener("click", () => castBossSpell({ ...step, slots: inputSlotCount }));
}

function castBossSpell(step) {
  state.slotPickerOpen = false;
  const letters = Array.from({ length: step.slots }, (_, i) => state.slotInput[i] || "");
  if (letters.some((char) => !char)) {
    state.feedback = { stageId: "boss", type: "fail", message: "石板の全てのマスに文字を刻むのじゃ。" };
    render();
    return;
  }
  const value = normalizeAnswer(letters.join(""));
  if (state.bossInput.length === 3 || value === normalizeAnswer(step.answer)) {
    startBossSuccessEffect(step, letters.join(""));
    return;
  }
  const used = state.bossInput.map((spell) => normalizeAnswer(spell));
  const known = [...bossNewSpells, ...getBossPastSpells()].map((spell) => normalizeAnswer(spell.name));
  let message = "何も起こらない。それは呪文の形をしていないようだ。";
  if (used.includes(value)) {
    message = "その呪文はもう使ってしまった。1呪文につき1回までじゃ。";
  } else if (value === normalizeAnswer("イチゲキゼンリョクデ")) {
    message = "仲間の命と引き換えになど出来ない…。じいさんのエールを思い出すのじゃ。";
  } else if (known.includes(value)) {
    message = "獣には通じない！状況と文字数に合う呪文を見極めるのじゃ。";
  }
  startBossHit(message);
}

function castBossDirectAnswer(step, value) {
  if (!String(value).trim()) {
    state.feedback = { stageId: "boss", type: "fail", message: "呪文を入力してください。" };
    render();
    return;
  }
  if (state.bossInput.length === 3 || normalizeAnswer(value) === normalizeAnswer(step.answer)) {
    startBossSuccessEffect(step, value);
    return;
  }
  startBossHit("その呪文では攻撃を防げなかった。");
}

function startBossSuccessEffect(step, castValue = step.answer) {
  const stepIndex = state.bossInput.length;
  const branch = stepIndex === 3 && normalizeAnswer(castValue) === normalizeAnswer("ツケモノ")
    ? "tsukemono"
    : "default";
  state.bossAnswerOpen = false;
  state.feedback = { stageId: "boss", type: "success", phase: "effect", branch, stepIndex, castValue };
  audioDirector.playEffect(stepIndex === 4 ? "color-remove" : "boss-guard");
  render();
}

function startBossHit(message) {
  state.bossAnswerOpen = false;
  state.feedback = { stageId: "boss", type: "fail", phase: "hit", message };
  audioDirector.playEffect("boss-hit");
  render();
}

function resetBossAfterHit() {
  state.bossInput = [];
  state.slotInput = [];
  state.activeSlot = 0;
  state.slotPickerOpen = false;
  state.bossAnswerOpen = false;
  state.bossSlotCreationPending = false;
  state.bossTsukemonoActivated = false;
  state.bossSixthSlotCreated = false;
  state.bossColorRemoved = false;
  state.bossPanelMode = "closed";
  state.feedback = null;
  render();
}

function completeBossStep(step) {
  const castValue = state.feedback?.castValue || step.answer;
  state.bossInput.push(castValue);
  state.feedback = null;
  state.bossAnswerOpen = false;
  state.slotInput = [];
  state.activeSlot = 0;
  state.slotPickerOpen = false;
  if (normalizeAnswer(step.answer) === normalizeAnswer("ゴクロウサマ")) {
    state.bossColorRemoved = true;
  }
  if (normalizeAnswer(step.answer) === normalizeAnswer("ツケモノ")) {
    const usedTsukemono = normalizeAnswer(castValue) === normalizeAnswer("ツケモノ");
    state.bossTsukemonoActivated = usedTsukemono;
    state.bossSlotCreationPending = usedTsukemono;
    state.bossPanelMode = "problem";
    render();
    return;
  }
  if (state.bossInput.length >= bossBattle.length) {
    addUnique(state.cleared, "boss");
    state.isClear = true;
    state.clearPhase = "victory";
  }
  render();
  requestAnimationFrame(() => {
    const solved = document.querySelectorAll(".boss-step.is-solved");
    solved[solved.length - 1]?.classList.add("just-solved");
  });
}

function renderClear() {
  const phase = ["victory", "portal", "home"].includes(state.clearPhase) ? state.clearPhase : "victory";
  const scenes = {
    victory: {
      kicker: "FINAL BATTLE COMPLETE",
      title: "ラスボス撃破",
      caption: "バタフライエフェクトの光が闇を貫き、出口を封じていた力が崩れ落ちる。",
      button: "開いた出口へ向かう",
      nextId: "clearToPortal",
      image: "./assets/stage05-bg-premium.webp",
      alt: "光の中で崩れ落ちるラスボス",
    },
    portal: {
      kicker: "THE EXIT IS OPEN",
      title: "帰還の扉",
      caption: "砕けた封印の先に、元の世界へ続く光の扉が現れた。",
      button: "光の向こうへ進む",
      nextId: "clearReturnHome",
      image: "./assets/stage05-bg-premium.webp",
      alt: "異空間に開いた帰還の扉",
    },
    home: {
      kicker: "ESCAPE COMPLETE",
      title: "元の世界へ帰還",
      caption: "光の向こうに待っていたのは、焼ける肉の音と仲間たちの笑い声だった。",
      button: "最初から遊ぶ",
      nextId: "replayButton",
      image: "./assets/final-yakiniku-home.jpg",
      alt: "元の世界で再び始まった焼肉",
    },
  };
  const scene = scenes[phase];
  elements.game.innerHTML = `
    <section class="stage-panel clear-screen premium-final-clear is-${phase}" aria-label="${scene.title}">
      <div class="stage-world final-clear-world">
        <img class="stage-bg-art" src="${scene.image}" alt="${scene.alt}" loading="eager">
        <div class="final-clear-light"></div>
        <div class="final-clear-shards" aria-hidden="true">${Array.from({ length: 12 }).map((_, index) => `<i style="--shard:${index}"></i>`).join("")}</div>
        <div class="final-return-portal" aria-hidden="true"><i></i><b></b><span></span></div>
        <div class="final-home-steam" aria-hidden="true"><i></i><i></i><i></i></div>
      </div>
      <div class="final-scene-hud">
        <div class="final-scene-title">
          <span>${scene.kicker}</span>
          <strong>${scene.title}</strong>
        </div>
        <div class="final-scene-progress" aria-label="帰還の進行">
          <i class="${phase === "victory" ? "is-current" : "is-done"}"></i>
          <i class="${phase === "portal" ? "is-current" : phase === "home" ? "is-done" : ""}"></i>
          <i class="${phase === "home" ? "is-current" : ""}"></i>
        </div>
      </div>
      <div class="final-cinematic-caption">
        <p>${scene.caption}</p>
        <div class="final-caption-action">
          <button class="primary-button final-clear-next" id="${scene.nextId}" type="button">${scene.button}</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector("#clearToPortal")?.addEventListener("click", () => {
    state.clearPhase = "portal";
    audioDirector.playEffect("spell");
    render();
  });
  document.querySelector("#clearReturnHome")?.addEventListener("click", () => {
    state.clearPhase = "home";
    audioDirector.playEffect("clear");
    render();
  });
  document.querySelector("#replayButton")?.addEventListener("click", resetGame);
}

function resetGame() {
  closeInfoDialogs();
  clearGateSuccessTimers();
  state.stageIndex = 0;
  state.cleared = [];
  state.spells = [];
  state.bossInput = [];
  state.slotInput = [];
  state.activeSlot = 0;
  state.slotPickerOpen = false;
  state.hiddenProblems = {};
  state.hiddenSpells = {};
  state.gatePanelMode = "spell";
  state.gateAnswerOpen = false;
  state.pathAnswerOpen = false;
  state.hintLevels = {};
  state.kanaBoardActive = [];
  state.learnedSpellViewerOpen = false;
  state.learnedSpellStage = "gate";
  state.feedback = null;
  state.isClear = false;
  state.problemFit = true;
  state.pathPanelMode = "spell";
  state.stage2Memo = normalizeStage2Memo(null);
  state.memoActive = { row: 0, col: 0 };
  state.memoPickerOpen = false;
  state.stage2CellMarks = {};
  state.stage2Rotated = false;
  state.stage2SketchLines = [];
  state.stage2SketchIsolated = false;
  state.stage2SketchExpanded = false;
  state.stage4Memo = normalizeStage4Memo(null);
  state.stage4ActiveGroup = { question: 0, group: 0 };
  state.stage4PickerOpen = false;
  state.stage4FinalActive = [];
  state.timeAnswerOpen = false;
  state.timeSequencePhase = "";
  state.introReturnPhase = "";
  state.shopPendingItem = "";
  state.shopLockOpen = false;
  state.shopLockPromptOpen = false;
  state.shopLockCode = "";
  state.shopLockError = false;
  state.revealed = {};
  state.sealBooks = {};
  state.fakeSpells = {};
  state.genericPanelMode = "closed";
  state.bossPanelMode = "closed";
  state.bossIntroOpen = false;
  state.bossAnswerOpen = false;
  state.bossSlotCreationPending = false;
  state.bossTsukemonoActivated = false;
  state.bossSixthSlotCreated = false;
  state.bossColorRemoved = false;
  state.clearPhase = "victory";
  saveState();
  render();
}

function wireProblems() {
  document.querySelectorAll("[data-problem]").forEach((button) => {
    button.addEventListener("click", () => {
      openDocumentImage(button.dataset.problem, button.dataset.title || "原問題");
    });
  });
}

function openDocumentImage(file, title) {
  closeInfoDialogs();
  elements.docImage.src = `./assets/${file}`;
  elements.docTitle.textContent = title || "資料";
  if (!elements.dialog.open) elements.dialog.showModal();
}

function showMenuMessage(title, message) {
  closeInfoDialogs();
  elements.hintTitle.textContent = title;
  elements.hintBody.textContent = message;
  if (!elements.hintDialog.open) elements.hintDialog.showModal();
}

const explorationEvents = {
  gate: { choices: ["崩れた石柱の陰を調べる", "青い火が揺れる壁を調べる", "足元の瓦礫を調べる"], correct: 1, fakes: ["コイシコロ", "スナケムリ"] },
  path: { choices: ["閉ざされた扉の紋章を調べる", "通路脇の空箱を調べる", "天井の亀裂を調べる"], correct: 0, fakes: ["ハコアケ", "ホコリハライ"] },
  shop: { choices: ["鎖のかかった棚を調べる", "凍った床の反射を調べる", "壊れた看板の裏を調べる"], correct: 2, fakes: ["タナユラシ", "コオリミチ"] },
  time: { choices: ["山壁の古い碑文を調べる", "転がった小石を調べる", "枯れた草むらを調べる"], correct: 0, fakes: ["イシコロリ", "クサムスビ"] },
};

function isExplorationStage(stage) {
  return Boolean(stage && explorationEvents[stage.id]);
}

function openExploration() {
  closeInfoDialogs();
  const stage = stages[state.stageIndex] || stages[0];
  const event = explorationEvents[stage.id];
  if (!event) return showMenuMessage("探索", "この場所では探索イベントはありません。");
  elements.hintTitle.textContent = `${stage.number} / ${stage.title}　探索`;
  elements.hintBody.innerHTML = `<span class="exploration-lead">魔法使いの気配がする。調べる場所を選べ。</span><span class="exploration-choices">${event.choices.map((choice, index) => `<button class="exploration-choice" type="button" data-explore-choice="${index}">${choice}</button>`).join("")}</span>`;
  elements.hintBody.querySelectorAll("[data-explore-choice]").forEach((button) => button.addEventListener("click", () => resolveExploration(stage, Number(button.dataset.exploreChoice))));
  if (!elements.hintDialog.open) elements.hintDialog.showModal();
}

function resolveExploration(stage, choiceIndex) {
  const event = explorationEvents[stage.id];
  if (!event) return;
  if (choiceIndex === event.correct) {
    state.sealBooks = { ...(state.sealBooks || {}), [stage.id]: true };
    saveState();
    elements.hintTitle.textContent = "魔法使いを見つけた！";
    elements.hintBody.innerHTML = `<span class="exploration-result is-correct">「よく見つけた。この封印の書を授けよう。書に刻まれた問題を解けば、呪文を得られる」</span><span class="exploration-book-guide">左の「封印の書」から確認できます。</span><button class="secondary-button" id="exploreAgain" type="button">探索を続ける</button>`;
    elements.hintBody.querySelector("#exploreAgain")?.addEventListener("click", openExploration);
    audioDirector.playEffect("success");
    return;
  }
  const wrongIndexes = event.choices.map((_, index) => index).filter((index) => index !== event.correct);
  const fakeSpell = event.fakes[Math.max(0, wrongIndexes.indexOf(choiceIndex))] || event.fakes[0];
  const currentFakes = Array.isArray(state.fakeSpells?.[stage.id]) ? state.fakeSpells[stage.id] : [];
  state.fakeSpells = { ...(state.fakeSpells || {}), [stage.id]: [...new Set([...currentFakes, fakeSpell])] };
  saveState();
  elements.hintTitle.textContent = "何かを見つけた";
  elements.hintBody.innerHTML = `<span class="exploration-result is-fake">呪文「${fakeSpell}」を覚えた。</span><span class="exploration-spell-effect">${getExplorationSpellEffect(fakeSpell)}</span><button class="secondary-button" id="exploreAgain" type="button">探索を続ける</button>`;
  elements.hintBody.querySelector("#exploreAgain")?.addEventListener("click", openExploration);
  audioDirector.playEffect("fail");
}

function openCurrentSealBook() {
  closeInfoDialogs();
  const stage = stages[state.stageIndex] || stages[0];
  if (!isExplorationStage(stage)) return showMenuMessage("封印の書", "この場所に対応する封印の書はありません。");
  if (!state.sealBooks?.[stage.id]) return showMenuMessage("封印の書", "まだ封印の書を入手していない。探索で魔法使いを見つけよう。");
  focusCurrentProblem();
}

function focusCurrentProblem() {
  closeInfoDialogs();
  const stage = stages[state.stageIndex] || stages[0];
  if (!isStageRevealed(stage)) {
    state.revealed = { ...(state.revealed || {}), [stage.id]: true };
    render();
  }
  if (stage.id === "gate") {
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: false };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: false };
    state.gatePanelMode = "problem";
    state.gateAnswerOpen = false;
    state.learnedSpellViewerOpen = false;
    state.slotPickerOpen = false;
    render();
    return;
  }

  if (stage.id === "path") {
    state.pathPanelMode = "problem";
    state.pathAnswerOpen = false;
    state.learnedSpellViewerOpen = false;
    state.slotPickerOpen = false;
    render();
    return;
  }

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "problem";
    state.timeAnswerOpen = false;
    state.learnedSpellViewerOpen = false;
    state.feedback = null;
    render();
    return;
  }

  if (stage.id === "boss") {
    state.bossIntroOpen = state.bossInput.length === 0;
    state.bossPanelMode = state.bossIntroOpen ? "closed" : "problem";
    state.feedback = null;
    if (state.bossIntroOpen) audioDirector.playEffect("boss-intro");
    render();
    return;
  }

  if (state.hiddenProblems?.[stage.id] === true) {
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: false };
    render();
    requestAnimationFrame(focusCurrentProblem);
    return;
  }

  const image = stage.id === "gate" ? null : stage.sourceProblemImage || stage.problems?.[0]?.file;
  if (image) {
    openDocumentImage(image, `${stage.number} ${stage.title} 問題`);
    return;
  }

  const problem = document.querySelector(".device-problem, .text-problem, .source-image-problem, .problem-section");
  if (problem) {
    problem.scrollIntoView({ behavior: "smooth", block: "center" });
    problem.classList.remove("is-menu-focus");
    requestAnimationFrame(() => problem.classList.add("is-menu-focus"));
    return;
  }

  showMenuMessage("問題", "このステージの問題は画面内に表示されています。");
}

function focusCurrentMagic() {
  closeInfoDialogs();
  const stage = stages[state.stageIndex] || stages[0];
  if (!isStageRevealed(stage)) {
    state.revealed = { ...(state.revealed || {}), [stage.id]: true };
    render();
  }
  if (stage.id === "gate") {
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: true };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.gatePanelMode = "spell";
    state.learnedSpellViewerOpen = true;
    state.slotPickerOpen = false;
    render();
    return;
  }

  if (stage.id === "path") {
    state.pathPanelMode = "closed";
    state.memoPickerOpen = false;
    state.learnedSpellViewerOpen = true;
    render();
    return;
  }

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "closed";
    state.learnedSpellViewerOpen = true;
    state.feedback = null;
    render();
    return;
  }

  if (stage.id === "boss") {
    state.bossIntroOpen = false;
    state.bossPanelMode = "spells";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
    return;
  }

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "closed";
    state.learnedSpellViewerOpen = true;
    state.feedback = null;
    render();
    return;
  }

  if (stage.id === "boss") {
    state.bossPanelMode = "play";
    state.feedback = null;
    render();
    return;
  }

  const magic = document.querySelector(".boss-step.is-active, .spell-device, .spell-workbench, .spell-grid, .slot-row, .stone-panel");
  if (magic) {
    magic.scrollIntoView({ behavior: "smooth", block: "center" });
    magic.classList.remove("is-menu-focus");
    requestAnimationFrame(() => magic.classList.add("is-menu-focus"));
    return;
  }

  showMenuMessage("呪文", "このステージでは、呪文を使う場所はまだありません。");
}

function showCurrentHint() {
  const stage = stages[state.stageIndex] || stages[0];
  const hints = Array.isArray(stage.hints) && stage.hints.length ? stage.hints : [stage.briefing || "このステージのヒントはまだありません。"];
  const current = Math.min(Number(state.hintLevels?.[stage.id] || 0) + 1, hints.length);
  state.hintLevels = { ...(state.hintLevels || {}), [stage.id]: current };
  const hint = hints.slice(0, current).join("\n\n");
  showMenuMessage(`${stage.number} / ${stage.title} ヒント ${current}/${hints.length}`, hint);
  saveState();
}

if (elements.reset) elements.reset.addEventListener("click", resetGame);
if (elements.menuProblem) elements.menuProblem.addEventListener("click", openExploration);
if (elements.menuSealBook) elements.menuSealBook.addEventListener("click", openCurrentSealBook);
if (elements.menuMagic) elements.menuMagic.addEventListener("click", focusCurrentMagic);
if (elements.menuHint) elements.menuHint.addEventListener("click", showCurrentHint);
if (elements.menuSound) {
  elements.menuSound.addEventListener("click", async () => {
    await audioDirector.unlock();
    audioDirector.toggle();
    updateSoundControl();
  });
}
if (elements.closeDoc) elements.closeDoc.addEventListener("click", () => elements.dialog.close());
if (elements.dialog) {
  elements.dialog.addEventListener("click", (event) => {
    if (event.target === elements.dialog) elements.dialog.close();
  });
}
if (elements.closeHint) elements.closeHint.addEventListener("click", () => elements.hintDialog.close());
if (elements.hintDialog) {
  elements.hintDialog.addEventListener("click", (event) => {
    if (event.target === elements.hintDialog) elements.hintDialog.close();
  });
}

document.addEventListener("pointerdown", (event) => {
  const button = event.target.closest("button");
  audioDirector.unlock().then((ready) => {
    if (ready && button && !button.disabled && button !== elements.menuSound) audioDirector.playEffect("click");
  });
}, { capture: true, passive: true });

render();
