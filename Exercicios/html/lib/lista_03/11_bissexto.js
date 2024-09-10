function bissexto(ano){
    
    let Q = ano % 4 === 0;
    let C = ano % 100 == 0;
    let M = ano % 1000 == 0;
    
    return M || (Q && !C);
}
console.log(bissexto(2020));
console.log(bissexto(2024));
console.log(bissexto(1999));
console.log(bissexto(2014));
console.log(bissexto(2025));
console.log(bissexto(1900));
console.log(bissexto(2000));
console.log(bissexto(2100));
