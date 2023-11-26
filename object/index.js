console.log("Object");

// /section 1
// const user = {
//     FirstName: "Vikram",
//     MiddleName: "Kumar",
//     LastName: 'Raj',


//     Age: 25,
//     city: 'Bengalore',
//     education: 12,
// };

// const user2 = {
//     FirstName: "Vikram",
//     MiddleName: "Kumar",
//     LastName: 'Raj',
//     Age: 25,
//     city: 'Bengalore',
//     education: 12,
// };

// const check = user === user2;
// consol.log(check); // false because address are not same 

// section 1

// const myName = "vikram";
// const user = {
//     firstName :"Vikram",
//     'last-name' : "kumar",
//     vikram : 'Developer'
// }

// console.log(user.firstName); // ----> Dot Notation
// console.log(user["last-name"]); // ---> Bracket Notation

// console.log(user.myName);  // ---> undefined
// console.log(user['vikram']) //---->Developer Bracket Notation is very usefull
// console.log(user['first' + 'Name']) /// --> Vikram


// section 3
// const user = {
//     firstName: 'vikram',
//     lastName: 'kumar',
//     address: {
//         state: 'Bihar',
//         city: 'Nawad',
//         pincode: 805124
//     }
// }

// to add key : value in object
// user.age = 25;
// // user.is-student = true; // --> error
// user['is-student'] = true;

// console.log(user);

// let username = "hello   ";    



//****Section  4*/
const user ={
    userName : 'Vikram',
    Password : '123@password',
    company : 'Mazuna',
    mobile : 91991919,
}

let username ='bikram';

// Object.seal(user);  --> used to change the properties but can't add or delete

// Object.freeze(user); ===> used to freeze the Object can't change ,add and delete.

console.log(username in user);
// console.log('userName' in user);  ---> to check the property in object.

