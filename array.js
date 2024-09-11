//push method pushes the value and returns new length of the array
const animals=['sd','nf','wdjiw','fhe'];
animals.push('dfd');
console.log(animals);


//unshift adds at the starting 

animals.unshift('djsd');
console.log(animals);


//pop method removes the last element and returns new length of array

animals.pop();
console.log(animals);

//shift removes the first element of the array
animals.shift();
console.log(animals);


const months=['jan','feb','march','april','june'];
//indexOf method(returns index if found else return -1)
const indexofMonth=months.indexOf('march');
console.log(indexofMonth);

console.log(`-------------------splice method--------------------`);
console.log(months);
console.log(months.splice(5,0,'july'));//it returns the number of elements deleted and so as we have added 
//only so it will show []
console.log(months);
//updating march to March
months.splice(2,1,'March');
console.log(months);
//remove the element  'March'
const indexOfmonth=months.indexOf('March');
months.splice(indexOfmonth,1);
console.log(months);
//remove all elements from june which has index 3 
months.splice(3,Infinity);//if we use 2 or 3 in place of infinity then 2 or 3 resp. elements were deleted
console.log(months);

console.log(`--------------------Map,reduce,filter-------------`)
const arr=[3,2,5,90,54,522];
//map returs a new array with required /desired characterstics as true or false and filter returns the
// original element values
let newArray=arr.map((curElem,index,arr)=>{
    return curElem>9;
})
let newArray2=arr.filter((curElem,index,arr)=>{
    return curElem>9;
})

let newArray3 = arr.filter(curr=>curr>50);

let newArray4 = arr.map((curr)=>{
    return curr>50;

})
console.log(newArray3);
console.log(newArray4);

console.log(newArray);
console.log(newArray2);
let arr2=[25,64,36,81,100];
let arr3=arr2.map((curr)=>{
return Math.sqrt(curr);
})
console.log(arr3);
//reduce method
console.log(`----------------------------------------------------------`);
let newArr=[5,6,2];
let sum=newArr.reduce((accumulator,curElem,index,arr)=>{
return accumulator+=curElem;
})


console.log(sum);

//how to flatten a 2d or 3d array

const arr4=[
    [`zone_1`,'zone_2'],
    ['zone_3','zone_4'],
    ['zone_5','zone_6']
]
let flatArr=arr4.reduce((accum,currVal)=>{
return accum.concat(currVal);})
console.log(arr4);
console.log(flatArr);