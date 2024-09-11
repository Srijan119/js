const content=document.getElementById('fetching');
const fetchbtn=document.getElementById('fetchbtn');

function getData(){
 url="https://api.github.com/users";
 fetch(url).then((response)=>{
    return response.json();

 }).then((data)=>{
    console.log(data);

 })
}



function postData()
{ url="	https://dummy.restapiexample.com/api/v1/create";
 data=	`{"name":"test43554","salary":"123","age":"23"}`
params={
    method:'post',
    headers:{
        'Content-type':'application/json'
    },
    body:data
}
fetch(url,params).then((response)=>{
   return response.json();

}).then((data)=>{
   console.log(data);

})





}
//getData();
postData();