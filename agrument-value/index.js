// function add(a,b){
//     console.log(arguments);
//     return a+b;
// }
// add(1,2);
// console.log('sum ' , add(2,3));
// console.log(add(1,2,3,4,5));

// console.log(arguments);



// function add(){
//    console.log(arguments[0]);
//    console.log(arguments[1]);
//    console.log(arguments[2]);
//    console.log(arguments[3]);
// }       

// console.log(add(1,2,3,4,6));


// using function declaration
// function add(){
//     let sum =0;
//     for (let i= 0; i< arguments.length; i++) {
//         sum = sum + arguments[i];
//     }
//     return sum;
// }
// console.log(add(1,2,3,4,5,10));


//using Expression function
// const add1 = function() {
//     let sum =0 ;
//     for(let i=0 ; i<arguments.length; i++){
//         sum +=arguments[i];
//     }
//     return sum;
// }
// console.log(add1(1,2,3,4,5));



// But using Arrow function agrument can not be access
// const add2 = () => {
//     let sum =0 ; 
//     for(let i=0 ; i< arguments.length; i++){
//         sum +=arguments[i];
//     }
//     return sum;
// }
// console.log(add2(1,2,3,4,5)); // agruments is not defined

// NOTE : here comes rest operator 
// bcoz agrument is old thing and there was some issue with arrow function

// const add3 = (...arr) => {
//     let sum = 0;
//     for (let index = 0; index < arr.length; index++) {
//         sum += arr[index];
//     }
//     return sum;
// }
// console.log(add3(1,2,3,4,5));


// Conveting agrument into array -->.
//  const arr=[1,2,3,4];

// // 1st Method
// function add5(){
//     return [...arguments].reduce((acc,curr)=>acc+curr);
// }
// const result =add5(...arr);
// console.log(result);
// console.log(typeof result);

// // 2nd Method
// function add6(...nums){
//     return Array.from(arguments).reduce((acc,curr)=>acc+curr);
// }
// console.log(add6(...arr));
         
// function add7(){
//     return [...arguments];
// }
// console.log(add7(...arr));



function fun(...arr){
    let newArr = console.log(Array.from(arguments));
    console.log(newArr);
    return [...arr];

}
console.log(fun(1,2,3,4,5));