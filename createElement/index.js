const h1 = document.querySelector('h1');
const container = document.querySelector('.container');
const para = document.createElement('p');

para.innerText = 'hello there!';
para.classList.add('para-class');
para.id = 'para-id';

container.append(para);

const div = document.createElement('div');
div.classList.add('div-class');

container.append(div);


// create image element
// const img = document.createElement('img');
// img.alt='Image'
// img.src = 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym9va3xlbnwwfHwwfHw%3D&w=1000&q=80';

// div.append(img);


// Another way to create more img elements using loop


for(let i=1; i<=10; i++){
    const img1 = document.createElement('img');
    img1.src=`http://hello${i}.png`
    img1.alt =i;
    let p = document.createElement('p');
    p.innerText = `image${i}`;
    container.append(img1,p);
}



// To delete the Element 
const imgdelete  = document.querySelector("body > div > img:nth-child(14)");
imgdelete.remove();
