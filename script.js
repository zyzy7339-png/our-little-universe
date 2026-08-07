// =============================
// OUR LITTLE UNIVERSE
// script.js - PART 1
// =============================

const pages = document.querySelectorAll(".page");

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

// Loading Screen

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loading").style.display="none";

showPage("lockscreen");

},3000);

});

// Clock

const clock=document.getElementById("clock");

const today=document.getElementById("today");

function updateClock(){

const now=new Date();

let h=now.getHours();

let m=now.getMinutes();

if(m<10)m="0"+m;

clock.textContent=h+":"+m;

today.textContent=now.toDateString();

}

updateClock();

setInterval(updateClock,1000);

// Unlock

document.getElementById("unlockBtn").onclick=function(){

showPage("passcode");

};

// Passcode

document.getElementById("passBtn").onclick=function(){

const pass=document.getElementById("password").value.trim().toLowerCase();

if(pass==="pink"){

showPage("intro");

}else{

document.getElementById("error").textContent="Wrong password 🤍";

}

};

// Navigation

document.getElementById("storyBtn").onclick=function(){

showPage("story");

};

document.getElementById("coffeeBtn").onclick=function(){

showPage("coffee");

};

document.getElementById("galleryBtn").onclick=function(){

showPage("gallery");

};

document.getElementById("letterBtn").onclick=function(){

showPage("letter");

};

document.getElementById("letter2Btn").onclick=function(){

showPage("letter2");

};

document.getElementById("verseBtn").onclick=function(){

showPage("verse");

};

document.getElementById("endingBtn").onclick=function(){

showPage("ending");

}; 
// =============================
// OUR LITTLE UNIVERSE
// script.js - PART 2
// =============================

// Floating Hearts
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

// Falling Petals
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

// Enter key for passcode
document.getElementById("password").addEventListener("keypress",function(e){

if(e.key==="Enter"){

document.getElementById("passBtn").click();

}

});

// Disable image dragging
document.querySelectorAll("img").forEach(img=>{

img.draggable=false;

});

// Console Message
console.log("☕ Welcome to Our Little Universe 🤍");
