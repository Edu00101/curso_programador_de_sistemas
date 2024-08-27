// 08_Determine o valor de uma nota utilizando o sistema alfabético (A-F) à partir da
// porcentagem de aproveitamento de um aluno (0 a 100%), conforme ilustrado na tabela
// abaixo:
// ____________________________________



function notaAlfabetica(nota){
    let alfa;
    
    if(nota >= 90) return "A";
    if(nota >= 80) return "B";
     if(nota >= 90) return "C";
    if(nota >= 80) return "D";
        
   return "F";
}
console.log(notaAlfabetica(90));
console.log(notaAlfabetica(75));
console.log(notaAlfabetica(60));
console.log(notaAlfabetica(0));
console.log(notaAlfabetica(59));
console.log(notaAlfabetica(89));
console.log(notaAlfabetica(69));
console.log(notaAlfabetica(79));
console.log(notaAlfabetica(99));