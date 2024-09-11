let curr=new Date();
console.log(curr);
console.log(new Date());
console.log(new Date().toLocaleString());//local tim of counrty if not not use .tostring

//Date.now returns us milliseconds from 1st jan 1970 to present time

//in js december is 11 and jan is 0
console.log(new Date(2021,11,24,10,22,45,5).toLocaleString());
console.log(new Date("October 13,2021  11:13:23").toLocaleString());
const curr2=new Date();
console.log(curr2.getFullYear());
console.log(curr2.getTime());//return milliseconds from jan1st 1970
console.log(curr2.getDay());
console.log(curr2.getHours());
console.log(curr2.getMilliseconds());