function superSplit(texto, separador){
    return texto.split(separador);
    
}
console.log(superSplit("O rato roeu a roupa do rei de Roma", " "));

console.log(superSplit("João,Maria,José", ","));

console.log(superSplit("user1@gmail.com;user2@yahoo.com;user3@outlook.com", ";"));

console.log(superSplit("Nome -- Sobrenome -- Idade -- País" , " -- "));

console.log(superSplit("/usr/local/bin", "/"));

console.log(superSplit("JavaScript", ""));

console.log(superSplit("O sol está brilhando. O céu está azul. É um ótimo dia!",". "));

console.log(superSplit("15/08/2024", "/"));

console.log(superSplit("14:35:20", ":"));

console.log(superSplit("Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit,\nsed doeiusmod tempor incididunt ut labore.", "\n"));

console.log(superSplit("Linha única sem quebras", " "));

console.log(superSplit("Primeira linha de um texto. Segunda linha usando template strings. Terceira linha com mais detalhes.", ". "));

console.log(superSplit("Lorem ipsum dolor sit amet. consectetur adipiscing elit. Ut enim adminim veniam.", ". "));

console.log(superSplit("Texto com linhas múltiplas e uso de templates strings paraseparação.", ". "));

// =========================================================================================================================================================
    //  !função!

// String.prototype.split()
    
//     const myString = "";
// const splits = myString.split();

// console.log(splits);
