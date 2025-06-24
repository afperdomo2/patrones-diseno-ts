/**
 * ! Patrón Adapter
 *  Permite que objetos con interfaces incompatibles trabajen juntos, también es muy
 *  util para utilizar librerías de terceros en nuestra aplicación sin depender
 *  directamente de ellas.
 *
 * * Es útil cuando se quiere reutilizar una clase que no tiene la interfaz que
 * * necesitamos o cuando queremos crear una capa de abstracción para una librería
 * * de terceros.
 *
 * https://refactoring.guru/es/design-patterns/adapter
 */

import { LocalLogger } from "./local-logger.ts";
import { DenoLoggerAdapter } from "./logger-adapter.ts";

// 1 - Implementación de un logger local
const localLogger = new LocalLogger("MyApp");

localLogger.info("This is an info message");
localLogger.warn("This is a warning message");
localLogger.error("This is an error message");
localLogger.debug("This is a debug message");

// 2 - Implementación de un logger adaptado a Deno
const denoLogger = new DenoLoggerAdapter("MyDenoApp");

denoLogger.info("This is an info message from Deno Logger");
denoLogger.warn("This is a warning message from Deno Logger");
denoLogger.error("This is an error message from Deno Logger");
denoLogger.debug("This is a debug message from Deno Logger");
