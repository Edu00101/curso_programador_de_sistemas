const fs = require('fs');

var input = fs.readFileSync('./input.txt', 'utf8'); //.toString();
var lines = input.split('\n');


let A = Number(lines[0]);
let B = Number(input[1]);

console.log(lines);
console.log(input);
