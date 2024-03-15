
let clk=document.querySelector(".clock");
function clock(){
    let date=new Date();
    minute=date.getMinutes().toString();
    hrs=date.getHours().toString();
    sec=date.getSeconds().toString();
    
    
    const currenttime=`${hrs}:${minute}:${sec}`;
    clk.textContent=currenttime;
    
}
clock();

setInterval(clock,1000);