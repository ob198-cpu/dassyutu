// Reviewed navigation additions only; game puzzles and cinematic state machines stay in app.js.
const recoverySceneButton = document.querySelector('#menuScene');
const recoveryVideosButton = document.querySelector('#menuVideos');
function recoveryIsBusy() {
  const stage = stages[state.stageIndex];
  return Boolean(state.bossIntroOpen || (stage.id === 'time' && state.timeSequencePhase)
    || (state.feedback?.type === 'success' && !['done','clear'].includes(state.feedback.phase)));
}
function recoveryUpdateControls() {
  const stage = stages[state.stageIndex];
  recoverySceneButton.disabled = state.isClear || stage.isIntro || recoveryIsBusy();
  const video = elements.game.querySelector('video');
  recoveryVideosButton.disabled = Boolean(video && !(state.isClear && state.clearPhase === 'finished')) || recoveryIsBusy();
  recoverySceneButton.title = recoverySceneButton.disabled ? '演出が終わってから背景へ戻れます' : '問題や入力を閉じて、この場所の背景を見る';
}
const recoveryRender = render;
render = function () { recoveryRender(); recoveryUpdateControls(); };
recoverySceneButton.addEventListener('click', () => {
  if (recoverySceneButton.disabled) return;
  closeInfoDialogs();
  const stage = stages[state.stageIndex];
  state.slotPickerOpen = false;
  state.gateAnswerOpen = false;
  state.pathAnswerOpen = false;
  state.timeAnswerOpen = false;
  state.memoPickerOpen = false;
  state.stage4PickerOpen = false;
  state.learnedSpellViewerOpen = false;
  if (stage.id === 'gate') {
    state.hiddenProblems = { ...state.hiddenProblems, gate: true };
    state.hiddenSpells = { ...state.hiddenSpells, gate: true };
    state.gatePanelMode = 'spell';
  } else if (stage.id === 'path') state.pathPanelMode = 'closed';
  else if (stage.id === 'boss') state.bossPanelMode = 'closed';
  else state.genericPanelMode = 'closed';
  state.feedback = null;
  render();
});
function recoveryAvailableVideos() {
  const clips = [{ file:'opening-yakiniku-rift-v1.mp4', label:'異世界へ飛ばされる前の映像' }];
  if (state.bossWizardSpellLearned || state.bossInput.length || state.cleared.includes('boss'))
    clips.push({file:'boss-entrance-v1.mp4',label:'ラスボスの登場'});
  clips.push(...bossClearVideos.slice(0,state.bossInput.length));
  if (state.isClear || state.cleared.includes('boss')) clips.push({file:'finale-ending-v2.mp4',label:'エンディング'});
  return clips;
}
const recoveryDialog = document.createElement('dialog');
recoveryDialog.id = 'recoveryVideoDialog';
recoveryDialog.className = 'recovery-video-dialog';
recoveryDialog.innerHTML = '<div class="recovery-video-head"><label for="recoveryVideoSelect">見た映像をもう一度</label><button id="closeRecoveryVideo" type="button">ゲームに戻る</button></div><select id="recoveryVideoSelect"></select><video id="recoveryVideo" controls playsinline webkit-playsinline preload="metadata"></video><p id="recoveryVideoStatus" role="status"></p><button id="recoveryVideoPlay" type="button">はじめから再生</button>';
document.body.append(recoveryDialog);
const recoveryVideo = recoveryDialog.querySelector('video');
const recoveryVideoSelect = recoveryDialog.querySelector('select');
const recoveryVideoStatus = recoveryDialog.querySelector('#recoveryVideoStatus');
const recoveryVideoPlay = recoveryDialog.querySelector('#recoveryVideoPlay');
function recoveryPlayVideo() {
  recoveryVideo.currentTime = 0;
  recoveryVideo.muted = audioDirector.isMuted();
  recoveryVideoStatus.textContent = '';
  recoveryVideo.play()?.catch(() => { recoveryVideoStatus.textContent = '再生ボタンを押してください。'; });
}
function recoverySelectVideo() {
  const clip = recoveryAvailableVideos()[Number(recoveryVideoSelect.value)];
  if (!clip) return;
  recoveryVideo.pause();
  recoveryVideo.src = './assets/' + clip.file;
  recoveryVideo.poster = clip.poster ? './assets/' + clip.poster : '';
  recoveryVideo.load();
  recoveryVideoStatus.textContent = '再生ボタンを押すと映像を見直せます。ゲームの進行は変わりません。';
}
recoveryVideosButton.addEventListener('click', () => {
  if (recoveryVideosButton.disabled) return;
  const clips = recoveryAvailableVideos();
  recoveryVideoSelect.replaceChildren(...clips.map((clip,index) => {
    const option = document.createElement('option'); option.value=String(index); option.textContent=clip.label; return option;
  }));
  recoveryDialog.showModal();
  recoverySelectVideo();
  recoveryVideoPlay.focus();
});
recoveryVideoSelect.addEventListener('change',recoverySelectVideo);
recoveryVideoPlay.addEventListener('click',recoveryPlayVideo);
recoveryDialog.querySelector('#closeRecoveryVideo').addEventListener('click',()=>recoveryDialog.close());
recoveryVideo.addEventListener('play',()=>audioDirector.setCinematicMode(true));
recoveryVideo.addEventListener('pause',()=>audioDirector.setCinematicMode(false));
recoveryVideo.addEventListener('ended',()=>audioDirector.setCinematicMode(false));
recoveryVideo.addEventListener('error',()=> { recoveryVideoStatus.textContent='映像を読み込めませんでした。ゲームに戻って通信状態を確認してください。'; audioDirector.setCinematicMode(false); });
recoveryDialog.addEventListener('close',()=> { recoveryVideo.pause(); recoveryVideo.removeAttribute('src'); recoveryVideo.load(); audioDirector.setCinematicMode(false); recoveryVideosButton.focus(); });
recoveryUpdateControls();
