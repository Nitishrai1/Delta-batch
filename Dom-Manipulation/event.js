// let btn=document.querySelector("button");
// console.dir(btn);
// btn.onclick=function() {
//     console.log("Button was clicked");
// }

// // Event Listners: it is used to tack the event on the website and perform multiple action on the webpage for exapmle 

// let btn2=document.querySelectorAll("button");
// for(bt of btn2){
//     bt.addEventListener("click",sayhello);
//     bt.addEventListener("click",sayname);

    
// }

function sayhello(){
    alert("Apna college"); 
}

function sayname(){
    alert("Welcome nitish rai");
}

// This in eventr
// let btn3=document.querySelector(".btn2");
// btn3.addEventListener("click",function(){
//   console.dir(this.innerText);
//   this.style.backgroundColor="blue";
// });


let h1=document.querySelector("h1");
let h2=document.querySelector("h3");

// h1.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });
// h2.addEventListener("click",function(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// });

// Or

// function changecolor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";

// }

// h1.addEventListener("click",changecolor);
// h2.addEventListener("click",changecolor);
// btn3.addEventListener("click",changecolor);

// Keyboard events: when ever we tupe a key it trigger a event

// let inp=document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("Key was pressed");
// })

// let rel=document.querySelector("input");
// inp.addEventListener("keyup",function(){
//     console.log("Key was released");
// })

// keyboard events
// code : tells the code of the character
// key display wihch is displayed on screen

let rel=document.querySelector("input");
rel.addEventListener("keydown",function(event){
    console.log("key = ",event.key);
    console.log("code = ",event.code);
    
});

 



