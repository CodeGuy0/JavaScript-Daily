// dates 

// let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

let myCreatedDate = new Date("28-03-2025")
// console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());


let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

//  `${newDate.getDay()} and the time `

newDate.toLocaleString('dafault', {
    weekday: "long",
    
})


