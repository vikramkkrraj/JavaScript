// console.log('Map Method');

const fruits = ['apple', 'banana', 'orange','mango'];

// const mapArr = fruits.map((fruit, index, fruits)=>{
//     console.log(fruit);

// })

// console.log(mapArr);  //---> will give undefined bcoz nothing is returning
// Note : map method return an array 

// const maparr1 = fruits.map((fruit, index, fruits) => {
//     console.log(fruit);
//     return fruit.toLocaleUpperCase();
// })
// // // to get the ruturn arr
// console.log(maparr1);

// use of index(second para) 
// it is basically index of the return array
// const maparr2 = fruits.map((fruit, index, fruits)=>{
//     console.log(index+1, fruit);
//     return index+1;
// })

// console.log(maparr2);

// use of third para
// which is the array itself
// const maparr3 = fruits.map((fruit , index, fruits)=>{
//     console.log(fruit,index, fruits);
// })

// Ex :

const Num = [1,2,3,4,5];
// const mult2 = Num.map((el)=>el*2);
// console.log(mult2);

// Filter method
// console.log('---->Filter Method<-----');
// const filt = Num.filter((el,index,Num)=>{
//     // return el>3;
//     // return index >2;
//     // return Num  ;
// })
// console.log(filt);

// chaining 
const students = [ 
    {
        name :'vikram',
        age : 25,
    },
    {
        name : 'sunnykumar',
        age :17,
    },
    {
        name : 'Vikash',
        age : 25
    },
    {
        name : 'guddu',
        age : 16
    }
]

// const adultStudentsName = students.filter((student)=>{
//     return student.age >= 18;
// }).map((students)=>{
//     return students.name;
// }).filter((student)=>{
//     return student.includes('v');
// })
// console.log(adultStudentsName);  

// const arr = [1,2,3,4,5];
// console.log(arr.join(','));
// console.log(arr);
// console.log(arr.join('-'));
// console.log(arr.join('""'));

