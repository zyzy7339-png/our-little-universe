// ==========================
// OUR LITTLE UNIVERSE
// script.js - PART 1
// ==========================

const pages = document.querySelectorAll(".page");

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

window.scrollTo(0,0);

}

window.addEventListener("load",()=>{

setTimeout(()=>{

document.getElementById("loadingScreen").style.display="none";

showPage("lockscreen");

},3000);

});

const clock=document.getElementById("clock");
const date=document.getElementById("date");

function updateClock(){

const now=new Date();

let h=now.getHours();
let m=now.getMinutes();

m=m<10?"0"+m:m;

clock.innerHTML=h+":"+m;

date.innerHTML=now.toDateString();

}

setInterval(updateClock,1000);

updateClock();

document.getElementById("unlockBtn").onclick=function(){

showPage("passcode");

}

document.getElementById("passBtn").onclick=function(){

const pass=document.getElementById("password").value.toLowerCase();

if(pass==="pink"){

showPage("intro");

}else{

document.getElementById("error").innerHTML="Wrong Password 🤍";

}

}

document.getElementById("storyBtn").onclick=function(){

showPage("story");

}

document.getElementById("coffeeBtn").onclick=function(){

showPage("coffee");

}

document.getElementById("galleryBtn").onclick=function(){

showPage("gallery");

}

document.getElementById("letterBtn").onclick=function(){

showPage("letter");

}

document.getElementById("nextLetter").onclick=function(){

showPage("ending");

}
// Floating Hearts
setInterval(() => {

const heart = document.createElement("div");

heart.className = "heartFloat";

heart.innerHTML = Math.random() > 0.5 ? "🤍" : "❤️";

heart.style.left = Math.random() * 100 + "vw";

heart.style.animationDuration = (4 + Math.random() * 5) + "s";

heart.style.fontSize = (18 + Math.random() * 18) + "px";

document.body.appendChild(heart);

setTimeout(() => {

heart.remove();

}, 9000);

}, 800);

// Floating Petals
setInterval(() => {

const petal = document.createElement("div");

petal.className = "petal";

petal.innerHTML = "🌸";

petal.style.left = Math.random() * 100 + "vw";

petal.style.animationDuration = (6 + Math.random() * 6) + "s";

petal.style.fontSize = (18 + Math.random() * 18) + "px";

document.body.appendChild(petal);

setTimeout(() => {

petal.remove();

}, 12000);

}, 1300);

// Smooth Scroll
document.querySelectorAll("button").forEach(btn=>{

btn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});
    // ❤️ Typewriter Effect
function typeWriter(element,text,speed=35){

element.innerHTML="";

let i=0;

function typing(){

if(i<text.length){

element.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,speed);

}

}

typing();

}

const letter=document.getElementById("loveLetter");

if(letter){

const message=`Hi Lise,

If you're reading this, it means you've reached the last page of our little universe.

Who would've thought that a random match, random chats, coffee pictures, and simple good mornings would slowly become something I always looked forward to?

This website isn't perfect.

Just like us.

But every line of code here was made to keep a memory that might make you smile someday.

Maybe one day...

we'll stop sending coffee pictures.

Maybe one day...

we'll drink one together.

Until then...

thank you for existing.

Stay safe.

Stay happy.

And never lose that beautiful smile.

— Yours 🤍`;

typeWriter(letter,message);

}

console.log("Our Little Universe Loaded 🤍");

});

});
const endingBtn = document.getElementById("endingBtn");

if (endingBtn) {

    endingBtn.onclick = function () {

        showPage("ending");

    };

}
