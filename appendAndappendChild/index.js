const h1=document.querySelector('h1');
const container = document.querySelector('.container');
const card = document.querySelector('.card');

// to cut and paste into container.
// container.appendChild(h1);

// to copy and paste any element.
// container.appendChild(h1.cloneNode(true));


// to clone the card into container
// container.appendChild(card.cloneNode(true)) 
// container.appendChild(card.cloneNode())

// for(let i =2 ; i<=100; i++){
// container.appendChild(card.cloneNode(true)).innerText = i;
// container.appendChild(card.cloneNode(true)) 
// }


// console.log(typeof  (container.appendChild(card.cloneNode(true)) ) )

// or 
//  const newcard = card.cloneNode();

//  for(let i=0; i<=100; i++){
//    let newcard = card.cloneNode()
//    newcard.innerText = i;
//    container.appendChild(newcard);
//  }

// NOTE: we can not append string in appendChild()
// to append string we can do a method/way

// const newTextNode = document.createTextNode("hello world");
// container.appendChild(newTextNode);


// Now, use for append()
// append is similar functionality as appendChild()  but with more flexibility

// 1. using append() we can directly append String
// container.append('hello world');

// 2. using append() we append mutliple thing 
container.append('hello', h1, 'world');

// 3. using append() String can be append and does not return anything where appendChild does have return value



// NOTE: cloneNode()without true and with true and 

// container.cloneNode(true) // -- to copy and paste
// container.cloneNode()  //--- to create new container 