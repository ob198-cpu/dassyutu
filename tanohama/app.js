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
      "ヒント①「壁の色が違う紙に、①②③④の矢印の順で答えを重ねていくんじゃ」",
      "ヒント②「色のついたマスと白丸の文字をたどるのじゃぞ」",
      "ヒント③「最後に残るのは、通り抜けた者へかける、ねぎらいの六文字じゃ」",
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
    mission: "足場が凍り、素足では渡れない。アイテム屋の棚から、氷を溶かせるものを選ぶ。",
    reward: "ドラブレス",
    type: "shop",
    correct: "ドラブレス",
    scene: "ice",
    sceneCaption: "凍った足場を渡るには、氷に効くアイテムを選ぶ必要がある。",
    briefing: "式が指す番号は3。3番の棚には、口から火を出す道具が置かれている。",
    hints: [
      "ヒント①「文章の中に混ざった数字を、小さい順に追って読むのじゃ」",
      "ヒント②「取り出した数字を、中央の言葉に当てはめるのじゃぞ」",
      "ヒント③「氷を直接溶かせるのは、口から火を出す3番の道具じゃ」",
    ],
    problems: [{ file: "stage03-problem-clean.webp", title: "ステージ3 原問題" }],
    sourceProblemImage: "stage03-problem-clean.webp",
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
    hints: [
      "ヒント①「①から④を別々に解き、下の同じ番号の枠に当てはめるのじゃ」",
      "ヒント②「最後は青、緑、黄の順。色の数字が示す文字だけを拾うのじゃぞ」",
      "ヒント③「答えは六文字。時差を無くすため、時を移動する装置を起動するのじゃ」",
    ],
    problems: [{ file: "stage04-problem-clean.webp", title: "ステージ4 原問題" }],
    sourceProblemImage: "stage04-problem-clean.webp",
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
    mission: "現在異空間からの出口を発見したが、ラスボスが立ちはだかった。呪文を駆使して全ての攻撃に耐え抜き、ラスボスを破壊せよ。",
    type: "boss",
    scene: "boss",
    sceneCaption: "出口前にラスボスがいる。呪文は一度ずつしか使えない。",
    briefing: "石板の文字数と獣の動きをよく見るのじゃ。ここで使える呪文は1呪文につき1回までじゃぞ。",
    hints: [
      "ヒント①「使える呪文は1呪文につき1回まで。石板の文字数に合う呪文を選ぶのじゃ」",
      "ヒント②「獣の技をよく読むのじゃ。空中には届かぬ技もあれば、目が合わねば効かぬ技もあるぞ」",
      "ヒント③「最後の石板は10文字。☆の一覧にある10文字の呪文はフェイクじゃ。ワシのエールと、紙の隅にとまった蝶を思い出すのじゃ」",
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
  { slots: 4, answer: "ヘンガオ", after: "ラスボスは小幡の方へ向かった<br>『三石化線を放つ』3秒目が合うと石化する視線を送る" },
  { slots: 4, answer: "ツケモノ", after: "ラスボスは大技前の溜めをしていて動かない" },
  { slots: 6, answer: "ゴクロウサマ", after: "ラスボスは動かない" },
  { slots: 3, answer: "カタメ", after: "『百黙絶静を放つ』百発百中の即死攻撃。放たれれば全空間が消滅し沈黙する" },
  { slots: 6, answer: "タイムマシン", after: "『零式空間を放つ』空間から出る事を不可能にする念。現在異空間にいる者にのみ有効" },
  { slots: 10, answer: "バタフライエフェクト", after: "" },
];

const bossNewSpells = [
  { name: "バリ", effect: "瞬間的なバリアで、弱攻撃を無効化する！" },
  { name: "フユウ", effect: "ちょっとだけ空中に浮くことが出来る！" },
  { name: "オバダンス", effect: "次の呪文効果時間を2倍にする！" },
  { name: "カタメ", effect: "身体を硬化させ、弱攻撃を無効化する！" },
  { name: "アイス", effect: "つるっつるの氷を生成する！" },
  { name: "ヘンガオ", effect: "仲間一人を白目にさせる！" },
  { name: "タメニタメル", effect: "次の攻撃威力が2倍になる！" },
  { name: "ガンリキ", effect: "相手に恐怖感を与え隙を作る！" },
  { name: "イノリ", effect: "命中率を下げる！" },
  { name: "イチゲキゼンリョクデ", effect: "仲間1人の命と引き換えに全力の一撃を放つ！" },
];

const bossLearnedSpells = [
  { name: "ツケモノ", effect: "謎の四角を1個生成できる。" },
  { name: "ゴクロウサマ", effect: "「　」内の色を消す事が出来る。内容の意味が通れば、それは現実となる。" },
  { name: "ドラブレス", effect: "炎でどんな氷も溶かす事ができる。" },
  { name: "タイムマシン", effect: "一時的に未来空間へと移動する！その空間からまだ習得していない呪文を1つ唱える事ができる！[カタカナ]…[効果]！の形式をしていれば呪文とみなし、☆が付いていないものでも唱える事が可能。効果は現在異空間で発動し、発動と同時に自らも現在異空間へ戻る。" },
];

// 石板入力用の文字盤(登場する全呪文の文字を五十音順で)
const bossTiles = [
  "ア", "イ", "ウ", "エ", "ェ", "オ",
  "カ", "ガ", "キ", "ク", "ケ", "ゲ", "ゴ",
  "サ", "シ", "ス", "ゼ",
  "タ", "ダ", "チ", "ツ", "デ", "ト", "ド",
  "ニ", "ノ",
  "バ", "フ", "ブ", "ヘ",
  "マ", "ム", "メ", "モ",
  "ユ", "ョ",
  "ラ", "リ", "ル", "レ", "ロ", "ン",
];

const spellRuleText =
  "呪文のルール: 呪文は石板にカタカナで記入し、どこに、どの様に使うかを示す。石板の数に合った文字数の呪文しか唱える事が出来ない。習得した呪文には☆マークが付き、以後使用可能となる。";
const spellActivationText = "問題を解くと呪文が現れるかも…<br>各ステージの呪文は空欄に文字を正しく打ち込むと発動";

const storeKey = "tanohamaEscapeStateV4";

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

function normalizeStage2Memo(value) {
  const rows = Array.isArray(value) ? value : [];
  return Array.from({ length: stage2MemoRows }, (_, r) => {
    const row = Array.isArray(rows[r]) ? rows[r] : [];
    return Array.from({ length: stage2MemoCols }, (_, c) => (typeof row[c] === "string" ? row[c] : ""));
  });
}

