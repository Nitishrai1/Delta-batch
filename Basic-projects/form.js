function addrow(){
    let username=document.querySelector("#username").value;
    let email=document.querySelector("#email").value;
    let pass=document.querySelector("#pass").value;

    let table=document.querySelector("#table");
    let newrow=table.insertRow();
    let cel1=newrow.insertCell(0);
    let cel2=newrow.insertCell(1);
    let cel3=newrow.insertCell(2);

    cel1.innerHTML=username;
    cel2.innerHTML=email;
    cel3.innerHTML=pass;


    document.querySelector("#username").value="";
    document.querySelector("#email").value="";
    document.querySelector("#pass").value="";



}