/* Independent stage-one WebXR prototype. Original source/assets stay untouched. */
'use strict';
AFRAME.registerComponent('quest-input',{
  init(){this.latched=false;this.el.addEventListener('thumbstickmoved',e=>{const x=e.detail.x;if(Math.abs(x)<.25)this.latched=false;if(Math.abs(x)>.7&&!this.latched){this.latched=true;window.gateApp?.turn(x>0?30:-30)}});this.el.addEventListener('gripdown',()=>window.gateApp?.menu());this.el.addEventListener('bbuttondown',()=>window.gateApp?.menu());this.el.addEventListener('ybuttondown',()=>window.gateApp?.menu());}
});
(function(){
 const M=GateModel,D=GateSource,scene=document.querySelector('#scene'),rig=document.querySelector('#rig'),cam=document.querySelector('#camera'),world=document.querySelector('#world'),panel=document.querySelector('#panel');
 const positions=[[0,4],[0,1],[-2,-1],[1.8,-3.5],[0,-10.2],[0,-12.4]];
 let state=M.fresh(),storageOK=true,mode='',page=0,notice='',lastAction='',lastAt=0,bridgeTimer=null,turnLocked=false,loadError=false;
 const desktopClose=document.createElement('button');desktopClose.id='desktop-close-panel';desktopClose.textContent='画面を閉じて探索へ';desktopClose.hidden=true;desktopClose.addEventListener('click',()=>close());document.body.appendChild(desktopClose);
 try{state=M.normalize(JSON.parse(localStorage.getItem(M.KEY)))}catch(e){storageOK=false}
 function persist(){try{localStorage.setItem(M.KEY,JSON.stringify(state))}catch(e){storageOK=false;document.querySelector('#load-status').textContent='保存領域が使えません。この回の進行のみ保持します。'}}
 function act(t,v){const r=M.action(state,t,v);persist();return r}
 function el(tag,attrs={},parent=world){const n=document.createElement(tag);Object.entries(attrs).forEach(([k,v])=>n.setAttribute(k,v));parent.appendChild(n);return n}
 function box(x,y,z,w,h,d,color,parent=world){return el('a-box',{position:`${x} ${y} ${z}`,width:w,height:h,depth:d,color,roughness:.94},parent)}
 function lines(ctx,text,width,size){ctx.font=`700 ${size}px "Yu Gothic",Meiryo,sans-serif`;const out=[];String(text).split('\n').forEach(p=>{let line='';for(const c of p){if(ctx.measureText(line+c).width>width&&line){out.push(line);line=c}else line+=c}out.push(line)});return out}
 function label(text,x,y,z,w,h,opts={},parent=world){const n=el('a-plane',{position:`${x} ${y} ${z}`,width:w,height:h,material:'shader:flat;transparent:true;side:double'},parent);n.dataset.label=String(text);const c=document.createElement('canvas');c.width=opts.px||1536;c.height=Math.round(c.width*h/w);const g=c.getContext('2d');g.fillStyle=opts.bg||'#142333';g.fillRect(0,0,c.width,c.height);g.strokeStyle=opts.border||'#567084';g.lineWidth=5;g.strokeRect(3,3,c.width-6,c.height-6);const size=opts.size||Math.round(c.width/w*.058);const ls=lines(g,text,c.width-70,size);g.fillStyle=opts.color||'#f4eddc';g.textBaseline='middle';g.textAlign=opts.align||'center';const lineH=size*1.52;const top=(c.height-(ls.length-1)*lineH)/2;ls.forEach((s,i)=>g.fillText(s,opts.align==='left'?35:c.width/2,top+i*lineH));const apply=()=>{const mesh=n.getObject3D('mesh');if(!mesh)return;const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=4;mesh.material.map=t;mesh.material.needsUpdate=true;n._texture=t};n.addEventListener('loaded',apply,{once:true});if(n.hasLoaded)apply();return n}
 function hit(n,id,fn,scope='world'){n.id=id;n.dataset.scope=scope;n.classList.add('hit');n.addEventListener('click',e=>{e.stopPropagation();const mouse=e.detail?.mouseEvent;if(mouse&&mouse.detail>1&&lastAction===id)return;const now=performance.now();if(lastAction===id&&now-lastAt<280)return;lastAction=id;lastAt=now;if(mode&&scope==='world')return;if(!mode&&scope==='panel')return;fn(e)});n.addEventListener('mouseenter',()=>{const m=n.getObject3D('mesh');if(m)m.material.color.set('#fff0bc')});n.addEventListener('mouseleave',()=>{const m=n.getObject3D('mesh');if(m)m.material.color.set('#ffffff')});return n}
 function button(text,x,y,w,id,fn,parent=panel,opts={}){return hit(label(text,x,y,.065,w,.24,{bg:opts.bg||'#d5b77d',color:'#142333',size:58,px:Math.max(512,Math.round(w*700))},parent),id,fn,'panel')}
 function syncHits(){desktopClose.hidden=!mode;document.querySelectorAll('.hit').forEach(n=>n.classList.toggle('active-hit',n.dataset.scope===(mode?'panel':'world')));document.querySelectorAll('[raycaster]').forEach(n=>n.components.raycaster?.refreshObjects())}
 function dispose(n){for(const c of [...n.children])dispose(c);if(n._texture)n._texture.dispose();n.remove()}
 function clearPanel(){for(const n of [...panel.children])dispose(n)}
 function positionPanel(){cam.object3D.updateWorldMatrix(true,false);const p=new THREE.Vector3(),q=new THREE.Quaternion();cam.object3D.getWorldPosition(p);cam.object3D.getWorldQuaternion(q);const yaw=new THREE.Euler().setFromQuaternion(q,'YXZ').y;panel.setAttribute('position',`${p.x-Math.sin(yaw)*2.7} ${p.y} ${p.z-Math.cos(yaw)*2.7}`);panel.setAttribute('rotation',`0 ${THREE.MathUtils.radToDeg(yaw)} 0`)}
 function open(name,p=0){if(name!=='opening')window.GateOpening?.leave();if(name==='menu'&&window.GateJourney?.active)return GateJourney.menu();mode=name;page=p;notice='';positionPanel();renderPanel();syncHits()}
 function close(){window.GateOpening?.leave();window.GateJourney?.pauseMedia();mode='';clearPanel();syncHits()}
 function base(title){clearPanel();label(title,0,.86,.04,2.7,.28,{bg:'#23394c',color:'#efd89d',size:60},panel);box(0,0,-.025,2.82,2.05,.06,'#0e1c2b',panel);button('閉じて探索',1,-.94,.83,'close-panel',close);}
 function body(text,y=.2,h=1.05,size=42){label(text,0,y,.025,2.56,h,{align:'left',size,bg:'#102132'},panel)}
 function image(source,y,w,h,crop){const canvas=document.createElement('canvas'),img=document.querySelector(source);canvas.width=1536;canvas.height=Math.round(1536*h/w);const g=canvas.getContext('2d');if(crop){g.fillStyle='#102132';g.fillRect(0,0,canvas.width,canvas.height);const scale=Math.min(canvas.width/crop[2],canvas.height/crop[3]),w=crop[2]*scale,h=crop[3]*scale;g.drawImage(img,...crop,(canvas.width-w)/2,(canvas.height-h)/2,w,h)}else g.drawImage(img,0,0,canvas.width,canvas.height);const n=el('a-plane',{position:`0 ${y} .04`,width:w,height:h,material:'shader:flat;side:double'},panel);const apply=()=>{const mesh=n.getObject3D('mesh');if(!mesh)return;const t=new THREE.CanvasTexture(canvas);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=8;mesh.material.map=t;mesh.material.needsUpdate=true;n._texture=t};n.addEventListener('loaded',apply,{once:true});if(n.hasLoaded)apply();return n}
 function renderPanel(){
  if(mode==='welcome'){base('現在異空間からの脱出');body(page===0?D.intro.story+'\n\n'+D.intro.letter.slice(0,130):D.intro.letter.slice(130),.2,1.12,42);button(page===0?'手紙のつづき':'探索を始める',-.3,-.58,1.7,'intro-next',()=>{if(page===0){page=1;renderPanel();syncHits()}else{act('start');close()}});return}
  if(mode==='menu'){base('崩れた足場｜探索メニュー');body('トリガー：光る対象を選ぶ\n黄色い輪：テレポート移動\nスティック左右：30°ずつ旋回\nグリップ／B・Y：このメニュー\n\n進行・文字・取得した書は自動保存。'+(storageOK?'':'\n保存できないため、この回のみ有効。'),.27,1.05,42);button('封印の書',-.86,-.42,.8,'menu-book',()=>showBook());button('呪文の石板',0,-.42,.8,'menu-spell',()=>showSpell());button('手紙・ルール',.86,-.42,.8,'menu-letter',()=>open('rules'));button('入口に戻る',-.8,-.84,.9,'menu-return',()=>{move(0);close()});button('試作をリセット',.15,-.84,.9,'reset-request',()=>open('reset'));return}
  if(mode==='reset'){base('この独立試作の進行を消しますか？');body('本編のセーブには触れません。\nこの試作の本・入力・クリア状態を消去します。');button('消さずに戻る',-.65,-.55,1.1,'reset-cancel',()=>open('menu'));button('試作だけ消す',.65,-.55,1.1,'reset-confirm',()=>{clearTimeout(bridgeTimer);state=M.fresh();persist();restoreWorld();open('welcome')});return}
  if(mode==='rules'){base('呪文のルール');body(D.intro.rules.join('\n\n'),.2,1.15,46);button('冒頭映像を見直す',-.3,-.65,1.7,'opening-review',()=>window.GateOpening?.enter());return}
  if(mode==='explore'){base(page===1?'魔法使いを見つけた！':'何かを見つけた');body(page===1?'「よく見つけた。この封印の書を授けよう。書に刻まれた問題を解けば、呪文を得られる」\n\n封印の書を入手した。':`呪文「${page===0?'コイシコロ':'スナケムリ'}」を覚えた。\n\n${D.fakes[page===0?'コイシコロ':'スナケムリ']}`);if(page===1)button('封印の書を開く',-.2,-.57,1.8,'found-open',()=>open('book'));return}
  if(mode==='locked'){base('まだ封印の書がない');body('魔法使いの気配がする。\n石柱の陰、青い火の壁、足元の瓦礫を調べよう。');return}
  if(mode==='book'){
   base('封印の書｜ステージ1 原問題');
   if(page===0){const img=document.querySelector('#problem-source');image('#problem-source',.16,2.58,2.58*img.naturalHeight/img.naturalWidth);}
   else if(page===1||page===2){const img=document.querySelector('#problem-source'),x=page===1?0:img.naturalWidth*.51;image('#problem-source',.15,2.55,1.23,[x,0,img.naturalWidth*.51,img.naturalHeight*.82]);}
   else {body('①、②が解けたら次は「つかった①、②の答え」の下のカタカナを読むのじゃ！\n\n文字盤の上段・下段の同じ列が対応する。見つけた文字を選ぶと下段を順番に読めます。',.28,.95,42);}
   button('全体',-1.0,-.55,.48,'book-full',()=>open('book',0));button('①拡大',-.44,-.55,.56,'book-one',()=>open('book',1));button('②拡大',.2,-.55,.56,'book-two',()=>open('book',2));button('文字盤',.94,-.55,.75,'book-kana',()=>open('kana'));button('ヒント',-.84,-.84,.75,'book-hint',()=>{act('hint');open('hint')});button('石板へ',0,-.84,.75,'book-spell',()=>showSpell());return;
  }
  if(mode==='kana'){
   base('封印の書｜文字盤');body('答えに含まれる上段の文字を探し、その下の文字を選ぶ。',.59,.22,39);
   const start=page===0?1:12,end=page===0?12:23,cols=end-start,ww=2.52/cols;
   for(let i=start;i<end;i++){const x=-1.26+(i-start+.5)*ww;label(D.kana[0][i],x,.26,.06,ww-.015,.23,{bg:'#25394b',size:80,px:180},panel);hit(label(D.kana[1][i],x,-.03,.06,ww-.015,.26,{bg:state.marks.includes(i)?'#d6b87f':'#25394b',color:state.marks.includes(i)?'#142333':'#fff2cf',size:78,px:180},panel),'kana-'+i,()=>{act('mark',i);renderPanel();syncHits()},'panel')}
   const reading=[...state.marks].sort((a,b)=>a-b).map(i=>D.kana[1][i]).join('').replace(/[「」]/g,'');body('選んだ列：'+(reading||'まだ選んでいません'),-.34,.25,43);if(reading==='ケモノガマチガイ')body('上段の獣の名前の誤字を探せ。誤字の下の一文字を「ケモノ」に加える。',-.57,.2,31);
   button(page===0?'右の文字へ →':'← 左の文字へ',-.5,-.84,1.35,'kana-page',()=>open('kana',page===0?1:0));return;
  }
  if(mode==='hint'){base(`ヒント ${state.hint}/3`);body(D.gate.hints.slice(0,state.hint).join('\n\n'),.22,1.17,43);button('次のヒント',-.55,-.6,1.25,'hint-next',()=>{act('hint');renderPanel();syncHits()});return}
  if(mode==='spell'){
   if(state.phase!=='input'){renderReward();return}
   base('石板に四文字を刻む');body(notice||'使う枠を選び、文字を選んで「唱える」。',.59,.24,39);
   state.input.forEach((s,i)=>button(s||'□',-.69+i*.46,.26,.39,'slot-'+i,()=>{act('slot',i);renderPanel();syncHits()},panel,{bg:i===state.active?'#f4d698':'#9aafbf'}));
   M.tiles.forEach((t,i)=>button(t,-.96+(i%5)*.48,-.1-Math.floor(i/5)*.3,.4,'tile-'+i,()=>{act('tile',t);notice='';renderPanel();syncHits()}));
   button('一文字消す',-.89,-.69,.78,'erase',()=>{act('erase');notice='';renderPanel();syncHits()});button('全部消す',-.04,-.69,.78,'erase-all',()=>{act('clear');notice='';renderPanel();syncHits()});button('唱える',.84,-.69,.82,'cast',()=>{const r=act('cast');if(r==='learned')renderPanel();else{notice=r==='incomplete'?'四つの石板すべてに文字を刻んでください。':'何も起こらない。文字を直して、もう一度。';renderPanel()}syncHits()});return;
  }
  if(mode==='reward'){renderReward();return}
  if(mode==='end'){base('崩れた足場を越えた');body('ステージ1 クリア\n\n☆ ツケモノ\n謎の四角を1個生成できる！\nこの土台の上にのみ生成可能。\n\n第1章の呪文と探索記録を保って、次の通路へ進める。',.15,1.3,44);button('第2章へ進む',-.3,-.64,1.5,'journey-start',()=>window.GateJourney?.start());return}
 }
 function renderReward(){base('☆ ツケモノを習得！');if(state.phase==='learned'){body('謎の四角を1個生成できる！\nこの土台の上にのみ生成可能。\n※この呪文は後のステージで使います\n\n進みますか？',.25,1.1,47);button('はい・呪文を使う',-.68,-.58,1.16,'bridge-yes',startBridge);button('いいえ・探索へ',.65,-.58,1.16,'bridge-no',close)}else{body('漬物石のおかげで床がふさがった！\n\n黄色い移動輪で向こう岸へ渡ろう。\n向こう岸の出口で第1章クリア。',.2,1.13,46);button('岩の橋を見る',-.25,-.58,1.7,'bridge-view',close)}}
 function showBook(){open(state.book?'book':'locked')}
 function showSpell(){open(state.book?'spell':'locked')}
 function startBridge(){if(act('bridge')!=='casting')return;close();const rock=document.querySelector('#bridge-rock');rock.setAttribute('visible',true);rock.setAttribute('position','0 7 -7.5');rock.setAttribute('animation','property:position;to:0 -0.48 -7.5;dur:1350;easing:easeInQuad');bridgeTimer=setTimeout(()=>{if(state.phase!=='casting')return;act('land');restoreWorld();open('reward')},1600)}
 function restoreWorld(){const [x,z]=positions[state.position];rig.setAttribute('position',`${x} 0 ${z}`);rig.setAttribute('rotation',`0 ${state.yaw} 0`);const done=['clear','complete'].includes(state.phase);document.querySelector('#gap-warning')?.setAttribute('visible',!done);const rock=document.querySelector('#bridge-rock');if(rock){rock.removeAttribute('animation');rock.setAttribute('position','0 -0.48 -7.5');rock.setAttribute('visible',done)}document.querySelectorAll('[data-pad]').forEach(n=>{n.setAttribute('visible',Number(n.dataset.pad)<4||done);n.classList.toggle('hit',Number(n.dataset.pad)<4||done)});document.querySelector('#exit-door')?.setAttribute('color',done?'#c5ac6f':'#273a47');syncHits()}
 function move(i){if(act('move',i)==='blocked')return;const [x,z]=positions[state.position];rig.setAttribute('position',`${x} 0 ${z}`)}
 function turn(v){if(turnLocked)return;turnLocked=true;act('turn',v);rig.setAttribute('rotation',`0 ${state.yaw} 0`);if(mode)positionPanel();setTimeout(()=>turnLocked=false,280)}
 function buildWorld(){
  // Visual shell supplied by CC0 kit; canonical hit targets and movement gates remain below.
  box(0,-4,-7.5,10,.2,3,'#040911');
  // Distinct 3D exploration locations matching the original three choices.
  
  const rubble=el('a-entity',{position:'-2.8 0 -4.2'});for(let i=0;i<5;i++)box((i%3)*.4,.15+i*.025,Math.floor(i/3)*.4,.5,.3,.4,'#59636a',rubble);
  el('a-sphere',{position:'3.7 2.55 -2.4',radius:.19,color:'#69d9fc',material:'shader:flat'});el('a-cone',{position:'3.7 2.8 -2.4','radius-bottom':.18,'radius-top':0,height:.48,color:'#90e6ff',material:'shader:flat;opacity:.85;transparent:true'});el('a-entity',{position:'3.7 2.5 -2.4',light:'type:point;color:#67cffe;intensity:1.2;distance:7;decay:2'});
  const target=(text,id,x,y,z,fn,w=1.6)=>hit(label(text,x,y,z,w,.46,{size:58,px:900,bg:'#21394d',border:'#80a6bb'}),id,fn);
  target('石柱の陰を調べる','explore-pillar',-3.1,1.8,-.55,()=>{act('explore',0);open('explore',0)});
  target('青い火の壁を調べる','explore-blue',3,1.2,-1.82,()=>{act('explore',1);open('explore',1)});
  target('足元の瓦礫を調べる','explore-rubble',-2.8,.88,-3.6,()=>{act('explore',2);open('explore',2)});
  target('四文字の石板','stone-spell',.4,1.45,-4.36,showSpell,1.5);
  const book=box(2.5,1.48,.1,.8,.12,.55,'#b58e4a');book.setAttribute('rotation','0 -12 0');target('封印の書を読む','world-book',2.5,1.9,.15,showBook);
  target('手紙と呪文のルール','world-rules',-2.7,1.55,2.5,()=>open('welcome'),1.95);
  target('操作・メニュー','world-menu',0,2.3,-3.4,()=>open('menu'),1.7);
  label('崩れた足場\n床が割れて先へ進めない',0,2.8,-13.95,4,.8,{size:70});
  label('先の足場へ渡るには\n四文字の呪文が必要',0,.6,-6.6,2.8,.55,{bg:'#3b2c24',size:58}).id='gap-warning';
  const rock=box(0,-.48,-7.5,3.1,.96,3.2,'#8c8371');rock.id='bridge-rock';rock.setAttribute('visible',false);
  const door=box(0,1.4,-14,2.1,2.8,.18,'#273a47');door.id='exit-door';target('次の通路へ','exit',0,1.4,-13.85,()=>{if(!['clear','complete'].includes(state.phase)){notice='まだ渡れない';return}act('finish');open('end')},1.7);
  positions.forEach(([x,z],i)=>{const n=el('a-circle',{position:`${x} .035 ${z}`,rotation:'-90 0 0',radius:.5,material:'shader:flat;color:#e2c77e;side:double;transparent:true;opacity:.22'});el('a-ring',{position:'0 0 .003','radius-inner':.35,'radius-outer':.5,material:'shader:flat;color:#e2c77e;side:double'},n);n.dataset.pad=i;hit(n,'pad-'+i,()=>move(i));label(i>=4?'向こう岸へ':'ここへ移動',x,.3,z-.25,1,.22,{size:55,px:512,bg:'#1d3040'}).setAttribute('rotation','-25 0 0')});
  restoreWorld();
 }
 async function checkXR(){const text=document.querySelector('#support'),btn=document.querySelector('#enter-vr');if(!isSecureContext){text.textContent='VRにはHTTPS接続が必要です。ここではPCで試せます。';return}try{if(!navigator.xr||!await navigator.xr.isSessionSupported('immersive-vr')){text.textContent='この環境はVR非対応です。PCで探索を試せます。Questでは対応ブラウザで開いてください。';return}btn.disabled=false;text.textContent='VR対応。Questのコントローラーで探索できます。';}catch(e){text.textContent='VR対応を確認できません。PC操作で続けられます。'}}
 document.querySelector('#enter-vr').addEventListener('click',async()=>{try{await scene.enterVR()}catch(e){document.querySelector('#support').textContent='VRを開始できませんでした。接続とヘッドセットを確認して再試行してください。'}});
 document.querySelector('#menu').addEventListener('click',()=>open('menu'));
 window.addEventListener('keydown',e=>{if(e.repeat)return;if(e.key==='Escape'){mode?close():open('menu')}if(e.key.toLowerCase()==='q')turn(-30);if(e.key.toLowerCase()==='e')turn(30)});
 scene.addEventListener('enter-vr',()=>{document.body.classList.add('vr-mode');open('menu')});scene.addEventListener('exit-vr',()=>{document.body.classList.remove('vr-mode');if(state.phase!=='casting')open('menu')});
 window.addEventListener('pagehide',persist);document.addEventListener('visibilitychange',()=>{if(document.hidden){window.GateOpening?.leave();window.GateJourney?.pauseMedia()}});
 function init(){buildWorld();checkXR();if(!storageOK)document.querySelector('#load-status').textContent='保存データを読み込めませんでした。この回から始めます。';open(state.started?(state.phase==='learned'?'reward':'menu'):'welcome');}
 window.gateHost={M,D,scene,rig,cam,world,panel,el,box,label,hit,button,body,base,open,close,syncHits,dispose,positionPanel,persist,getState:()=>state,getMode:()=>mode};window.gateApp={turn,menu:()=>open('menu'),getSnapshot:()=>JSON.parse(JSON.stringify({state,mode,page,storageOK,loadError,journey:window.GateJourney?.snapshot()||null,opening:window.GateOpening?.snapshot()||null}))};
 document.querySelectorAll('a-assets img').forEach(n=>n.addEventListener('error',()=>{loadError=true;document.querySelector('#load-status').textContent='問題画像を読み込めません。ページを再読込してください。'}));
 scene.hasLoaded?init():scene.addEventListener('loaded',init,{once:true});
})();


