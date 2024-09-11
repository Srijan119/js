//anonymous function


var funexp=function sum (a,b){
    return total=a+b;
}
console.log(funexp(5,10));
// console.log("the sum is"+funexp);

//let and const are block scope
//var has function scope

//template string
var m=12;
var n=9;
console.log( m +"+"+n +"is ="+ (m+n));
console.log(`${m} +${n} is${m+n}`);

console.log(`--------------------------------------------------`)
//arrow function
const sum=()=>{

    var a=5;b=9;
    return `the sum of ${a}+${b}=${a+b}`;
}
console.log(sum());
console.log(`-----------------for in and for of loop anf for each loop`);
var myarray=['sss','sssa','swewsd','ssaa','sss'];

for(let elements in myarray)
{
    console.log(elements);
}
console.log(`------------`);
for(let elements of myarray)
{
    console.log(elements);
}
console.log(`------------`);
myarray.forEach(function(element,index,array)
{
    console.log(element+"index"+index+" "+array);
});
