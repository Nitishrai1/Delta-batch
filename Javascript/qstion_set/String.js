let msg="         hello       "
// console.log(msg.trim());
let name="nitish"

let str="nitishrai";
// console.log(str.slice(0,5)); 
// console.log(str.slice(0,5)); 
// console.log(str.slice(-4)); //is equal to  console.log(str.slice(length-4));
let msg2="    help   ";
console.log(msg2.trim().toUpperCase());
let string2="ApnaCollege";
// console.log(string2.slice(4,9));
// console.log(string2.indexOf("na"));
// console.log(string2.replace("Apna","Our"));
// console.log(string2.slice(4).replace("l","t"));

// Array
let arr=['january','july','march','aprail']
let month1=arr.shift();
let month12=arr.shift();

arr.unshift(month1);
arr.unshift(month12);
// console.log(arr);

// Array methods
 let array=['c','c++','javascript','html','python','java','c#','sql']
 array.reverse();
//  console.log(array);

 let arr2=[1,2,3,5,7,8,9]
 console.log(arr2.slice(0,4));

 console.log(arr2.slice(arr2.length-4));

 let string=prompt("Please enter a string")
 if(string.length==0){
    console.log(`String a empty`);
 }
 else{
    console.log("Sting is not empty");
 }
 if(string[0]==string[0].toUpperCase()){
    console.log("is in upper case")
 }
 else{
    console.log("Not in upper case");
 }

let num=5;
if(arr2.indexOf(5)!=-1){
    console.log("Number is present in array");
}
else{
    console.log("Number is not present in the array");
}





