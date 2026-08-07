// =============================
// Our Little Universe v2.0
// =============================

// SCENES
const intro = document.getElementById("intro");
const loading = document.getElementById("loading");
const lockscreen = document.getElementById("lockscreen");
const passcode = document.getElementById("passcode");

// BUTTONS
const startBtn = document.getElementById("startBtn");
const unlockBtn = document.getElementById("unlockBtn");
const passBtn = document.getElementById("passBtn");

// LOADING
const loadingText = document.getElementById("loadingText");
const progressFill = document.getElementById("progressFill");

// CLOCK
const clock = document.getElementById("clock");
const date = document.getElementById("date");

// PASSCODE
const passInput = document.getElementById("passInput");
const hint = document.getElementById("hint");

// ----------------------------
// Change Scene
// ----------------------------

function showScene(scene){

document
.querySelectorAll(".scene")
.forEach(s=>s.classList.remove("active"));

scene.classList.add("active");

}

// ----------------------------
// Intro Button
// ----------------------------

startBtn.onclick=()=>{

showScene(loading);

startLoading();

}

// ----------------------------
// Loading Animation
// ----------------------------

const messages=[

"❤️ Collecting memories...",

"☕ Brewing coffee...",

"💌 Folding love letters...",

"🌸 Planting cherry blossoms...",

"🦋 Releasing butterflies...",

"😂 Hiding funny pranks...",

"🤍 Almost ready..."

];

function startLoading(){

let progress=0;

let current=0;

loadingText.innerHTML=messages[0];

const timer=setInterval(()=>{

progress++;

progressFill.style.width=progress+"%";

if(progress%15===0&&current<messages.length-1){

current++;

loadingText.innerHTML=messages[current];

}

if(progress>=100){

clearInterval(timer);

setTimeout(()=>{

showScene(lockscreen);

},700);

}

},45);

}

// ----------------------------
// Clock
// ----------------------------

function updateClock(){

const now=new Date();

let h=now.getHours();

let m=now.getMinutes();

if(m<10)m="0"+m;

clock.innerHTML=h+":"+m;

date.innerHTML=

now.toLocaleDateString(

"en-US",

{

weekday:"long",

month:"long",

day:"numeric"

}

);

}

updateClock();

setInterval(updateClock,1000);

// ----------------------------
// Unlock
// ----------------------------

unlockBtn.onclick=()=>{

showScene(passcode);

}

// ----------------------------
// Passcode
// ----------------------------

let tries=0;

passBtn.onclick=()=>{

const value=

passInput.value

.trim()

.toLowerCase();

if(

value==="pink"

||

value==="05/27/2026"

){

alert("❤️ Access Granted!\n\nNext update:\nNotification Screen 💌");

}else{

tries++;

const hints=[

"💡 Hint: Favorite color.",

"🌸 Starts with P...",

"📅 Or maybe 05/27/2026",

"😂 Fine... type pink."

];

hint.innerHTML=

hints[Math.min(tries-1,3)];

passInput.animate([

{transform:"translateX(-10px)"},

{transform:"translateX(10px)"},

{transform:"translateX(0)"}

],{

duration:250

});

}

}
/*=========================================
  NOTIFICATION SCREEN
=========================================*/

const notification = document.getElementById("notification");
const openEnvelope = document.getElementById("openEnvelope");

// kapag tama ang passcode
function openNotification(){

showScene(notification);

}

// Open envelope button
if(openEnvelope){

openEnvelope.onclick = () => {

document.body.style.transition = ".6s";
document.body.style.opacity = "0";

setTimeout(()=>{

// next page natin
alert("💌 Next Stop: Envelope Animation");

document.body.style.opacity = "1";

},600);

}

}