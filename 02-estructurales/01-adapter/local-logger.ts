// Define the standard Logger interface
interface Logger {
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

// This is our implementation for local logging
export class LocalLogger implements Logger {
  private prefix: string; // Esto es el prefijo que se añadirá a cada mensaje de log

  constructor(prefix: string = "App") {
    this.prefix = prefix;
  }

  info(message: string): void {
    console.log(`\x1b[32m[${this.prefix}] [INFO] ℹ️ ${message}\x1b[0m`);
  }

  warn(message: string): void {
    console.warn(`\x1b[33m[${this.prefix}] [WARN] ⚠️ ${message}\x1b[0m`);
  }

  error(message: string): void {
    console.error(`\x1b[31m[${this.prefix}] [ERROR] ❌ ${message}\x1b[0m`);
  }

  debug(message: string): void {
    console.debug(`\x1b[36m[${this.prefix}] [DEBUG] 🔍 ${message}\x1b[0m`);
  }
}
