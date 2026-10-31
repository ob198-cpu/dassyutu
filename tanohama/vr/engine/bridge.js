/* VR adapter: retains the original game rules and event handlers.
 * app.js differs from the published snapshot only in isolated storage keys.
 */
(()=>{
 const stage=()=>stages[state.stageIndex]||stages[0];
 function visible(n){if(n.disabled)return false;for(let p=n;p&&p!==document.body;p=p.parentElement){const c=getComputedStyle(p);if(c.display==='none'||c.visibility==='hidden'||p.tagName==='DIALOG'&&!p.open)return false}return n.getClientRects().length>0}
 let registry=new Map(),serial=0;
 function view(){
  const dialog=[...document.querySelectorAll('dialog[open]')].at(-1),root=dialog||elements.game;registry=new Map();
  const buttons=[...root.querySelectorAll('button,input,[data-memo][role="button"]')].filter(visible).map(n=>{const token=String(++serial);registry.set(token,n);return {token,id:n.id,text:(n.innerText||n.getAttribute('aria-label')||'').trim()||(['INPUT'].includes(n.tagName)?'数字を入力':n.dataset.slot!==undefined?`石板 ${Number(n.dataset.slot)+1}：□`:'選ぶ'),data:{...n.dataset},tag:n.tagName,type:n.type,value:n.value||''}});
  const images=[...root.querySelectorAll('img')].filter(visible).map(n=>({src:n.src,alt:n.alt}));
  const svgs=[...root.querySelectorAll('svg')].filter(n=>visible(n)&&!n.closest('button')).map(n=>({svg:n.outerHTML,cls:n.getAttribute('class')||''}));
  const texts=[...root.querySelectorAll('h1,h2,h3,p,blockquote,strong,#hintBody,.exploration-result,.exploration-spell-effect,.reward-name,.reward-desc,.boss-attack-name,.boss-step-effect')].filter(visible).map(n=>n.innerText.trim()).filter(Boolean);
  const video=[...root.querySelectorAll('video')].find(n=>visible(n)&&!(n.id==='endingVideo'&&state.clearPhase==='finished'));
  return {soundMuted:audioDirector.isMuted(),media:QuestMediaControl.inspect(),state:JSON.parse(JSON.stringify(state)),stage:{id:stage().id,title:stage().title,number:stage().number},dialog:dialog?.id||'',buttons,images,svgs,texts:[...new Set(texts)],video:video?{id:video.id,src:video.currentSrc||video.src,paused:video.paused,ended:video.ended}:null,unlocked:stages.map((s,i)=>({id:s.id,index:i,title:s.title,unlocked:canOpenStage(i)||isStageCleared(s.id)}))};
 }
 function gesture(n){if(n)n.dispatchEvent(new PointerEvent('pointerdown',{bubbles:true}));else audioDirector.unlock().catch(()=>{});}
 function announce(){parent.postMessage({type:'tanohama-vr-engine'},location.origin)}
 let pending;new MutationObserver(()=>{clearTimeout(pending);pending=setTimeout(announce,55)}).observe(document.body,{subtree:true,childList:true,attributes:true,attributeFilter:['open','hidden']});
 window.QuestEngine={
  view,click(token){const n=registry.get(String(token));if(!n||!n.isConnected||!visible(n))return false;gesture(n);if(typeof n.click==='function')n.click();else n.dispatchEvent(new MouseEvent('click',{bubbles:true}));saveState();announce();return true},
  clickSelector(selector){const n=document.querySelector(selector);if(!n||!visible(n))return false;gesture(n);if(typeof n.click==='function')n.click();else n.dispatchEvent(new MouseEvent('click',{bubbles:true}));saveState();announce();return true},
  input(token,value){const n=registry.get(String(token))||document.getElementById(String(token));if(!n||n.tagName!=='INPUT')return false;n.value=value;n.dispatchEvent(new Event('input',{bubbles:true}));n.dispatchEvent(new Event('change',{bubbles:true}));if(n.form)n.form.requestSubmit();else n.dispatchEvent(new KeyboardEvent('keydown',{key:'Enter',bubbles:true}));saveState();announce();return true},
  command(name,value){gesture(document.querySelector('#menuProblem'));if(name==='book')openCurrentSealBook();if(name==='explore'){openExploration();resolveExploration(stage(),value)}if(name==='hint')showCurrentHint();if(name==='magic')focusCurrentMagic();if(name==='input'){if(['gate','path','time'].includes(stage().id)){openCurrentSealBook();const selector=stage().id==='gate'?'#gateAnswerToggle':stage().id==='path'?'#pathAnswerToggle':'#timeAnswerToggle';const open=stage().id==='gate'?state.gateAnswerOpen:stage().id==='path'?state.pathAnswerOpen:state.timeAnswerOpen;if(!open)document.querySelector(selector)?.click()}else focusCurrentMagic()}if(name==='spells')focusCurrentMagic();if(name==='chapter'&&canOpenStage(value))openStage(value);if(name==='close'){closeInfoDialogs();closeStagePanelsOnEntry(stage());render()}saveState();announce()},
  startFromGate(proof){if(!proof||proof.phase!=='complete'||!proof.book)return false;state.stageIndex=2;state.cleared=['intro','gate'];state.spells=['ツケモノ',...(proof.fakes||[])];state.sealBooks={gate:true};state.fakeSpells={gate:proof.fakes||[]};state.openingVideoSeen=true;state.feedback=null;resetStageInput();closeStagePanelsOnEntry(stage());render();saveState();announce();return true},
  board(){return renderStage2Board(normalizeStage2Memo(state.stage2Memo),state.memoActive||{row:0,col:0},!!state.memoPickerOpen)},
  svg(selector){const n=document.querySelector(selector);if(!n)return '';const copy=n.cloneNode(true),original=[n,...n.querySelectorAll('*')],cloned=[copy,...copy.querySelectorAll('*')];cloned.forEach((c,i)=>{const cs=getComputedStyle(original[i]);for(const k of ['fill','stroke','stroke-width','opacity','display','visibility','font-size','font-family','font-weight'])c.style.setProperty(k,cs.getPropertyValue(k))});copy.setAttribute('xmlns','http://www.w3.org/2000/svg');const vb=n.viewBox?.baseVal;if(vb){copy.setAttribute('width',String(vb.width));copy.setAttribute('height',String(vb.height))}return new XMLSerializer().serializeToString(copy)},
  async capture(selector){
   const root=document.querySelector(selector);if(!root)return null;const r=root.getBoundingClientRect();if(!r.width||!r.height)return null;const scale=1.5,c=document.createElement('canvas');c.width=Math.min(4096,Math.ceil(r.width*scale));c.height=Math.min(6000,Math.ceil(r.height*scale));const g=c.getContext('2d');g.scale(scale,scale);g.fillStyle='#f3ead8';g.fillRect(0,0,r.width,r.height);
   const items=[root,...root.querySelectorAll('*')];
   for(const n of items){if(n.closest('svg')||!visible(n)&&n.tagName!=='INPUT')continue;const b=n.getBoundingClientRect(),cs=getComputedStyle(n),x=b.x-r.x,y=b.y-r.y;if(cs.backgroundColor!=='rgba(0, 0, 0, 0)'){g.fillStyle=cs.backgroundColor;g.fillRect(x,y,b.width,b.height)}for(const [edge,x1,y1,x2,y2] of [['Top',x,y,x+b.width,y],['Bottom',x,y+b.height,x+b.width,y+b.height],['Left',x,y,x,y+b.height],['Right',x+b.width,y,x+b.width,y+b.height]]){const w=parseFloat(cs['border'+edge+'Width']);if(w&&cs['border'+edge+'Style']!=='none'){g.strokeStyle=cs['border'+edge+'Color'];g.lineWidth=w;g.beginPath();g.moveTo(x1,y1);g.lineTo(x2,y2);g.stroke()}}if(n.tagName==='IMG'&&n.complete&&n.naturalWidth){g.drawImage(n,x,y,b.width,b.height)}
   }
   const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);let n;while(n=walker.nextNode()){const p=n.parentElement;if(!p||p.closest('svg')||!visible(p))continue;const cs=getComputedStyle(p);g.font=`${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;g.fillStyle=cs.color;g.textBaseline='top';for(let i=0;i<n.textContent.length;i++){const char=n.textContent[i];if(!char.trim())continue;const range=document.createRange();range.setStart(n,i);range.setEnd(n,i+1);const b=range.getBoundingClientRect();if(b.width&&b.height){const y=b.y-r.y+(b.height-parseFloat(cs.fontSize))*.4;g.fillText(char,b.x-r.x,y);if(cs.textDecorationLine.includes('underline')){g.strokeStyle=cs.color;g.lineWidth=1;g.beginPath();g.moveTo(b.x-r.x,y+parseFloat(cs.fontSize));g.lineTo(b.right-r.x,y+parseFloat(cs.fontSize));g.stroke()}}}}
   const controls=[...root.querySelectorAll('button,input')].filter(visible).map(n=>{const b=n.getBoundingClientRect();const token=String(++serial);registry.set(token,n);return {token,id:n.id,data:{...n.dataset},text:n.innerText||n.getAttribute('aria-label')||'選ぶ',tag:n.tagName,x:b.x-r.x,y:b.y-r.y,w:b.width,h:b.height}});
   return {data:c.toDataURL('image/png'),width:r.width,height:r.height,controls};
  },
  surface(active){QuestMediaControl.sync(active)},
  async playVideo(id){const v=document.getElementById(id);if(!v)return false;QuestMediaControl.sync(true);await audioDirector.unlock();v.muted=audioDirector.isMuted();v.volume=.95;if(v.error)v.load();try{await v.play();announce();return true}catch(_){announce();return false}},
  toggleSound(){audioDirector.toggle();if(!audioDirector.isMuted())audioDirector.unlock().catch(()=>{});document.querySelectorAll('video').forEach(v=>{v.muted=audioDirector.isMuted()});announce()},
  video(id){return document.getElementById(id)},
  // UI-only closing never changes puzzle or learned-spell progress.
  close(){closeInfoDialogs();announce()},
 };
 announce();
})();
