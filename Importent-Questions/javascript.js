// 1. Write a JavaScript program to display the current day and time in the following format. 
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

let today=new Date();
let day=today.getDay();   //this will return number for 0 to 6
// console.log(day);

let days=["Monday","tuesday","Wednesday","thursday","friday","saturday","sunday"];
console.log(`Today day is: ${days[day]}`);

var hrs=today.getHours();
var min=today.getMinutes();
var sec=today.getSeconds();

let spec;

if(hrs>=12 && hrs<=23){
    spec='PM';

}
else if(hrs<=12 && hrs>=0){
    spec='AM';
}    
console.log(`Current time is : ${hrs} ${spec} : ${min} : ${sec}`);