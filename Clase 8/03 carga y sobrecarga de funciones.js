// Carga y sobrecarga de funciones ===> Stack overflow
function saludar() {
    hola()
}

function hola() {
    console.log("Hola! Soy la función hola()")
}

saludar()

/// 1. global()                         -- esto es lo primero que hace el interprete
/// 2. saludar() global()               -- añade saludar a la anterior
/// 3. hola() saludar() global()        -- añade hola()
/// 4. saludar() global()               -- termina hola() y la quita de la pila de trabajo
/// 5. global()                         -- termina saludar() y solo queda la función global



//* function recursivo() {
//*     recursivo()
//* }

//* recursivo()             //-- este ejemplo seria un overflow agotaría la memoria es un función llamándose a si misma infinitamente.