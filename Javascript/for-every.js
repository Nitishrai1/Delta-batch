// forevery() :this function return the true if the condition is true else it returns false

const arr=[2,4,6]
const even=arr.every((el)=>(el%2));
console.log(even);

// reduce method
arr2=[1,2,3,4,5]
const sum=arr2.reduce((res,el)=>(res+el));
console.log(sum);

// WAP to return the maximum number of a array using reduce
let arr3=[1,2,3,4,5,6,7,8,9];
let max=arr3[0];
const maximum=arr3.reduce((max,el)=>{
    if(max<el){
        return el;
    }
    else{
        return max;
    }
});
console.log(`The maximum number in the array is ${maximum}`);

// Q:Check if all number in our arrays are multiple of 10 or not


let num=[10,60,20,100];
const res=num.every((el)=>(el%10==0));
console.log(res);

// Q: create a funciton to find the min number is a array


function min(num){
    const index=num[0];
    const minimum=num.reduce((min,el)=>{
        if(index>el){
            return el;
        }
        else{
            return index;
        }
    })
    return minimum;

}
const minimum=min(num);
console.log(`The minimum number in the array is ${minimum}`);

// Spread operator: Expands an iterable into multiple values


let num2=[1,2,3,4,5,6,7,8,9,10,11,11,2,3,3,554,6,5,6,545,54,4,34,3,3,];
const maxim=Math.max(...num2);
console.log(maxim);
console.log(...num2);

// using spread with object literals
let data={
    email:"ironman@gmail.com",
    ag:21

}
let data2={...data,password:123};
console.log(data2);

// Spreading a arra in term of object
let obj={...num2};
console.log(obj)

// Rest: just oposite of spread operator it allows a funciton to take number of argument and bundle them in an array
console.log("Demo of rest function");

function rest(...args){
    for(let i=0;i<args.length;i++){
        console.log(`Your gave us: ${args[i]}`);
    }
}
rest(num2);

// Destructuring
// Array
 
let names=["tony","bruce","peter","steve"];
let [winner,runnerup,secondrunnerup]=names;    //winner =names[0],runnerup=names[1] ..
console.log(winner);

// Destructuring object
const student={
    name:"nitish",
    age:14,
    class:9,
    subject:["hindi","english","math","science"],
    username:"nitish!",
    password:123
}

let {username,password}=student   //username ans password will be returned can be stored in another variable [username:user,password:pass]

// Practice set

// Q: square and sum the arrasy elements using the arrow function and then find the average of the array

let arr4=[1,2,3,4,5,6];
let squ=arr4.map((el)=>{
    return el*el;
})
let sumfo_sq=squ.reduce((res,el)=>{
    return res+el;
})
let avg=sumfo_sq/arr4.length;
console.log(avg);

// Q:create anew array using map function whose each element is equal to the original element plus 5


let arr5=[1,2,3,4,5]
let newel=arr5.map((el)=>el+5);

console.log(newel);

// Q:Create a new array whose elelment in uppercase of words present in  the original array

let lower=["nitish","rohan","ishan","praveen"]
let upper=lower.map((el)=>el.toUpperCase());
console.log(upper);

// Q: write a function called double and return args whichwhich accepts an array and a variable number of arguments. The function should return a new array with the original array val;ues and all of the additional argument doubled

const doubleandreturnAgrs=(arr,...args)=>[
    ...arr,...args.map((el)=>el*2),
];


// Q:WAP called as mergeObject that accepts two object and returs a new object which containes all the key and values of the first object and second object

const mergeObj=(obj1,obj2)=>({...obj1,obj2});

