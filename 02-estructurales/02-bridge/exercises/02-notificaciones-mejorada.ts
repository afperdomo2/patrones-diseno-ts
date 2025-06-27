// 1. Interfaz NotificationChannel
// Define el método `send`, que cada canal de comunicación implementará.
interface NotificationChannel {
  send(message: string): void;
}

// 2. Implementaciones de Canales de Comunicación
class EmailChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`📧 Enviando correo electrónico: ${message}`);
  }
}

class SMSChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`📱 Enviando SMS: ${message}`);
  }
}

class PushNotificationChannel implements NotificationChannel {
  send(message: string): void {
    console.log(`🔔 Enviando Push: ${message}`);
  }
}

// 3. Clase Abstracta Notification
// Define la propiedad `channel` y el método `notify`
abstract class Notification {
  protected channels: NotificationChannel[];

  constructor(channels: NotificationChannel[] = []) {
    this.channels = channels;
  }

  addChannel(channel: NotificationChannel): void {
    this.channels.push(channel);
  }

  abstract notify(message: string): void;
}

class AlertNotification extends Notification {
  override notify(message: string): void {
    console.log("\n%c✅ Notificación de Alerta:", "color: orange");
    this.channels.forEach((channel) => channel.send(message));
    console.log(this.channels);
  }
}

function main() {
  const alert = new AlertNotification([new EmailChannel(), new SMSChannel()]);

  alert.notify("¡Alerta! Se ha detectado un problema crítico.");

  alert.addChannel(new PushNotificationChannel());
  alert.notify("¡Alerta! El sistema ha sido actualizado.");
}

main();
