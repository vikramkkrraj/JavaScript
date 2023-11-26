const green = document.querySelector('.green');
const pink = document.querySelector('.pink');
const blue = document.querySelector('.blue');


// document.body.addEventListener('click', (e)=>{
//     console.log('body event Listerner');
// })
// green.addEventListener('click', (e)=>{
//     console.log('green event Listerner');
// })
// pink.addEventListener('click', (e)=>{
//     console.log('pink event Listerner');
// })
// blue.addEventListener('click', (e)=>{
//     console.log('blue event Listerner');
// })
// NOTE : when green div is click ,event occurs but when pink and blue div is click then also green div's event only occurs. this is know as Event Bubbling





// stopPropagation
// document.body.addEventListener('click', (e)=>{
//     console.log('body event Listerner');
// })
// green.addEventListener('click', (e)=>{
//     console.log('green event Listerner');
// })
// pink.addEventListener('click', (e)=>{
//     console.log('pink event Listerner');
// })
// blue.addEventListener('click', (e)=>{
//     e.stopPropagation();
//     console.log('blue event Listerner');
// })


// capturing(use 3rd argument as true in addEventListner)
// document.body.addEventListener('click', (e)=>{
//     console.log('body event Listerner');
// },{capture:true})
// green.addEventListener('click', (e)=>{
//     console.log('green event Listerner');
// },{capture:true})
// pink.addEventListener('click', (e)=>{
//     console.log('pink event Listerner');
// },{capture:true})
// blue.addEventListener('click', (e)=>{
//     console.log('blue event Listerner');
// },{capture:true})



// once:true to click only one time
blue.addEventListener('click', (e)=>{
    e.stopPropagation();
    console.log('blue event Listerner');
},{once:true})