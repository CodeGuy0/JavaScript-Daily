// funtions 

function sayMyName(){
    console.log("P");
    console.log("R");
    console.log("A");
    console.log("N");
    console.log("A");
    console.log("Y");
}

// sayMyName ---> reference
// sayMyName(); ----> Execution

// function addition(){
//     let a = 2;
//     let b = 2;
//     let c = a + b;
//     console.log(c);
// }

// addition();

// function addition(num1, num2){ //parameters 
//     console.log(num1 + num2);

// }

// addition(2,2) //arguments
// const result = addition(2,2)

// console.log("Result : ", result); // undefined

// function addition(num1, num2){
//     let result = num1 + num2;
//     console.log("pranay"); // it will be print bcause it is above return
//     return result;
//     console.log("pranay"); // it will not print because it is below return
// }

// const result = addition(2,2);
// console.log("Result: ", result); // Result: 4


function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage("pranay"))
console.log(loginUserMessage());
