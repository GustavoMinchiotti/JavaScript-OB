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