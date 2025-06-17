# 🏗️ Patrones de Diseño en TypeScript

Este repositorio contiene implementaciones de los patrones de diseño más comunes utilizando TypeScript.

## 📋 Cómo usar este repositorio

Cada patrón tiene su propia carpeta con los siguientes elementos:

- Implementación en TypeScript
- Ejemplos de uso
- Diagramas UML (cuando sea aplicable)

## 🧩 Patrones de Diseño

### 🏭 01 - Patrones Creacionales

Los patrones creacionales proporcionan diversos mecanismos de creación de objetos que aumentan la flexibilidad y la reutilización del código existente.

| #   | Patrón               | Descripción                                                                                                        | Archivo                                                          |
| --- | -------------------- | ------------------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------- |
| 1   | **Builder**          | Permite construir objetos complejos paso a paso, separando la construcción de la representación                    | [01-builder.ts](01-creacionales/01-builder.ts)                   |
| 2   | **Factory Method**   | Define una interfaz para crear un objeto, pero permite que las subclases alteren el tipo de objetos que se crearán | [02-factory-method.ts](01-creacionales/02-factory-method.ts)     |
| 3   | **Abstract Factory** | Proporciona una interfaz para crear familias de objetos relacionados sin especificar sus clases concretas          | [03-abstract-factory.ts](01-creacionales/03-abstract-factory.ts) |
| 4   | **Prototype**        | Permite copiar objetos existentes sin hacer que el código dependa de sus clases                                    | [04-prototype.ts](01-creacionales/04-prototype.ts)               |
| 5   | **Inmutabilidad**    | Permite mantener un historial de estados de los objetos mediante la creación de copias inmutables                  | [05-inmutabilidad.ts](01-creacionales/05-inmutabilidad.ts)       |
| 6   | **Singleton**        | Asegura que una clase tenga una única instancia y proporciona un punto de acceso global a ella                     | [06-singleton.ts](01-creacionales/06-singleton.ts)               |
| 7   | **Factory Function** | Una función que no es una clase ni un constructor, pero que devuelve un nuevo objeto                               | [07-factory-function.ts](01-creacionales/07-factory-function.ts) |

Además, se incluyen ejemplos adicionales y ejercicios para cada patrón, así como una implementación alternativa del patrón Singleton.

## 📋 Requisitos

- Deno
- TypeScript

## 🚀 Ejecución

```bash
# Ejecutar un ejemplo específico
deno run --allow-read patrones/creacionales/singleton/ejemplo.ts

# Ejecutar tests
deno test

# Compilar TypeScript (si es necesario)
deno compile --output ejemplos patrones/ejemplo-principal.ts
```

```bash
deno run 01-creacionales/01-builder.ts
deno --watch 01-creacionales/01-builder.ts
```

## 📚 Listado de recursos adicionales

<https://github.com/DevTalles-corp/patrones-diseno/tree/01-creacionales-inicio>

- [Refactoring Guru](https://refactoring.guru/es/design-patterns/catalog)

- [Design Patterns for Humans](https://github.com/kamranahmedse/design-patterns-for-humans?tab=readme-ov-file)

- [Patterns.dev](https://www.patterns.dev/)

- [Java Design Patterns](https://github.com/iluwatar/java-design-patterns)

- [Design Patterns TypeScript](https://github.com/torokmark/design_patterns_in_typescript?tab=readme-ov-file)

## 📄 Licencia

MIT
