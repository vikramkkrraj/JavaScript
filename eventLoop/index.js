console.log('event loop and callback queue');

console.log("hi-1");


function hello(){
    console.log('hello');
}

for(let i =0; i< 4; i++){
    console.log(i);
}
debugger;   
// hello();
setTimeout(function(){
    console.log('hi-3')
},0 )

console.log('hi-2');