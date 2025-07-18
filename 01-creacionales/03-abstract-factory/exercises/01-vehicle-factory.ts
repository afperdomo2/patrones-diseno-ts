/**
 * ! Abstract Factory:
 * Es un patrón de diseño que permite crear familias de objetos relacionados
 * sin especificar sus clases concretas.
 *
 * En lugar de crear objetos individuales directamente,
 * creamos fábricas que producen un conjunto de objetos relacionados.
 *
 * * Es útil cuando necesitas crear objetos que son parte de una familia
 * * y quieres asegurarte de que estos objetos se complementen entre sí.
 *
 * https://refactoring.guru/es/design-patterns/abstract-factory
 */

/**
 * !Instrucciones:
 	1.Completen las Clases de Productos:
    •	ElectricCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto eléctrico".
    •	GasCar debe implementar Vehicle y mostrar el mensaje "Ensamblando un auto de combustión".
    •	ElectricEngine debe implementar Engine y mostrar el mensaje "Arrancando motor eléctrico".
    •	GasEngine debe implementar Engine y mostrar el mensaje "Arrancando motor de combustión".

	2.	Completen las Clases de Fábricas:
    •	ElectricVehicleFactory debe crear un ElectricCar y un ElectricEngine.
    •	GasVehicleFactory debe crear un GasCar y un GasEngine.

	3. Prueben el Código:
	  •	Ejecuten el código para asegurarse de que cada fábrica produce el tipo correcto de vehículo y motor.

 */

// 1. Interfaces de Vehicle y Engine

interface Vehicle {
  assemble(): void;
}

interface Engine {
  start(): void;
}

// 2. Clases Concretas de Productos

class ElectricCar implements Vehicle {
  assemble(): void {
    console.log("%cEnsamblando un 🚗 ⚡", "color: green");
  }
}

class GasCar implements Vehicle {
  assemble(): void {
    console.log("%cEnsamblando un 🚗 ⛽", "color: brown");
  }
}

class ElectricEngine implements Engine {
  start(): void {
    console.log("%cArrancando 🔑 motor ⚡", "color: green");
  }
}

class GasEngine implements Engine {
  start(): void {
    console.log("%cArrancando 🔑 motor ⛽", "color: brown");
  }
}

// 3. Interfaz de la Fábrica Abstracta

interface VehicleFactory {
  createVehicle(): Vehicle;
  createEngine(): Engine;
}

// 4. Clases Concretas de Fábricas

class ElectricVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new ElectricCar();
  }
  createEngine(): Engine {
    return new ElectricEngine();
  }
}

class GasVehicleFactory implements VehicleFactory {
  createVehicle(): Vehicle {
    return new GasCar();
  }
  createEngine(): Engine {
    return new GasEngine();
  }
}

// 5. Código Cliente

function main() {
  let VehicleFactory: VehicleFactory;

  const vehicleType = prompt(
    "Ingrese el tipo de vehículo (eléctrico/combustión):"
  );

  switch (vehicleType) {
    case "eléctrico":
      VehicleFactory = new ElectricVehicleFactory();
      break;
    case "combustión":
      VehicleFactory = new GasVehicleFactory();
      break;
    default:
      console.error("Tipo de vehículo no reconocido.");
      return;
  }

  const vehicle = VehicleFactory.createVehicle();
  const engine = VehicleFactory.createEngine();

  vehicle.assemble();
  engine.start();
}

main();
