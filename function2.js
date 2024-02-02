// forEach method: 
let array=[1,2,3,4,5]
let print=function(item){
    console.log(item);
};
array.forEach(print);

// or 
 array.forEach(function (item){
    console.log(item);
 });

//  arrow function
array.forEach((item)=>{
    console.log(item);
})

// forEach funtion for a array of object
let arr=[{
    name:"nitish",
    marks:99
},
{
    name:"rohan",
    marks:95.6
},
{
    name:"ishan",
    marks:93
}]

arr.forEach((student)=>{
    console.log(student.name);
})

// Map : function is similer to the foreach loop but it make another array from the already given arry
let num=[1,2,3,4]

let double=num.map((item)=>{
    return item*2;
})
console.log(double);

// Write a program that prints the square of the number of the array element
let num2=[2,3,4,5,6,7]
 let square=num2.map((index)=>{
    return index*index;
 })
 console.log(square);

//  Wap to return the gpa ofs student from the above objecct
let gpa=arr.map((stu)=>{
    return stu.marks/10;
})
console.log(gpa);

// Filter: this function return the element if the call back gives true for the operation else the element is not added to the array

let numbers=[1,2,56,7,3,5,6,9,2,4]
// write filter function for filtering the evan number
let fil=numbers.filter((el)=>{return el%2==0});
console.log(fil);