const stage4MemoShape = [[4, 2, 3], [3, 0, 0, 1], [1, 3, 3, 1, 1], [2, 3, 2, 2]];

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

const stage2BoardPalette = { black: "#1a1a1a", red: "#d61e1e", blue: "#1a46a0", yellow: "#f0c828", white: "#ffffff" };

// 原本PDFから機械抽出+目視確認した盤面をSVGで再構成する。
// 返り値: { svg, spots } — spots は白丸メモ/文字タップ用のHTMLオーバーレイ。
function renderStage2Board(memo, active, pickerOpen) {
  const VBW = 1230;
  const VBH = 800;
  const marks = state.stage2CellMarks && typeof state.stage2CellMarks === "object" ? state.stage2CellMarks : {};
  const pal = stage2BoardPalette;
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
        const sel = pickerOpen && active.row === 0 && active.col === cell.memo;
        spots += `<button class="stage2-memo-spot ${sel ? "is-selected" : ""} ${char ? "has-value" : ""}" style="--spot-x:${sx}%;--spot-y:${sy}%;" type="button" data-memo="0:${cell.memo}" aria-label="白丸に書き込む">${char}</button>`;
      } else {
        const dimmed = Boolean(marks[`${key}:${cell.r}:${cell.c}`]);
        svg += `<text x="${cx}" y="${cy + 2}" fill="${pal[cell.color]}" font-size="52" font-weight="900" text-anchor="middle" dominant-baseline="central" opacity="${dimmed ? 0.14 : 1}" font-family="'Hiragino Sans','Segoe UI',sans-serif">${cell.char}</text>`;
        spots += `<button class="stage2-cell-toggle ${dimmed ? "is-dimmed" : ""}" style="--spot-x:${sx}%;--spot-y:${sy}%;" type="button" data-cell="${key}:${cell.r}:${cell.c}" aria-label="${cell.char} の表示を切り替える"></button>`;
      }
    });
  };

  // 紙とピンクの盤面
  svg += `<rect x="0" y="0" width="${VBW}" height="${VBH}" fill="#f6f2ea"/>`;
  svg += `<rect x="18" y="52" width="1194" height="616" fill="#cf9d9d" stroke="#2a56a8" stroke-width="4"/>`;
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
  // ③④の書き込み枠
  svg += `<rect x="868" y="170" width="238" height="238" fill="#cf9d9d" stroke="#2a56a8" stroke-width="6"/>`;
  // こたえ欄とじいさんの一言
  for (let i = 0; i < 6; i++) {
    svg += `<rect x="${33 + i * 76}" y="700" width="72" height="62" fill="#ffffff" stroke="#2a56a8" stroke-width="3"/>`;
  }
  svg += `<text x="500" y="740" fill="#333" font-size="26" font-weight="800">←こたえ</text>`;
  svg += `<text x="655" y="742" fill="#333" font-size="21" font-weight="800">「様々な<tspan fill="#d61e1e">色</tspan>がこの紙には書かれとってキレイじゃのう」</text>`;

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
  menuMagic: document.querySelector("#menuMagic"),
  menuHint: document.querySelector("#menuHint"),
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

function loadState() {
  try {
    const raw = localStorage.getItem(storeKey);
    if (raw) {
      const saved = JSON.parse(raw);
      if (saved.feedback && saved.feedback.type === "success" && saved.feedback.phase !== "done") {
        saved.feedback = null;
      }
      return {
        stageIndex: Number.isInteger(saved.stageIndex) ? saved.stageIndex : 0,
        cleared: Array.isArray(saved.cleared) ? saved.cleared : [],
        spells: Array.isArray(saved.spells) ? saved.spells : [],
        bossInput: Array.isArray(saved.bossInput) ? saved.bossInput : [],
        slotInput: Array.isArray(saved.slotInput) ? saved.slotInput : [],
        activeSlot: Number.isInteger(saved.activeSlot) ? saved.activeSlot : 0,
        slotPickerOpen: Boolean(saved.slotPickerOpen),
        hiddenProblems: saved.hiddenProblems && typeof saved.hiddenProblems === "object" ? saved.hiddenProblems : {},
        hiddenSpells: saved.hiddenSpells && typeof saved.hiddenSpells === "object" ? saved.hiddenSpells : {},
        gatePanelMode: saved.gatePanelMode === "problem" ? "problem" : "spell",
        hintLevels: saved.hintLevels && typeof saved.hintLevels === "object" ? saved.hintLevels : {},
        kanaBoardActive: Array.isArray(saved.kanaBoardActive) ? saved.kanaBoardActive : [],
        learnedSpellViewerOpen: Boolean(saved.learnedSpellViewerOpen),
        learnedSpellStage: saved.learnedSpellStage || "gate",
        feedback: saved.feedback && typeof saved.feedback === "object" ? saved.feedback : null,
        isClear: Boolean(saved.isClear),
        problemFit: saved.problemFit !== false,
        pathPanelMode: ["problem", "spell", "closed", "clear"].includes(saved.pathPanelMode) ? saved.pathPanelMode : "spell",
        stage2Memo: normalizeStage2Memo(saved.stage2Memo),
        memoActive: saved.memoActive && typeof saved.memoActive === "object" ? saved.memoActive : { row: 0, col: 0 },
        memoPickerOpen: Boolean(saved.memoPickerOpen),
        stage2CellMarks: saved.stage2CellMarks && typeof saved.stage2CellMarks === "object" ? saved.stage2CellMarks : {},
        stage2Rotated: Boolean(saved.stage2Rotated),
        stage4Memo: normalizeStage4Memo(saved.stage4Memo),
        revealed: saved.revealed && typeof saved.revealed === "object" ? saved.revealed : {},
        genericPanelMode: ["closed", "problem", "play", "clear"].includes(saved.genericPanelMode) ? saved.genericPanelMode : "closed",
        bossPanelMode: ["closed", "problem", "play"].includes(saved.bossPanelMode) ? saved.bossPanelMode : "closed",
      };
    }
  } catch {
    localStorage.removeItem(storeKey);
  }
  return { stageIndex: 0, cleared: [], spells: [], bossInput: [], slotInput: [], activeSlot: 0, slotPickerOpen: false, hiddenProblems: {}, hiddenSpells: {}, gatePanelMode: "spell", hintLevels: {}, kanaBoardActive: [], learnedSpellViewerOpen: false, learnedSpellStage: "gate", feedback: null, isClear: false, problemFit: true, pathPanelMode: "spell", stage2Memo: normalizeStage2Memo(null), memoActive: { row: 0, col: 0 }, memoPickerOpen: false, stage2CellMarks: {}, stage2Rotated: false, stage4Memo: normalizeStage4Memo(null), revealed: {}, genericPanelMode: "closed", bossPanelMode: "closed" };
}

