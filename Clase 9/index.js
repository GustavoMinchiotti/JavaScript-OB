const winston = require("winston");

const logger = winston.createLogger({
  level: "info",   //? al ser de nivel info según la tabla va a ver de ahí para abajo si quiero mas detalle debo subir por ejemplo a debug.
  format: winston.format.json(),
  defaultMeta: { service: "user-service" },
  transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: "error.log", level: "error" }), //crea archivo nuevo o modifica existente //* esta línea me dice que nivel va a guardar
    new winston.transports.File({ filename: "combined.log" }), //crea archivo nuevo o modifica existente
  ],
});

//logger.log("este es un mensaje por consola, utilizando la sintaxis: npm start /// desde la consola");
logger.info("mensaje informativo");
logger.debug("mensaje debug");
logger.warn("mensaje de advertencia");
logger.error("mensaje de error");

//! 13/06/2023 retomé este curso luego de alura y volví a instalar Winston
//? Haciendo ahora luego de instalado npm start me crea 2 archivos .log