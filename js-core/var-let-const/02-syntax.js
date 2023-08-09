// Same declaration with var
var nickname = "qadri";
var age;
var isMarried = true;

// It can be
var nickname = "qadri",
    age,
    isMarried = true;

// Or in one line
var nickname = "qadri", age, isMarried = true;

console.log(nickname, age, isMarried); // qadri undefined true

// Same declaration with let and const
let nickname = "qadri", age, isMarried = true;
const nickname = "qadri", age = 21, isMarried = true;