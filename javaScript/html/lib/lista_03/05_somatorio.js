function somatorio(N){
    let total = 0;
    for(let i=1; i <= N; total += i++);                          
    return total;
}
console.log(somatorio(5));
console.log(somatorio(10));
console.log(somatorio(1));
console.log(somatorio(64));