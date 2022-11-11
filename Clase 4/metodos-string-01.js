// Métodos más utilizados con cadenas de caracteres
// Cómo obtener la longitud de un string
let str = "Hola soy un string";
console.log(str.length); //? MAS QUE UN MÉTODO ES UN ATRIBUTO

// Obtener partes de cadenas de caracteres
// slice() substring() substr()
let slice_str = str.slice(5, 10); //? entre (5, 10) inicio y fin como parámetros
console.log(slice_str);

let substring_str = str.substring(5, 10);
console.log(substring_str);

let substr_str = str.substr(5, 10); //! deprecated!!!!
console.log(substr_str);

// Reemplazar parte del contenido de una cadena de texto

let cadena = "Hola mi nombre es Gorka";
console.log(cadena);

// Al utilizar strings sólo reemplaza la primera instancia

console.log(cadena.replace("Gorka", "Miguel"));

let texto_largo = `A Tito no le gusta trepar por los árboles y odia comer plátanos. 
  Él prefiere pasear por el bosque y recoger las nueces que se caen de los árboles.`;

// Al utilizar strings sólo reemplaza la primera instancia

console.log(texto_largo.replace("los", "REEMPLAZO"));

// Al utilizar la expresión regular /g (global), reemplaza todas las instancias

console.log(texto_largo.replace(/los/g, "REEMPLAZO"));
