// // Create a funcion that returns the sum of number from 1 to n
// function sum(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         sum+=i;

//     }
//     return sum;

// }
// // console.log(sum(10));
// function concat(arr){
//     string=""
//     for(let i=0;i<arr.length;i++){
//         string+=arr[i];
//     }
//     return string;
// }

// let arr=["nitish","rohan","ishan","praveen"];
// // console.log(concat(arr));

// // This function:used to access the member of the object
// const student={
    
//     name:"Nitish",
//     age:22,
//     eng:67,
//     phy:97,
//     math:99,
//     getavg(){
//         return ((this.eng+this.phy+this.math)/3);
//     }

// }
// // console.log(getavg())

// // Arrow function

// const sum=(a,b)=>{console.log(a+b);};



// const mul=(a,b)=>(a*b); 

// // Settimeout function
// console.log("Hi there!");
// setTimeout(()=>{
//     // console.log("Apna College");
// },4000);
// // console.log("welcome to");

// // Set interval
// const id=setInterval(()=>{
//     // console.log("Namaste Duniya");
// },2000);
// clearInterval(id); //this is used to stop the interval

// // This keyword with arrow function
// const student={
//     name:"nitish",
//     marks:95,
//     prop:this, //global scope
//     getname:function(){
//         console.log(this);  //this= student
//         return this.name;
//     },
//     getmarks:()=>{
//         console.log(this);   //this= parent scope which is window
//         return this.marks;
//     },
//     getInfo1:function(){
//         // setTimeout(()=>{console.log("Namste Duniya")},2000)  //student
//     },
//     getInfo2:function(){
//         setTimeout(function(){
//             // console.log("Hello world");   //window
//         },2000);
//     }


// };

// // Q:Write a arrow function that returns the square root of a number

// const sqt=(a)=>{
//     return a*a;

// }
// console.log(`The square root of the number is ${sqt(5)}`);

// // Q: Write a function that prints "Hello Worls" 5 times at intervals of 2s each

// const id=setInterval(()=>{
//     // console.log("Hello world");
// },2000);

// // clearing the setInterval after 10 sec
// setInterval(()=>{
//     clearInterval(id);
//     // console.log("Clear interval processed");
// },10000)

// // Q: Write a funtion that  prints the multiplication of a table by usiing setInterval
// let i=1;
// const id=setInterval(()=>{
//     // console.log(`${2} * ${i} = ${2*i}`);
//     i++;

// },2000)
// setInterval(()=>{
//     clearInterval(id)
// },20000)

// Q: Write a arrow function that takes a array as input and returns the average of the number of the array

const avg=(arr)=>{
    let sum=0;
    let avg=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
        avg=sum/arr.length;

    }
    return avg;
}
let arr=[1,2,3,4,5,6,7]
console.log(`The average of the element of the array is ${avg(arr)}`);

// Q:Write a arrow funtion that named isEven() tha takes a single number as argument and returns if it is even or not

const isEven=(a)=>{
    if(a%2==0){
        console.log(`The number ${a} is a evan number`);
    }
    else{
        console.log(`The number ${a} is not a evan number`);
    }

}
isEven(3);


