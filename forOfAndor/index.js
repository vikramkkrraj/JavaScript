// 'use strict';  //--> using this global will give error
console.log("for of and for in Loop");


// const fruits = ['apple', 'banana', 'mango','orange','graps'];

// for of loop
// used for iterable object  like array, string map....
// for(const fruit of fruits){
//     console.log(fruit);
// }

// for(global of fruits){
//     console.log(global)
// }
// for of loop can not be used in object

// const user = {
//     'firstname' : 'vikram',
//     'lastname' : 'kumar',
//     'age' : 25,
//     'job' : 'developer'
// }

// for(let key of user){
//     console.log(key);
// }  // --> will give error

// const name = 'vikram kumar';

// for(let letter of name){
//     console.log(letter);
// }

// for in 
// to get property and value of an object we use for in

const user = {
    'firstname' : 'vikram',
    'lastname' : 'kumar',
    'age' : 25,
    'job' : 'developer'
}

for(const key in user){
    console.log(key);
    console.log(key, ':', user[key]);
}

// NOTE : for in loop is more time consuming try to avoid
// alternative way to use 

const userkeys = Object.keys(user);
console.log(userkeys);
for(const userkey of userkeys){
    console.log(userkey);
}

const uservalue = Object.values(user);
console.log(uservalue);
for(let value of uservalue){
    console.log(value);
}

const userentries = Object.entries(user)
console.log(userentries);
for(let entries of userentries){
    console.log(entries);
}