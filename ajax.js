let fetchbtn = document.getElementById('fetchbtn');
fetchbtn.addEventListener('click', buttonclickhandler);
function buttonclickhandler() {
    const xhr = new XMLHttpRequest();
  //xhr.open('GET', 'https://jsonplaceholder.typicode.com/todos/1', true);
     xhr.open('POST', 'https://jsonplaceholder.typicode.com/todos/1', true);
     xhr.getResponseHeader('Content-type','application/json');


    xhr.onprogress = function () {
        console.log('on progress');
    }
    xhr.onload=function(){
        console.log(this.responseText);
    }
    //xhr.send();
    params = `{"name":"srijan","salary":"345","age":"34"}`;
    xhr.send(params);

}