function saveState() {
  const snapshot = JSON.parse(JSON.stringify(state));
  if (snapshot.feedback && snapshot.feedback.type === "success" && snapshot.feedback.phase !== "done") {
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
  state.memoPickerOpen = false;
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
}

let lastStageKey = null;

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
  document.body.classList.toggle("stage-one-mode", !state.isClear && stage.id === "gate");
  document.body.classList.toggle("stage-intro-mode", !state.isClear && stage.id === "intro");
  document.body.classList.toggle("stage-path-mode", !state.isClear && stage.id === "path");
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
    lastStageKey = stageKey;
  }
  saveState();
}

function renderIntro(stage) {
  elements.game.innerHTML = `
    <section class="intro-stage intro-image-stage" aria-label="異世界へ！？">
      <img class="intro-opening-image" src="./assets/intro-current-isekai.webp" alt="現在異空間からの脱出">
      <button class="primary-button intro-start-button" id="introStartButton" type="button">つぎへ</button>
    </section>
  `;
  document.querySelector("#introStartButton")?.addEventListener("click", () => {
    closeInfoDialogs();
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
  const panelClosed = state.pathPanelMode === "closed";
  const problemMode = state.pathPanelMode === "problem";
  const clearMode = done && state.pathPanelMode === "clear";
  const selected = done
    ? [...stage.correct].slice(0, stage.slots)
    : Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
  const pickerOpen = !done && !problemMode && state.slotPickerOpen === true;
  elements.game.innerHTML = `
    <section class="stage-panel premium-stage path-stage-background-only ${done ? "is-solved" : ""} ${feedback?.type === "fail" ? "is-fail" : ""}" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world">
        <img class="stage-bg-art" src="./assets/stage02-bg.webp" alt="${stage.number} ${stage.title}" loading="eager">
        <div class="art-vignette"></div>
      </div>
      ${clearMode ? renderPathStageClear(stage) : panelClosed ? "" : problemMode ? renderPathProblemCard(stage) : `
      <section class="spell-device path-spell-device ${done ? "is-clear-compact" : ""} ${pickerOpen ? "has-picker" : ""}" aria-label="${done ? "習得済み呪文" : "呪文入力"}">
        ${`
            <div class="path-device-head">
              <span class="path-device-title">石板 ${stage.slots}文字</span>
              <div class="path-device-actions">
                <button class="secondary-button" id="pathToProblem" type="button">問題とメモ</button>
                <button class="secondary-button learned-spell-open" id="toggleLearnedSpellViewer" type="button">覚えた呪文を見る</button>
              </div>
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
          `}
      </section>`}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}
    </section>
  `;
  if (problemMode) {
    wirePathProblem(stage);
  } else {
    wirePathStage(stage, done);
  }
}

function renderPathProblemCard(stage) {
  const memo = normalizeStage2Memo(state.stage2Memo);
  const active = state.memoActive && Number.isInteger(state.memoActive.row) && Number.isInteger(state.memoActive.col)
    ? { row: Math.min(Math.max(state.memoActive.row, 0), stage2MemoRows - 1), col: Math.min(Math.max(state.memoActive.col, 0), stage2MemoCols - 1) }
    : { row: 0, col: 0 };
  const pickerOpen = state.memoPickerOpen === true;
  return `
    <section class="spell-device path-spell-device path-problem-card" aria-label="問題とメモ">
      <div class="path-device-head">
        <span class="path-device-title">問題とメモ</span>
        <div class="path-device-actions">
          <button class="secondary-button ${state.stage2Rotated ? "is-on" : ""}" id="rotateBoard" type="button" aria-pressed="${state.stage2Rotated}">⟳ 回転</button>
          <button class="secondary-button" type="button" data-problem="${stage.sourceProblemImage}" data-title="${stage.number} ${stage.title} 原本">原本</button>
          <button class="secondary-button" id="pathToSpell" type="button">呪文へ</button>
        </div>
      </div>
      <div class="path-problem-image stage2-inline-memo stage2-board-wrap ${state.stage2Rotated ? "is-rotated" : ""}">
        ${(() => {
          const board = renderStage2Board(memo, active, pickerOpen);
          return `${board.svg}<div class="stage2-memo-spots" aria-label="盤面への書き込み">${board.spots}</div>`;
        })()}
      </div>
      <p class="stage2-board-hint">文字をタップ=薄く消す / 白丸をタップ=文字を書き込む</p>
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
    </section>
  `;
}

function wirePathProblem(stage) {
  wireProblems();
  document.querySelector("#pathToSpell")?.addEventListener("click", () => {
    state.pathPanelMode = "spell";
    state.memoPickerOpen = false;
    render();
  });
  document.querySelector("#rotateBoard")?.addEventListener("click", () => {
    state.stage2Rotated = !state.stage2Rotated;
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
      const { row, col } = state.memoActive;
      memo[row][col] = button.dataset.memoTile || "";
      state.stage2Memo = memo;
      state.memoActive = { row, col: Math.min(col + 1, stage2MemoCols - 1) };
      render();
      popOnce(`[data-memo="${row}:${col}"]`);
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
      render();
      return;
    }
    addUnique(state.cleared, stage.id);
    addUnique(state.spells, stage.reward);
    state.feedback = null;
    state.pathPanelMode = "clear";
    resetStageInput();
    render();
    burstOnce(".stage-clear-card");
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
    time: { number: "04", title: "時差の機械室" },
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
          <button class="text-button sheet-source-button" type="button" data-problem="${stage.sourceProblemImage}" data-title="${stage.number} ${stage.title} 原本">原本を見る</button>
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
  const rockDropping = feedback?.type === "success" && feedback.phase === "rock";
  const successAnimating = feedback?.type === "success" && feedback.phase !== "done";
  const problemHidden = state.hiddenProblems?.[stage.id] === true;
  const spellHidden = state.hiddenSpells?.[stage.id] === true;
  const backgroundOnly = problemHidden && spellHidden;
  const gatePanelMode = state.gatePanelMode === "problem" ? "problem" : "spell";
  const selected = done
    ? [...stage.correct].slice(0, stage.slots)
    : Array.from({ length: stage.slots }, (_, i) => state.slotInput[i] || "");
  const activeSlot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), stage.slots - 1);
  const locked = done || rockDropping || successAnimating;
  const pickerOpen = !locked && state.slotPickerOpen === true;
  elements.game.innerHTML = `
    <section class="stage-panel premium-stage stage-one-redesign ${done ? "is-solved" : ""} ${rockDropping ? "is-rock-drop" : ""} ${feedback?.type === "fail" ? "is-fail" : ""}">
      ${gatePlayableVisual(stage, done, feedback, backgroundOnly)}

      ${successAnimating || spellHidden ? "" : `<section class="spell-device ${done ? "is-clear-compact" : ""} ${pickerOpen ? "has-picker" : ""} is-${gatePanelMode}-mode" aria-label="${gatePanelMode === "problem" ? "問題" : "呪文入力"}">
        <button class="spell-window-close" id="closeSpellWindow" type="button" aria-label="${gatePanelMode === "problem" ? "問題ウィンドウを閉じる" : "呪文ウィンドウを閉じる"}">×</button>
        ${gatePanelMode === "problem"
          ? gateProblemInscription(stage, done, false)
          : `
            ${renderSpellRuleNotice()}
            ${renderLearnedSpellButton()}

            <div class="device-main-row">
              <div class="premium-slot-row magic-slots">
                ${Array.from({ length: stage.slots })
                  .map((_, i) => `<button class="premium-slot ${!locked && i === activeSlot ? "is-selected" : ""}" type="button" data-slot="${i}" aria-pressed="${!locked && i === activeSlot}" ${locked ? "disabled" : ""}>${selected[i] || ""}</button>`)
                  .join("")}
              </div>
              <button class="primary-button cast-button" id="activateStage" type="button" ${locked ? "disabled" : ""}>${rockDropping ? "発動中..." : "呪文を唱える"}</button>
            </div>

            ${pickerOpen ? renderSlotPicker(stage, activeSlot) : ""}
          `
        }

          ${renderGateResult(stage, done, feedback)}
        </section>`}

      ${successAnimating ? renderGateSuccessOverlay(feedback.phase) : ""}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}

      ${done && !spellHidden && gatePanelMode === "spell" ? `<div class="gate-clear-actions">
        <button class="primary-button" id="nextButton" type="button">${stage.id === "gate" ? "ステージ2へ" : "次へ進む"}</button>
      </div>` : ""}
    </section>
  `;
  wireGateStage(stage, done);
}

function renderSpellRuleNotice() {
  return `
    <section class="spell-open-screen open-screen-card spell-stage-scene" aria-label="ステージ1の呪文入力">
      <img class="open-screen-art" src="./assets/stage01-bg-clean.webp" alt="大きな穴で道を塞がれた石造りの通路">
      <div class="spell-stage-caption">
        <strong>01 / 崩れた足場</strong>
        <span>穴を越える呪文を石板に刻め</span>
      </div>
    </section>
  `;
}

function renderLearnedSpellButton() {
  if (!["gate", "path", "shop", "time"].some((id) => isStageCleared(id))) return "";
  return `
    <div class="learned-spell-toolbar">
      <button class="secondary-button learned-spell-open" id="toggleLearnedSpellViewer" type="button">
        覚えた呪文を見る
      </button>
    </div>
  `;
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
      ${rockDropping ? `<img class="falling-rock" src="./assets/stage01-rock-small.webp" alt="" aria-hidden="true" />` : ""}
    </div>
  `;
}

function gateProblemInscription(stage, done, hidden = false) {
  const problem = stage.textProblem;
  if (!problem || hidden) return "";
  return `
    <section class="device-problem gate-problem-card gate-sheet-panel ${done ? "is-solved" : ""}" aria-label="問題文">
      <button class="problem-window-close" id="closeProblemWindow" type="button" aria-label="問題ウィンドウを閉じる">×</button>
      <button class="secondary-button gate-sheet-to-spell" id="mobileProblemToSpell" type="button">呪文へ</button>
      <div class="gate-sheet-scroll">
        ${renderStage1Sheet()}
        ${stage.id === "gate" ? renderKanaBoard() : ""}
      </div>
    </section>
  `;
}

// ステージ1 問題シート(原本をHTMLで再構成)
function renderStage1Sheet() {
  return `
    <div class="sheet stage1-sheet" role="img" aria-label="ステージ1 問題">
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ1</h3>
        <button class="text-button sheet-source-button" type="button" data-problem="ステージ１　問題 VER2.png" data-title="ステージ1 原本">原本</button>
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
      <p class="stage1-footer">①、②が解けたら次は「<u>つかった①、②の答え</u>」の下のカタカナを読むのじゃ!</p>
    </div>
  `;
}

// ステージ3 問題シート(原本をHTMLで再構成)
function renderStage3Sheet() {
  const items = [
    { name: "①メラソード", note: "切ったものが燃える" },
    { name: "②ソラブーツ", note: "装備すると素早くなる" },
    { name: "③ドラブレス", note: "口から火が出せる" },
    { name: "④マジホウキ", note: "飛べる、掃除もできる" },
  ];
  return `
    <div class="sheet stage3-sheet" role="img" aria-label="ステージ3 問題">
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ3</h3>
        <span class="stage3-answer-slot">解答番号→<span class="stage3-answer-box" aria-hidden="true"></span></span>
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
            ${items.map((item) => `<li><span class="stage3-item-main"><strong>${item.name}</strong><small>${item.note}</small></span></li>`).join("")}
          </ul>
        </div>
      </div>
    </div>
  `;
}

// ステージ4 問題シート(原本をHTMLで再構成。④の図のみ原本から切り出し)
const stage4Scatter = [
  ["A", 8.5, 33], ["い", 40, 33], ["ち", 61, 32.5], ["ん", 79, 33],
  ["う", 49, 42.5], ["か", 73, 43], ["た", 93, 43],
  ["G", 3, 50], ["す", 30, 51], ["F", 64, 50], ["E", 92, 50],
  ["じ", 2, 60], ["ど", 30, 60.5], ["さ", 63, 59.5], ["げ", 84, 60],
  ["の", 13, 73], ["に", 48, 72.5], ["う", 67, 72],
  ["ろ", 37, 79],
  ["お", 22, 86], ["C", 46, 86], ["D", 79, 86],
];

const stage4Numbers = [
  { label: "①", boxes: [[["3", "b"], ["7", "g"], ["2", "y"], ["10", "y"]], [["8", "b"], ["3", "y"]], [["2", "b"], ["2", "g"], ["13", "y"]]] },
  { label: "②", boxes: [[["7", "b"], ["4", "g"], ["1", "y"]], [], [], [["14", "y"]]] },
  { label: "③", boxes: [[["8", "y"]], [["6", "b"], ["3", "g"], ["9", "y"]], [["4", "b"], ["1", "g"], ["11", "y"]], [["5", "y"]], [["6", "y"]]] },
  { label: "④", boxes: [[["1", "b"], ["7", "y"]], [["9", "b"], ["6", "g"], ["15", "y"]], [["5", "b"], ["12", "y"]], [["5", "g"], ["4", "y"]]] },
];

function renderStage4Sheet() {
  const memo = normalizeStage4Memo(state.stage4Memo);
  const questionMemo = (index) => `
    <label class="s4-question-memo">
      <span>${["①", "②", "③", "④"][index]} 途中回答</span>
      <input type="text" maxlength="40" autocomplete="off" data-s4-answer="${index}" value="${escapeAttribute(memo.answers[index])}" placeholder="分かった言葉をここに入力" />
    </label>
  `;
  const numberRow = (group, questionIndex) => `
    <div class="s4-num-row">
      <span class="s4-num-label">${group.label}</span>
      ${group.boxes
        .map(
          (box, groupIndex) => `<span class="s4-num-box ${box.length ? "" : "is-empty"}">
            <span class="s4-num-source">${box.length ? box.map(([n, c], i) => `${i ? "<i>,</i>" : ""}<b class="n-${c}">${n}</b>`).join("") : "-"}</span>
            ${box.length ? `<span class="s4-num-inputs">${box.map(([n, c], cellIndex) => `<input class="s4-map-input map-${c}" type="text" maxlength="1" inputmode="text" autocomplete="off" data-s4-cell="${questionIndex}:${groupIndex}:${cellIndex}" value="${escapeAttribute(memo.cells[questionIndex][groupIndex][cellIndex])}" aria-label="${group.label} ${n}に対応する文字" />`).join("")}</span>` : ""}
          </span>`,
        )
        .join("")}
    </div>
  `;
  return `
    <div class="sheet stage4-sheet" role="img" aria-label="ステージ4 問題">
      <div class="s4-numbers" aria-label="青緑黄色の番号と途中回答">
        <p class="s4-memo-guide">青・緑・黄の数字は手がかりです。数字の真下へ、対応する文字を1文字ずつ入力してください。</p>
        <div class="s4-num-col">
          ${numberRow(stage4Numbers[0], 0)}
          ${numberRow(stage4Numbers[2], 2)}
        </div>
        <div class="s4-num-col">
          ${numberRow(stage4Numbers[1], 1)}
          ${numberRow(stage4Numbers[3], 3)}
        </div>
        <p class="s4-read-order"><b class="n-b">青</b>→<b class="n-g">緑</b>→<b class="n-y">黄</b>の順に読め。答えは、それが差ししめす先にある。</p>
      </div>
      <div class="sheet-head-row">
        <h3 class="sheet-title">ステージ4</h3>
      </div>
      <p class="s4-header">時空が歪んで、時差が発生した、①〜④の謎を解いて、時差を無くす為の手段を見つけろ</p>
      <div class="s4-panels">
        <div class="s4-panel">
          <p class="s4-panel-title"><span class="sheet-qnum">①</span><em class="red-word">おじさん</em>の<br>間にあるのは?</p>
          <div class="s4-scatter">
            ${stage4Scatter.map(([ch, x, y]) => `<span style="left:${x}%;top:${y}%;">${ch}</span>`).join("")}
          </div>
          ${questionMemo(0)}
        </div>
        <div class="s4-panel">
          <p class="s4-panel-title"><span class="sheet-qnum">②</span>?の中に<br>はいる言葉は、なに</p>
          <div class="s4-week-rows">
            <p><span class="s4-day">TUE</span>+<span class="s4-hatch" aria-hidden="true"></span> → <span class="s4-mini-box">かそく</span></p>
            <p><span class="s4-day">SAT</span>+<span class="s4-hatch" aria-hidden="true"></span> → <span class="s4-mini-box">どそく</span></p>
            <p><span class="s4-day s4-day-red">THU</span>+<span class="s4-hatch" aria-hidden="true"></span> → <span class="s4-mini-box">?</span></p>
          </div>
          ${questionMemo(1)}
        </div>
        <div class="s4-panel">
          <p class="s4-panel-note">?に言葉を入れ、四角で囲まれた文字のみ繋げて読む</p>
          <div class="s4-this-grid">
            <span></span><span class="s4-boxed s4-red">THIS</span><span class="s4-red">WEEK</span>
            <span></span><span class="s4-plus">+</span><span></span>
            <span>うえ</span><span class="s4-boxed">?</span><span>した</span>
            <span></span><span></span><span class="s4-ge">GE</span>
            <span></span><span class="s4-eq">‖</span><span></span>
            <span></span><span class="s4-answer-of">③のこたえ</span><span></span>
          </div>
          ${questionMemo(2)}
        </div>
        <div class="s4-panel">
          <p class="s4-panel-note">④投げられた球が、放物線の<em class="red-word">頂点</em>で真下へ落下する時、球が通る言葉を繋いで読め</p>
          <img class="s4-art" src="./assets/stage04-art.webp" alt="放物線と散らばった文字の図(原本)" loading="lazy" />
          ${questionMemo(3)}
        </div>
      </div>
      <p class="sheet-elder">時差を隠す時に使うのじゃ→[ きじのくうきあしょうのみさきよらいのじさめ ]</p>
      <div class="s4-final-row">
        <span class="s4-final-label"><small class="s4-final-ruby">ファイナル アンサー</small>FINAL ANSWER:</span>
        <span class="s4-final-boxes">${Array.from({ length: 6 }).map(() => `<span></span>`).join("")}</span>
        <svg class="s4-clocks" viewBox="0 0 120 40" aria-hidden="true">
          <g stroke="#3f9b3f" fill="none" stroke-width="3"><circle cx="20" cy="20" r="14"/><path d="M20 20 L20 10 M20 20 L27 24"/></g>
          <g stroke="#2f66c4" fill="none" stroke-width="3"><circle cx="60" cy="20" r="14"/><path d="M60 20 L60 10 M60 20 L53 26"/></g>
          <g stroke="#e0b31e" fill="none" stroke-width="3"><circle cx="100" cy="20" r="14"/><path d="M100 20 L100 11 M100 20 L108 20"/></g>
        </svg>
      </div>
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
    <div class="kana-board" aria-label="文字盤">
      <p class="kana-board-guide">上段で答えの文字を押すと、その真下も赤くなる</p>
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
      <div class="kana-reading ${decoded ? "is-decoded" : ""}" aria-live="polite">
        <span>読み取り</span>
        <strong>${reading || "選んだ文字の下を左から読む"}</strong>
        ${decoded ? `<p>上段に隠れた獣の名前の誤字を探せ。誤字の下にある一文字を「ケモノ」に加えると、石板の呪文になる。</p>` : ""}
      </div>
    </div>
  `;
}

function renderPathStageClear(stage) {
  return `
    <section class="stage-clear-overlay path-clear-overlay" aria-label="ステージ2 クリア">
      <div class="stage-clear-card">
        <span class="clear-kicker">STAGE ${stage.number} COMPLETE</span>
        <h2>${stage.title} クリア</h2>
        <div class="clear-spell-reward">
          <span>呪文を習得</span>
          <strong>☆ ${stage.reward}</strong>
          <p>${stage.textProblem?.solvedNote || stage.successMessage}</p>
        </div>
        <div class="clear-actions"><button class="primary-button" id="nextButton" type="button">次のステージへ</button></div>
      </div>
    </section>
  `;
}

function renderLearnedSpellContent(stageId) {
  if (stageId === "gate") return renderLearnedStageOneSpells();
  const learnedStage = stages.find((stage) => stage.id === stageId);
  if (!learnedStage) return `<p class="learned-empty">この呪文はまだ確認できません。</p>`;
  return `
    <article class="learned-spell-detail">
      <span>${learnedStage.number} / ${learnedStage.title}</span>
      <strong>☆ ${learnedStage.reward}</strong>
      <p>${learnedStage.textProblem?.solvedNote || learnedStage.successMessage || "習得済みの呪文"}</p>
    </article>
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
    state.learnedSpellViewerOpen = false;
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
      state.activeSlot = Math.min(slot + 1, stage.slots - 1);
      state.slotPickerOpen = false;
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
      render();
      return;
    }
    state.slotPickerOpen = false;
    addUnique(state.spells, stage.reward);
    state.feedback = { stageId: stage.id, type: "success", phase: "prompt1" };
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
  const background = stage.id === "shop" ? "stage03-bg-premium.webp" : "stage04-bg-premium.webp";
  elements.game.innerHTML = `
    <section class="stage-panel immersive-stage generic-immersive-stage ${done ? "is-solved" : ""}" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world generic-stage-world">
        <img class="stage-bg-art" src="./assets/${background}" alt="${stage.number} ${stage.title}" loading="eager">
        <div class="art-vignette"></div>
      </div>
      <div class="stage-corner-label"><span>${stage.number}</span><strong>${stage.title}</strong></div>
      ${panelMode === "problem" ? renderGenericProblemPanel(stage, done) : ""}
      ${panelMode === "play" ? renderGenericPlayPanel(stage, done) : ""}
      ${panelMode === "clear" && done ? renderGenericStageClear(stage) : ""}
      ${state.learnedSpellViewerOpen ? renderLearnedSpellViewer() : ""}
    </section>
  `;
  wireStage(stage, done);
  wireProblems();
}

