// call stack: whenever we call a function it creates a call stack which containes the function in the form of bunch of stack

function one(){
    return 1;
}
function two(){
    return one()+one();

}
function three(){
    console.log("Calling two and one");
    let ans=two()+one();
    console.log(ans);
}
console.log("Calling funciton three");
three();

// breakpoints: it is used to create a break point between differnt function call to find the erro in the code it is present in the browser itself
// Javascript is a single threaded one task is executed at a time 
