// arrays 

// const myArr = [0,1,2,3,4,5]

// const myHero = ["IronMan", "Batman"]
// console.log(myHero[1]);

// const myArr2 = new Array(1,2,3,4)
// console.log(myArr2[1]);


// console.log(myArr[0]);
// console.log(myArr[3]);

// Arrays Methods 

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(7);
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3);

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3);
// console.log("C ", myArr);
// console.log(myn2);

// difference btw slice and splice : splice changes the original value keep that in mind



// ****************************** PART-2 ************************************

const marvel = ["thor", "Ironman", "Spiderman"];
const dc = ["superman", "batman", "flash"];

// marvel.push(dc);

// console.log(marvel);
// console.log(marvel[3][1]);

// const heroes = marvel.concat(dc);
// console.log(heroes);

// const heroes = [...marvel, ...dc];
// console.log(heroes);

// const another_array = [1,2,3,[4,5,6],7,[8,9,[2,1]]];
// const new_array = another_array.flat(Infinity);
// console.log(new_array);


// console.log(Array.isArray("Pranay"));
// console.log(Array.from("pranay"));
// console.log(Array.from({name: "pranay"})) //interesting


let score1 = 100
let score2 = 200 
let score3 = 300

console.log(Array.of(score1, score2, score3));







