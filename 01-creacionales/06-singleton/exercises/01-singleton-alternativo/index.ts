import { configManager } from "./config-manager.ts";

configManager.setConfig("apiUrl", "https://api.example.com");
configManager.setConfig("apiKey", "1234567890abcdef");
configManager.setConfig("theme", "dark");
configManager.setConfig("language", "es");

console.log("Configuraciones actuales:", configManager.getAllConfigs());

console.log("URL de la API:", configManager.getConfig("apiUrl"));
console.log("Clave de la API:", configManager.getConfig("apiKey"));
