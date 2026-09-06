// Regression: white-circle notes reveal a clue, never solve/filter the board.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(path.join(__dirname, '../tanohama/app.js'), 'utf8');
const declarations = source.slice(source.indexOf('const stage2MemoRows'), source.indexOf('const elements ='));
const wiring = source.slice(source.indexOf('function wirePathProblem('), source.indexOf('function wirePathStage('));
const answerWiring = source.slice(source.indexOf('function wirePathStage('), source.indexOf('function wireOpeningVideo('));
const buttons = new Map();
function button(dataset = {}) {
  return { dataset, handlers: {}, addEventListener(name, handler) { this.handlers[name] = handler; } };
}
for (const id of ['#clearMemoCell', '#stage2KanjiToggle', '#closeMemoPicker']) buttons.set(id, button());
const tile = button({memoTile: ''});
const state = {
  stageIndex: 2, cleared: ['intro', 'gate'], spells: ['ツケモノ'], slotInput: [],
  stage2Memo: [], memoActive: {row: 0, col: 0}, stage2CellMarks: {},
  stage2KanjiShowingRevealed: false,
};
const context = vm.createContext({
  state, console,
  document: {querySelector: s => buttons.get(s), querySelectorAll: s => ['[data-memo-tile]', '.slot-choice-button'].includes(s) ? [tile] : []},
  wireProblems() {}, saveState() {}, render() {}, popOnce() {}, audioDirector: {playEffect() {}},
});
vm.runInContext(declarations + '\n' + wiring + '\n' + answerWiring, context);
const run = code => vm.runInContext(code, context);
const board = () => run('renderStage2Board(normalizeStage2Memo(state.stage2Memo), {row:0,col:0}, false)');
assert.equal(run('isStage2KanjiClueRevealed([])'), false);
assert.equal((board().svg.match(/data-memo=/g) || []).length, 8, 'Only eight upper circles are editable');
assert.ok(!board().spots.includes('stage2-kanji-added'), 'Initial clue must not contain answer strokes');
assert.ok(!board().spots.includes('クロミレ'), 'Do not leak clue text before solving');
run('wirePathProblem({id:"path"})');
run('wirePathStage({id:"path",slots:6}, false)');
const before = JSON.stringify([state.cleared, state.spells, state.slotInput]);
for (const [i, letter] of [...'SIKISINI'].entries()) {
  state.memoActive = {row: 0, col: [0,1,2,3,4,5,7,6][i]};
  tile.dataset.memoTile = letter;
  tile.handlers.click();
  assert.equal(run('isStage2KanjiClueRevealed(state.stage2Memo)'), i === 7);
}
assert.equal(JSON.stringify([state.cleared, state.spells, state.slotInput]), before, 'Notes must not grant a spell or stage clear');
assert.equal(state.stage2KanjiShowingRevealed, false, 'Show completed kanji before extracting the parts');
assert.equal((board().svg.match(/opacity="0.14"/g) || []).length, 0, 'No automatic color filtering');
assert.ok(board().spots.includes('stage2-kanji-added'));
buttons.get('#stage2KanjiToggle').handlers.click();
assert.equal(state.stage2KanjiShowingRevealed, true);
const extracted = board();
assert.equal((extracted.svg.match(/opacity="0.14"/g) || []).length, 0, 'Extracting the clue must not filter the whole puzzle');
state.stage2CellMarks = {'u:0:6': 1};
state.memoActive = {row:0,col:1};
tile.dataset.memoTile = 'O';
tile.handlers.click();
assert.equal(run('isStage2KanjiClueRevealed(state.stage2Memo)'), false);
assert.equal(state.stage2KanjiShowingRevealed, false);
state.memoActive = {row:0,col:1};
tile.dataset.memoTile = 'I';
tile.handlers.click();
assert.equal(run('isStage2KanjiClueRevealed(state.stage2Memo)'), true);
assert.equal(JSON.stringify(state.stage2CellMarks), '{"u:0:6":1}', 'Retain player marks when a vowel is corrected');
assert.equal(JSON.stringify([state.cleared, state.spells, state.slotInput]), before);
buttons.get('#clearMemoCell').handlers.click();
assert.equal(run('isStage2KanjiClueRevealed(state.stage2Memo)'), false);
assert.ok(!board().spots.includes('stage2-kanji-added'));
console.log('Stage 02 regression checks passed: reveal, no auto-solve/filter, vowel correction, marks, clearing, and 8 input targets.');
