// var can be used before declaration
console.log(nickname, age, isMarried); // undefined undefined undefined
var nickname = "qadri";
var age;
var isMarried = true;

// The above code is equivalent to:
var nickname, age, isMarried;
console.log(nickname, age, isMarried); // undefined undefined undefined
nickname = "qadri";
age = 23;
isMarried = true;

// let and const can't be used before declaration
console.log(nickname, age, isMarried); // ReferenceError: Cannot access 'nickname' before initialization
let nickname = "qadri";
let age;
const isMarried = true;