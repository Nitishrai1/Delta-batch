let array=[1,2,3,4,5,6,2,3]
let num=2;
for(let i=0;i<array.length;i++){
    if(array[i]==num){
        array.splice(i,1);
    }
}
// console.log(array);

let number=287152
let count=0
let copy=number
while(copy>0){
    count++;
    copy=Math.floor(copy/10);
}
// console.log(count);
let number2=287152
let copy2=number2
let sum=0;
while(copy2>0){
    digit=copy2%10;
    sum+=digit;
    copy2=Math.floor(copy2/10);
}
// console.log(`The sum of the digits os the number is ${sum}`);


let number3=5
let fact=1
for(let i=1;i<=number3;i++){
    fact=fact*i;

}
// console.log(`Factorial of the number is ${fact}`);


let max=array[0]
for(let i=1;i<array.length;i++){
    if(array[i]>max){
        max=array[i];
    }

}
console.log(`Maximum of the number in the array is ${max}`);

