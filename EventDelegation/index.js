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

container.addEventListener('click', (e)=>{
    // to prevent click on container and removable of cards
    if(e.target != container){  
        e.target.remove()
    }
})

// NOTE : avoid use of addEventListener to each card , use addEventListener on container to not put more loan on app or webside.  knows as EVENT DELEGATION.
