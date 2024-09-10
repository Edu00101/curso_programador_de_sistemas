function divisao(a, b, resto) { 
        resto = a % b;
        let total = (a - resto) / b; 

 
        return total; 
      } 
 
      console.log(divisao(10, 3)); 
      console.log(divisao(9, 3)); 
      console.log(divisao(9, 2));
      console.log(divisao(7, 5));
      console.log(divisao(0, 5));