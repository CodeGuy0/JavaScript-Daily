// singleton explained

// object declared by two ways : literals and constructions 

// object literals

// Object.create // constructor method
// const JsUser = {} //object

const JsUser = {
    name: "Pranay",
    age: 21,
    location : "Jaipur",
    email: "pranay@google.com",
    isLoggedIn: true
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);

// JsUser.email = "pranay@xyz.com"
// Object.freeze(JsUser);
// JsUser.email = "pranay@facebook.com"
// console.log(JsUser.email);
// console.log(JsUser);

// JsUser.greeting = function(){
//     console.log("Hello Js user");
// };

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

// console.log(JsUser.greeeting); // undefiened 
// console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());



