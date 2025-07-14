/**
 * ! Patrón Facade
 * Este patrón proporciona una interfaz unificada para un conjunto de interfaces
 * en un subsistema.
 *
 * Facade define una interfaz de nivel más alto que hace que el subsistema
 * sea más fácil de usar.
 *
 * * Es útil cuando un subsistema es complejo o difícil de entender para
 * * proporcionar una interfaz simplificada para el cliente.
 *
 * https://refactoring.guru/es/design-patterns/facade
 */
class AudioSystem {
  turnOn(): void {
    console.log("🔊 Sistema de sonido encendido.");
  }

  turnOff(): void {
    console.log("🔊 Sistema de sonido apagado.");
  }

  playSound(sound: string): void {
    console.log(`🔊 Reproduciendo sonido: ${sound}`);
  }

  setVolume(volume: number): void {
    console.log(`🔊 Volumen ajustado a ${volume}.`);
  }
}

class VideoPlayer {
  turnOn(): void {
    console.log("📺 Reproductor de video encendido.");
  }

  turnOff(): void {
    console.log("📺 Reproductor de video apagado.");
  }

  play(video: string): void {
    console.log(`▶️ Reproduciendo video: ${video}`);
  }

  stop(): void {
    console.log("⏹️ Video detenido.");
  }
}

class Ligths {
  turnOn(): void {
    console.log("💡 Luces encendidas.");
  }

  turnOff(): void {
    console.log("💡 Luces apagadas.");
  }
}

class PopcornMaker {
  turnOn(): void {
    console.log("🍿 Máquina de palomitas encendida.");
  }

  turnOff(): void {
    console.log("🍿 Máquina de palomitas apagada.");
  }

  makePopcorn(): void {
    console.log("🍿 Palomitas listas para servir.");
  }
}

interface IHomeTheater {
  watchMovie(movie: string): void;
  endMovie(): void;
}

class HomeTheaterFacade implements IHomeTheater {
  protected audioSystem: AudioSystem;
  protected videoPlayer: VideoPlayer;
  protected lights: Ligths;
  protected popcornMaker: PopcornMaker;

  constructor(
    audioSystem: AudioSystem,
    videoPlayer: VideoPlayer,
    lights: Ligths,
    popcornMaker: PopcornMaker
  ) {
    this.audioSystem = audioSystem;
    this.videoPlayer = videoPlayer;
    this.lights = lights;
    this.popcornMaker = popcornMaker;
  }

  watchMovie(movie: string): void {
    console.log("\nPreparando para ver la película...");
    this.lights.turnOff();
    this.audioSystem.turnOn();
    this.videoPlayer.turnOn();
    this.popcornMaker.turnOn();

    this.videoPlayer.play(movie);
    this.audioSystem.playSound("Sonido envolvente");
    this.popcornMaker.makePopcorn();
  }

  endMovie(): void {
    console.log("\nTerminando la película...");
    this.videoPlayer.stop();
    this.audioSystem.turnOff();
    this.lights.turnOn();
    this.popcornMaker.turnOff();
  }
}

// Uso del patrón Facade
const homeTheater = new HomeTheaterFacade(
  new AudioSystem(),
  new VideoPlayer(),
  new Ligths(),
  new PopcornMaker()
);
homeTheater.watchMovie("Inception");
homeTheater.endMovie();
