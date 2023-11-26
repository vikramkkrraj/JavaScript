const fruits = ['apple','banana','mango','graps','orange'];

// fruits.forEach((fruit)=> {
//     console.log(fruit);
// })

// fruits.forEach(function(fruit){
//     console.log(fruit);
// })

function fruit(el){
    console.log(el);
    console.log(el.toUpperCase());

}
fruits.forEach(fruit);

// NOTE: it always return undefined

// const ans = fruits.forEach(fruit);
// console.log(ans);

