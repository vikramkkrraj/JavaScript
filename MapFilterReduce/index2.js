// console.log(fruits);
// NOTE: we can access the objects of index.js
// bcoz order palced of the index.js and index2.js in index.html page
// if index2.js comes over index.js then can not able to access the elements of the index.js


// reduce() method

const num = [1,2,3];
// const reduce = num.reduce((accumulator,current,index,arrry) =>{
//     console.log(current);
// },initialValue=0);
// 

// const reduce = num.reduce((accumulator,current,index,arrry) =>{
//     console.log(current);
// },0);

// const reduce1 = num.reduce((acc, curr, index) => {
//     console.log(index, curr);
//     return acc;
// })
// console.log(reduce1);  // acc will have 1

const reduce2 = num.reduce((acc, curr, i,arr)=>{
    console.log(acc,curr,i,arr);
    return acc+curr;
},0)
console.log(reduce2);