function renderGenericProblemPanel(stage, done) {
  return `
    <section class="immersive-panel generic-problem-panel" aria-label="${stage.number} 問題">
      <div class="immersive-panel-head">
        <div><span>STAGE ${stage.number}</span><strong>${stage.title} / 問題</strong></div>
        <button class="panel-close-button" id="genericClosePanel" type="button" aria-label="問題を閉じる">×</button>
      </div>
      <div class="immersive-panel-scroll">
        ${renderProblems(stage, done)}
      </div>
      <div class="immersive-panel-actions">
        <button class="primary-button" id="genericToPlay" type="button">解答する</button>
      </div>
    </section>
  `;
}

function renderGenericPlayPanel(stage, done) {
  return `
    <section class="immersive-panel generic-play-panel ${done ? "is-solved" : ""}" aria-label="${stage.number} 解答">
      <div class="immersive-panel-head">
        <div><span>STAGE ${stage.number}</span><strong>${stage.title} / 解答</strong></div>
        <button class="panel-close-button" id="genericClosePanel" type="button" aria-label="解答画面を閉じる">×</button>
      </div>
      <p class="generic-mission">${stage.mission}</p>
      <div class="generic-play-content">
        ${stage.type === "tiles" ? tilePuzzle(stage, done) : ""}
        ${stage.type === "shop" ? shopPuzzle(stage, done) : ""}
        ${stage.type === "console" ? consolePuzzle(stage, done) : ""}
      </div>
      <div class="generic-panel-footer">
        <button class="secondary-button" id="genericToProblem" type="button">問題を確認</button>
        ${renderLearnedSpellButton()}
      </div>
    </section>
  `;
}

