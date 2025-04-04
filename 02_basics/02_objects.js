// singleton explained

// object declared by two ways : literals and constructions 

// object literals

// Object.create // constructor method
// const JsUser = {} //object

// const JsUser = {
//     name: "Pranay",
//     age: 21,
//     location : "Jaipur",
//     email: "pranay@google.com",
//     isLoggedIn: true
// }

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

// JsUser.greetingTwo = function(){
//     console.log(`Hello JS user, ${this.name}`);
// }

// console.log(JsUser.greeeting); // undefiened 
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());


// ****************************** PART - 2 ******************************

// const tinderuser = new object ()

// const tinderUser = {}

// tinderUser.id = "123abc";
// tinderUser.name = "Pranay";
// tinderUser.isLoggedIn = false

// console.log(tinderUser);

// const regularUser = {
//     email: "pranay@gmail.com",
//     fullname: {
//         userfullname : {
//             firstname: "pranay",
//             lastname : "jha"
//         }
      
//     }
// }

// console.log(regularUser);
// console.log(regularUser.email);
// console.log(regularUser.firstname);
// console.log(regularUser.userfullname);
// console.log(regularUser.fullname.firstname);
// console.log(regularUser.fullname.userfullname.firstname);

// const obj1 = {1: "a", 2: "b"};
// const obj2 = {3: "c", 4: "d"};

// const obj3 = { obj1, obj2 }

// const obj3 = Object.assign({}, obj1, obj2);

// const obj3 = {...obj1, ...obj2};
// console.log(obj3);

// please read about object's property....like keys, values, entries etc.


// ********************* PART - 3 ****************************************

const course = {
    courseName: "JS in Hindi",
    price: "99",
    courseInstructor: "pranay"
}

// course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);

// const {courseName} = course;
// console.log(courseName);

const {courseInstructor : Teacher} = course;
console.log(Teacher);








