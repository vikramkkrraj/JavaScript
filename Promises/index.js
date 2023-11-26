const btn_resolve = document.querySelector('#btn-res');
const btn_reject = document.querySelector('#btn-rej');
// console.log(btn_resolve);

// const promise = new Promise(()=>{}) // declaration of promise

const p = new Promise((resolve , reject) => {
    // resolve('promise resolved'); // console p

    btn_resolve.addEventListener('click', ()=>{
        resolve('Promise Resolved')
    })
    btn_reject.addEventListener('click', ()=>{
        reject('Promise Rejected')
    })
})

// p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// NOTE: 1 --> Promises either can be resovle or reject at once
//  2 --> Promises always return a promise
// 3 --> Promises alwaya wait in microtask queue where other function like setTimeOut, wait in callback stack. 
//  4 --> mircrotask queue have higher priority than callback stack.



// const p2 = p.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })

// p2.then((data)=>{
//     console.log(data)
// }).catch((err)=>{
//     console.log(err)
// });



// p.then((data) => {
//     console.log(data);
//     return 155
//   }).then((data) => {
//     console.log(data);
//     return 'vikram'
//   }).then((data) => {
//     console.log(data);
//   }).catch(err => {
//     console.log(err);
//   })



// to chech between setTimeOut and Promises 
//  const p3 = new Promise((res,rej)=>{
//     res('resolved while creating promises')
//  })
// setTimeout(()=>{
//     console.log('set time function is called');
// })

// p3.then((data)=>{
//     console.log(data);
// }).catch((err)=>{
//     console.log(err);
// })
// NOTE: resolve function will execute time even setTimeOut() function is at 0 time.
// bcoz promises have more priority 



// let check setTimeOut inside the resolve and globaly declared then what happens?

// const p4 = new Promise((res, rej)=>{
//     setTimeout(()=>{
//         res('inside the promise')
//     },1000)
// })
// p4.then((data)=>{
//     console.log(data);
// })

// setTimeout(()=>{
//     console.log('outside the promise');
// })

// CONCLUSION : if inside promises setTimeOut() will be wait if time is more then outside setTimeOut() function.