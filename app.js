/* =====================================================================
   FIREBASE CONFIG
   ===================================================================== */
const firebaseConfig = {
  apiKey:            "AIzaSyDuSZnygLFaNNzfzN6qjR1S0GHwD-hMVj4",
  authDomain:        "polish-24ab6.firebaseapp.com",
  projectId:         "polish-24ab6",
  storageBucket:     "polish-24ab6.firebasestorage.app",
  messagingSenderId: "379033735292",
  appId:             "1:379033735292:web:e9872f7c46187ffbd339f9"
};

/* =====================================================================
   RUNTIME STATE
   ===================================================================== */
let all    = [];   // vocabulary from Firebase
let themes = [];   // theme list from Firebase

const themeColors = {
  daily:"#4a7c59", transit:"#4a6a7c", food:"#7c6a4a", shop:"#7c4a6a",
  social:"#4a4a7c", time:"#7c7c4a", work:"#6a4a7c", health:"#7c4a4a",
  home:"#4a6a7c", numbers:"#7c5a4a", weather:"#4a7c6a",
  colors:"#7c4a7c", family:"#5a7c4a", verbs:"#4a7c7c",
  places:"#6a7c4a", body:"#7c6a5a"
};
let themeLabels = {};

/* =====================================================================
   FIREBASE LOAD
   ===================================================================== */
function isFirebaseConfigured() {
  return !Object.values(firebaseConfig).some(v => String(v).startsWith("YOUR_"));
}

async function loadFromFirebase() {
  if (!isFirebaseConfigured()) {
    document.getElementById("loaderSpinner").style.display = "none";
    document.getElementById("loaderText").style.display    = "none";
    document.getElementById("loaderError").style.display   = "block";
    return false;
  }
  try {
    document.getElementById("loaderText").textContent = "Connecting to Firebase...";
    firebase.initializeApp(firebaseConfig);
    const db = firebase.firestore();
    document.getElementById("loaderText").textContent = "Loading vocabulary...";
    const [vocabSnap, themesSnap] = await Promise.all([
      db.collection("vocabulary").get(),
      db.collection("themes").get()
    ]);
    if (vocabSnap.empty) throw new Error("No data found. Run seed.html first to upload vocabulary.");
    all    = vocabSnap.docs.map(d => d.data());
    themes = themesSnap.docs.map(d => d.data());
    themes.forEach(th => { themeLabels[th.id] = (th.icon ? th.icon + " " : "") + th.label; });
    return true;
  } catch (err) {
    console.error("Firebase load error:", err);
    const errEl = document.getElementById("loaderError");
    document.getElementById("loaderSpinner").style.display = "none";
    document.getElementById("loaderText").style.display    = "none";
    errEl.style.display   = "block";
    errEl.querySelector("h3").textContent = "Failed to load";
    errEl.querySelector("p").textContent  = err.message;
    return false;
  }
}

/* =====================================================================
   HELPERS
   ===================================================================== */
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function normalisePolish(s) {
  return s.toLowerCase()
    .replace(/a/g,"a").replace(/c/g,"c")
    .replace(/\u0105/g,"a").replace(/\u0107/g,"c")
    .replace(/\u0119/g,"e").replace(/\u0142/g,"l")
    .replace(/\u0144/g,"n").replace(/\u00f3/g,"o")
    .replace(/\u015b/g,"s").replace(/\u017a/g,"z")
    .replace(/\u017c/g,"z").trim();
}

function removePunct(s) {
  return s.replace(/[.,?!;:\u2026\u2013\u2014]/g,"").replace(/\s+/g," ").trim();
}

/* =====================================================================
   TTS
   ===================================================================== */
let ttsReady=false, arabicReady=false, polishVoice=null, arabicVoice=null;

function initTTS() {
  if (!("speechSynthesis" in window)) {
    ["ttsNotice1","ttsNotice2"].forEach(id =>
      document.getElementById(id).textContent = "Text-to-speech not supported.");
    return;
  }
  function pickVoices() {
    const v = window.speechSynthesis.getVoices();
    polishVoice = v.find(x=>x.lang==="pl-PL")||v.find(x=>x.lang.startsWith("pl"))||null;
    arabicVoice = v.find(x=>x.lang==="ar-SA")||v.find(x=>x.lang.startsWith("ar"))||null;
    if (polishVoice) { ttsReady=true; ["ttsNotice1","ttsNotice2"].forEach(id=>document.getElementById(id).textContent="Polish voice: "+polishVoice.name); }
    else if (v.length>0) { ttsReady=true; ["ttsNotice1","ttsNotice2"].forEach(id=>document.getElementById(id).textContent="No Polish voice found, using default."); }
    if (arabicVoice) arabicReady=true;
  }
  pickVoices();
  window.speechSynthesis.onvoiceschanged = pickVoices;
}

