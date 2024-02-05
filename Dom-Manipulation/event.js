let btn=document.querySelector("button");
console.dir(btn);
btn.onclick=function() {
    console.log("Button was clicked");
}

// Event Listners: it is used to tack the event on the website and perform multiple action on the webpage for exapmle 

let btn2=document.querySelectorAll("button");
for(bt of btn2){
    bt.addEventListener("click",sayhello);
    bt.addEventListener("click",sayname);

    
}

function sayhello(){
    alert("Apna college"); 
}

function sayname(){
    alert("Welcome nitish rai");
}