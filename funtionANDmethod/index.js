console.log("Difference between function and method");

// every method are function but every functions are not methods
// method are which used to defined into a object and return something

const maths = {
    pi : 3.14,

    // this is a way to use function inside object which is known as method.
    sum : function(a,b){
        return a+b;
    },

    // this is another way to use the function as propetry and known as method.
    sqaur(num){
        return num*num;
    },
    cube(num){
        return num**3;
    },

    // if we use console.log() to calculate inside any methods
    // while calling time i.e
    // const sum = maths.sum(1,3) + 4 // --> will give undefined
    // console.log(sum)  // ---> will give NaN
    // hence , always use return in methods
    
}

// How to call methods

const sum = maths.sum(1,3) +4;
console.log(sum);

const sqaur = maths.sqaur(4);
console.log(sqaur);

console.log(maths.cube(3));
