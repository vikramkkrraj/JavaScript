console.log("Arrow function Expression");

// --->Function Declaration <----

// function sum(a,b){
//     console.log(a+b);
// }


//  -->Function Expression <----

// const sum = function(a,b){
//     return a+b;
// }



// ---> Arrow Function Expression <---

const square = (num) => {
    return num*num;
}  
console.log(square(5));

// OR

const cub = num => num**3;
console.log(cub(3));

const sum = (a,b) => a+b;
console.log(sum(1,2));

setTimeout(()=>{
    console.log('hii');
},2000);

const random = Math.floor(Math.random()*10) + 1;
console.log(random +' --> This is random number');



