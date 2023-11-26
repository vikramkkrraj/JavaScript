console.log("returning function with closures");


let a = 4;
let b = 6;

function add() {
    console.log(a + b);
}

add();
console.log(add);
console.dir(add);

// closuresfun
let a1 = 4;
let b1 = 6;

function parent() {
    function add1() {
        console.log(a + b);
    }
    return add1;
}

const add2 = parent();
console.dir(add2);



// funtions

function outer() {
    function inner() {
        function sum() {
            console.log(a + b);
        }
        return sum;
    }
    return inner();
}
const sum1 = outer();
console.log(sum1);
console.dir(sum1);
const sum2 = sum1();
// console.log(sum2);


// returning funtion
function outer1() {
    return function () {
        return function () {
            return a + b;
        }
    }
}
const addition = outer1();
console.dir(addition);
const addition1 = addition();

