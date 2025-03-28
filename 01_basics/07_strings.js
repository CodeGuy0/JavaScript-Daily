// strings

// const name = "Pranay"
// const repoCount = 22

// console.log(name + repoCount + " Value"); // outdated syntax

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('codeguy');

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(5));
console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4);
console.log(anotherString);

const newStringOne = "    codeguy   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://codeguy.com/code%0guy"
console.log(url.replace('%0', '-'));
console.log(url.includes('code'));





