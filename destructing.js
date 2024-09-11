let biodata=['huh','hug','uk'];
//destructuring array
// let[myage,myname,myhg]=biodata;
// console.log(myname);
let [myage,mynamme,myhyg,myhto="jd"]=biodata;
console.log(biodata);

//object destructuring

const biodata2={myname:'srijan',
    myage2:'22'

}
let{myname,myage2,gender="Male"}=biodata2;
console.log(biodata2.myname);
//spread operator
var bio=['duh','fjie','dfhid','dhfu','edhf','hfee'];

console.log(bio);
myarr=[...bio, 'fg','efd','egd']
console.log(myarr);