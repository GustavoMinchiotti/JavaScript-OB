// Crea un archivo llamado fechas.js que contenga las siguientes líneas
// - La fecha de hoy
// - La fecha de tu nacimiento
// - Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento
// - Una variable que contenga el día de tu nacimiento
// - Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)
// - Una variable que contenga el año de tu nacimiento (con 4 dígitos)


//* La fecha de hoy

const hoy = new Date();
console.log(hoy);

//* Nacimiento
const miNacimiento = new Date(1979,04,30,01,10,00);
console.log(miNacimiento);

//* mayor y menor 
let mayor = hoy > miNacimiento;
console.log(mayor);

//* dia nacimiento
let dia = miNacimiento.getDate();
console.log(dia);

//* mes nacimiento
let mes = miNacimiento.getMonth();
console.log(mes + 1);

//* año nacimiento
let año = miNacimiento.getFullYear();
console.log(año);