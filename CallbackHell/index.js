const btn = document.querySelector('button');
// const xhr = new XMLHttpRequest();

// xhr.responseType='json';

// xhr.addEventListener('load', ()=>{
//     console.log(xhr.response.users);
// })

// xhr.open('GET', 'https://dummyjson.com/users');

// xhr.send();



// to fetch the different type of users activity, need to include in a function.
// function HttpRequest(method, url){
//     const xhr = new XMLHttpRequest();
//     xhr.responseType = 'json';
//     xhr.addEventListener('load', ()=>{
//         console.log(xhr.response);
//     })
//     xhr.open(method, url);
//     xhr.send();
// }

// // call HttpRequest() function and pass the method and URL.
// HttpRequest('GET', 'https://dummyjson.com/users');






// use a callback function inside the HttpRequest() Request.
function makeHttpRequest(method, url,callback){
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.addEventListener('load', ()=>{
            // console.log(xhr.response);  // instead console use callback function and pass the xhr response

            // NOTE : in last method we the passing method and url while calling HttpRequest() , 
            // Here we are passing data(as object) using callback function to HttpRequest() function
            callback(xhr.response);
        })
        xhr.open(method, url);
        xhr.send();
}


makeHttpRequest('GET', 'https://dummyjson.com/users', (usersData) => {
  makeHttpRequest('GET', `https://dummyjson.com/posts/user/${usersData.users[0].id}`, (postsData) => {
    makeHttpRequest('GET', `https://dummyjson.com/comments/post/${postsData.posts[0].id}`, (commentsData) => {
      makeHttpRequest('GET', `https://dummyjson.com/users/${commentsData.comments[0].user.id}`, (userData) => {
        console.log(userData);
      });
    });
  });
})

// NOTE : here each function wait until get response(bcoz synchonous or single thread JS Engine) known as callback hell , to overcome this problem we shifted to fetch API (using promises). 
