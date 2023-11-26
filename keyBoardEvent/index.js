// 3basically events 

const h1 = document.querySelector('h1');
const input = document.querySelector('input');

h1.addEventListener('keypress', (e)=>{
    console.log(e.key);
})

// input.addEventListener('keypress', (e)=>{
//     console.log(e); 
//     console.log(e.key);
//     console.log(e.code)
// })

// keypress event
// input.addEventListener('keypress', (e)=>{
   
//     console.log('value :', e.key ,'code :' ,e.code);
// })


// keyup event
// input.addEventListener('keyup', (e)=>{
   
//     console.log('value :', e.key ,'code :' ,e.code);
// })



// keydown
// input.addEventListener('keydown', (e)=>{
   
//     console.log('value :', e.key ,'code :' ,e.code);
// })


// window.addEventListener('keypress', (e)=>{
//     console.log('code ', e.code);
//     console.log('value ', e.key);
    
// })

window.addEventListener('keyup', (e)=>{
    console.log('code ', e.code);
    console.log('value ', e.key);
        
 })


window.addEventListener('keypress', (e)=>{
    console.log('code ', e.code);
     console.log('value ', e.key);
            
 })