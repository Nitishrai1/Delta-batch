let gameSeq=[];
let userSeq=[];

let started=false
let level=0;
let h2=document.querySelector("h2");

let btns=["box1","box2","box3","box4"]

document.addEventListener("keypress",function(){
    if(started==false){
        started=true;
    // console.log("Game started");
    levelup();

    }

});

function levelup(){
    level++;
    h2.innerText=`Level ${level}`;

    let index=Math.floor(Math.random()*3);
    let randomcolor=btns[index];
    let randbtn=document.querySelector(`.${randomcolor}`);
    console.log(index);
    console.log(randomcolor);
    console.log(randbtn);
    buttonFlash(randbtn);

}

function buttonFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)


}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)


}

function btnPress(){
    console.log(this);
    let clickedbtn=this;
    userFlash(clickedbtn);
}

let allbtns=document.querySelectorAll(".btn");

for(btn of allbtnsbtns){
    btn.addEventListener("click",btnPress);
}