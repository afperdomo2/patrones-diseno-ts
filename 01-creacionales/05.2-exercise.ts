/**
 * ! Inmutabilidad con copia
 * Aunque la inmutabilidad es una buena práctica, no siempre es posible.
 * En estos casos, se puede hacer una copia del objeto y modificar la copia.
 *
 *  * Es útil para mantener un historial de estados en aplicaciones interactivas.
 */

/**
 1.	Completen el método copyWith en la clase Player para que permita 
 crear una copia con cambios en name, score o level.
 
 2.	Usen el código cliente para probar el funcionamiento de copyWith, 
 haciendo cambios en el puntaje, nivel y nombre del jugador.
 */
import { COLORS } from "../helpers/colors.ts";

// 1. Clase Player inmutable
class Player {
  readonly name: string;
  readonly score: number;
  readonly level: number;

  constructor(name: string, score: number, level: number) {
    this.name = name;
    this.score = score;
    this.level = level;
  }

  // Método copyWith para crear una copia modificada del jugador
  copyWith({
    name = this.name,
    score = this.score,
    level = this.level,
  }: Partial<Player>): Player {
    return new Player(name, score, level);
  }

  displayState(): void {
    console.log(
      `%c👤 Nombre: ${this.name} 🏆 Puntaje: ${this.score} ⭐ Nivel: ${this.level}`,
      `color: blue`
    );
  }
}

class PlayerStateHistory {
  private states: Player[] = [];
  private currentIndex: number = -1;

  addState(state: Player): void {
    // Si estamos en un punto intermedio, eliminamos los estados futuros
    if (this.currentIndex < this.states.length - 1) {
      this.states = this.states.slice(0, this.currentIndex + 1);
    }
    // Agregamos el nuevo estado
    this.states.push(state);
    this.currentIndex++;
  }

  getCurrentState(): Player {
    if (this.currentIndex >= 0 && this.currentIndex < this.states.length) {
      return this.states[this.currentIndex];
    }
    throw new Error("No hay estados en el historial.");
  }

  undo(): Player | null {
    if (this.currentIndex > 0) {
      this.currentIndex--;
      return this.states[this.currentIndex];
    }
    return null; // No hay más estados para deshacer
  }

  redo(): Player | null {
    if (this.currentIndex < this.states.length - 1) {
      this.currentIndex++;
      return this.states[this.currentIndex];
    }
    return null; // No hay más estados para rehacer
  }
}

// 2. Código Cliente para probar
function main() {
  const history = new PlayerStateHistory();

  // Crear jugador inicial
  console.log("✅ Estado inicial");
  let player: Player | null = new Player("Carlos", 0, 1);
  history.addState(player); // Guardar el estado inicial
  player.displayState();

  // Incrementar el puntaje
  console.log("\n✅ Después de incrementar el puntaje:");
  player = player.copyWith({ score: 10 });
  history.addState(player); // Guardar el nuevo estado
  player.displayState();

  // Subir de nivel
  console.log("\n✅ Después de subir de nivel:");
  player = player.copyWith({ level: 2 });
  history.addState(player); // Guardar el nuevo estado
  player.displayState();

  // Cambiar el nombre del jugador
  console.log("\n✅ Después de cambiar el nombre:");
  player = player.copyWith({ name: "Carlos Pro" });
  history.addState(player); // Guardar el nuevo estado
  player.displayState();

  // Deshacer el último cambio (cambio de nombre)
  console.log("\n🔄 Deshaciendo el último cambio (cambio de nombre):");
  player = history.undo();
  player?.displayState();

  // Rehacer el último cambio (cambio de nombre)
  console.log("\n🔄 Rehaciendo el último cambio (cambio de nombre):");
  player = history.redo();
  player?.displayState();
}

main();
