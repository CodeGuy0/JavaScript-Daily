// Stack (Primitive) and Heap (Non-Primitive)

let myname = "Pranay"

let anothername = myname

anothername = "codeguy"

console.log(myname);
console.log(anothername);


let userOne = {
    email: "pranay@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "codeguy@google.com"

console.log(userOne.email);
console.log(userTwo.email);

