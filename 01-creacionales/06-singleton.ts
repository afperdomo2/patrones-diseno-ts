/**
 * ! Singleton:
 * Es un patrón de diseño creacional que garantiza que una clase
 * tenga una única instancia y proporciona un punto de acceso global a ella.
 *
 * * Es útil cuando necesitas controlar el acceso a una única instancia
 * * de una clase, como por ejemplo, en un objeto de base de datos o en un
 * * objeto de configuración.
 *
 * https://refactoring.guru/es/design-patterns/singleton
 */
class DragonBalls {
  private static _instance: DragonBalls;
  private _ballsCollected: number;

  private constructor() {
    this._ballsCollected = 0;
  }

  public static getInstance(): DragonBalls {
    if (!DragonBalls._instance) {
      DragonBalls._instance = new DragonBalls();
      console.log("🔮 Las Esferas del dragón han sido creadas.");
    }
    return DragonBalls._instance;
  }

  public collectBall(): void {
    if (this._ballsCollected < 7) {
      this._ballsCollected++;
      console.log(`🌟 Esfera del dragón ${this._ballsCollected} recogida.`);
      return;
    }
    console.log("⚠️ ¡Ya has recogido todas las Esferas del dragón!");
  }

  public summonDragon(): void {
    if (this._ballsCollected === 7) {
      console.log("🐉 ¡El dragón Shenron ha sido invocado!");
      this._ballsCollected = 0; // Reiniciar las esferas después de invocar al dragón
      return;
    }
    const missingBalls = 7 - this._ballsCollected;
    console.log(
      `📊 Aún faltan ${missingBalls} Esferas del dragón para invocar al Shenron.`
    );
  }
}

const bulmaDragonBalls = DragonBalls.getInstance();
bulmaDragonBalls.collectBall();
bulmaDragonBalls.collectBall();
bulmaDragonBalls.summonDragon();

const gokuDragonBalls = DragonBalls.getInstance();

gokuDragonBalls.collectBall();
gokuDragonBalls.collectBall();

gokuDragonBalls.collectBall();
gokuDragonBalls.collectBall();

bulmaDragonBalls.collectBall();
bulmaDragonBalls.collectBall();

bulmaDragonBalls.summonDragon(); // Se invoca al dragón Shenron
// Reinicia las esferas después de invocar al dragón

const freezerDragonBalls = DragonBalls.getInstance();
freezerDragonBalls.collectBall();
freezerDragonBalls.collectBall();
