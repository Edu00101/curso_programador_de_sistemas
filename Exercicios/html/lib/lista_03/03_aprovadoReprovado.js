// 3. Classifique um aluno como "Aprovado" ou "Reprovado" de acordo com sua média:


function aprovadoOuReprovado(media) {
	if(media >= 7) return "Aprovado";

	return "Reprovado";
}


console.log(aprovadoOuReprovado(10));
console.log(aprovadoOuReprovado(7.0));
console.log(aprovadoOuReprovado(6.95));
console.log(aprovadoOuReprovado(8.8));
console.log(aprovadoOuReprovado(0));
console.log(aprovadoOuReprovado(2.725))