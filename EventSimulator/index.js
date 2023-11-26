
const card = document.querySelector('.card')
const container = document.querySelector('.container');

let count =1;
card.addEventListener('click', ()=>{
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.innerText = count++;
    container.append(newCard);
    console.log(newCard);  
})

// to create card using loop
// for (let i = 0; i < 100; i++) {
//     card.click(); 
// }

// using setInterval()
//  const id =setInterval(()=>{
//     if(count==100){
//         clearInterval(id);
//     }
//     card.click()
// },100) 


// input 
// const input = document.createElement('input');
// document.body.append(input);
// input.id = 'input';
// const inputId = document.querySelector('#input');
// inputId.focus();




// const input = document.querySelector('input');
// input.focus();