const SVG_IDLE=`<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z"/></svg>`;
const SVG_BUSY=`<svg viewBox="0 0 24 24"><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM16.5 3v2.23c2.89 1.1 5 3.9 5 7.27s-2.11 6.17-5 7.27V22c4.01-1.26 7-5.1 7-9.5s-2.99-8.24-7-9.5z"/></svg>`;

function _speak(text, isArabic, btnEl, idleHTML) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utt = new SpeechSynthesisUtterance(text);
  if (isArabic) { if (arabicVoice) utt.voice=arabicVoice; utt.lang="ar-SA"; utt.rate=0.8; }
  else          { if (polishVoice) utt.voice=polishVoice; utt.lang="pl-PL"; utt.rate=0.85; }
  utt.pitch=1;
  btnEl.classList.add("speaking");
  btnEl.innerHTML = SVG_BUSY + " Listening";
  const reset=()=>{btnEl.classList.remove("speaking"); btnEl.innerHTML=idleHTML;};
  utt.onend=reset; utt.onerror=reset;
  window.speechSynthesis.speak(utt);
}
function speakPolish(page) {
  const c=page===1?deck1[cur1]:deck2[cur2];
  _speak(c.p,false,document.getElementById("ttsBtn"+page),SVG_IDLE+" Listen");
}
function speakArabic(page) {
  const c=page===1?deck1[cur1]:deck2[cur2];
  const id=page===1?"arabicBtn1":"arabicBtn2Front";
  _speak(c.a,true,document.getElementById(id),SVG_IDLE+" Listen Arabic");
}
function speakPolishText(text) {
  if (!("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utt=new SpeechSynthesisUtterance(text);
  if (polishVoice) utt.voice=polishVoice; utt.lang="pl-PL"; utt.rate=0.85;
  window.speechSynthesis.speak(utt);
}

/* =====================================================================
   PAGE 1 — Polish -> Arabic
   ===================================================================== */
let cur1=0, flipped1=false, deck1=[];

function _addTab(wrap, label, count, active, onclickFn) {
  const b = document.createElement("button");
  b.className = "tab" + (active ? " active" : "");
  b.innerHTML = label + ` <span style="opacity:0.45;font-size:10px">${count}</span>`;
  b.onclick = () => {
    wrap.querySelectorAll(".tab").forEach(t=>t.classList.remove("active"));
    b.classList.add("active");
    onclickFn();
  };
  wrap.appendChild(b);
}

function buildTabs1() {
  const w=document.getElementById("tabs1"); w.innerHTML="";
  _addTab(w,"All",all.length,true,()=>selectTheme1("all"));
  themes.forEach(th=>{
    const n=all.filter(c=>c.t===th.id).length;
    if(n===0)return;
    _addTab(w,(th.icon?th.icon+" ":"")+th.label,n,false,()=>selectTheme1(th.id));
  });
}
function selectTheme1(id){
  deck1=id==="all"?[...all]:all.filter(c=>c.t===id);
  cur1=0;flipped1=false;
  document.getElementById("inner1").classList.remove("flipped");render1();
}
function render1(){
  const c=deck1[cur1];
  document.getElementById("fp").textContent=c.p;
  document.getElementById("fr").textContent=c.r;
  const col=themeColors[c.t]||"#555";
  const fk=document.getElementById("fk");
  fk.textContent=c.k;fk.style.background=col+"22";fk.style.color=col;fk.style.borderColor=col+"44";
  document.getElementById("ft").textContent=themeLabels[c.t]||"";
  document.getElementById("ba").textContent=c.a;
  document.getElementById("bat").textContent=c.at||"";
  document.getElementById("be").textContent=c.e;
  document.getElementById("prog1").textContent=(cur1+1)+" / "+deck1.length;
  document.getElementById("ttsBtn1").classList.remove("speaking");
  document.getElementById("ttsBtn1").innerHTML=SVG_IDLE+" Listen";
  document.getElementById("arabicBtn1").classList.remove("speaking");
  document.getElementById("arabicBtn1").innerHTML=SVG_IDLE+" Listen Arabic";
}
function flip1(){flipped1=!flipped1;document.getElementById("inner1").classList.toggle("flipped",flipped1);}
function next1(){window.speechSynthesis&&window.speechSynthesis.cancel();cur1=(cur1+1)%deck1.length;flipped1=false;document.getElementById("inner1").classList.remove("flipped");render1();}
function prev1(){window.speechSynthesis&&window.speechSynthesis.cancel();cur1=(cur1-1+deck1.length)%deck1.length;flipped1=false;document.getElementById("inner1").classList.remove("flipped");render1();}
function shuffleDeck1(){shuffle(deck1);cur1=0;flipped1=false;document.getElementById("inner1").classList.remove("flipped");render1();}

/* =====================================================================
   PAGE 2 — Arabic -> Polish
   ===================================================================== */
let cur2=0, flipped2=false, deck2=[];

function buildTabs2(){
  const w=document.getElementById("tabs2"); w.innerHTML="";
  _addTab(w,"All",all.length,true,()=>selectTheme2("all"));
  themes.forEach(th=>{
    const n=all.filter(c=>c.t===th.id).length;
    if(n===0)return;
    _addTab(w,(th.icon?th.icon+" ":"")+th.label,n,false,()=>selectTheme2(th.id));
  });
}
function selectTheme2(id){
  deck2=id==="all"?[...all]:all.filter(c=>c.t===id);
  cur2=0;flipped2=false;
  document.getElementById("inner2").classList.remove("flipped");render2();
}
function render2(){
  const c=deck2[cur2];
  document.getElementById("rba").textContent=c.a;
  document.getElementById("rbat").textContent=c.at||"";
  document.getElementById("rbe").textContent=c.e;
  document.getElementById("rfp").textContent=c.p;
  document.getElementById("rfr").textContent=c.r;
  const col=themeColors[c.t]||"#555";
  const rfk=document.getElementById("rfk");
  rfk.textContent=c.k;rfk.style.background=col+"22";rfk.style.color=col;rfk.style.borderColor=col+"44";
  document.getElementById("rft").textContent=themeLabels[c.t]||"";
  document.getElementById("prog2").textContent=(cur2+1)+" / "+deck2.length;
  document.getElementById("ttsBtn2").classList.remove("speaking");
  document.getElementById("ttsBtn2").innerHTML=SVG_IDLE+" Listen";
  document.getElementById("arabicBtn2Front").classList.remove("speaking");
  document.getElementById("arabicBtn2Front").innerHTML=SVG_IDLE+" Listen Arabic";
}
function flip2(){flipped2=!flipped2;document.getElementById("inner2").classList.toggle("flipped",flipped2);}
function next2(){window.speechSynthesis&&window.speechSynthesis.cancel();cur2=(cur2+1)%deck2.length;flipped2=false;document.getElementById("inner2").classList.remove("flipped");render2();}
function prev2(){window.speechSynthesis&&window.speechSynthesis.cancel();cur2=(cur2-1+deck2.length)%deck2.length;flipped2=false;document.getElementById("inner2").classList.remove("flipped");render2();}
function shuffleDeck2(){shuffle(deck2);cur2=0;flipped2=false;document.getElementById("inner2").classList.remove("flipped");render2();}

/* =====================================================================
   PAGE 3 — Spelling test
   ===================================================================== */
let spellDeck=[], spellCur=0, spellCorrect=0, spellTotal=0, spellChecked=false;

function buildTabs3(){
  const w=document.getElementById("tabs3"); w.innerHTML="";
  _addTab(w,"All",all.length,true,()=>selectTheme3("all"));
  themes.forEach(th=>{
    const n=all.filter(c=>c.t===th.id).length;
    if(n===0)return;
    _addTab(w,(th.icon?th.icon+" ":"")+th.label,n,false,()=>selectTheme3(th.id));
  });
}
function selectTheme3(id){
  spellDeck=id==="all"?shuffle([...all]):shuffle(all.filter(c=>c.t===id));
  spellCur=0;spellChecked=false;renderSpell();
}
function renderSpell(){
  const c=spellDeck[spellCur];
  document.getElementById("sp-arabic").textContent=c.a;
  document.getElementById("sp-arTranslit").textContent=c.at||"";
  document.getElementById("sp-english").textContent=c.e;
  const inp=document.getElementById("spellInput");
  inp.value=""; inp.className="spell-input";
  document.getElementById("spellResult").className="spell-result";
  document.getElementById("checkBtn").textContent="Check";
  spellChecked=false;
  setTimeout(()=>inp.focus(),80);
}
function checkSpelling(){
  if(spellChecked){nextSpell();return;}
  const inp=document.getElementById("spellInput");
  const raw=inp.value;
  const correct=spellDeck[spellCur].p;
  const lenient=document.getElementById("lenientMode").checked;
  const noPunct=document.getElementById("ignorePunct").checked;
  let u=raw.trim(), r=correct.trim();
  if(noPunct){u=removePunct(u);r=removePunct(r);}
  if(lenient){u=normalisePolish(u);r=normalisePolish(r);}
  else{u=u.toLowerCase();r=r.toLowerCase();}
  const ok=u===r;
  spellTotal++; if(ok)spellCorrect++;
  spellChecked=true;
  inp.classList.add(ok?"is-correct":"is-wrong");
  const res=document.getElementById("spellResult");
  res.className="spell-result show "+(ok?"correct-result":"wrong-result");
  document.getElementById("resultIcon").textContent=ok?"✅":"❌";
  document.getElementById("resultVerdict").textContent=ok?"Correct!":"Not quite…";
  document.getElementById("resultAnswer").innerHTML=ok
    ?`<strong>${correct}</strong>`
    :`Correct: <strong>${correct}</strong>`;
  document.getElementById("resultPron").textContent=spellDeck[spellCur].r;
  document.getElementById("spellCorrect").textContent=spellCorrect;
  document.getElementById("spellTotal").textContent=spellTotal;
  document.getElementById("checkBtn").textContent="Next ›";
  if(document.getElementById("autoSpeak").checked) speakPolishText(correct);
}
function nextSpell(){spellCur=(spellCur+1)%spellDeck.length;spellChecked=false;renderSpell();}
function resetSpellScore(){spellCorrect=0;spellTotal=0;document.getElementById("spellCorrect").textContent="0";document.getElementById("spellTotal").textContent="0";}
function onSpellKey(e){if(e.key==="Enter"){e.preventDefault();checkSpelling();}}

/* =====================================================================
   PAGE SWITCH
   ===================================================================== */
function switchPage(n){
  document.getElementById("page1").style.display=n===1?"block":"none";
  document.getElementById("page2").style.display=n===2?"block":"none";
  document.getElementById("page3").style.display=n===3?"block":"none";
  document.getElementById("btnPage1").classList.toggle("active",n===1);
  document.getElementById("btnPage2").classList.toggle("active",n===2);
  document.getElementById("btnPage3").classList.toggle("active",n===3);
  window.speechSynthesis&&window.speechSynthesis.cancel();
  if(n===3&&spellDeck.length===0&&all.length>0){buildTabs3();selectTheme3("all");}
}

/* =====================================================================
   KEYBOARD NAVIGATION
   ===================================================================== */
document.addEventListener("keydown",e=>{
  const pg=document.getElementById("page1").style.display!=="none"?1
          :document.getElementById("page2").style.display!=="none"?2:3;
  if(pg===3)return;
  if(e.key==="ArrowRight"||e.key==="l"||e.key==="L"){pg===1?next1():next2();}
  else if(e.key==="ArrowLeft"||e.key==="h"||e.key==="H"){pg===1?prev1():prev2();}
  else if(e.key===" "||e.key==="f"||e.key==="F"){e.preventDefault();pg===1?flip1():flip2();}
});

/* =====================================================================
   SWIPE SUPPORT
   ===================================================================== */
function addSwipe(el,onLeft,onRight,onTap){
  let sx=0,sy=0;
  el.addEventListener("touchstart",e=>{sx=e.touches[0].clientX;sy=e.touches[0].clientY;},{passive:true});
  el.addEventListener("touchend",e=>{
    const dx=e.changedTouches[0].clientX-sx;
    const dy=e.changedTouches[0].clientY-sy;
    if(Math.abs(dx)>Math.abs(dy)&&Math.abs(dx)>40){dx<0?onLeft():onRight();}
    else if(Math.abs(dx)<10&&Math.abs(dy)<10){
      if(!e.target.closest("button")){
        e.preventDefault(); // block synthesized click so scene onclick doesn't double-flip
        onTap();
      }
      // target is a button: do nothing — let the button's own synthetic click fire
    }
  });
}

/* =====================================================================
   INIT
   ===================================================================== */
(async()=>{
  const ok=await loadFromFirebase();
  if(!ok)return;
  document.getElementById("loadingOverlay").classList.add("hidden");
  deck1=[...all]; deck2=[...all]; spellDeck=shuffle([...all]);
  buildTabs1();buildTabs2();buildTabs3();
  render1();render2();renderSpell();
  addSwipe(document.getElementById("scene1"),next1,prev1,flip1);
  addSwipe(document.getElementById("scene2"),next2,prev2,flip2);
  initTTS();
})();
