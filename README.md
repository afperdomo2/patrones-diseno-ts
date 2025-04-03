# Patrones de Diseño en TypeScript

Este repositorio contiene implementaciones de los patrones de diseño más comunes utilizando TypeScript.

## Estructura del Proyecto

La estructura del proyecto está organizada por categorías de patrones de diseño:

- **Patrones Creacionales**: Se enfocan en mecanismos de creación de objetos.
- **Patrones Estructurales**: Se ocupan de la composición de clases y objetos.
- **Patrones de Comportamiento**: Se centran en la comunicación entre objetos.

## Patrones Implementados

### Patrones Creacionales

- Singleton
- Factory Method
- Abstract Factory
- Builder
- Prototype

### Patrones Estructurales

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### Patrones de Comportamiento

- Chain of Responsibility
- Command
- Iterator
- Mediator
- Memento
- Observer
- State
- Strategy
- Template Method
- Visitor

## Cómo usar este repositorio

Cada patrón tiene su propia carpeta con los siguientes elementos:

- Implementación en TypeScript
- Ejemplos de uso
- Diagramas UML (cuando sea aplicable)

## Requisitos

- Deno
- TypeScript

## Instalación

```bash
# Clonar el repositorio
git clone https://github.com/tu-usuario/patrones-diseno-ts.git

# Entrar al directorio
cd patrones-diseno-ts
```

## Ejecución

```bash
# Ejecutar un ejemplo específico
deno run --allow-read patrones/creacionales/singleton/ejemplo.ts

# Ejecutar tests
deno test

# Compilar TypeScript (si es necesario)
deno compile --output ejemplos patrones/ejemplo-principal.ts
```

## Contribuir

Las contribuciones son bienvenidas. Por favor, asegúrate de seguir las convenciones de código establecidas y añadir pruebas para las nuevas características.

## Licencia

MIT
