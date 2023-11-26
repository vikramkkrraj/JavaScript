// function sayHi(){
//     console.log('Say Hi');
// }
// 3 methods to use the Even listener

const heading = document.querySelector('h1');
// heading.onclick = sayHi;

function sayHi(){
        console.log('Say Hi');
    }


// using addEventListner() method

heading.addEventListener('click', sayHi);
heading.addEventListener('click', ()=>{
    console.log('arrow function clicked')
});

// NOTE : can use more than one event but in other two method can not use two event at same time.


const card = document.querySelector('.card')
const container = document.querySelector('.container');

// card.addEventListener('click', ()=>{
//     console.log('card clicked');    
// })
let count= 1;
// card.addEventListener('click', ()=>{
//     const newCard = document.createElement('div');
//     newCard.classList.add('card');
//     newCard.innerText = count++;
//     container.append(newCard);
//     console.log(newCard);  
// })


// using cloneNode() method
card.addEventListener('click', ()=>{
    const newCard = card.cloneNode();
    newCard.classList.remove('add-card');
    newCard.innerText = count++;
    container.append(newCard);
    console.log(newCard);  
})

// for(let i=0 ;i<100; i++){
    
// }