//we have creation and execution phase in js

//hoisting in js is mechanism where variables and functions declarations are move to the top of scope.

console.log(myName);
var myName;
myName='srijan';

//we will get the output as undefined

// 1.var myName;
//2.console.log(myName);
//3.myName='srijan';

//scope chain and lexical scope


// lexical scoping means inner function acn access parent function variablre but vice versa is not true.
let a="hello";
parent=()=>{
    let b=" hi";
    child=()=>{
        let c=" i am srijan";
        console.log(a+b+c);
    }
    child();
//console.log(a+b+c); cant used c here

}
parent();
//closure:-- we can use parent variables under the inner functions (same as lexical)

// in synchrounous js  
// 1 task:-10min
// 2nd task:-5 sec

// we have to wait for 10 min for second task to be done 



// after coming of asynchronous js we both can be done together thus saves Time
console.log(`---------------------------------`);
//synchronous js program

const f2=()=>{
    console.log(`function2`);
}
const f1=()=>{
    console.log(`function1`);
    f2();
    console.log(`function1`);
}
f1();

//asynchrouos js program
console.log(`-----------------------------`);

const f4=()=>{
    setTimeout(()=>{
    console.log(`function2 coming after 2 seconds`);},2000);

}
const f3=()=>{
    console.log(`function1`);
    f4();
    console.log(`function1`);//it will execute as f4 is called and the program will not wait and waste 2seconds of settimeout interval
}
f3();



//function currying
console.log(`----------------------------------------------`)

function sum(num1){
    return function(num2){
        return function(num3){
            console.log(num1+num2+num3);
            console.log(num1);
        }
    }
}


sum(3)(2)(1)