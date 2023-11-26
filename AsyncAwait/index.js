// function makeRequest(){
//     return 'hello';
// }

// async function makeRequest(){
//     // console.log('hello there!');
//     return 'hello';
// }

// console.log(makeRequest());
// NOTE : async function always return a promise with fullfiled already.




// To throw error in async funtion use throw method

// async function makeRequest(){
//     // throw 'error';   // only message;
//     // throw new Error('Error'); // error with which line 
//     // throw console.error('err');
// }
// makeRequest()



// using URL
// async function makeRequest(){
//     const url = 'https://dummyjson.com/users';
//     const response = fetch(url);
//     // console.log(response);
//     // response.then((response)=>{
//     //     console.log(response);
//     //     response.json();
//     // }).then((data)=>{console.log(data)});

//     response.then(res=>res.json()).then((data)=>{
//         console.log(data);
//     })
    
// }
// makeRequest();

// async function hello(){
//     const resp = fetch('https://dummyjson.com/users');
//     resp.then(res=>res.json()).then(data=>console.log(data));
// }
// hello();



// Using await fetch directly result of response or promise
// async function makeRequest(){
//     const url = 'https://dummyjson.com/users';
//     const response = await fetch(url);  // debugger and check callstack
//     console.log(response);              //debugger and check callstack
//     console.log('hi');
// }
// makeRequest();
// NOTE : line 55 wait for the response and it will show in callstack and disappared from the callstack and goes to the browser to wait till response comes and next line 57 will be execute and once response come it will again comes to line 48 the 49 will console the data. 
// ---> to see this use debuggers
//---- to see request and response call makeRequest() in console




// function add(){
//     return 1+1;
// }
// makeRequest();       
// console.log(add())

// NOTE: makeRequest() will call and wait for reponse till add() will execute and if response come then it will be executed. 







// async function makeRequest(){
//     const url = 'https://dummyjson.com/users';
//     const response = await fetch(url);  
//     console.log(response);
//     const data = await response.json();
//     console.log(data);
//     console.log(data.users);
// }
// makeRequest();

// OR

// async function makeRequest(){
//     const url = 'https://dummyjson.com/users';
//     const data = await (await fetch(url)).json();
//     console.log(data);
// }
// makeRequest();




// or

// async function makeAsyncRequest() {
//     const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
//     const response = await fetch(url)
//     const data = await response.json()
//     return data
//   }
  
//   makeAsyncRequest().then((data) => {
//       console.log(data);
//   })




// await is only use for the async function but, it you want to use ouside the async function
const url = 'https://6wrlmkp9u2.execute-api.us-east-1.amazonaws.com/?sleep=2000'
const response = await fetch(url)
const data = await response.json()
console.log(data);
// NOTE: you must need use type module in script link in html file.



// async function makeRequest(){
//     const url = 'https://dummyjson.com/users';
    // const response = fetch(url);
    // response.then(res=>res.json()).then(data=>console.log(data));
    // console.log('hello there!');

    // NOTE : console.log('hello there!') will be executed first then promise



    // const response = await fetch(url);
    // const data = await response.json();
    // console.log(data);
    // console.log("hello there!");

    // NOTE: console.log("hello there!") will wait till the promises don't fulfiled 


    // shortcut
    // const data = await(await fetch(url)).json();
    // console.log(data);
// }


// makeRequest();
