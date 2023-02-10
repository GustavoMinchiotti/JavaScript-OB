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
    new winston.transports.File({ filename: "error.log", level: "error" }),
    new winston.transports.File({ filename: "combined.log" }),
  ],
});


//logger.log("este es un mensaje por consola, utilizando la sintaxis: npm start /// desde la consola");
logger.info("mensaje informativo");
logger.debug("mensaje debug");
logger.warn("mensaje de advertencia");
logger.error("mensaje de error");
