// Closures : it mens that a function binds together with its lexical scope when we want to pass a function inside a function
// we use closures it is not allowed in the other languges

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    return y;   //this will return a function
}

var z=x();
console.log(z);   //this will return the function with its closures which is retured above in the function

z();  //this will print the value of a because the function y is stored in the z variable and hence the closures can be used ti use the local scope also


