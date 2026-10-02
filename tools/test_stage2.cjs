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
for (const id of ['#clearMemoCell', '#stage2KanjiToggle', '#stage2KanjiArrange', '#stage2KanjiDialogImage', '#stage2KanjiDialogToggle', '#closeMemoPicker']) buttons.set(id, button());
const tile = button({memoTile: ''});
const state = {
  stageIndex: 2, cleared: ['intro', 'gate'], spells: ['ツケモノ'], slotInput: [],
  stage2Memo: [], memoActive: {row: 0, col: 0}, stage2CellMarks: {},
  stage2KanjiShowingRevealed: false, stage2KanjiRedVisible: true,
};
const context = vm.createContext({
  state, console,
  document: {querySelector: s => buttons.get(s), querySelectorAll: s => ['[data-memo-tile]', '.slot-choice-button'].includes(s) ? [tile] : []},
  wireProblems() {}, saveState() {}, render() {}, popOnce() {}, audioDirector: {playEffect() {}},
});
vm.runInContext(declarations + '\n' + wiring + '\n' + answerWiring, context);
const run = code => vm.runInContext(code, context);
const board = () => run('renderStage2Board(normalizeStage2Memo(state.stage2Memo), {row:0,col:0}, false)');
const kanji = partsOnly => run(`renderStage2Kanji(true, ${partsOnly})`);
assert.ok(!/<rect[^>]*\bstroke=/.test(kanji(false)), 'The diagram must not add a second frame');
assert.ok(board().svg.includes('x="868" y="170" width="238" height="238"'), 'Preserve the original square and arrow positions');
assert.ok(!board().spots.includes('タッチしてヒント'), 'Do not offer a clue before the circle input unlocks it');
assert.ok(!board().spots.includes('stage2KanjiArrange'), 'Do not offer arranging before the circle input unlocks it');
const miPath = [...kanji(true).matchAll(/class="stage2-kanji-piece"[^>]*><path d="([^"]+)"/g)][2][1];
const sourceMiPath = [...kanji(false).matchAll(/class="stage2-kanji-piece"[^>]*><path d="([^"]+)"/g)][2][1];
assert.equal(miPath, sourceMiPath, 'Extract the same three slanted strokes shown in 糸 without reshaping them');
const miStrokes = [...miPath.matchAll(/M([\d.]+) ([\d.]+) L([\d.]+) ([\d.]+)/g)]
  .map(match => match.slice(1).map(Number));
assert.equal(miStrokes.length, 3, 'ミ must use exactly three source strokes');
const miLengths = miStrokes.map(([x1, y1, x2, y2]) => {
  assert.ok(x2 > x1 && y2 > y1, 'Each ミ stroke must slope down to the right');
  return Math.hypot(x2 - x1, y2 - y1);
});
assert.ok(miLengths[1] < miLengths[0] && miLengths[0] < miLengths[2], 'ミ middle stroke is shortest and bottom stroke longest');
assert.equal(run('isStage2KanjiClueRevealed([])'), false);
assert.ok(!board().spots.includes('stage2-touch-cue'), 'No touch cue before the phrase is entered');
assert.equal((board().svg.match(/data-memo=/g) || []).length, 8, 'Only eight upper circles are editable');
assert.ok(!board().spots.includes('stage2-kanji-added'), 'Initial clue must not contain answer strokes');
assert.ok(!board().spots.includes('クロミレ'), 'Do not leak clue text before solving');
run('wirePathProblem({id:"path"})');
run('wirePathStage({id:"path",slots:6}, false)');
buttons.get('#stage2KanjiArrange').handlers.click();
assert.equal(state.stage2KanjiShowingRevealed, false, 'Arranging must not bypass the circle input');
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
assert.ok(!board().spots.includes('タッチしてヒント'), 'Remove the old touch-hint label');
assert.ok(!board().spots.includes('stage2KanjiArrange'), 'The arranging button is outside the board');
assert.match(source, /stage2-problem-footer[\s\S]*?stage2KanjiArrange[\s\S]*?赤い部分を並べる/, 'Offer arranging in the right footer');
for (const id of ['#stage2KanjiToggle', '#stage2KanjiDialogImage']) {
  for (const expected of [false, true, false, true]) {
    buttons.get(id).handlers.click();
    assert.equal(board().spots.includes('stage2-kanji-added'), expected, 'Repeated image clicks alternate red and initial diagrams');
    assert.equal(state.stage2KanjiShowingRevealed, false, 'Image clicks must not arrange parts');
  }
}
buttons.get('#stage2KanjiArrange').handlers.click();
assert.equal(state.stage2KanjiShowingRevealed, true);
const extracted = board();
assert.equal((extracted.svg.match(/opacity="0.14"/g) || []).length, 0, 'Extracting the clue must not filter the whole puzzle');
buttons.get('#stage2KanjiToggle').handlers.click();
assert.equal(state.stage2KanjiShowingRevealed, false, 'Click the arranged image to return to the red diagram');
assert.equal(state.stage2KanjiRedVisible, true);
buttons.get('#stage2KanjiToggle').handlers.click();
assert.ok(!board().spots.includes('stage2-kanji-added'));
buttons.get('#stage2KanjiDialogToggle').handlers.click();
assert.equal(state.stage2KanjiShowingRevealed, true, 'The enlarged view also offers arranging');
assert.equal(state.stage2KanjiRedVisible, true);
assert.equal(JSON.stringify([state.cleared, state.spells, state.slotInput]), before, 'Comparing and arranging never solves the stage');
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
assert.ok(board().spots.includes('stage2-touch-cue'), 'Show the touch cue when the phrase unlocks the panel');
assert.equal(JSON.stringify(state.stage2CellMarks), '{"u:0:6":1}', 'Retain player marks when a vowel is corrected');
assert.equal(JSON.stringify([state.cleared, state.spells, state.slotInput]), before);
buttons.get('#clearMemoCell').handlers.click();
assert.equal(run('isStage2KanjiClueRevealed(state.stage2Memo)'), false);
assert.ok(!board().spots.includes('stage2-kanji-added'));
assert.ok(!board().spots.includes('stage2-touch-cue'), 'Remove the cue when the phrase is cleared');
console.log('Stage 02 regression checks passed: reveal, no auto-solve/filter, vowel correction, marks, clearing, and 8 input targets.');
