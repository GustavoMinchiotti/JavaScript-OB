//! Cómo podemos comparar listas
//? .every()      Esta función va a chequear si todos los valores del array pasan una condición.

const array = [4, 6, 7, 8, 3, 6, 2, 1, -4, -7, 12, 5, -40];

// const resultado = array.every(valor => {     //* esta callback me retorna true si son todos números positivos.
//     if (valor > 0) {
//         return true
//     } else {
//         return false
//     }
// })
const resultado = array.every((valor) => valor > 0);    //* retorna true si son todos números positivos. MAS SINTÁCTICO

console.log(resultado);

///!Comparación de listas

const ar1 = [1, 2, 3, 4];
const ar2 = [1, 2, 3, 4];

console.log(ar1 === ar2); //* las listas NO se pueden comparar de esta manera

const compararArrays = (array_1, array_2) => {
  if (array_1.length !== array_2.length) return false;  //comparar largo 
  const res = array_1.every((valor, i) => valor === array_2[i]);    // De esta manera compara el valor en el mismo índice de cada array. 
  return res;
};

console.log(compararArrays(ar1, ar2));

const ar3 = [1, 2, 3, 9];

console.log(compararArrays(ar1, ar3));