function renderGenericStageClear(stage) {
  const nextLabel = state.stageIndex >= stages.length - 2 ? "ラスボスへ" : "次のステージへ";
  return `
    <section class="stage-clear-overlay" aria-label="ステージクリア">
      <div class="stage-clear-card">
        <span class="clear-kicker">STAGE ${stage.number} COMPLETE</span>
        <h2>${stage.title} クリア</h2>
        <div class="clear-spell-reward">
          <span>呪文を習得</span>
          <strong>☆ ${stage.reward}</strong>
          <p>${stage.textProblem?.solvedNote || stage.successMessage || "新しい呪文を習得した。"}</p>
        </div>
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
      <p class="note ${done ? "is-ok" : feedback?.type === "fail" ? "is-error" : ""}" id="stageNote">${done ? `獲得済み: ${stage.reward}` : feedback?.type === "fail" ? "違うようだ。問題の数字と、道具の効果を見直そう。" : "氷を直接溶かせるアイテムを選ぶ。"}</p>
    </section>
  `;
}

function consolePuzzle(stage, done) {
  const feedback = state.feedback?.stageId === stage.id ? state.feedback : null;
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
      <p class="note ${done ? "is-ok" : feedback?.type === "fail" ? "is-error" : ""}" id="stageNote">${done ? `獲得済み: ${stage.reward}` : feedback?.type === "fail" ? "装置は反応しない。六文字と色の読む順を確認しよう。" : "青→緑→黄の順で導いた、六文字の装置名を入力する。"}</p>
    </section>
  `;
}

function wireStage4Memo() {
  document.querySelectorAll("[data-s4-answer]").forEach((input) => {
    input.addEventListener("input", () => {
      const memo = normalizeStage4Memo(state.stage4Memo);
      const index = Number(input.dataset.s4Answer);
      if (!Number.isInteger(index) || index < 0 || index >= memo.answers.length) return;
      memo.answers[index] = input.value.slice(0, 40);
      state.stage4Memo = memo;
      saveState();
    });
  });

  document.querySelectorAll("[data-s4-cell]").forEach((input) => {
    input.addEventListener("input", () => {
      const [questionIndex, groupIndex, cellIndex] = (input.dataset.s4Cell || "").split(":").map(Number);
      const memo = normalizeStage4Memo(state.stage4Memo);
      if (!memo.cells?.[questionIndex]?.[groupIndex] || !Number.isInteger(cellIndex)) return;
      const character = Array.from(input.value)[0] || "";
      input.value = character;
      memo.cells[questionIndex][groupIndex][cellIndex] = character;
      state.stage4Memo = memo;
      saveState();
    });
  });
}

function wireStage(stage, done) {
  const note = document.querySelector("#stageNote");
  if (stage.id === "time") wireStage4Memo();
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
    document.querySelectorAll(".item-card").forEach((button) => {
      button.addEventListener("click", () => checkStage(stage, button.dataset.item));
    });
  }
  if (stage.type === "console") {
    document.querySelector("#consoleForm")?.addEventListener("submit", (event) => {
      event.preventDefault();
      checkStage(stage, document.querySelector("#answerInput").value);
    });
  }
  document.querySelector("#genericClosePanel")?.addEventListener("click", () => {
    state.genericPanelMode = "closed";
    state.learnedSpellViewerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#genericToPlay")?.addEventListener("click", () => {
    state.genericPanelMode = "play";
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
    render();
    return;
  }
  addUnique(state.cleared, stage.id);
  addUnique(state.spells, stage.reward);
  resetStageInput();
  state.feedback = { stageId: stage.id, type: "success" };
  state.genericPanelMode = "clear";
  render();
  burstOnce(".stage-clear-card");
}

function renderBoss(stage) {
  const total = bossBattle.length;
  const solvedCount = Math.min(state.bossInput.length, total);
  const rows = bossBattle
    .map((step, index) => {
      const slate = renderBossSlate(step, index, index < solvedCount, index === solvedCount);
      const actionText = step.after ? step.after.replace(/『[^』]+』/g, (m) => `<span class="boss-attack-name">${m}</span>`) : "";
      const action = step.after ? `<p class="boss-action">↓　${actionText}</p>` : "";
      return `${slate}${action}`;
    })
    .join("");
  const mode = state.bossPanelMode || "closed";
  elements.game.innerHTML = `
    <section class="stage-panel immersive-stage boss-immersive-stage" aria-label="${stage.number} / ${stage.title}">
      <div class="stage-world boss-stage-world">
        <img class="stage-bg-art" src="./assets/stage05-bg-premium.webp" alt="出口を守るラスボス" loading="eager">
        <div class="art-vignette"></div>
      </div>
      <div class="stage-corner-label"><span>${stage.number}</span><strong>${stage.title}</strong></div>
      ${mode === "problem" ? renderBossProblemPanel(stage) : ""}
      ${mode === "play" ? `
        <section class="immersive-panel boss-battle-panel" aria-label="ラスボス戦">
          <div class="immersive-panel-head">
            <div><span>FINAL BATTLE ${solvedCount} / ${total}</span><strong>攻撃に合う呪文を選べ</strong></div>
            <button class="panel-close-button" id="bossClosePanel" type="button" aria-label="戦闘画面を閉じる">×</button>
          </div>
          <p class="boss-rule">呪文は1種類につき1回だけ。石板の文字数と、次の攻撃の特徴を照合する。</p>
          <details class="boss-spell-list" ${solvedCount === 0 ? "open" : ""}>
            <summary>使用できる呪文一覧</summary>
            <ul>${bossNewSpells.map((spell) => `<li>☆<strong>${spell.name}</strong>…${spell.effect}</li>`).join("")}</ul>
            <p class="boss-spell-list-sub">これまでに習得した呪文</p>
            <ul>${bossLearnedSpells.map((spell) => `<li>☆<strong>${spell.name}</strong>…${spell.effect}</li>`).join("")}</ul>
          </details>
          <section class="boss-timeline" aria-label="攻撃の流れ">
            ${rows}
            <p class="boss-final-words">「今こそ共に歩んだ仲間の事を思い出す時じゃ。どんなに離れても皆仲間、さぁとびきりの一撃を放つのじゃ」<span class="boss-butterfly" aria-label="蝶">蝶</span></p>
          </section>
          <div class="generic-panel-footer"><button class="secondary-button" id="bossToProblem" type="button">原問題を確認</button></div>
        </section>
      ` : ""}
    </section>
  `;
  wireBoss();
}

function renderBossProblemPanel(stage) {
  const sequence = bossBattle
    .map((step, index) => {
      const action = step.after
        ? step.after.replace(/『[^』]+』/g, (text) => `<span class="boss-attack-name">${text}</span>`)
        : "最後の石板。仲間と歩んだ全ての試練を思い出せ。";
      return `
        <article class="boss-brief-step">
          <div class="boss-brief-step-head"><span>第${index + 1}手</span><strong>石板 ${step.slots}文字</strong></div>
          <div class="boss-brief-slots" aria-label="${step.slots}文字の空欄">
            ${Array.from({ length: step.slots }).map(() => `<span></span>`).join("")}
          </div>
          <p>${action}</p>
        </article>
      `;
    })
    .join("");
  return `
    <section class="immersive-panel boss-problem-panel" aria-label="ラスボス問題">
      <div class="immersive-panel-head">
        <div><span>STAGE ${stage.number}</span><strong>出口を守るラスボスを破壊せよ</strong></div>
        <button class="panel-close-button" id="bossClosePanel" type="button" aria-label="問題を閉じる">×</button>
      </div>
      <div class="boss-problem-copy">
        <section class="boss-brief-intro">
          <strong>現在異空間からの出口を発見したが、ラスボスが立ちはだかった。</strong>
          <p>呪文を駆使して全ての攻撃に耐え抜き、ラスボスを破壊せよ。</p>
          <p class="boss-brief-rule">ここで使える呪文は1呪文につき1回まで。石板の文字数と、その直後に来る攻撃を見比べる。</p>
        </section>
        <details class="boss-brief-spells" open>
          <summary>新たに習得した呪文一覧</summary>
          <div class="boss-brief-spell-grid">
            ${bossNewSpells.map((spell) => `<p><strong>☆ ${spell.name}</strong><span>${spell.effect}</span></p>`).join("")}
          </div>
          <p class="boss-brief-known">これまでのステージで習得した呪文も使用できる。</p>
        </details>
        <section class="boss-brief-sequence">
          <h3>石板と攻撃順</h3>
          ${sequence}
          <p class="boss-brief-final">「今こそ共に歩んだ仲間の事を思い出す時じゃ。どんなに離れても皆仲間、さぁとびきりの一撃を放つのじゃ」<span aria-label="蝶の印">蝶の印</span></p>
        </section>
        <button class="secondary-button boss-source-button" type="button" data-problem="${stage.sourceProblemImage}" data-title="${stage.number} ${stage.title} 原問題">原本画像を確認</button>
      </div>
      <div class="immersive-panel-actions"><button class="primary-button" id="bossToPlay" type="button">戦闘を始める</button></div>
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
          ${pickerOpen ? renderSlotPicker({ tiles: bossTiles }, activeSlot) : ""}
          <button class="primary-button cast-button" id="castBossSpell" type="button">呪文を唱える</button>
          ${feedback ? `<p class="result-message is-fail">${feedback.message || "何も起こらない。"}</p>` : ""}
        `
        : ""}
    </div>
  `;
}

