// var can be redeclared in the same scope
var nickname = 'qadri';
var nickname = 'muhammad';

console.log(nickname); // muhammad

// let and const can't be redeclared in the same scope
let age = 23;
let age = 24; // SyntaxError: Identifier 'age' has already been declared

const isMarried = true;
const isMarried = false; // SyntaxError: Identifier 'isMarried' has already been declared