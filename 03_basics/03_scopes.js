//scopes

// simple basic code for output 
// let a = 10
// const b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);




//{} // scopes-> functions or if-else not for objects


 //if I run code outside it will be global scope
if (true){ // block scope
    let a = 10;
    const b = 20;
    var c = 30;
}
//console.log(a); //undefined
//console.log(b); // undefined 
//console.log(c); // 30
