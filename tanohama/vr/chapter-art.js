/* Chapter silhouettes and materials; no rule, answer, input or save mutations. */
(()=>{'use strict';const H=gateHost;let scheduled;
const noise=document.createElement('canvas');noise.width=noise.height=128;const ng=noise.getContext('2d'),pixels=ng.createImageData(128,128);for(let i=0;i<pixels.data.length;i+=4){const n=Math.sin(i*4.13)*8;pixels.data.set([128+n,128-n,252,255],i)}ng.putImageData(pixels,0,0);const normal=new THREE.CanvasTexture(noise);normal.wrapS=normal.wrapT=THREE.RepeatWrapping;normal.repeat.set(4,4);
const woodCanvas=document.createElement('canvas');woodCanvas.width=woodCanvas.height=256;const wg=woodCanvas.getContext('2d');wg.fillStyle='#796047';wg.fillRect(0,0,256,256);for(let i=0;i<180;i++){wg.strokeStyle=`rgba(35,20,12,${.04+i%7*.012})`;wg.beginPath();for(let x=0;x<=256;x+=8){const y=i*1.5+Math.sin(x*.025+i)*1.8;x?wg.lineTo(x,y):wg.moveTo(x,y)}wg.stroke()}const wood=new THREE.CanvasTexture(woodCanvas);wood.colorSpace=THREE.SRGBColorSpace;wood.wrapS=wood.wrapT=THREE.RepeatWrapping;
function finish(){const root=document.querySelector('#art-set');if(!root||root.dataset.chapterReady)return;root.dataset.chapterReady='1';const view=GateJourney.snapshot(),stage=view.engineState?.isClear?'home':view.stage||'gate';const add=(tag,attrs,parent=root)=>H.el(tag,attrs,parent),box=(x,y,z,w,h,d,color,parent=root)=>add('a-box',{position:`${x} ${y} ${z}`,width:w,height:h,depth:d,color,material:'roughness:.85'},parent);
H.world.querySelectorAll('a-box').forEach(n=>{const m=n.getObject3D('mesh');if(m?.material?.map&&!n.closest('#art-set')){m.material.normalMap=normal;m.material.normalScale=new THREE.Vector2(.12,.12);m.material.needsUpdate=true}});
// Grounding shadows are soft decals; they add no collision surfaces or click targets.
const shade=document.createElement('canvas');shade.width=shade.height=64;const sg=shade.getContext('2d'),grad=sg.createRadialGradient(32,32,3,32,32,32);grad.addColorStop(0,'rgba(0,0,0,.48)');grad.addColorStop(1,'rgba(0,0,0,0)');sg.fillStyle=grad;sg.fillRect(0,0,64,64);const shadowTexture=new THREE.CanvasTexture(shade);
for(const [x,z] of [[-3,-1],[2.5,.1],[0,-4],[-4.5,1],[4.5,1],[-4.5,-4],[4.5,-4]]){const n=add('a-plane',{position:`${x} .013 ${z}`,rotation:'-90 0 0',width:2,height:1.6,material:'shader:flat;transparent:true;depthWrite:false'});n.addEventListener('loaded',()=>{const m=n.getObject3D('mesh');m.material.map=shadowTexture;m.material.needsUpdate=true})}
if(stage==='path'){for(const x of [-3.5,3.5]){for(let i=0;i<3;i++){box(x,.18+i*.5,-3.3,.12,.65,.12,'#544334');box(x,.22+i*.5,-3.3,1.3,.08,.85,'#745b3f')}box(x-.6,.8,-3.3,.12,1.6,.9,'#443c31');box(x+.6,.8,-3.3,.12,1.6,.9,'#443c31')}box(0,3.5,-7.8,3.8,.22,.6,'#ad9972');}
if(stage==='shop'){
 for(const x of [-3,-1,1,3]){box(x,1.12,-4.3,1.1,.14,.9,'#513a28');box(x,.08,-4.3,1.12,.15,.9,'#514433')}
 // Sword, boots, fire flask and broom have distinct silhouettes at their canonical stations.
 const sword=add('a-entity',{position:'-3 1.45 -4.3',rotation:'0 0 -12'});box(0,.45,0,.12,.85,.06,'#b3c1c3',sword);box(0,.02,0,.5,.08,.1,'#a88b4f',sword);box(0,-.13,0,.09,.25,.09,'#453123',sword);
 for(const x of [-1.18,-.82]){box(x,1.43,-4.3,.23,.55,.25,'#765736');box(x,1.19,-4.1,.23,.2,.48,'#5a432e');box(x,1.09,-4.12,.25,.055,.5,'#272e32')}
 add('a-sphere',{position:'1 1.49 -4.3',radius:.24,'segments-width':12,'segments-height':8,scale:'.8 1.25 .8',material:'color:#b96a2e;metalness:.15;roughness:.24;transparent:true;opacity:.88'});add('a-cylinder',{position:'1 1.82 -4.3',radius:.09,height:.25,color:'#bd974e','segments-radial':10});
 const broom=add('a-entity',{position:'3 1.55 -4.3',rotation:'0 0 14'});add('a-cylinder',{position:'0 .25 0',radius:.025,height:1.35,'segments-radial':8,color:'#5e4930'},broom);add('a-cone',{position:'0 -.38 0','radius-bottom':.27,'radius-top':.075,height:.48,'segments-radial':12,color:'#b3a071'},broom);
 // The original simple display tokens are covered by the new silhouettes, not new answers.
 H.world.querySelectorAll(':scope > a-box,:scope > a-cone').forEach(n=>{const p=n.getAttribute('position');if(p&&Math.abs(p.z+4.3)<.01&&Math.abs(p.y-1.5)<.01)n.setAttribute('visible',false)});
}
if(stage==='time'){
 const mountain=document.querySelector('#j-mountain');if(mountain){const vertices=[],cols=18,rings=[[0,4.1],[1.6,3.5],[3.5,2.25],[5.05,1.05]];const point=(r,i)=>{const a=i/cols*Math.PI*2;return [Math.cos(a)*rings[r][1]*(1+.06*Math.sin(i*5+r)),rings[r][0]-2.4,Math.sin(a)*rings[r][1]*(1+.06*Math.cos(i*3+r))]};for(let r=0;r<3;r++)for(let i=0;i<cols;i++){const a=point(r,i),b=point(r,i+1),c=point(r+1,i),d=point(r+1,i+1);vertices.push(...a,...c,...b,...b,...c,...d)}for(let i=0;i<cols;i++)vertices.push(0,2.65,0,...point(3,i+1),...point(3,i));const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(vertices,3));geo.computeVertexNormals();const m=mountain.getObject3D('mesh');if(m){m.geometry.dispose();m.geometry=geo;m.material=new THREE.MeshStandardMaterial({color:'#77817a',roughness:1,flatShading:true});m.castShadow=true;m.receiveShadow=true}}
 for(let i=0;i<10;i++){const x=(i%2?1:-1)*(3.2+i*.1),z=-5-i*.65;add('a-dodecahedron',{position:`${x} ${.4+i*.06} ${z}`,radius:.5,scale:'1 2 1',rotation:`0 ${i*19} 12`,color:'#68746c'})}
 H.world.querySelectorAll(':scope > a-box').forEach(n=>{const p=n.getAttribute('position');if(p&&Math.abs(p.z+13.1)<.01)n.setAttribute('visible',false)});
 for(const [x,z,h] of [[-12,-21,9],[7,-24,12],[0,-28,15]])add('a-cone',{position:`${x} ${h/2-1} ${z}`,height:h,'radius-bottom':7,'radius-top':.15,'segments-radial':7,color:'#394d55'});
}
if(stage==='boss'){
 const beast=document.querySelector('#j-beast');if(beast){[...beast.children].forEach(n=>n.setAttribute('visible',false));const armor=add('a-entity',{},beast);const plate=(x,y,z,w,h,d,c='#343c41')=>box(x,y,z,w,h,d,c,armor);
 plate(0,1.7,0,.85,1.05,.5);plate(0,1.06,.03,.75,.35,.54);for(const sign of [-1,1]){const arm=add('a-entity',{position:`${sign*.58} 1.95 0`,rotation:`0 0 ${sign*12}`},armor);add('a-dodecahedron',{position:'0 .12 0',radius:.36,scale:'1 .7 1',material:'color:#4b5155;metalness:.6;roughness:.65'},arm);box(0,-.38,0,.25,.65,.3,'#343c41',arm);plate(sign*.26,.55,0,.32,.9,.4);plate(sign*.26,.15,.15,.36,.25,.65);for(let j=0;j<3;j++)add('a-cone',{position:`${sign*(.65+j*.07)} ${2.15+j*.07} 0`,rotation:`0 0 ${sign*-45}`,'radius-bottom':.1,'radius-top':0,height:.32,'segments-radial':5,color:'#a3a7a3'},armor)}
 add('a-sphere',{position:'0 2.58 .03',radius:.33,scale:'.85 1.15 1','segments-width':10,'segments-height':8,material:'color:#31363a;metalness:.5;roughness:.7'},armor);
 for(let i=0;i<11;i++){const a=i/10*Math.PI;add('a-cone',{position:`${Math.cos(a)*.34} ${2.55+Math.sin(a)*.38} -.15`,rotation:`${-25} 0 ${90-i*18}`,'radius-bottom':.12,'radius-top':0,height:.5,'segments-radial':5,color:'#c2c7bf'},armor)}
 for(const x of [-.12,.12])add('a-octahedron',{position:`${x} 2.63 .32`,radius:.055,material:'shader:flat;color:#dc5b70'},armor);
 const sword=add('a-entity',{position:'-.85 .95 .45',rotation:'0 0 -24'},armor);box(0,-.25,0,.18,1.6,.08,'#626e70',sword);box(0,.58,0,.65,.12,.16,'#8c7960',sword);box(0,.83,0,.1,.4,.12,'#322a29',sword);add('a-cone',{position:'0 -1.1 0',rotation:'0 0 180','radius-bottom':.12,'radius-top':0,height:.2,'segments-radial':4,material:'shader:flat;color:#be5665'},sword);
 }
 for(const x of [-3.5,3.5]){add('a-cylinder',{position:`${x} .65 -7.7`,height:1.3,radius:.23,'segments-radial':8,color:'#383b3b'});add('a-cone',{position:`${x} 1.4 -7.7`,height:.65,'radius-bottom':.22,'radius-top':0,'segments-radial':6,material:'shader:flat;color:#e9b774'})}
}
if(stage==='home'){
 root.querySelectorAll('a-torus').forEach(n=>n.setAttribute('visible',false));H.world.querySelectorAll('a-box').forEach(n=>{const m=n.getObject3D('mesh');if(m?.material){m.material.map=wood;m.material.color.set('#b7a181');m.material.normalMap=null;m.material.roughness=.82;m.material.needsUpdate=true}});
 for(const x of [-4.65,4.65])for(let i=0;i<7;i++){box(x,1.7,-1-i*.8,.12,3.4,.055,'#382a21');box(x,1.7,-1-i*.8,.045,3.1,.72,'#e3d6b1')}
 for(const z of [-2,-6]){box(0,3.5,z,9,.22,.3,'#4b3526');add('a-cylinder',{position:`0 2.9 ${z}`,radius:.25,height:.65,'segments-radial':10,material:'shader:flat;color:#f6d69a'});add('a-entity',{position:`0 2.6 ${z}`,light:'type:point;color:#ffd6a0;intensity:1;distance:8;decay:2'})}
}
setTimeout(()=>{root.object3D.traverse(n=>{if(n.isMesh&&n.material&&!n.material.transparent){n.castShadow=true;n.receiveShadow=true}});const light=[...document.querySelectorAll('[light]')].find(n=>n.getAttribute('light')?.type==='directional')?.getObject3D('light');if(light){light.shadow.camera.left=-8;light.shadow.camera.right=8;light.shadow.camera.top=9;light.shadow.camera.bottom=-9;light.shadow.normalBias=.04;light.shadow.camera.updateProjectionMatrix()}},200);
}
new MutationObserver(()=>{clearTimeout(scheduled);scheduled=setTimeout(finish,250)}).observe(H.world,{childList:true});setTimeout(finish,700);
})();
