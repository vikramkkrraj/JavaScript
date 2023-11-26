// Lexical Scope defines how variable name are resovled in nested functions.

// Nested(child) functions have access to the scope to their parent functions


// This is often confused with closure, but lexical scope is only an important part of closure.

// A closure is a function having access to the parent scope, even after the parent function has closed.

// A closure is created when we define a function, not when a function is executed.

// closure with the private variable.
// global scope
let x = 1;

const parentfunction = () =>{
    let myValue = 2;
    console.log(x);
    console.log(myValue);

    const childFunction = () =>{
        console.log(myValue +=2);
        console.log(x +=5);
    }

    return childFunction;
}
// const result = parentfunction();
// result();
// result();
// result();
// console.log(x);
// console.log(result);



// IIFE(Immediately Invoked Function Expression)
const privateCounter = (() => {
    let count = 0; 
    console.log(`initial count: ${count}`);
    return () => {
        count +=1;
        console.log(count);
    }
})();
// privateCounter();
// privateCounter();
// privateCounter();




// example 2

const credits = ((num )=>{
    let credits = num;
    console.log(`initial credits value: ${credits} `);
    return () => {
        credits -=1;
        if(credits >0 ) console.log(`playing game, ${credits} credits remaining`);
        if(credits<=0) console.log(`not enough credits`);
    }
})(3);

credits();
credits();
credits();


((name) =>{
    console.log(name);
})('vikram');
console.log(module);
