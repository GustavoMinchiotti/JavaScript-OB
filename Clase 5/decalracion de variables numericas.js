// 05 Numbers
// Declaración de variables numéricas (enteros y decimales)

let a = 5;

console.log(a);

let b = 0.1;

console.log(b);

// Precision
//?  Javascript no está hecho para ser preciso por ejemplo 
//? (0.1 + 0.3) da 0.30000000000004 lo cual es impreciso y tiene 
//? que ver con como almacena los bits en memoria.

let c = 0.2;

console.log(b + c);

//! Pequeño truco para obtener valores "reales"
console.log(Math.round((0.1 + 0.2) * 100)/100);