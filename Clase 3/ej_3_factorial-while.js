// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while
// ejemplo factorial   4! = 1 * 2 * 3 * 4 = 24 combinaciones posibles

let j = 10;
let max = 0;
let facto2 = 1;
while (j > max) {
  console.log("esto es j: ", j);
   //console.log((facto2 = facto2 * j));
  facto2 = facto2 * j
  j--;
}
console.log(facto2, "resultado de while");
