/**
 * ! Factory Function
 * Es un patrón de diseño que nos permite crear objetos o funciones de manera dinámica que serán
 * usados posteriormente en el código.
 *
 * * Es útil cuando necesitamos crear objetos o funciones de manera dinámica,
 * * es decir, en tiempo de ejecución y no en tiempo de compilación.
 */
type Language = "en" | "es" | "fr";

function createGreeter(lang: Language) {
  return (name: string): string => {
    const messages: Record<Language, string> = {
      en: `🇬🇧 Hello, ${name}!`,
      es: `🇪🇸 ¡Hola, ${name}!`,
      fr: `🇫🇷 Bonjour, ${name}!`,
    };
    return messages[lang] || `Hello, ${name}!`;
  };
}

// Ejemplo de uso
const englishGreeter = createGreeter("en");
const spanishGreeter = createGreeter("es");
const frenchGreeter = createGreeter("fr");

console.log(englishGreeter("Alice")); // Hello, Alice!
console.log(spanishGreeter("Bob")); // ¡Hola, Bob!
console.log(frenchGreeter("Charlie")); // Bonjour, Charlie!
