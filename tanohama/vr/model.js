(function(root,factory){const api=factory();if(typeof module==='object')module.exports=api;else root.GateModel=api})(typeof globalThis!=='undefined'?globalThis:this,()=>{
  'use strict';
  const KEY='tanohamaQuestGatePrototypeV1';
  const tiles=['モ','シ','ケ','ガ','ノ','テ','ツ','オ','ミ','マ'];
  function fresh(){return {version:1,book:false,fakes:[],input:['','','',''],active:0,marks:[],hint:0,phase:'input',position:0,yaw:0,started:false,openingSeen:false,openingMuted:true};}
  function normalize(raw){const s=fresh();if(!raw||raw.version!==1)return s;s.book=raw.book===true;s.fakes=['コイシコロ','スナケムリ'].filter(x=>Array.isArray(raw.fakes)&&raw.fakes.includes(x));s.input=s.input.map((_,i)=>tiles.includes(raw.input?.[i])?raw.input[i]:'');s.active=Number.isInteger(raw.active)?Math.max(0,Math.min(3,raw.active)):0;s.marks=Array.from(new Set(Array.isArray(raw.marks)?raw.marks:[])).filter(x=>Number.isInteger(x)&&x>0&&x<23);s.hint=Number.isInteger(raw.hint)?Math.max(0,Math.min(3,raw.hint)):0;s.phase=['input','learned','casting','clear','complete'].includes(raw.phase)?raw.phase:'input';if(!s.book)s.phase='input';if(s.phase==='casting')s.phase='clear';s.position=Number.isInteger(raw.position)&&raw.position>=0&&raw.position<6?raw.position:0;if(s.position>=4&&!['clear','complete'].includes(s.phase))s.position=3;s.yaw=Number.isFinite(raw.yaw)?Math.round(raw.yaw/30)*30%360:0;s.started=raw.started===true;s.openingSeen=raw.openingSeen===true;s.openingMuted=true;return s;}
  function action(s,type,value){
    if(type==='start'){s.started=true;return 'ready'}
    if(type==='explore'){if(value===1){s.book=true;return 'book'}const f=value===0?'コイシコロ':'スナケムリ';if(!s.fakes.includes(f))s.fakes.push(f);return f;}
    if(type==='hint'){s.hint=Math.min(3,s.hint+1);return 'hint'}
    if(type==='mark'){if(!Number.isInteger(value)||value<1||value>22)return 'blocked';s.marks=s.marks.includes(value)?s.marks.filter(x=>x!==value):s.marks.concat(value);return 'marked'}
    if(type==='move'){if(!Number.isInteger(value)||value<0||value>5||value>=4&&!['clear','complete'].includes(s.phase))return 'blocked';s.position=value;return 'moved'}
    if(type==='turn'){if(value!==-30&&value!==30)return 'blocked';s.yaw=(s.yaw+value)%360;return 'turned'}
    if(type==='cast'){if(s.phase!=='input'||!s.book)return 'blocked';if(s.input.some(x=>!x))return 'incomplete';if(s.input.join('')!=='ツケモノ')return 'wrong';s.phase='learned';return 'learned'}
    if(type==='bridge'&&s.phase==='learned'){s.phase='casting';return 'casting'}
    if(type==='land'&&s.phase==='casting'){s.phase='clear';return 'clear'}
    if(type==='finish'&&s.phase==='clear'){s.phase='complete';return 'complete'}
    if(s.phase!=='input'||!s.book)return 'blocked';
    if(type==='slot'&&Number.isInteger(value)&&value>=0&&value<4){s.active=value;return 'slot'}
    if(type==='tile'&&tiles.includes(value)){s.input[s.active]=value;s.active=Math.min(3,s.active+1);return 'tile'}
    if(type==='erase'){s.input[s.active]='';return 'erased'}
    if(type==='clear'){s.input=['','','',''];s.active=0;return 'erased'}
    return 'blocked';
  }
  return {KEY,tiles,fresh,normalize,action};
});
