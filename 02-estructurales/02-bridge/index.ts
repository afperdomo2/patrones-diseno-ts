/**
 * ! Patrón Bridge
 * Este patrón nos permite desacoplar una abstracción de su implementación,
 * de tal forma que ambas puedan variar independientemente.
 *
 * * Es útil cuando se tienen múltiples implementaciones de una abstracción
 * * Se puede utilizar para separar la lógica de negocio de la lógica de presentación
 * * Se puede utilizar para separar la lógica de la interfaz de usuario también.
 *
 * https://refactoring.guru/es/design-patterns/bridge
 */

interface Ability {
  attack(): void;
}

class SwordAbility implements Ability {
  attack(): void {
    console.log("\x1b[33m%s\x1b[0m", "⚔️  Atacando con espada");
  }
}

class FireAbility implements Ability {
  attack(): void {
    console.log("\x1b[31m%s\x1b[0m", "🔥 Lanzando bola de fuego");
  }
}

class IceAbility implements Ability {
  attack(): void {
    console.log("\x1b[34m%s\x1b[0m", "❄️ Lanzando bola de hielo");
  }
}

abstract class Character {
  protected ability: Ability;

  constructor(ability: Ability) {
    this.ability = ability;
  }

  public setAbility(ability: Ability): void {
    this.ability = ability;
  }

  public abstract fight(): void;
}

class Warrior extends Character {
  override fight(): void {
    console.log("\x1b[36m%s\x1b[0m", "👊 El guerrero está luchando");
    this.ability.attack();
  }
}

class Mage extends Character {
  override fight(): void {
    console.log("\x1b[35m%s\x1b[0m", "🧙 El mago está luchando");
    this.ability.attack();
  }
}

function main() {
  const warrior = new Warrior(new SwordAbility());
  warrior.fight(); // ⚔️ Atacando con espada

  const mage = new Mage(new FireAbility());

  mage.fight(); // 🔥 Lanzando bola de fuego

  mage.setAbility(new IceAbility());
  mage.fight(); // ❄️ Lanzando bola de hielo
}

main();
