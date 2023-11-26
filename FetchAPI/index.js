// fetch('https://dummyjson.com/users')
// .then((res)=>{
//     // console.log(res)
//     // console.log(res.json())
//     res.json().then((data)=>{
//         console.log(data);
//     })
// })

// OR

// fetch('https://dummyjson.com/products')
//   .then((res) => res.json())
//   .then((data) => console.log(data))
//   .catch((err) => {
//     console.log(err);
//   })

//  for POST request
// fetch('https://dummyjsons.com/products/add', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
//     title: 'BMW Pencil',
//     category: 'Stationary'
//     /* other product data */
//   })
// })
// .then(res => res.json())
// .then(console.log)
// .catch((err) => {
//   console.log(err);
// })