const ADDRESS="Level 4, The Onyx Spire, Financial District", P="919382857246",$=s=>document.querySelector(s),ic=n=>`<svg class="i"><use href="#${n}"/></svg>`,wa=t=>`https://wa.me/${P}?text=${encodeURIComponent(t)}`;
// letter split
function split(el){let k=0;(function w(n){[...n.childNodes].forEach(c=>{if(c.nodeType==3){const f=document.createDocumentFragment();c.textContent.split(/(\s+)/).forEach(t=>{if(!t.trim()){f.append(' ');return}const s=document.createElement('span');s.className='w';[...t].forEach(ch=>{const x=document.createElement('span');x.className='c';x.style.setProperty('--i',k++);x.textContent=ch;s.append(x)});f.append(s)});c.replaceWith(f)}else if(c.nodeType==1&&c.tagName!='BR')w(c)})})(el)}
document.querySelectorAll('[data-split]').forEach(split);
// preloader letters
const pt=$('#preT');pt.setAttribute('data-split','');split(pt);pt.querySelectorAll('.c').forEach(c=>c.classList.add('in'));
// marquee
$('#mt').innerHTML=[...Array(2)].map(()=>['dumb|Strength','flame|Conditioning','snow|Cryo Recovery','pulse|Biometrics','crown|Private Coaching','drop|Hydro Spa'].map(x=>{const[a,b]=x.split('|');return`<span>${ic(a)}${b}</span>`}).join('')).join('');
// reveal
const io=new IntersectionObserver(e=>e.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.15});
function watch(){document.querySelectorAll('.rv:not(.in),[data-split]:not(.in)').forEach(e=>io.observe(e));document.querySelectorAll('.card').forEach(c=>c.onmousemove=e=>{const r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})}
// counters
const co=new IntersectionObserver(e=>e.forEach(x=>{if(!x.isIntersecting)return;const el=x.target,n=+el.dataset.n,d=+(el.dataset.d||0),s=el.dataset.s||'',t0=performance.now();(function f(t){const p=Math.min((t-t0)/1600,1),v=n*(1-Math.pow(1-p,3));el.textContent=(d?v.toFixed(d):Math.round(v).toLocaleString())+s;if(p<1)requestAnimationFrame(f)})(t0);co.unobserve(el)}));
document.querySelectorAll('[data-n]').forEach(e=>co.observe(e));
// scroll effects
addEventListener('scroll',()=>{const y=scrollY,h=document.documentElement.scrollHeight-innerHeight;$('#nav').classList.toggle('sc',y>40);$('#prog').style.width=(y/h*100)+'%';document.documentElement.style.setProperty('--py',y*.25+'px');document.querySelectorAll('.orb').forEach((o,i)=>o.style.marginTop=(i?-1:1)*y*.15+'px')},{passive:true});
// schedule
const S={Monday:[["Titan Barbell: Posterior Chain","Strength & Power","Marcus Vance","06:30 – 07:30","60 min",2,"dumb"],["Onyx Hybrid Engine","Conditioning","Elena Rostova","08:00 – 09:00","60 min",4,"flame"],["Athletic Spine & Joint Flow","Mobility","Seraphina Lin","17:30 – 18:30","60 min",5,"pulse"],["Contrast Hydro & Breath Reset","Thermal Recovery","Dr. Adrian Cross","19:00 – 20:00","60 min",3,"snow"]],
Tuesday:[["Olympic Snatch & Clean Complex","Strength & Power","Marcus Vance","07:00 – 08:15","75 min",2,"dumb"],["Lactate Threshold Sprint Lab","Conditioning","Elena Rostova","18:30 – 19:30","60 min",2,"bolt"]],
Wednesday:[["Upper Body Hypertrophy & Press","Strength","Marcus Vance","06:30 – 07:30","60 min",3,"dumb"],["Hyrox Competition Simulation","Conditioning","Elena Rostova","17:30 – 18:45","75 min",1,"flame"]],
Thursday:[["Squat Velocity: Pin & Box","Strength","Marcus Vance","07:00 – 08:15","75 min",2,"dumb"],["Combat Strike & Footwork","Combat","Elena Rostova","18:00 – 19:00","60 min",3,"shield"]],
Friday:[["Full Body Kinetic Load","Strength","Marcus Vance","06:30 – 07:45","75 min",1,"dumb"],["Weekend Eve Contrast Spa","Recovery","Dr. Adrian Cross","19:00 – 20:00","60 min",6,"drop"]],
Saturday:[["Open Platform PR Masterclass","Strength","Marcus Vance","08:30 – 10:00","90 min",2,"crown"],["Pure Endurance 75 Engine","Conditioning","Elena Rostova","10:30 – 11:45","75 min",4,"pulse"]]};
$('#days').innerHTML=Object.keys(S).map((d,i)=>`<button class="pill ${i?'':'on'}" data-d="${d}">${d}</button>`).join('');
function day(d){$('#rows').innerHTML=S[d].map((c,n)=>`<div class="card row" style="--n:${n}"><div class="ic">${ic(c[6])}</div><div><div class="rt">${c[0]}</div><div class="rc">${c[1]}</div></div><div class="mo">${ic('users')}${c[2]}</div><div><div class="mo">${ic('clock')}${c[3]}</div><small style="font:.72rem var(--m);color:var(--mut)">${c[4]}</small></div><div style="display:grid;gap:8px;justify-items:end"><span class="sp ${c[5]<3?'low':''}">${ic('flame')}${c[5]} spots left</span><a class="btn wa" style="padding:9px 16px" target="_blank" href="${wa(`Hi Kinetic Onyx, I want to book "${c[0]}" on ${d} at ${c[3]} with ${c[2]}.`)}">Book ${ic('arrow')}</a></div></div>`).join('');watch()}
$('#days').onclick=e=>{const b=e.target.closest('.pill');if(!b)return;document.querySelectorAll('.pill').forEach(x=>x.classList.remove('on'));b.classList.add('on');day(b.dataset.d)};
// tiers
let yr=true;const T=[["CORE KINETIC","Essential Conditioning & Floor",2499,1999,"dumb",["Cardio & Sled Track","Free Weights & Dumbbells","Quarterly InBody Scan","Valet Parking & Towels"]],["TITAN ACCESS","Strength Platform Foundation",3999,3199,"bolt",["Olympic Barbell Arena","6 Cohort Classes / Month","Weekly Cedar Sauna","Monthly InBody 770 Scan"]],["ONYX ALL-ACCESS","The Club Standard",6499,5199,"crown",["Unlimited Group & Combat","Daily Cryo Plunge & Sauna","Monthly 1-on-1 Coach Review","Custom Nutrition Phasing","2 Guest Passes / Month"],1],["BLACK CLUB PRIVATE","Private Concierge & Coaching",12999,10399,"gem",["8 Private PT Sessions / Mo","Permanent Valet Locker","VO2 Max & Metabolic Testing","24/7 WhatsApp Concierge"]]];
function tiers(){$('#tiers').innerHTML=T.map((t,i)=>{const p=yr?t[3]:t[2];return`<div class="card tier rv ${t[6]?'pop':''}" style="--dl:${i*.1}s">${t[6]?'<div class="ptag">Most Preferred</div>':''}<div><h3>${ic(t[4])}${t[0]}</h3><p class="sub">${t[1]}</p><div class="pr"><span class="pn">₹${p.toLocaleString('en-IN')}</span> <span class="ps">/ month</span></div><ul>${t[5].map(f=>`<li>${ic('check')}${f}</li>`).join('')}</ul></div><a class="btn ${t[6]?'gold':'wa'}" target="_blank" href="${wa(`Hi Kinetic Onyx, I want to join "${t[0]}" (${yr?'Annual':'Monthly'} at ₹${p.toLocaleString('en-IN')}/mo).`)}">${ic('chat')}Join via WhatsApp</a></div>`}).join('');watch()}
$('#bM').onclick=()=>{yr=false;$('#bM').classList.add('on');$('#bY').classList.remove('on');tiers()};$('#bY').onclick=()=>{yr=true;$('#bY').classList.add('on');$('#bM').classList.remove('on');tiers()};
// instructors
const C=[["Marcus Vance","Head of Human Performance & Strength","12+ Yrs","#7c2d12","dumb","Former collegiate strength director and CSCS specialist engineering progressive overload.",["Olympic Lifting","Powerlifting PR","Biomechanics"]],["Elena Rostova","Director of Conditioning & Movement","9+ Yrs","#134e4a","flame","Elite hybrid endurance athlete and EXOS specialist building anaerobic threshold engines.",["Hyrox Prep","Lactate Threshold","Engine Building"]],["Seraphina Lin","Lead Mobility & Spinal Longevity","8+ Yrs","#4c1d95","pulse","Classical reformer pilates plus functional range conditioning for heavy lifters.",["Spine Decompression","Hip Mobility","Balance"]],["Dr. Adrian Cross","Director of Sports Physiology & Recovery","11+ Yrs","#1e3a8a","snow","Doctor of Physical Therapy and Olympic recovery consultant in contrast thermal work.",["Contrast Hydro","HRV","VO2 Max"]]];
$('#ig').innerHTML=C.map((t,i)=>`<div class="card rv" style="--dl:${i*.1}s"><div class="ph" style="--c1:${t[3]}"><b>${t[0].replace('Dr. ','').split(' ').map(x=>x[0]).join('')}</b>${ic(t[4])}<div class="bdg">${ic('star')}${t[2]}</div></div><div class="ii"><h3>${t[0]}</h3><div class="role">${t[1]}</div><p class="bio">${t[5]}</p><div class="tags">${t[6].map(s=>`<span>${s}</span>`).join('')}</div><a class="btn wa" style="width:100%" target="_blank" href="${wa('Hi Kinetic Onyx, I want to book a private 1-on-1 session with Master Coach '+t[0]+'.')}">${ic('cal')}Book with ${t[0].replace('Dr. ','').split(' ')[0]}</a></div></div>`).join('');
// calc
function calc(){const h=+$('#sh').value,w=+$('#sw').value,a=+$('#sa').value;$('#hd').textContent=h+' cm';$('#wd').textContent=w+' kg';$('#ad').textContent=a+' Yrs';const b=(w/((h/100)**2)).toFixed(1);$('#bmi').textContent=b;let c="Normal Athletic Range",k="#10B981";if(b<18.5){c="Lean / Underweight";k="#60A5FA"}else if(b>=30){c="High Density / Recompose";k="#F87171"}else if(b>=25){c="Muscular / Dense";k="#F59E0B"}$('#cat').textContent=c;$('#cat').style.color=k;const t=Math.round((10*w+6.25*h-5*a+5)*1.5),p=Math.round(w*2);$('#cal').textContent=t.toLocaleString()+' kcal';$('#pro').textContent=p+'g / day';$('#share').href=wa(`Hello Coach! My profile: Height ${h}cm, Weight ${w}kg, Age ${a}, BMI ${b} (${c}), Target ${t} kcal, Protein ${p}g. I'd like a custom consultation.`)}
['sh','sw','sa'].forEach(i=>$('#'+i).oninput=calc);
day('Monday');tiers();calc();
// boot
setTimeout(()=>{$('#pre').classList.add('out');setTimeout(()=>{$('#pre').remove();watch()},500)},2300);

