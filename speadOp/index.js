const arr1 = [1,2,3,4];
const arr2 = [5,6,7,8,9,10];

const  name ='vikram';
const joinarr = [...arr1,...arr2,...name];
console.log(joinarr);


const user = {
    name :'vikram',
    age : 25,
};

const updateduser = {...user, city:'benglore'}; // failed DNK

console.log(updateduser);

function add(){
    console.log(arguments);
    let sum =0;
    for(let i =0 ; i< arguments.length; i++){
        sum = sum + arguments[i];
    }
    return sum;
}
console.log(add(1,2,3,4));
console.log(add(...arr1));
console.log(add(...arr2));
console.log(add(...arr1,...arr2));

// NOTE : can not spead the object i.e
// console.log(add(...user)); // bcoz not itratable 

// console.log(add(...name));  // op -> 0vikram

