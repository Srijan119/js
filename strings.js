console.log(`we are so called \ "vikings"\ from the north`);
//finding a string in a string
const string1='i am srijan srivastava';
console.log(string1.indexOf('srijaw'));
//searching a string in astring

console.log(string1.search('srijan'));
//extracting string parts slice(start,end)
console.log(string1.slice(5,17));
console.log()
//(1,-3) goes from 1 to last and remove the end last 3 chars
console.log(string1.slice(5,-3));
//substring is same as slice but dont take negative indexes
//extracting from back side data
console.log(string1.substr(10));
console.log(string1.substr(-10));

//replacing string content
console.log(string1.replace('srijan','Srijan'));
//extracting string characters
//charAt
console.log(string1.charAt(3));
//charCodeAt
console.log(string1.charCodeAt(3));
console.log(string1.charCodeAt(string1.length-1));
console.log(string1.toLowerCase());
console.log(string1.toUpperCase());
//trim removes whitespaces froim both start and end
string2='              jj bjbh bjbh jbjb            '
console.log(string2.trim());
var txt="a,b,c,d,e,a,s,";
console.log(txt.split(","));
console.log(txt.split("a"));


