//! Principales operaciones aritméticas

let a = 3.5;
let b = 4.8;

// Suma (+)
console.log(a + b);
// Resta (-)
console.log(a - b);
// Multiplicación (*)
console.log(a * b);
// División (/)
console.log(a / b);

//? Representación de los números en cadenas de texto
console.log(typeof a);
let a_s = a.toString(); //! Con el método toString lo convierto

console.log(a_s);
console.log(typeof a_s);

//? Redondeo de números decimales
let c = 3.3;
let d = c * 3;

console.log(d);
console.log(typeof d);

// .toFixed(x) - El parámetro me da la cantidad de decimales pero lo convierte a STRING
console.log(d.toFixed(4));
console.log(typeof d.toFixed(4));

let e = 1839.1232456789;
console.log(e.toFixed(2));

//* en este ejemplo le sumo decimales a un número que no los tiene 
let f = 2213556153215;
console.log(f.toFixed(2));

//? Redondear hacia arriba o abajo con Math.ceil() // Math.floor()

let g = 1.3
console.log(Math.ceil(g));

let h = 1.9
console.log(Math.floor(h));


//! .toPrecision(x) - Limita el número de cifras significativas
console.log(e.toPrecision(7));
console.log(f.toPrecision(7));

console.log(typeof f.toPrecision(3));