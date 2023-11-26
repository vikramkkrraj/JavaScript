const colors = ['red', 'green', 'blue', 'yello','pink'];

// const colori0=colors[0];
// const colori1=colors[1];
// const colori2=colors[2];

const [colori0, colori1,colori2] = colors;
console.log(colori0);
console.log(colori1);
console.log(colori2);

// if want to access or assign direct any perticular index
const [,,,,colori4] = colors;
console.log(colori4);

const {2:colorind2} = colors;





const user = {
    name : 'vikrma',
    age : 25,
    address : {
        city : 'bangalore',
        state : 'karnataka'
    }
}

// const name = user.name;
// const age = user.age;

// const {name ,age } = user;

// const {name : username , age} =user;
// NOTE: name is window variable which will give '' 

// const {address: {city}} = user;
// can do this with diff.way

// const {address} = user;
// const {city} = address;


function info(info){
    console.log(info);
}
info(user); 

function info1({name , age}){
    console.log(age, name);
}
info1(user);