import { Logger } from "jsr:@deno-library/logger@1.2.0";

interface ILoggerAdapter {
  prefix: string;
  info(message: string): void;
  warn(message: string): void;
  error(message: string): void;
  debug(message: string): void;
}

export class DenoLoggerAdapter implements ILoggerAdapter {
  private logger: Logger;
  public prefix: string;

  constructor(prefix: string = "App") {
    this.prefix = prefix;
    this.logger = new Logger();
  }

  info(message: string): void {
    this.logger.info(`[${this.prefix}] ${message}`);
  }

  warn(message: string): void {
    this.logger.warn(`[${this.prefix}] ${message}`);
  }

  error(message: string): void {
    this.logger.error(`[${this.prefix}] ${message}`);
  }

  debug(message: string): void {
    this.logger.debug(`[${this.prefix}] ${message}`);
  }
}
