let para1=document.createElement("p");
para1.innerText="Hey i am a para";
document.querySelector("body").append(para1);
para1.classList.add("red");

let para2=document.createElement("h3");
para2.innerText="Hey i am a h3";
document.querySelector("body").append(para2);
para2.classList.add("blue");



let div=document.createElement("div");
let h1=document.createElement("h1");
let para3=document.createElement("p");

h1.innerHTML="I am in a div";
para3.innerText="I am a in a div too!";

div.append(h1);
div.append(para3);

div.classList.add("box")

document.querySelector("body").append(div);
let input=document.createElement("input");
input.innerText="enter the name";
let btn=document.createElement("button");
btn.innerHTML="click me";

document.querySelector("body").append(input);
document.querySelector("body").append(btn);


btn.setAttribute("id","button");
input.setAttribute("placeholder","Username");

let b=document.querySelector('#button');
b.classList.add("btnstyle");

// let h1=document.createElement("h4");
// h1.innerHTML="<ul> DOM Practice </u>";
// document.querySelector("body").append(h1);

// Q5
let ptag=document.createElement("p");
ptag.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(ptag);