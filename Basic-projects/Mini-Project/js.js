let gameseq=[];
let userseq=[];
let started=false;
let level=0;

// Accesing the h2
let h2=document.querySelector("h2");

let btns=["yellow","red","purple","green"];

document.addEventListener("keypress",function(){
    if(started==false){
        console.log(`Game started`);
        started=true;
        levelup();
    }
});

function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randomindex=Math.floor(Math.random()*3);
    let randomcolor=btns[randomindex];

    let randbtn=document.querySelector(`.${randomcolor}`);
    gameseq.push(randomcolor);
    console.log(gameseq);
    gameflash(randbtn);


}
function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
        
    }, 250);


}

// userflash function
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function() {
        btn.classList.remove("userflash");
        
    }, 250);


}

// button eventlistners
function btnPress(){
    console.log(this);
    let btn=this;
    gameflash(btn);
    userFlash(btn);
    usercolor=btn.getAttribute("id");
    console.log(usercolor);
    userseq.push(usercolor);
    checkAns(userseq.length-1);

}

let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

// matching sequence
function checkAns(index){
    
    if(userseq[index]===gameseq[index]){
        console.log("same value");
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
    }
    else{
        h2.innerHTML=`Game over: your score was <b>${level}</b><br> Press any key to restart`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor="white";


        },150);
        reset();
    }
}
function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;
}