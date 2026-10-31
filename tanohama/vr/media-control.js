/* Per-document playback ownership. Does not change media bytes or puzzle state. */
(()=>{'use strict';
 const videos=new Set(),contexts=new Set(),suspended=new Set();let active=false;
 function register(video){videos.add(video);if(!active){video.pause();video.autoplay=false}}
 function observePlay(event){const video=event.target;if(!(video instanceof HTMLMediaElement))return;register(video);if(!active)return;for(const other of videos)if(other!==video&&!other.paused)other.pause()}
 document.addEventListener('play',observePlay,true);document.addEventListener('playing',observePlay,true);
 new MutationObserver(records=>{for(const record of records)for(const n of record.addedNodes)if(n.nodeType===1){if(n instanceof HTMLMediaElement)register(n);else n.querySelectorAll('video,audio').forEach(register)}}).observe(document.documentElement,{subtree:true,childList:true});
 const nativePlay=HTMLMediaElement.prototype.play;
 HTMLMediaElement.prototype.play=function(){
  if(!active)return Promise.reject(new DOMException('映像の表示面が閉じています','NotAllowedError'));
  for(const other of videos){if(other!==this&&!other.paused)other.pause();if(!other.isConnected)videos.delete(other)}
  videos.add(this);return nativePlay.call(this);
 };
 const Native=window.AudioContext||window.webkitAudioContext;
 if(Native){class OwnedAudioContext extends Native{constructor(...args){super(...args);contexts.add(this);if(!active)this.suspend().catch(()=>{})}resume(){return active?super.resume():Promise.resolve()}}window.AudioContext=OwnedAudioContext;if(window.webkitAudioContext)window.webkitAudioContext=OwnedAudioContext}
 function sync(value){
  active=!!value;
  document.querySelectorAll('video,audio').forEach(v=>videos.add(v));
  for(const v of videos){if(!active||!v.isConnected)v.pause();if(!v.isConnected)videos.delete(v)}
  if(!active){for(const c of contexts)if(c.state==='running'){suspended.add(c);c.suspend().catch(()=>{})}}
  else{for(const c of suspended){if(c.state==='suspended')c.resume().catch(()=>{});suspended.delete(c)}}
 }
 document.addEventListener('visibilitychange',()=>{if(document.hidden)sync(false)});
 window.addEventListener('pagehide',()=>sync(false));
 window.QuestMediaControl={sync,inspect:()=>{document.querySelectorAll('video,audio').forEach(v=>videos.add(v));return {active,playing:[...videos].filter(v=>!v.paused&&!v.ended&&v.isConnected).map(v=>({id:v.id,time:v.currentTime})),elements:[...videos].map(v=>({id:v.id,time:v.currentTime,paused:v.paused,ended:v.ended,connected:v.isConnected})),contexts:[...contexts].map(c=>c.state)}}};
})();
