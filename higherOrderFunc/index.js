console.log("Higher order function");

function a(b){  // a is higher Order function and b is call back function
    console.dir(b);
    b();     

}
// a('hiii');
// a({username: 'vikram', age :25});
// a([1,2,3,5,6])

// // console.log(typeof(a)); instead use dir

// console.dir(a);

// a.job = 'developer';


function sayHi(){
    console.log('I_am_sayHi_Function');
}
a(sayHi);

a(function() {
    console.log('Hi_I_am_anonymous_Function');
})
