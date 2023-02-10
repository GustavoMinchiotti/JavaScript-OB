const miFunction = val => {
    if (typeof val === "number") {
        return 2 * val
    }
    throw new Error("El valor debe ser de tipo número")
}

//const elDoble = miFunction("a1a")

const numero = "8";

try {
    // Código que puede fallar
    console.log("Está ejecutándose de manera correcta")
    const doble = miFunction(numero)
    console.log(doble)
} catch (e) {
    // En caso de fallar, quiero que ejecutes
    console.error(`El valor de e es: ${e}`)
    console.error("ERROR!")
} finally {
    console.log("Esto se va a ejecutar tanto si se produce algún error, como si no existe ninguno")
}

//* Errores mas comunes en Js
//? InternalError, SyntaxError, TypeError, RangeError y ReferenceError


// https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Error