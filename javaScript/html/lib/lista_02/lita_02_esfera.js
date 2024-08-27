function esfera(raio) { 
     let    volume = 4*3.14159*(raio**3)/3;


 let  numero = volume.toFixed(4); 
        return numero; 
      } 
 
      console.log(esfera(3)); 
      console.log(esfera(5));
      console.log(esfera(1.5)); 