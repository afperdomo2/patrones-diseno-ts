/**
 * ! Abstract Factory
 *
 * El patrón Abstract Factory proporciona una interfaz para crear familias de objetos
 * relacionados o dependientes sin especificar sus clases concretas. En este ejemplo:
 *
 * - Las interfaces de producto (Hamburger, Drink) definen qué productos pueden crearse
 * - Los productos concretos implementan estas interfaces (BeefHamburger, ChickenHamburger, SodaDrink, JuiceDrink)
 * - La interfaz de fábrica abstracta (RestaurantFactory) declara métodos para crear productos
 * - Las fábricas concretas (FastFoodRestaurantFactory, HealthyRestaurantFactory) implementan la interfaz
 *   y crean familias consistentes de productos (combo de comida rápida o combo de comida saludable)
 *
 * Este patrón es útil cuando un sistema necesita ser independiente de cómo se crean,
 * componen y representan sus productos, y cuando un sistema debe configurarse con
 * una de múltiples familias de productos.
 */
interface Hamburger {
  prepare(): void;
}

interface Drink {
  serve(): void;
}

class BeefHamburger implements Hamburger {
  prepare(): void {
    console.info("%cPreparando 🍔 de 🐮", "color: brown");
  }
}

class ChickenHamburger implements Hamburger {
  prepare(): void {
    console.info("%cPreparando 🍔 de 🐔", "color: orange");
  }
}

class SodaDrink implements Drink {
  serve(): void {
    console.info("%cSirviendo 🥤 de soda", "color: blue");
  }
}

class JuiceDrink implements Drink {
  serve(): void {
    console.info("%cSirviendo 🥤 de jugo", "color: green");
  }
}

interface RestaurantFactory {
  createHamburger(): Hamburger;
  createDrink(): Drink;
}

class FastFoodRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new BeefHamburger();
  }

  createDrink(): Drink {
    return new SodaDrink();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createHamburger(): Hamburger {
    return new ChickenHamburger();
  }

  createDrink(): Drink {
    return new JuiceDrink();
  }
}

function main() {
  let restaurantFactory: RestaurantFactory;

  const restaurantType = prompt(
    "¿Qué tipo de restaurante deseas? (fast/healthy)"
  );

  switch (restaurantType) {
    case "fast":
      restaurantFactory = new FastFoodRestaurantFactory();
      break;
    case "healthy":
      restaurantFactory = new HealthyRestaurantFactory();
      break;
    default:
      console.error("Tipo de restaurante no válido");
      return;
  }

  const hamburger = restaurantFactory.createHamburger();
  const drink = restaurantFactory.createDrink();

  hamburger.prepare();
  drink.serve();
}

main();
