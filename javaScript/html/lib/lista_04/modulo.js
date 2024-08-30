
// NUMERO 09-------------------------------------------------------------------------------------------------------

function somaLista(lista){
     let total = 0;
     let N = lista.length;
 
     for(let i=0; i<N; i++) {
         total += lista[i];
     }
 return total;
 }

// NUMERO 10------------------------------------------------------------------------------------------------

function par(a){
 
    let numero = a.filter(value => value % 2 == 0);

    let total = 0;

   for(let i=0; i<numero.length; i++) {
        total += numero[i];
   }
   return total;
}

// NUMERO 11------------------------------------------------------------------------------------------------

// function media(media){
//      let total = 0;

//      let A = media.length;

//      for(let i=0; i<A; i++) {
//           total %= media[i];
//       }
//   return total;
//}



function media(a, b, c, d, e) { 
     let total = (a + b + c + d + e) / 5; 
 
     return total; 
   } 

// NUMERO 12-------------------------------------------------------------------------------------------------






const lib = 
{ somaLista,
 par,
 media 

}

module.exports = lib;