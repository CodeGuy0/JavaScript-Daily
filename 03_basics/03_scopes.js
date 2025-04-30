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
// if (true){ // block scope
//     let a = 10;
//     const b = 20;
//     var c = 30;
// }
//console.log(a); //undefined
//console.log(b); // undefined 
//console.log(c); // 30

// example 1 : 
// function one () {
//     const username = "pranay"

//     function two(){
//         const website = "Youtube"
//         console.log(username);
//     }
//     // console.log(website);

//     two()
// }

// one()
// // two()



// example 2:

// if (true) {
//     const username = "pranay"
//     if (username === "pranay") {
//         const website = " youtube"
//         console.log(username + website); // it will access....

//     }
//     // console.log(website); // it will not access 
// }

// console.log(username); // it will also not access 

// NOTE : it will all about closure 


// *************************** INTERESTING *********************************

function addone(num){  // it is called function
    return num + 1
}

addone(5)


const addTwo = function(num){  // it is also  called function but sometimes it is called expression
    return num + 2
}

addTwo(5)




