// var and let can be reassigned
var nickname = "qadri";
let age = 23;
nickname = "muhammad";
age = 24;

console.log(nickname, age); // muhammad 24

// const can't be reassigned
const isMarried = true;
isMarried = false; // TypeError: Assignment to constant variable.