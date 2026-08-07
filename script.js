// =============================
// OUR LITTLE UNIVERSE
// script.js
// PART 1
// =============================

const pages=document.querySelectorAll(".page");

function showPage(pageId){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(pageId).classList.add("active");

window.scrollTo({

top:0,

behavior:"smooth"

});

}

// =============================
// LOADING
// =============================

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

showPage("lockscreen");

},3000);

});

// =============================
// CLOCK
// =============================

const clock=document.getElementById("clock");

const today=document.getElementById("today");

function updateClock(){

const now=new Date();

let h=now.getHours();

let m=now.getMinutes();

if(m<10){

m="0"+m;

}

clock.textContent=h+":"+m;

today.textContent=now.toDateString();

}

updateClock();

setInterval(updateClock,1000);

// =============================
// BUTTONS
// =============================

document.getElementById("unlockBtn").onclick=()=>{

showPage("passcode");

};

document.getElementById("passBtn").onclick=()=>{

const pass=document.getElementById("password").value.trim().toLowerCase();

if(pass==="pink"){

showPage("intro");

}else{

document.getElementById("error").textContent="Wrong Password 🤍";

}

};

document.getElementById("storyBtn").onclick=()=>{

showPage("story");

};

document.getElementById("coffeeBtn").onclick=()=>{

showPage("coffee");

};

document.getElementById("galleryBtn").onclick=()=>{

showPage("gallery");

};

document.getElementById("letterBtn").onclick=()=>{

showPage("letter");

};

document.getElementById("letter2Btn").onclick=()=>{

showPage("letter2");

};

document.getElementById("verseBtn").onclick=()=>{

showPage("verse");

};

document.getElementById("endingBtn").onclick=()=>{

showPage("ending");

};
// =============================
// ENTER KEY
// =============================

document.getElementById("password").addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

document.getElementById("passBtn").click();

}

});

// =============================
// FLOATING HEARTS
// =============================

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heartFloat";

heart.innerHTML=Math.random()>.5?"🤍":"❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=(4+Math.random()*4)+"s";

heart.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},8000);

},900);

// =============================
// FALLING PETALS
// =============================

setInterval(()=>{

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(6+Math.random()*6)+"s";

petal.style.fontSize=(18+Math.random()*18)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

},1200);

// =============================
// IMAGE SETTINGS
// =============================

document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

img.setAttribute("loading","lazy");

});

// =============================
// CONSOLE
// =============================

console.clear();

console.log("☕ Our Little Universe Loaded");

console.log("🤍 Made with love");

console.log("🌸 Welcome");

// =============================
// END
// =============================
