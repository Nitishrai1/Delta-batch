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
const enum Size{Small=1,Medium,Large}; //in this when we set the small 1 then the other will be 2 and 3 if not declared then it start with 0
let mysize=Size.Medium
console.log(mysize)


// defining the function in typescript
function calculateTax(income: number,taxyear:number):number{
    if(taxyear>2020){
        if(income<50000){
            return income*10;
        }
    }
    return income*1.5;
    
}
const value=calculateTax(10000,2022);
console.log(value);


// objects in typescript
let employee: {
    readonly id:number,
    name:string
    retire:(date:Date)=>void  //this is a return type having date as  parameter
} = {
    id:1,
    name:'Mosh',
    retire:(date:Date)=>{
        console.log(date);
    }
};


// Advance types
type Employee={   //this is another type of the object declaration in which we can re use it for mltiple places it is a alias
    readonly id:number,
    name:string
    retire:(date:Date)=>void  //this is a return type having date as  parameter
    
}

// union type using the union we can create a function on many variable types
function KgToLbs(weight:number|string){
    // narrowing: converting a union type to a more specific type
    if(typeof weight==='number')
        return weight*1.2;
    else
    return parseInt(weight)*2.2;

}
KgToLbs(10);
KgToLbs('10kg')


// intersection we can create function with two different type at same time
type Draggable={
    drag:()=>void
};
type Resizable={
    resize:()=>void
};

type UIWidget=Draggable&Resizable;  //intersection type
let textBox:UIWidget={
    drag:()=>{},
    resize:()=>{}
}

// Literal types: it is used to limit the value of the number type which means a exact or specific value
type Quantity=50|100;
let quantity:Quantity=100;


type Metric='cm'|'inch';   //it can a string also


// nullable types
function greet(name:string|null){
    if(name)
        console.log(name.toUpperCase());   //we can not convert a nullable type a uppercase and here the typescript thorws an error
}
greet(null);

type Customer={
    birthday:Date
};
function getCustomer(id:number):Customer|null|undefined{
    return id===0?null:{birthday:new Date()};
}

let customer=getCustomer(1);
// if(customer!==null && customer!==undefined) this can be removed by Optinal (?) property access operator
    console.log(customer?.birthday?.getFullYear);

    // optinal element access operator
    // customers?.[0] 
    
    
    //optional call 
    let log:any=null;
    log?.('a');

