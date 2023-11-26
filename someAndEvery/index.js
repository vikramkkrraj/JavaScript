const evenNum = [0,2,4,6,8,9];

const ans = evenNum.some((num,i,arr)=>{
    console.log(num,i,arr);
    num = 8;
    return num === 9;

})
// console.log(ans);

// NOTE : some() method return true and false 
// it checks each element of arry and return true or false value on condition.

const result = evenNum.some((num)=> {
    // return num > 4;
    // return num > 20;
})
// console.log(result) // true or false --> if any element is true then it will return true similar with false .(for falsy value return false and truty value return true).

// const result1 = evenNum.some((el)=>{
//     return el % 2 ===1;
// })
// console.log(result1);


// const result3 = evenNum.some((el,i)=>{
//     if(el%2===1){
//         console.log(i);
//     }
//     return el % 2==1;
// })


// every() method

const result4 = evenNum.every((el,i)=>{
    return el % 2==0;
})
// console.log(result4); // false bcoz 9