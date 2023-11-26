const btn = document.createElement('button');
const btn2= document.createElement('button');

addEventListener('load', ()=>{
    document.body.appendChild(btn);
    btn.classList.toggle('btn');
    btn.innerText = 'dark';

    document.body.appendChild(btn2);
    btn2.classList.add('btn2');
    btn2.innerText = 'light';
})

btn.addEventListener('click', ()=>{
    document.body.classList.toggle('btn');
//    var el= document.body.style.backgroundColor = 'black'
})
btn2.addEventListener('click', ()=>{
    document.body.style.backgroundColor = 'white';
})

