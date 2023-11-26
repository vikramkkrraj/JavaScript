function add(a,b=3){
    return a*b;
}
console.log(add(3));
console.log(add(2, null));
console.log(add(5,undefined));

function random(){
    return Math.floor(Math.random()*6) + 1;
}

function random(num=6){
    return Math.floor(Math.random()*num) + 1;
}