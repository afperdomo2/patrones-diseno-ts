/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */
class ConfigManager {
  private config: Record<string, string> = {};

  public setConfig(key: string, value: string): void {
    this.config[key] = value;
  }

  public getConfig(key: string): string | undefined {
    return this.config[key];
  }

  public getAllConfigs(): Record<string, string> {
    return this.config;
  }
}

// Exportamos una instancia única de ConfigManager
export const configManager = new ConfigManager();
