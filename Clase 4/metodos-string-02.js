//? Métodos de cadenas de texto (parte 2)

let input = "ESCORpio"; // este sería un ejemplo de input del usuario contra uno de la BBDD abajo
let db = "escorpio"; // al ser distintos caracteres no daría igual

// toLowerCase() - toUpperCase()
console.log(input.toLowerCase());
console.log(input.toUpperCase());
console.log(input.toLowerCase() === db.toLowerCase()); //! Acá lleva a lower a las 2 variables para comparar y abajo  a upper
console.log(input.toUpperCase() === db.toUpperCase());

//? Formas de concatenar dos cadenas de caracteres

let str_1 = "Hola soy la primera cadena.";
let str_2 = "Y yo soy la segunda cadena.";

console.log(str_1.concat(" ", str_2)); // Método concat + espacio + 2da string. Mejor opción
console.log(str_1 + " " + str_2); //? string 1 + espacio + string 2. --En Js es peligroso porque si hay números los suma aunque sean string
console.log(`${str_1} --dentro de las comillas-- ${str_2}`); //* Con comillas invertidas tomo las variables y el espacio entre ellas se refleja en la impresión.

//? Eliminar espacios al inicio y al final

let str_3 = "    Hola soy un string con espacios al final.   ";
console.log(str_3.length);
//? trim()
console.log(str_3.trim().length); // el método trim elimina los espacios al principio y al final se agrego .length para ver que se cumpla el trim
console.log(str_3.trimStart().length + ' Sin espacios al inicio.'); //corta solo principio
console.log(str_3.trimEnd().length); // corta solo final
console.log(str_3.trim());

//? Obtener el caracter que hay en cierta posición
let str_4 = "Hola soy el string número 4"; // ["H", "o", "l", "a", " ", "s"........]

console.log(str_4.charAt(7)); // lista como array ubicación nº 7 

//? Obtener la posición de una palabra dentro de una cadena de caracteres
let str_5 = "Hola soy Gorka y me gusta el surf. Mi nombre es Gorka y mi apellido es Villar";
console.log(str_5.indexOf("Gorka")); // donde inicia la palabra en que posición 
console.log(str_5.charAt(9));
console.log(str_5.lastIndexOf("Gorka")); //* el último indice en su comienzo!! la última vez que aparece esa palabra