function wireBoss() {
  wireProblems();
  document.querySelector("#bossClosePanel")?.addEventListener("click", () => {
    state.bossPanelMode = "closed";
    state.slotPickerOpen = false;
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
  const step = bossBattle[state.bossInput.length];
  if (!step) return;
  if (state.slotPickerOpen) {
    requestAnimationFrame(() => document.querySelector(".slot-choice-popover")?.scrollIntoView({ block: "nearest" }));
  }
  document.querySelectorAll(".boss-step.is-active .premium-slot[data-slot]").forEach((button) => {
    button.addEventListener("click", () => {
      state.activeSlot = Number(button.dataset.slot);
      state.slotPickerOpen = true;
      state.feedback = null;
      render();
    });
  });
  document.querySelectorAll(".slot-choice-button").forEach((button) => {
    button.addEventListener("click", () => {
      const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), step.slots - 1);
      state.slotInput = Array.from({ length: step.slots }, (_, i) => state.slotInput[i] || "");
      state.slotInput[slot] = button.dataset.tile;
      state.activeSlot = Math.min(slot + 1, step.slots - 1);
      state.slotPickerOpen = false;
      state.feedback = null;
      render();
      popOnce(`.boss-step.is-active .premium-slot[data-slot="${slot}"]`);
    });
  });
  document.querySelector("#clearActiveSlot")?.addEventListener("click", () => {
    const slot = Math.min(Math.max(Number.isInteger(state.activeSlot) ? state.activeSlot : 0, 0), step.slots - 1);
    state.slotInput = Array.from({ length: step.slots }, (_, i) => state.slotInput[i] || "");
    state.slotInput[slot] = "";
    state.slotPickerOpen = false;
    state.feedback = null;
    render();
  });
  document.querySelector("#castBossSpell")?.addEventListener("click", () => castBossSpell(step));
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
  if (value === normalizeAnswer(step.answer)) {
    state.bossInput.push(step.answer);
    resetStageInput();
    state.feedback = null;
    if (state.bossInput.length >= bossBattle.length) {
      addUnique(state.cleared, "boss");
      state.isClear = true;
    }
    render();
    requestAnimationFrame(() => {
      const solved = document.querySelectorAll(".boss-step.is-solved");
      solved[solved.length - 1]?.classList.add("just-solved");
    });
    return;
  }
  const used = state.bossInput.map((spell) => normalizeAnswer(spell));
  const known = [...bossNewSpells, ...bossLearnedSpells].map((spell) => normalizeAnswer(spell.name));
  let message = "何も起こらない。それは呪文の形をしていないようだ。";
  if (used.includes(value)) {
    message = "その呪文はもう使ってしまった。1呪文につき1回までじゃ。";
  } else if (value === normalizeAnswer("イチゲキゼンリョクデ")) {
    message = "仲間の命と引き換えになど出来ない…。じいさんのエールを思い出すのじゃ。";
  } else if (known.includes(value)) {
    message = "獣には通じない！状況と文字数に合う呪文を見極めるのじゃ。";
  }
  state.feedback = { stageId: "boss", type: "fail", message };
  render();
}

