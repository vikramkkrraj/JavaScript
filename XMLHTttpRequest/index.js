const img = document.querySelector('img');
const button = document.querySelector('.button');


button.addEventListener('click', ()=>{
 const xhr=new XMLHttpRequest();

//  to know what is in xhr
//  console.log(xhr);

// response in the form of json string , to convert response type object
 xhr.responseType='json';
 xhr.addEventListener('load', ()=>{

    // to convert the json into object
    // console.log(JSON.parse(xhr.response));


    // console.log(xhr.response);
    // console.log(xhr.response.message);

    // to pass response msg into img
    img.src = xhr.response.message;
    
    // without xhr.responseType='json';
    // img.src = JSON.parse(xhr.response).message

 })


 xhr.open('GET','https://dog.ceo/api/breeds/image/random');


//  false is used to make the js engine asynchronous or keep the main thread in waiting
// bcoz js is single threded and synchronous
// so when httpRequest is send js give this take to browser and browser are multi headed so browser uses their own thread to request and response handling and it will wait still response come from the server, once response comes it update to the js engine and js thread take over that resposne, similiary setTimeOut and setTimeInterval are the browser function. which uses asynchronous 
// wihout false, it defaulty set true which is for the synchronous bcoz JavaScrip is single threaded langauage.
// if you make false , then until that funtion or code does not execute completely, display will stuck and you will not able to do anything on the display or browser.

//  xhr.open('GET','https://dog.ceo/api/breeds/image/random',false);

 xhr.send();

})