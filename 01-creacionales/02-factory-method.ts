/**
 * ! Factory Method:
 * El patrón Factory Method permite crear objetos sin especificar
 * la clase exacta del objeto que se creará.
 *
 * En lugar de eso, delegamos la creación de objetos a subclases o métodos
 * que encapsulan esta lógica.
 *
 * * Es útil cuando una clase no puede anticipar la clase
 * * de objetos que debe crear.
 *
 * https://refactoring.guru/es/design-patterns/factory-method
 *
 */

import { COLORS } from "../helpers/colors.ts";

interface Hamburger {
  prepare(): void;
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.log("%cPreparando hamburguesa de pollo...", COLORS.yellow);
  }
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.log("%cPreparando hamburguesa de carne...", COLORS.green);
  }
}

class BeanHamburger implements Hamburger {
  prepare(): void {
    console.log("%cPreparando hamburguesa de frijoles...", COLORS.red);
  }
}

abstract class Restaurant {
  abstract createHamburger(): Hamburger;

  orderHamburger(): void {
    const hamburger = this.createHamburger();
    hamburger.prepare();
  }
}

class ChickenRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }
}

class BeefRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }
}

class BeanRestaurant extends Restaurant {
  createHamburger(): Hamburger {
    return new BeanHamburger();
  }
}

function main() {
  let restaurant: Restaurant;

  const burgerType = prompt(
    "¿Qué tipo de hamburguesa quieres? (pollo/carne/frijoles)"
  )?.toLowerCase();

  switch (burgerType) {
    case "pollo":
      restaurant = new ChickenRestaurant();
      break;
    case "carne":
      restaurant = new BeefRestaurant();
      break;
    case "frijoles":
      restaurant = new BeanRestaurant();
      break;
    default:
      throw new Error("Tipo de hamburguesa no válido.");
  }

  restaurant.orderHamburger();
}

main();
