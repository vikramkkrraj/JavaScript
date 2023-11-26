// const user = {
//     "userId": 1,
//     "id": 1,
//     "title": "delectus aut autem",
//     "completed": false
// }



// GET Method
// let userData ;
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => {
//         console.log('got the data');
//         console.log(json)
//         userData = json;
//     })


// POST Method
// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));



const img = document.querySelector('img');
const btn = document.querySelector('.btn');
const btn1 = document.querySelector('#btn1');


// one way to change the image using reload method
// fetch('https://dog.ceo/api/breeds/image/random')
//   .then((response) => response.json())
//   .then((json) => {
//     console.log('got response');
//     console.log(json.message);
//     img.src = json.message;
// });

// function reload(){
//     window.location.reload();
// }

// btn.addEventListener('click', reload);  


// another way to change the picture(recommended)
btn1.addEventListener('click', ()=>{
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((json) => {
    img.src = json.message;
});
})
