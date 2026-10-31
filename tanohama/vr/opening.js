/* Original opening MP4, explicit playback, isolated progress and sound preference. */
(()=>{'use strict';const H=gateHost;let video,returnTo='welcome',message='再生ボタンで元の冒頭映像を見られます。',busy=false,requestId=0;
 function getVideo(){if(video)return video;video=document.createElement('video');video.id='gateOpeningVideo';video.src='engine/assets/opening-yakiniku-rift-v1.mp4';video.preload='auto';video.playsInline=true;video.style.display='none';video.muted=H.getState().openingMuted;video.volume=.95;document.body.appendChild(video);video.addEventListener('ended',()=>{H.getState().openingSeen=true;H.persist();leave();H.open(returnTo)});video.addEventListener('error',()=>{message='映像を読み込めません。再試行かスキップで続けられます。';if(H.getMode()==='opening')render()});return video}
 function enter(){returnTo=H.getState().started?'rules':'welcome';H.open('opening');render()}
 function leave(){requestId++;busy=false;video?.pause();QuestMediaControl.sync(false)}
 async function play(){if(busy)return;const attempt=++requestId;busy=true;try{QuestMediaControl.sync(true);const v=getVideo();v.muted=H.getState().openingMuted;if(v.error)v.load();if(v.ended)v.currentTime=0;await v.play();if(attempt!==requestId)return;message='冒頭映像を再生しています。';}catch(_){if(attempt!==requestId)return;message='再生を開始できません。再試行かスキップで続けられます。'}finally{if(attempt===requestId){busy=false;if(H.getMode()==='opening')render()}}}
 function render(){H.base('現在異空間からの脱出｜冒頭映像');document.querySelector('#close-panel')?.remove();H.panel.children[0].setAttribute('position','0 1.1 .04');H.panel.children[1].setAttribute('height',2.5);const v=getVideo(),n=H.el('a-plane',{position:'0 .19 .05',width:2.6,height:1.46,material:'shader:flat'},H.panel);n.id='opening-screen';n.addEventListener('loaded',()=>{const t=new THREE.VideoTexture(v);t.colorSpace=THREE.SRGBColorSpace;n.getObject3D('mesh').material.map=t;n.getObject3D('mesh').material.needsUpdate=true;n._texture=t});
  H.label(message,0,-.63,.05,2.6,.22,{size:36},H.panel);
  H.button(v.paused?'再生／つづき':'一時停止',-.85,-.94,.8,'opening-play',()=>{if(v.paused)play();else{v.pause();message='一時停止中。つづきから再生できます。';render()}},H.panel);
  H.button(v.muted?'音：OFF':'音：ON',0,-.94,.8,'opening-sound',()=>{v.muted=!v.muted;H.getState().openingMuted=v.muted;H.persist();render()},H.panel);
  H.button('スキップ',.85,-.94,.8,'opening-skip',()=>{H.getState().openingSeen=true;H.persist();leave();H.open(returnTo)},H.panel);H.syncHits();
 }
 window.GateOpening={enter,leave,snapshot:()=>video?{busy,message,time:video.currentTime,duration:video.duration,paused:video.paused,ended:video.ended,muted:video.muted}:null};
 const init=()=>{if(!H.getState().started&&!H.getState().openingSeen)enter()};H.scene.hasLoaded?init():H.scene.addEventListener('loaded',init,{once:true});
})();