function renderClear() {
  elements.game.innerHTML = `
    <section class="stage-panel clear-screen premium-final-clear">
      <div class="stage-world final-clear-world">
        <img class="stage-bg-art" src="./assets/stage05-bg-premium.webp" alt="崩れゆく異空間" loading="eager">
        <div class="final-clear-light"></div>
      </div>
      <div class="final-clear-card">
        <span class="clear-kicker">ESCAPE COMPLETE</span>
        <h2>脱出成功</h2>
        <p>とびきりの一撃がラスボスを打ち砕いた。出口の光が開き、現在異空間からの脱出に成功した。</p>
        <div class="final-spell-list"><span>習得した呪文</span>${state.spells.map((spell) => `<strong>☆ ${spell}</strong>`).join("")}</div>
        <div class="stage-actions">
          <button class="primary-button" id="replayButton" type="button">最初から遊ぶ</button>
        </div>
      </div>
    </section>
  `;
  document.querySelector("#replayButton").addEventListener("click", resetGame);
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
  state.stage4Memo = normalizeStage4Memo(null);
  state.revealed = {};
  state.genericPanelMode = "closed";
  state.bossPanelMode = "closed";
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
    state.slotPickerOpen = false;
    render();
    return;
  }

  if (stage.id === "path") {
    state.pathPanelMode = "problem";
    state.slotPickerOpen = false;
    render();
    return;
  }

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "problem";
    state.learnedSpellViewerOpen = false;
    state.feedback = null;
    render();
    return;
  }

  if (stage.id === "boss") {
    state.bossPanelMode = "problem";
    state.feedback = null;
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
    state.hiddenSpells = { ...(state.hiddenSpells || {}), [stage.id]: false };
    state.hiddenProblems = { ...(state.hiddenProblems || {}), [stage.id]: true };
    state.gatePanelMode = "spell";
    state.slotPickerOpen = false;
    render();
    requestAnimationFrame(() => {
      const magic = document.querySelector(".spell-device");
      if (magic) {
        magic.scrollIntoView({ behavior: "smooth", block: "center" });
        magic.classList.remove("is-menu-focus");
        requestAnimationFrame(() => magic.classList.add("is-menu-focus"));
      }
    });
    return;
  }

  if (stage.id === "path") {
    state.pathPanelMode = "spell";
    state.memoPickerOpen = false;
    render();
    requestAnimationFrame(() => {
      const magic = document.querySelector(".spell-device");
      if (magic) {
        magic.scrollIntoView({ behavior: "smooth", block: "center" });
        magic.classList.remove("is-menu-focus");
        requestAnimationFrame(() => magic.classList.add("is-menu-focus"));
      }
    });
    return;
  }

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "play";
    state.learnedSpellViewerOpen = false;
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

  if (stage.id === "shop" || stage.id === "time") {
    state.genericPanelMode = "play";
    state.learnedSpellViewerOpen = false;
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
if (elements.menuProblem) elements.menuProblem.addEventListener("click", focusCurrentProblem);
if (elements.menuMagic) elements.menuMagic.addEventListener("click", focusCurrentMagic);
if (elements.menuHint) elements.menuHint.addEventListener("click", showCurrentHint);
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

render();
