//? Métodos de cadenas de texto (parte 3)
// https://regexr.com       //para practicar uso de las expresiones regulares

let texto_largo =
  "Tito no es un mono cualquiera. A Tito no le gusta trepar por los árboles y odia comer plátanos. Él prefiere pasear por el bosque, oler las flores y recoger las nueces que se caen de los árboles.";

console.log(texto_largo.match(/no/g)); //devuelve todas las instancias de la palabra no /no/, aunque sea parte de una palabra como la búsqueda en pdf  la (/g) es para que sea de manera global, en regexr esta en flags.

//? ¿Existe la palabra dentro del texto?
console.log(texto_largo.includes("terremoto")); //pregunta si existe la palabra

//? Saber si un texto empieza con una palabra
console.log(texto_largo.startsWith("Tito no es un mono")); // pregunta si empieza con...

//? Saber si un texto termina con otra palabra
console.log(texto_largo.endsWith("árboles.")); // pregunta si termina con...
