/* ── STARS ── */
const cvs = document.getElementById('cvs');
const ctx = cvs.getContext('2d');
let W,H,stars=[];
function resize(){W=cvs.width=window.innerWidth;H=cvs.height=window.innerHeight}
function initStars(){
  stars=[];
  for(let i=0;i<100;i++){
    stars.push({x:Math.random()*W,y:Math.random()*H,r:Math.random()*1.5+.3,a:Math.random(),da:(Math.random()*.0035+.001)*(Math.random()>.5?1:-1),isStar:Math.random()>.6})
  }
}
function drawStar(cx,cy,r,a){
  ctx.save();ctx.translate(cx,cy);ctx.globalAlpha=a;ctx.fillStyle='#f72585';
  ctx.beginPath();
  for(let i=0;i<5;i++){const ang=(i*4*Math.PI)/5-Math.PI/2;i===0?ctx.moveTo(Math.cos(ang)*r,Math.sin(ang)*r):ctx.lineTo(Math.cos(ang)*r,Math.sin(ang)*r)}
  ctx.closePath();ctx.fill();ctx.restore()
}
function tick(){
  ctx.clearRect(0,0,W,H);
  for(const s of stars){
    s.a+=s.da;if(s.a<=0||s.a>=1)s.da*=-1;
    if(s.isStar)drawStar(s.x,s.y,s.r*2.5,s.a*.65);
    else{ctx.beginPath();ctx.arc(s.x,s.y,s.r,0,Math.PI*2);ctx.fillStyle=`rgba(255,133,200,${s.a*.4})`;ctx.fill()}
  }
  requestAnimationFrame(tick)
}
resize();initStars();tick();
window.addEventListener('resize',()=>{resize();initStars()});

/* ── SCROLL REVEAL ── */
const obs=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('in')})
},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
setTimeout(()=>document.querySelectorAll('.hero-inner .reveal').forEach(el=>el.classList.add('in')),100);