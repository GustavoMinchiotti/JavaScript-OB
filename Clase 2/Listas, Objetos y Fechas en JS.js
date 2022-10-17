//? Listas o array

const lista = [1, "hola", true, undefined, null]; //forma convencional de declararla

const lista2 = new Array(1, 5, "casa");

const lista3 = new Array(4); //la lista sera una constante pero se puede modificar su contenido.
lista3[2] = "indice 2";

const lista4 = [lista, lista2, lista3];

console.log(lista);
console.log(lista2);
console.log(lista3);
console.log("lista4: " + lista4);

// "listas": "node Listas, Objetos y Fechas en JS.js",      con esto había agregado el archivo al .json y no funcionó.

//? Objetos
// creo el objeto celular con estos atributos.
const celular = {
  altura: 14,
  ancho: 7,
  marca: "Lg",
  isWite: false,
  contactos: ["Luis", "Martin", "Raúl"], // defino un array dentro     *importante no olvidar las ""
  sim: {
    //*un objeto dentro del objeto
    marca: "Kingston",
    gigas: 32,
  },
};
// Agrego un atributo desde fuera del objeto
celular.hechoEn=2020;

// Modifico un atributo
celular.marca = "Samsung";

// para acceder a algún atributo:
// objeto + . + atributo
console.log(celular.contactos);
console.log(celular.sim);
console.log(celular.hechoEn);
console.log(celular.marca);

//? Fechas
// Según el profesor son difíciles de trabajar conviene usar librerías como: Momento.js

const ahora= new Date(); //Js usa la fecha del navegador por default. 

const mili_segundos = new Date(5); // Si usa los mili siempre será a partir del January 01, 1970, 00:00:00 UTC (Universal Time Coordinated).
//*si estoy en buenos aires a esa fecha le va a restar siempre 3 horas

const fecha_string = new Date("May 30 1979"); // Crea un objeto fecha a partir de una fecha en formato string "debe estar en ingles"

const fecha_valores = new Date(1983,11,06); // Crea objeto fecha ***los meses son com un array y comienzan de 0 para obtener el mes debo restar 1***

const dia = ahora.getDate(); // dia
const mes = ahora.getMonth() + 1; // mes
const year = ahora.getFullYear(); // año
//* dia mes y año van a ser concatenados en el ejemplo.

console.log("Ejemplos con fecha");
console.log("Fecha navegador: "+ ahora);
console.log("Mili_sec: " + mili_segundos + "me resta horas por estar en buenos aires");
console.log("Con formato string: " + fecha_string);
console.log("Con formato valores: " + fecha_valores);
console.log("Concatenando ...: " + dia, mes, year);
