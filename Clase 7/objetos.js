//? Trabajando con Objetos

const obj = {       //? en este objeto trabaja de 2 maneras distintas, al primera = key : + Valor entre " " /////
    id: 4,          //? la segunda key entre "": + valor como un array ----- ambos se pueden combinar en el mismo objeto
    nombre: "Juan",
    apellido: "González",
    isDeveloper: false,
    libros_favoritos: ["El método", "El código de la manifestación"],
    "4-juegos": [1, 2, 3, 4]
}

console.log(obj.id) //llamo a la propiedad del objeto
console.log(obj["4-juegos"])    // acá lo transformó automáticamente uso el punto y lo hizo corchetes, para llamar al key que estaba entre ""

const prop = "isDeveloper" // accedo a propiedades a través de variables
console.log(obj[prop])     // accedo a propiedades a través de variables Esta es un booleano y da false

const obj2 = obj;                   //* en este ejemplo hace una copia del objeto luego modifica la propiedad nombre //
console.log(obj2);                  //* y aunque no se ve a primera vista al consultar el nombre en el objeto 1      //
//*                                 //                                                                               //
obj2.nombre = "Iñigo"               //* este cambio porque la copia apunta el mismo espacio en memoria.              //
console.log(obj2.nombre)            //*                                                                              //   
console.log(obj.nombre)             //*  //////////////////////////////////////////////////////////////////////////////                                                                           

let val1 = 4        //-  ///////////////////////////////////////////////////////////////////////////
let val2 = val1     // en estos 2 ejemplos muestra que si se puede cambiar de valor a             //
//                  /                                                                             //
val2 = 6            // variables "tipos primitivos" porque están en distintos espacios de memoria //
console.log(val1)   // -                                                                          //
console.log(val2)   // - ///////////////////////////////////////////////////////////////////////////


const obj3 = { ...obj }     //* --------------------------------------------------------------//

console.log(obj.nombre)     //*    si la copia la hago con el factor de propagación o spread  //
console.log(obj3.nombre)    //*    SI puedo cambiar propiedades sin afectar al primero

obj3.nombre = "Gorka"       //*                                                               //

console.log(obj.nombre)
console.log(obj3.nombre)    //* --------------------------------------------------------------//


//? Cómo ordenar listas de objetos en función de una propiedad

const listaPeliculas = [
    { titulo: "Lo que el viento se llevó", anyo: 1939 },
    { titulo: "Titanic", anyo: 1997 },
    { titulo: "Moana", anyo: 2016 },
    { titulo: "El efecto mariposa", anyo: 2004 },
    { titulo: "TED", anyo: 2012 }
]

console.log(listaPeliculas)
// .sort() -> MUTA EL VALOR DE LA LISTA ORIGINAL

listaPeliculas.sort((a, b) => a.anyo - b.anyo) //* método sort paso 2 parámetros recorre el objeto como un array y lo ordena en este caso por año

console.log(listaPeliculas)