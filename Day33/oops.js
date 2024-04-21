// const stu1={
//     name:"nitish",
//     age:25,
//     marks:90,
//     getMarks:function(){
//         return this.marks;
//     } 
// };


// object prototypes: Prototypes are the mechanism by which javascript objects inherit features from one another it is like a single template object that all objects inherit methods and properties from without having their own copy

// arr._proto_(reference)
// Array.prototype(actual object)
// String.prototype 

let arr1=[1,2,3];
arr1.sayHello=()=>{
    console.log("hello i am arr1");
}


let arr2=[1,2,3];
arr2.sayHello=()=>{
    console.log("hello i am arr2");
}


// Factory Functions: a function that creates objects
function PersonMakers(name,age){
    const person={
        name:name,
        age:age,
        talk:function(){
            console.log(`Hi my name is ${this.name}`);
        }
    };
        return person;
} 
let p1=PersonMakers("adam",25);  // talk function dono ke liye alag alag banega so this is also not fully efficient
let p2=PersonMakers("nitish",22);


// to overcome this the new operator come into picture
//  The new operator lets developers create an instance of a user-defined object type or of one of the built-in object that has a constructor function


// Constructore-doesont return anything & start with capital letter
function Person(name,age){
    this.name=name;
    this.age=age;
}

Person.prototype.talk=function ( ){
    console.log(`Hi, my name is ${this.name}`);
}; 
let p3 = new Person("nitish",22);
let p4 = new Person("nitish",22);

// Now this method is little bit complex and hence the classes come into the picture
// classes are a template for creating objects 
// the constructor method is a special method of a class for creating and initializing an object instance of that class

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    talk(){
        console.log(`Hi, my name is ${this.name}`);
    }
}

let p5=new Student("nitish",23);  //now in this the p5 and p6 have the same copy of the talk function
let p6=new Student("Mihir",23);  

// Inheritance:it is a process of inherit the data and the member of one class in another class

class Person{
    constructor(name,age){
        console.log("Person class constructor");
        this.name=name;
        this.age=age
    }
}


class Teacehr extends Person{
    constructor(name,age,subject){
        console.log("Teacher class constructor")
        super(name,age);
        this.subject=subject;
    }
    
}

class Student extends Person{
    constructor(name,age,marks){
        super(name,age); //parent class constructor is called
        this.marks=marks
    }
    talk(){
        console.log("Teacher is talking")
    }

}

let s1=new Student("nitish",22.95);
let t1=new Teacehr("Ravi",22,maths);



