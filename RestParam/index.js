const arr = [1,2,3,4];
function add(...nums){  //nums is rest operator
    console.log("nums :" , nums);
    let sum = 0 ;
    for(let i =0 ; i<nums.length; i++){
        sum += nums[i];
    }
    return sum;
}
// console.log(add(...arr));  //spread opertor 




function add1(a,b,...nums){
    console.log(a,b, nums);

}
// console.log(add1(...arr,5,6,7));

// NOTE : we can not use rest operator before any agruments, alawys use at last
// function add2(...nums,a,b){
//     console.log(a,b,nums);
// }
// NOTE : in spread operator we can use



function add3(a,b,c,...nums){
    console.log(a,b,c, nums);
}
// add3(1,2 );



// reduce() method
function add4(...nums){
    return nums.reduce((acc,curr)=>acc+curr,100);
}
// console.log(add4(...arr));

// Covert aguments into array
// 1st Method
function add5(){
    return [...arguments].reduce((acc,curr)=>acc+curr);
}
// const result =add5(...arr);
// console.log(result);

// 2nd Method
function add6(...nums){
    return Array.from(nums).reduce((acc,curr)=>acc+curr);
}
// console.log(add6(...arr,1));
