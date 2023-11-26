const nameElement = document.querySelector('.name-tag');

const nameinput = document.querySelector('.name');

nameElement.innerText = localStorage.myName;

// to update the localStorage value on input(this method is not recommended)
// nameinput.addEventListener('input', (e)=>{
//     // console.log(e.target.value);
//     localStorage.myName = e.target.value;
//     // nameElement.innerText =e.target.value;
//     nameElement.innerText = localStorage.myName;
// })




// Another method to update the localStorage varible (recommended)
// nameElement.innerText = localStorage.getItem('myName');

// nameinput.addEventListener('input', (e)=>{
//     localStorage.setItem('myName', e.target.value);
//     nameElement.innerText = localStorage.myName;
// })

// NOTE: do it on console
// localStorage.getItem('age') //--> null
// localStorage.age  // ---> undefined

const inputAge  = document.querySelector('.age');
const ageElement = document.querySelector('.age-tag');

// inputAge.addEventListener('input' , (e)=>{
//     localStorage.age = e.target.value;
//     ageElement.innerText = e.target.value;

// })

// ageElement.innerText = localStorage.getItem('age');
// inputAge.addEventListener('input', (e)=>{
//     localStorage.setItem('Age', e.target.value);
//     ageElement.innerText = localStorage.Age;
// })


// const myData = {
//     name: '',
//     age : '',
// }
// OR

const myData = JSON.parse(localStorage.getItem('myData')) || {};
 if(myData.name){
     nameElement.innerText = myData.name;
 } 

if (myData.age) {
    ageElement.innerText = myData.age; 
}

nameinput.addEventListener('input',(e)=>{
    myData.name = e.target.value;
    localStorage.setItem('myData', 
    JSON.stringify(myData))
    nameElement.innerText = e.target.value;

})

inputAge.addEventListener('input', (e)=>{
    myData.age = e.target.value;
    localStorage.setItem('myData', JSON.stringify(myData))
    ageElement.innerText =e.target.value;
})

// NOTE : console
//JSON.parse(localStorage.getItem('myData'))  // --> to convert json into object.
//  JSON.stringify(myData)  //--> to convert object into json/string 