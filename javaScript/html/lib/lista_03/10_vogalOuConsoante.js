function vogalOuConsoante(L){
    if(L == "a" || L == "e" || L == "i" || L == "o" || L == "u")
    return "vogal";
    return "consoante";
}

console.log(vogalOuConsoante("a"));
console.log(vogalOuConsoante("b"));
console.log(vogalOuConsoante("e"));
console.log(vogalOuConsoante("x"));
console.log(vogalOuConsoante("y"));
