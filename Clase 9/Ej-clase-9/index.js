//? repetí los pasos de la clase: 1- creé index.js
//? 2- inicié npm = npm init -y
//? 3- instalé winston en la carpeta: npm install winston
//? 4- le di inicio con: npm start
//? 5- copié el try catch de los ejercicios resueltos
//? 6- Para el ejercicio le cambié el nivel a error

const winston = require("winston");

const logger = winston.createLogger({
    level: "info",   //? al ser de nivel info según la tabla va a ver de ahí para abajo si quiero mas detalle debo subir por ejemplo a debug.
    format: winston.format.json(),
    defaultMeta: { service: "user-service" },
    transports: [

        new winston.transports.Console(),
        new winston.transports.File({ filename: "error.log", level: "error" }), //crea archivo nuevo o modifica existente //* esta línea me dice que nivel va a guardar
        new winston.transports.File({ filename: "combined.log" }), //crea archivo nuevo o modifica existente
    ],
});

//?logger.log("este es un mensaje por consola, utilizando la sintaxis: npm start /// desde la consola");

logger.error("mensaje error PERSONALIZADO");


function showError() {
    throw new Error("showError function PERSONALIZADO");
}

try {
    showError();
} catch (e) {
    logger.log("error PERSONALIZADO", e.toString());
}