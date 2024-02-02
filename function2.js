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