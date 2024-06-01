console.log(`hello world`); 
let age:number=20;
if(age<50){
    age+=10;
}

// typescript add extra datatype to the javascript like null any, boolean , enum etc
let sales=12233;
let course="Typescript";
let is_publised=true;


// any type
// any type is the data type in ts which can represent any type of value when the variabale is declared but not initialised then it is called the any type
// function render(document: any){
//     console.log(document);
// }

// arrays
let numbers: number[]=[1,2,3,4,5,]
let newnumbers=numbers.forEach(n=>n*2);
console.log(newnumbers)


// tuple are used to represent the key value pair in the typescript

let user: [number,string]=[1,'Mosh'];

// enum : it represnt the list of related constants 
enum Size{Small=1,Medium,Large}; //in this when we set the small 1 then the other will be 2 and 3 if not declared then it start with 0
let mysize=Size.Medium
console.log(mysize)
