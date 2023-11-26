// setTimeout('console.log(true)');  //  see the console
// setTimeout('console.log("vikram")');

// Note:
// setTimeout take the javascript code as argument
// let see the example

// let a = 'hello World';
// setTimeout('a');

// setTimeout('console.log("vikram"); console.log("Hello vikram")', 4000);
// setTimeout(`console.log("kumar")
//          console.log('Hii kumar How are You!?')`, 2000);


// Note:
// setTimeout() method return the timmer ID and you can use timer Id to stop the setTimeout() method

// let timerId =setTimeout("console.log('hello')" , 3000);
// clearTimeout(timerId);
// Note: use the use clearIntertime(timerId) also

// const timer1 = setTimeout(`console.log('hi-1')`, 1000);
// const timer2 = setTimeout(`console.log('hi-2')`, 2000);
// const timer3 = setTimeout(`console.log('hi-3')`, 3000);
// clearInterval(timer2); // ---> timer2 will not be console


// setTimeout() as higher order function 
// function a(){
//     console.log("hello world");
// }

// const timer1 = setTimeout(`console.log('hi-1')`, 1000);
// const timer2 = setTimeout(`console.log('hi-2')`, 2000);
// const timer3 = setTimeout(a, 3000);
// const timer4 = setTimeout(a(), 4000) //-> callling so hello world comes first


// // setTimeout() passing arguments
// const timer5 = setTimeout(b , 500, 'argument', 30);
// function b(){
//     console.log(arguments);
// }


// SetInterval()
// const interval1 = setInterval(`console.log('hi-1')`, 1000);
// clearInterval(interval1); 
// clearTimeout(interval1);
// Note: => both function work vice-versa  


// function c(){
//     console.log(`hello there`);
// }
// const interval2 = setInterval(c, 1000);
// clearInterval(interval2);



// setTimeout(() => {
//     console.log("hello");
// }, 0);
// console.log('hii'); // --> this code will execute first
