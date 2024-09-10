function parImpar(a) {
	let resposta;        // "Par" ou "Impar"
	let resto = a % 2;

    if(resto == 1){
          resposta = "Ímpar";
    } else {
    	resposta = "Par";
    }
	return resposta;
}

console.log(parImpar(4));
console.log(parImpar(7));
console.log(parImpar(0));
console.log(parImpar(5));