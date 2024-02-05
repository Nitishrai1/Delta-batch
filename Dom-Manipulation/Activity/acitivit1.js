let head=document.querySelector("h1");
let btn=document.querySelector("button");

btn.addEventListener("click",function(){
    console.log("Generate random color");
    let randomcolor=getRandomcolor();
    head.innerText=randomcolor;
    let div=document.querySelector("div");
    div.style.backgroundColor=randomcolor;

})

function getRandomcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;

}