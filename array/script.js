console.log("Array in JavaScipt");

// const fruits = ["Apple", "Banana", "Graps", "Dates"];

// fruits[fruits.length]="Mango" ; //--> adding element at last index in java.
// console.log(fruits);


// delete fruits[1] //--> // deleting the element at index 1.
// console.log(fruits);


// fruits[3] = "Orange" // --> update/change the value of the element at 3 index.
// console.log(fruits);

// const fruitsCollection = [...fruits , undefined, null , true , NaN];
// console.log(fruitsCollection); 

// const fruits = ['Apple', 'Banana', { name: 'vikram', age: 25, place: { city: 'benglore', state: 'karnataka' } }]

// fruits[10] = "Papya";
// console.log(fruits);  //---> empty index will be empty only     


// **Adding elements in Array 
// const lengthOfArry = fruits.push("Papaya");  //---> Addint element the at last index and return length of Array.
// console.log(lengthOfArry);
// console.log(fruits);
// fruits.unshift("coconuts") //-->Adding element the at First index and return length of Array.
// console.log(fruits);


// fruits.pop() // --> Deleting element form the last index and return deleted Element.
// fruits.shift()  // --> Deleting element from the First Index and return Deleted Element.

    // ***Array Methods***
// concat() method
// const fruits = ["Apple", "Banana", "Graps", "Dates"];

// const vegitable =["tomato", "potato", "onion"];

// const evenNumber = [2,4,6,8,10];
// const oddNumber = [1,3,5];

// console.log(evenNumber.concat(oddNumber));
// console.log(evenNumber);
// console.log(oddNumber);

// const newarr =fruits.concat(vegitable);
// console.log(newarr);       

// const newarray = evenNumber.concat(oddNumber,fruits,vegitable);
// console.log(newarray);


// indexOf() method
// const fruits = ["Apple", "Banana", "Graps", "Dates"];
// console.log(fruits.indexOf("Apple")); // ---> indexOf() method is to find the index of the Elmnt
// console.log(fruits.indexOf('hello')); //--> if the element is not present, return -1.


// include() method
// const evenNumber = [2,4,6,8,10,12];
// console.log(evenNumber.includes(4)); //--> used to find the element present in array,return true or false


// reverse() method
// const fruits = ['Apple', 'Banan', 'Orange','Graps'];
// console.log(fruits.reverse()); // --> reverse the order of element of the array 


// sort() method
// const fruits = ['Apple', 'Banan', 'Orange','Graps' ,"Cat"];
// console.log(fruits.sort()); //--> Sorting by ASCII code 

// const evenNumber =[2,4,6,8,10,12,14,16,18,20,22,24,26,28,30];
// console.log(evenNumber.sort()); //o/p-->[10, 12, 14, 16, 18, 2, 20, 22, 24, 26, 28, 30, 4, 6, 8]  sort using frist latter.



// slice() method

// const evenNumber = [1,2,3,4,5,6,191,19,20];
// const newArr = evenNumber.slice(4,6);
// console.log(newArr); // --> return new array includes start and exclude end index 

// splice() method --> used to update and delete
const fruits = ['Apple', 'Banan', 'Orange','Graps'];
// const newArr = fruits.splice(1,1); //delete elem from array with spicified index and return deleted element 
// console.log(newArr);
// console.log(fruits);

// const newarr = fruits.splice(2,1,"Coconuts"); //--> updating element at spcific index.
// console.log(newarr);
// // console.log(fruits);

const newarr1 = fruits.splice(1,5,"Coconuts",'mango','vikram','kumar','raj');
console.log(newarr1);
console.log(fruits);

