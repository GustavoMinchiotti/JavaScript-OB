// Crea los siguientes archivos JS:

// - factorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for

// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break

//* 10! = 1 * 2 * 3 … 8 * 9 * 10 = 3.628.800    ejemplo factorial   4! = 1 * 2 * 3 * 4 = 24 combinaciones posibles

// for (let i = 1; i <= 10; i++) {
//   //console.log(i);
//     let j = i
//     j = i * i
//     console.log(j);
// }

// let lista = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (let i = 0; i < lista.length ; i++) {
//     //const element = i[lista];
//     //console.log(i);
//      let j = lista[i]
//     console.log(lista[i] * j);
// }

//! resuelto por Ob no se me ocurrió hacerlo decreciente..

let factorial = 1;
for (let i = 10; i > 0; i--) {
  factorial *= i; /* It's the same as `factorial = factorial * i;` */
  // console.log(factorial);
}
console.log(factorial, "resultado for"); // Factorial de 10 = 3628800

//! en el caso de while lo adapté del ejercicio anterior
//? hice que sea decreciente corte en 0 y haga la multiplicación en cada vuelta del bucle

let j = 10;
let max = 0;
let facto2 = 1;
while (j > max) {
  //console.log("esto es j: ", j);
  // console.log((facto2 = facto2 * j));
  facto2 = facto2 * j;
  j--;
}
console.log(facto2, "resultado de while");

//! adapto el for para cortarlo con break

let facto3 = 1;
for (let i = 10; i > -10; i--) {
  facto3 *= i; /* It's the same as `factorial = factorial * i;` */
  //console.log(facto3, "resultado con break");

  if (i <= 1) {
    //* en esta condición digo: si es menor a 1 corta y sale del bucle. porque no quiero el resultado multiplicado de 0
    break;
  }
}
console.log(facto3, "resultado con break");

/* 
Este ejercicio me llevo bastante tiempo y no me daba cuenta 
de hacer decrecer los números para multiplicar luego de eso 
con los ejemplos de clase Si pude manejar los distintos tipos de bucles
*/