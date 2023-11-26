// try {
//     console.log(a);
// } catch (error) {
//     console.log(error);

//     // here error is an object to see as object 
//     console.dir(error);
//     console.log(error.message); 
//     // NOTE: ReferenceTry error
// }

// console.log('hello');

// NOTE: if any error come catch will handle that error as block and even error occurs 
// it will not stop the execute to remaing code. so it is efficience and mostly used for the 
// async function 

// try {
    
// } catch (error) {
    
// }finally{
//     console.log('finally block');  // finally executes even after the error come
// }





// useof try block inside async function.

// async function makeRequest(){
//     try {
//         const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000';
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         // console.dir(error.message);
//         console.log(error);
//     }
// }
// makeRequest();






// TypeError and RefernceError
const user = {
    name : 'vikram',
    age : 25,
}

try {
    // console.log(user.addres.city); // typeError: like something is not exits which you have type
    console.log(a);   //ReferenceError : undefined
} catch (error) {
    console.log(error);
}