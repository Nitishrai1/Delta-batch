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

// Settimeout function
console.log("Hi there!");
setTimeout(()=>{
    console.log("Apna College");
},4000);
console.log("welcome to");

// Set interval
const id=setInterval(()=>{
    console.log("Namaste Duniya");
},2000);
clearInterval(id); //this is used to stop the interval

// This keyword with arrow function
const student={
    name:"nitish",
    marks:95,
    prop:this, //global scope
    getname:function(){
        console.log(this);  //this= student
        return this.name;
    },
    getmarks:()=>{
        console.log(this);   //this= parent scope which is window
        return this.marks;
    },
    getInfo1:function(){
        setTimeout(()=>{console.log("Namste Duniya")},2000)
    },
    getInfo2:function(){
        setTimeout(function(){
            console.log("Hello world");
        },2000);
    }


};

