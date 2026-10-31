/* Presentation only. Canonical puzzles, storage and movement gates remain unchanged. */
(()=>{'use strict';
const H=gateHost,world=H.world,footer=document.querySelector('#desktop-help');let focused=null,contextLabel=null;
function context(n){if(contextLabel)H.dispose(contextLabel);contextLabel=null;if(!n)return;const text=n.dataset.label||'ここへ移動';footer.textContent=text+' · クリック / Enter';contextLabel=H.label(text,0,-.62,-1.8,1.65,.18,{size:55,px:1100,bg:'#12212c'},document.querySelector('#camera'));}
const canvas=document.createElement('canvas');canvas.width=canvas.height=512;const g=canvas.getContext('2d');
let seed=17;const rnd=()=>{seed=(seed*1664525+1013904223)>>>0;return seed/4294967296};
g.fillStyle='#aaa394';g.fillRect(0,0,512,512);
for(let i=0;i<16000;i++){const v=100+Math.floor(rnd()*100);g.fillStyle=`rgba(${v},${v-4},${v-12},.16)`;g.fillRect(rnd()*512,rnd()*512,1+rnd()*5,1+rnd()*3)}
g.strokeStyle='#514c43';g.lineWidth=5;for(let y=0;y<512;y+=128){g.beginPath();g.moveTo(0,y);g.lineTo(512,y);g.stroke();for(let x=(y/128%2)*128;x<512;x+=256){g.beginPath();g.moveTo(x,y);g.lineTo(x,y+128);g.stroke()}}
const stone=new THREE.CanvasTexture(canvas);stone.colorSpace=THREE.SRGBColorSpace;stone.wrapS=stone.wrapT=THREE.RepeatWrapping;stone.repeat.set(2,2);
const palettes={gate:'#8b8b7f',path:'#85918b',shop:'#8f8980',time:'#7f8986',boss:'#756d79',home:'#988574'};
function mesh(n){const m=n.getObject3D('mesh');if(!m)return;const mat=m.material;if(!mat||Array.isArray(mat)||mat.map||n.closest('#art-set'))return;if(n.tagName==='A-BOX'&&!['j-ice','bridge-rock','j-gate-bridge','j-fire','exit-door','j-path-door'].includes(n.id)&&!n.closest('#j-beast')){mat.map=stone;mat.color.set(palettes[GateJourney.snapshot().stage]||palettes.gate);mat.roughness=.9;m.castShadow=true;m.receiveShadow=true;mat.needsUpdate=true}}
function decorative(){if(document.querySelector('#art-set'))return;const root=H.el('a-entity',{id:'art-set'},world);const add=(t,a)=>H.el(t,a,root);
const stage=GateJourney.snapshot().stage||'gate';
// CC0 KayKit 1.0 room shell; keep the gap and saved movement targets unchanged.
if(stage==='gate'&&!GateJourney.active){
 for(const x of [-4.85,4.85])for(const z of [3,-1,-5,-9,-13])add('a-entity',{position:`${x} 0 ${z}`,rotation:`0 ${x<0?90:-90} 0`,'gltf-model':'url(assets/kaykit/wall.gltf.glb)'});
 for(const x of [-3.5,0,3.5])for(const z of [3,-1,-5,-10,-14])add('a-entity',{position:`${x} -.05 ${z}`,'gltf-model':'url(assets/kaykit/floor_tile_large.gltf.glb)'});
 for(const x of [-3.5,3.5])add('a-entity',{position:`${x} 0 -10`,scale:'.65 .65 .65','gltf-model':'url(assets/kaykit/pillar_decorated.gltf.glb)'});
 for(const x of [-4,0,4])add('a-entity',{position:`${x} 0 -14.8`,'gltf-model':'url(assets/kaykit/wall.gltf.glb)'});
 // Pillar geometry is 4m along Y; rotate it horizontally for crossbeams above head height.
 for(const z of [2,-3,-8,-13])add('a-entity',{position:`-4.8 4.4 ${z}`,rotation:'0 0 -90',scale:'.22 2.4 .22','gltf-model':'url(assets/kaykit/pillar.gltf.glb)'});
 for(const z of [0,-8])for(const x of [-4.65,4.65]){
  add('a-entity',{position:`${x} 2.1 ${z}`,rotation:`0 ${x<0?90:-90} 0`,'gltf-model':'url(assets/kaykit/torch_mounted.gltf.glb)'});
  add('a-entity',{position:`${x} 2.6 ${z}`,light:'type:point;color:#ffc782;intensity:1.1;distance:6;decay:2'});
 }

 add('a-entity',{position:'2.5 0 .1',scale:'.75 1.4 .4','gltf-model':'url(assets/kaykit/table_medium.gltf.glb)'});
 add('a-entity',{position:'.4 0 -4.8',scale:'.75 1.08 .45','gltf-model':'url(assets/kaykit/table_medium.gltf.glb)'});
 add('a-entity',{position:'-3.4 0 -1',scale:'.72 .72 .72','gltf-model':'url(assets/kaykit/pillar.gltf.glb)'});
 add('a-entity',{position:'3.7 0 -2.4',scale:'.45 .6 .45','gltf-model':'url(assets/kaykit/pillar.gltf.glb)'});

}
// Brass inlays and a bound folio make the book station recognizable without a sign.
const initialGate=stage==='gate'&&!GateJourney.active,bx=initialGate?2.5:-2.8,bz=initialGate ? .1 : 1;
add('a-box',{position:`${bx} 1.47 ${bz}`,width:.86,height:.12,depth:.64,rotation:'12 -12 0',color:'#322a24'});
add('a-box',{position:`${bx} 1.54 ${bz}`,width:.75,height:.045,depth:.56,rotation:'12 -12 0',color:'#ded0ac'});
for(const x of [-.35,.35])add('a-box',{position:`${bx+x} 1.58 ${bz}`,width:.055,height:.035,depth:.6,rotation:'12 -12 0',color:'#b39150'});
// Irregular rocks and fractured trim break the repeated box silhouette.
for(let i=0;i<12;i++){const x=(i%2?1:-1)*(3.8+rnd()*.5),z=-1-rnd()*11;add('a-dodecahedron',{position:`${x} ${.1+rnd()*.15} ${z}`,radius:.18+rnd()*.2,rotation:`${rnd()*40} ${rnd()*90} ${rnd()*30}`,color:'#777d76','detail':0,material:'roughness:1'})}
if(stage==='gate'&&GateJourney.active)for(let i=0;i<5;i++)add('a-box',{position:`${.4+(i-2)*.2} 1.09 -4.36`,width:.11,height:.018,depth:.035,color:'#d5b77b'});
if(stage!=='gate'||GateJourney.active)for(const z of [1,-4,-10]){for(const x of [-4.5,4.5]){
add('a-cylinder',{position:`${x} 1.8 ${z}`,radius:.32,height:3.6,'segments-radial':10,color:'#939185',material:'roughness:.9'});
for(const y of [.2,3.5])add('a-cylinder',{position:`${x} ${y} ${z}`,radius:.48,height:.22,'segments-radial':10,color:'#b0a58a'});
const inward=x<0?.4:-.4;add('a-cylinder',{position:`${x+inward} 2 ${z}`,radius:.16,height:.48,color:'#563d24','segments-radial':8});
add('a-sphere',{position:`${x+inward} 2.3 ${z}`,radius:.12,material:'shader:flat;color:#ffd28a'});
add('a-entity',{position:`${x+inward} 2.4 ${z}`,light:'type:point;color:#ffbd72;intensity:.85;distance:5;decay:2'});
}
for(let i=0;i<13;i++){const a=i/13*Math.PI+.012,b=(i+1)/13*Math.PI-.012,shape=new THREE.Shape();shape.moveTo(Math.cos(a)*4.45,3.5+Math.sin(a)*1.5);for(let j=1;j<=4;j++){const t=a+(b-a)*j/4;shape.lineTo(Math.cos(t)*4.45,3.5+Math.sin(t)*1.5)}for(let j=4;j>=0;j--){const t=a+(b-a)*j/4;shape.lineTo(Math.cos(t)*4.8,3.5+Math.sin(t)*1.85)}shape.closePath();const geo=new THREE.ExtrudeGeometry(shape,{depth:.55,bevelEnabled:true,bevelSize:.025,bevelThickness:.025,bevelSegments:1,steps:1});const n=add('a-entity',{position:`0 0 ${z}`});n.setObject3D('mesh',new THREE.Mesh(geo,new THREE.MeshStandardMaterial({color:'#989585',map:stone,roughness:.93})));}}

// Blue rift frames the destination, warm light marks the readable foreground.
add('a-torus',{position:'0 2 -12.65',radius:1.5,'radius-tubular':.035,material:'shader:flat;color:#7bddf4',rotation:'0 0 0'});
add('a-torus',{position:'0 2 -12.67',radius:1.7,'radius-tubular':.015,material:'shader:flat;color:#4786a3'});
add('a-entity',{position:'0 2 -11',light:'type:point;color:#76d7ef;intensity:.8;distance:7;decay:2'});
for(let i=0;i<18;i++)add('a-octahedron',{position:`${(rnd()-.5)*8} ${.5+rnd()*3.5} ${-3-rnd()*9}`,radius:.012,material:'shader:flat;color:#b5e2e6'});
}
function enhance(){decorative();const key=document.querySelector('#art-key-light');if(key)key.setAttribute('light','target',document.querySelector('#world-book')?'#world-book':'#j-world-book');world.querySelectorAll('a-box').forEach(mesh);
world.querySelectorAll('.hit').forEach(n=>{if(n.dataset.artReady)return;n.dataset.artReady='1';n.addEventListener('click',()=>{focused=null;context(null)});const isPad=n.hasAttribute('data-pad')||n.hasAttribute('data-journey-pad');if(n.tagName==='A-PLANE'){
const m=n.getObject3D('mesh');if(!m)return;const text=n._interactionText||'';n._interactionText=text;
// Keep the original hit plane and IDs; reveal its label only under the pointer/ray.
m.material.opacity=0;n.addEventListener('mouseenter',()=>{focused=n;context(n)});n.addEventListener('mouseleave',()=>{if(focused===n)focused=null;context(null);m.material.opacity=0;footer.textContent='ドラッグで見回す · 光る印を選ぶ · Q / Eで旋回 · Escでメニュー'});
if(['world-menu','j-world-menu'].includes(n.id))return;const p=n.getAttribute('position');const marker=H.el('a-octahedron',{position:`${p.x} ${p.y} ${p.z+.035}`,radius:.055,material:'shader:flat;color:#eac58a'},world);marker.dataset.artMarker='1';marker.dataset.target=n.id;
}else if(isPad){n.addEventListener('mouseenter',()=>{focused=n;context(n)});n.addEventListener('mouseleave',()=>{focused=null;context(null)});n.setAttribute('radius',.25);n.querySelector('a-ring')?.setAttribute('scale','.55 .55 .55')}
});
// Noninteractive movement captions are redundant with destination rings.
world.querySelectorAll('a-plane:not(.hit)').forEach(n=>{if(n.closest('#art-set'))return;n.setAttribute('visible',false)});
}
window.addEventListener('keydown',e=>{if(e.key==='Enter'&&focused&&!H.getMode())focused.emit('click')});
const observer=new MutationObserver(()=>{clearTimeout(window.__artTimer);window.__artTimer=setTimeout(enhance,100)});observer.observe(world,{childList:true});
H.scene.setAttribute('shadow','type:pcfsoft;autoUpdate:true');
H.scene.setAttribute('fog','type:exponential;color:#19252c;density:.018');
document.querySelectorAll('[light]').forEach(n=>{const l=n.getAttribute('light');if(l.type==='ambient')n.setAttribute('light','intensity',.23);if(l.type==='directional'){n.setAttribute('light','intensity',.5);n.setAttribute('light','castShadow',true);n.setAttribute('light','shadowMapWidth',1024);n.setAttribute('light','shadowMapHeight',1024)}});
const keyLight=H.el('a-entity',{position:'1.5 4 3',light:'type:spot;color:#efd7ac;intensity:1.3;angle:32;penumbra:.75;distance:11;decay:2;target:#world-book'},H.scene);keyLight.id='art-key-light';
setTimeout(enhance,300);
// Optional imported props: normalize feet/pivot and bounds; never replace canonical hit/collision gates.
AFRAME.registerComponent('quest-prop',{schema:{src:{type:'string'},height:{default:1},maxTriangles:{default:30000}},init(){if(!this.data.src)return;this.el.setAttribute('gltf-model',this.data.src);this.el.addEventListener('model-loaded',()=>{const model=this.el.getObject3D('mesh'),bounds=new THREE.Box3().setFromObject(model),size=bounds.getSize(new THREE.Vector3());let triangles=0;model.traverse(n=>{if(n.isMesh){triangles+=(n.geometry.index?.count||n.geometry.attributes.position.count)/3;n.castShadow=false}});if(triangles>this.data.maxTriangles){this.el.removeObject3D('mesh');this.el.dataset.rejected='triangle-budget';return}const scale=this.data.height/Math.max(size.y,.001);model.scale.multiplyScalar(scale);model.position.sub(new THREE.Vector3((bounds.min.x+bounds.max.x)/2,bounds.min.y,(bounds.min.z+bounds.max.z)/2).multiplyScalar(scale));this.el.dataset.triangles=triangles})}});
})();
