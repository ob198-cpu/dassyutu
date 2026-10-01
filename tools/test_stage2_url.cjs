// Verify isolated Stage 02 links without reading or changing a real browser save.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../tanohama/app.js'), 'utf8');
const html = fs.readFileSync(path.join(__dirname, '../tanohama/index.html'), 'utf8');
const section = (start, end) => source.slice(source.indexOf(start), source.indexOf(end));
const script = [
  source.slice(0, source.indexOf('const audioDirector =')),
  section('const stage2MemoRows', 'const elements ='),
  section('function loadState()', 'function forceGateProblemClosedOnStartup()'),
  section('function forceGateProblemClosedOnStartup()', 'function addUnique('),
  section('function getUnlockedStageIndex()', 'let lastStageKey ='),
  section('function renderNav()', 'function sideStageLabel('),
  section('function renderPathStageClear(', 'function renderPathSuccessStep('),
  section('function resetGame()', 'function wireProblems()'),
  section('const state = loadState();', 'let gateSuccessTimers ='),
].join('\n');

function launch(search, storage) {
  const reads = [];
  const list = () => ({innerHTML: '', children: [], appendChild(child) { this.children.push(child); }});
  const elements = {nav: list(), sideNav: list()};
  const context = vm.createContext({
    URLSearchParams, window: {location: {search}}, elements,
    localStorage: {
      getItem(key) { reads.push(key); return storage.get(key) ?? null; },
      setItem(key, value) { storage.set(key, value); },
      removeItem(key) { storage.delete(key); },
    },
    document: {createElement() { return {
      classList: {add() {}}, addEventListener() {}, append() {},
    }; }},
    closeInfoDialogs() {}, clearGateSuccessTimers() {}, render() {},
    audioDirector: {setCinematicMode() {}},
    sideStageLabel(stage) { return {number: stage.number, title: stage.title}; },
  });
  vm.runInContext(script, context);
  return {run: code => vm.runInContext(code, context), reads, elements};
}

const mainSave = JSON.stringify({
  stageIndex: 4, cleared: ['intro', 'gate', 'path', 'shop'],
  spells: ['ツケモノ', 'ゴクロウサマ', 'ドラブレス'],
  stage2Memo: [Array.from('SIKISIIN')], openingVideoSeen: true,
});
const storage = new Map([['tanohamaEscapeStateV4', mainSave]]);
let single = launch('?stage=2', storage);
assert.equal(single.run('state.stageIndex'), 2, 'Open Stage 02 directly');
assert.equal(single.run('state.pathPanelMode'), 'problem', 'Open its problem directly');
assert.equal(single.run('state.sealBooks.path'), true);
assert.equal(single.run('state.spells.length'), 0, 'Do not inherit learned spells from the main game');
assert.deepEqual(single.reads, ['tanohamaStage2StateV1'], 'Never read the main-game save');
for (let index = 0; index < 6; index++) {
  assert.equal(single.run(`canOpenStage(${index})`), index === 2);
  if (index !== 2) assert.equal(single.run(`openStage(${index})`), false);
}
single.run('renderNav()');
assert.equal(single.elements.nav.children.length, 1);
assert.equal(single.elements.sideNav.children.length, 1);
assert.equal(single.elements.nav.children[0].textContent, '02');
single.run('state.stage2Memo[0][0] = "S"; saveState()');
assert.equal(storage.get('tanohamaEscapeStateV4'), mainSave, 'Keep the main save byte-for-byte unchanged');
single = launch('?stage=2', storage);
assert.equal(single.run('state.stage2Memo[0][0]'), 'S', 'Restore the standalone notes after reload');
single.run('resetGame()');
assert.equal(single.run('state.stageIndex'), 2, 'Reset stays in Stage 02');
assert.equal(single.run('state.pathPanelMode'), 'problem');
assert.equal(single.run('state.stage2Memo[0].join("")'), '');
assert.equal(storage.get('tanohamaEscapeStateV4'), mainSave, 'Standalone reset must not reset the main game');
single.run('state.cleared = ["path"]; state.spells = ["ゴクロウサマ"]; saveState()');
single = launch('?stage=2', storage);
assert.equal(single.run('state.pathPanelMode'), 'clear', 'Restore a completed standalone stage');
assert.ok(!single.run('renderPathStageClear(stages[2])').includes('id="nextButton"'), 'No route to Stage 03 after standalone clear');

const normal = launch('', storage);
assert.equal(normal.run('state.stageIndex'), 4, 'Normal URL restores the original game');
assert.deepEqual(normal.reads, ['tanohamaEscapeStateV4']);
normal.run('renderNav()');
assert.equal(normal.elements.nav.children.length, 6, 'Keep all normal-game stage navigation');
assert.ok(normal.run('renderPathStageClear(stages[2])').includes('id="nextButton"'), 'Keep normal Stage 03 progression');
normal.run('resetGame()');
assert.equal(normal.run('state.stageIndex'), 0, 'Normal reset still starts at Stage 00');
assert.equal(normal.run('state.sealBooks.path'), undefined);
assert.equal(launch('?stage=3', new Map()).run('state.stageIndex'), 0, 'Unrecognized stage queries retain normal startup');

const entryScript = html.match(/<script>([\s\S]*?)<\/script>/)[1];
const buildVersion = entryScript.match(/const buildVersion = "([^"]+)"/)[1];
function cleanRefresh(search) {
  let result;
  vm.runInNewContext(entryScript, {
    URLSearchParams,
    location: {search, pathname: '/tanohama/', hash: '#test'},
    history: {replaceState(_state, _title, url) { result = url; }},
    navigator: {userAgent: '', maxTouchPoints: 0},
    document: {documentElement: {}},
  });
  return result;
}
assert.equal(cleanRefresh(`?stage=2&refresh=${buildVersion}`), '/tanohama/?stage=2#test', 'Cache-refresh cleanup preserves Stage 02 mode');
assert.equal(cleanRefresh(`?refresh=${buildVersion}`), '/tanohama/#test', 'Keep normal refresh cleanup');
console.log('Stage 02 URL checks passed: direct entry, save isolation, reload/reset, navigation, clear, and normal-game regression.');
