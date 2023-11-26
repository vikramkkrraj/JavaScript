const input = document.querySelector('#username');
const heading = document.querySelector('h1');

const para = document.querySelector('p');

// heading.addEventListener('click', ()=>{
//     console.log('heading clicked ');
// })

// input.addEventListener('click',()=>{
//     console.log('hello'); 
// })

// input.addEventListener('input', ()=>{
//     console.log('input event fired');
// })


// input.addEventListener('input', (e)=>{
//     // console.log(e);
//     // console.log(e.target.value);
//     // console.log(e.data);
// })



// input.addEventListener('input', (e)=>{
//     para.innerText = e.target.value;
// })



// if any change in input
// input.addEventListener('change', (e)=>{

//     console.log(e.target.value);
// })




// when we click outside input it occurs
// input.addEventListener('blur', (e)=>{
    //    console.log(e);
//     console.log(e.target.value);
//     para.innerText = e.target.value;
// })




// when we clikc inside input it occurs
// input.addEventListener('focus', (e)=>{
//     console.log(e);
//     console.log(e.target.value);
//     para.innerText=e.target.value;
// })

const form = document.querySelector('form');

// form.addEventListener('click', ()=>{
//     console.log('clicked form');
// })


// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     // console.log(e);  //--> to check properties of event
//     console.log('clicked form');
// })



// formData()
// form.addEventListener('submit', (e)=>{
//     e.preventDefault();
//     const myFormData = new FormData(form);
//     console.log(myFormData);

//     console.log(myFormData.entries());

//     for(const data of myFormData.entries()){
//         console.log(data); 
//     }
// })



// to target which element is clicked
// form.addEventListener('click', (e)=>{
//     e.preventDefault();
    // console.log(e.target);
    // console.log(e.currentTarget);
// })

