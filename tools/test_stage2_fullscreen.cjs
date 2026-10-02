const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const source = fs.readFileSync(require('node:path').join(__dirname, '../tanohama/app.js'), 'utf8');
const code = source.slice(source.indexOf('// Request fullscreen only'));
async function check(mode) {
  const handlers = {}, messages = [], button = {}, calls = [];
  const document = {documentElement: {}, querySelector: () => button, addEventListener: (name, handler) => handlers[name] = handler};
  if (mode === 'supported') {
    document.fullscreenEnabled = true;
    document.documentElement.requestFullscreen = async function () { calls.push('enter'); document.fullscreenElement = this; };
    document.exitFullscreen = async () => { calls.push('exit'); document.fullscreenElement = null; };
  }
  if (mode === 'rejected') document.documentElement.requestFullscreen = async () => { throw Error('blocked'); };
  if (mode === 'webkit') {
    document.webkitFullscreenEnabled = true;
    document.documentElement.webkitRequestFullscreen = async function () { calls.push('enter'); document.webkitFullscreenElement = this; };
    document.webkitExitFullscreen = async () => { calls.push('exit'); document.webkitFullscreenElement = null; };
  }
  vm.runInNewContext(code, {document, window: {dispatchEvent: () => calls.push('resize')}, Event: class {}, showMenuMessage: (...args) => messages.push(args)});
  const event = {target: {closest: () => button}};
  await handlers.click(event);
  if (mode === 'supported' || mode === 'webkit') {
    handlers.fullscreenchange();
    assert.equal(button.textContent, '全画面を終了');
    await handlers.click(event);
    handlers.fullscreenchange();
    assert.equal(button.textContent, '全画面表示');
    assert.deepEqual(calls, ['enter','resize','exit','resize']);
    assert.equal(messages.length, 0);
  } else {
    assert.equal(messages.length, 1);
    assert.match(messages[0][1], /ホーム画面に追加/);
    assert.match(messages[0][1], /進行データ/);
  }
}
(async () => { for (const mode of ['supported','webkit','unsupported','rejected']) await check(mode); console.log('Fullscreen checks passed: enter/exit, WebKit, unsupported, rejection, resize, and help.'); })().catch(error => {console.error(error); process.exitCode = 1;});
const html = fs.readFileSync(require('node:path').join(__dirname, '../tanohama/index.html'), 'utf8');
const viewportScript = html.match(/<script>([\s\S]*?)<\/script>/)[1];
for (const ua of ['iPhone', 'iPhone Line/15.0', 'Android Line/15.0', 'Macintosh']) {
  const values = {}, events = {}, classes = new Set();
  const root = {classList: {add: value => classes.add(value), toggle: (value, enabled) => enabled ? classes.add(value) : classes.delete(value)}, style: {setProperty: (key, value) => values[key] = value}};
  const viewport = {width: 844, height: 280, addEventListener: (name, fn) => events['viewport:' + name] = fn};
  vm.runInNewContext(viewportScript, {URLSearchParams, location: {search: ''}, navigator: {userAgent: ua, maxTouchPoints: 5}, document: {documentElement: root, addEventListener: (name, fn) => events[name] = fn}, window: {visualViewport: viewport, addEventListener: (name, fn) => events[name] = fn, setTimeout: fn => fn()}});
  assert.equal(values['--app-height'], '280px');
  assert.equal(classes.has('line-in-app'), ua.includes('Line/'));
  viewport.height = 390;
  events.fullscreenchange();
  assert.equal(values['--app-height'], '390px');
  viewport.width = 390; viewport.height = 844;
  events.orientationchange();
  assert.equal(values['--app-width'], '390px');
  assert.equal(values['--app-height'], '844px');
}
console.log('Mobile viewport checks passed: iPhone, LINE, Android, iPad identification, fullscreen resize, orientation.');
