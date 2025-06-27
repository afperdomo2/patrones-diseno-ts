/**
 * ! Patrón Builder:
 * Es un patrón de diseño creacional que nos permite construir objetos complejos
 * paso a paso.
 *
 * El patrón nos permite producir distintos tipos y representaciones
 * de un objeto empleando el mismo código de construcción.
 *
 * * Es útil cuando necesitamos construir un objeto complejo con muchas partes
 * * y queremos que el proceso de construcción sea independiente de las partes
 * * que lo componen.
 *
 * https://refactoring.guru/es/design-patterns/builder
 */
import { COLORS } from "../../helpers/colors.ts";

class Computer {
  public cpu: string = "CPU por defecto";
  public ram: string = "RAM por defecto";
  public storage: string = "Almacenamiento por defecto";
  public gpu?: string;

  displayConfiguration() {
    console.info(
      `
        %cComputadora:
        CPU: ${this.cpu}
        RAM: ${this.ram}
        ROM: ${this.storage}
        GPU: ${this.gpu ?? "--"}
    `,
      COLORS.green
    );
  }
}

class ComputerBuilder {
  private computer: Computer;

  constructor() {
    this.computer = new Computer();
  }

  setCPU(cpu: string) {
    this.computer.cpu = cpu;
    return this;
  }

  setRAM(ram: string) {
    this.computer.ram = ram;
    return this;
  }

  setStorage(storage: string) {
    this.computer.storage = storage;
    return this;
  }

  setGPU(gpu: string) {
    this.computer.gpu = gpu;
    return this;
  }

  build() {
    return this.computer;
  }
}

function main() {
  const basicComputer = new ComputerBuilder()
    .setCPU("Intel i5")
    .setRAM("16GB")
    .setStorage("512GB SSD")
    .build();

  console.info("🚀 ~ basicComputer:");
  basicComputer.displayConfiguration();

  const gamingComputer = new ComputerBuilder()
    .setCPU("AMD Ryzen 7")
    .setRAM("32GB")
    .setStorage("1TB SSD")
    .setGPU("NVIDIA RTX 3080")
    .build();

  console.info("🚀 ~ gamingComputer:");
  gamingComputer.displayConfiguration();
}

main();
