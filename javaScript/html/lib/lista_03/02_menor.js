// 2. Encontre o menor de três números

function obtemMenor(a, b, c) {
let menor;

if(a < b) {
	menor = a;
} else {
    menor = b;
}
if (c < menor) {
	menor = c;
}
return menor;
}

console.log(obtemMenor(3, 7, 5));
console.log(obtemMenor(-1, -5, -3));
console.log(obtemMenor(8, 2, 10));