// ===== Directions =====
let mode='driving';
function dirUrl(){return `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}&travelmode=${mode}`}
function openStatus(){const n=new Date(new Date().toLocaleString('en-US',{timeZone:'Asia/Kolkata'})),m=n.getHours()*60+n.getMinutes(),o=m>=300&&m<1380,el=$('#openNow');el.className='open '+(o?'y':'n');el.textContent=o?'Open now · closes 23:00':'Closed · opens 05:00'}
$('#addr').textContent=ADDRESS;$('#getDir').href=dirUrl();
$('#waLoc').href=wa('Hi Kinetic Onyx, please share your exact location pin and parking details.');
$('#modes').onclick=e=>{const b=e.target.closest('.mode');if(!b)return;document.querySelectorAll('.mode').forEach(x=>x.classList.remove('on'));b.classList.add('on');mode=b.dataset.m;$('#getDir').href=dirUrl()};
$('#copyAddr').onclick=async()=>{const t=$('#copyAddr span');try{await navigator.clipboard.writeText(ADDRESS);t.textContent='Copied!'}catch(e){t.textContent='Copy failed'}setTimeout(()=>t.textContent='Copy Address',1800)};
openStatus();setInterval(openStatus,60000);
// footer link uses same destination
document.querySelectorAll('footer a[href="#directions"]').forEach(a=>{a.href=dirUrl();a.target='_blank'});

// ===== Mobile menu + back to top =====
const links=document.querySelector('.links'),bur=$('#burger');
bur.onclick=()=>{const o=links.classList.toggle('open');bur.innerHTML=ic(o?'check':'menu').replace('#check','#'+(o?'check':'menu'));document.body.style.overflow=o?'hidden':''};
links.onclick=e=>{if(e.target.closest('a')){links.classList.remove('open');bur.innerHTML=ic('menu');document.body.style.overflow=''}};
addEventListener('scroll',()=>$('#totop').classList.toggle('show',scrollY>700),{passive:true});
$('#totop').onclick=()=>scrollTo({top:0,behavior:'smooth'});