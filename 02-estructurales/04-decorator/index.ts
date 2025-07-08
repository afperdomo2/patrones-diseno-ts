/**
 * ! Patrón decorador
 * Es un patrón de diseño estructural que permite añadir
 * funcionalidades a objetos, colocando estos objetos dentro de
 * objetos encapsuladores especiales que contienen estas funcionalidades.
 *
 * No confundirlo con los decoradores de TypeScript que son anotaciones.
 *
 * * Es útil cuando necesitas añadir funcionalidades a objetos
 * * de manera dinámica y flexible.
 *
 * https://refactoring.guru/es/design-patterns/decorator
 */
interface Notification {
  send(message: string): void;
}

class BaseNotification implements Notification {
  send(message: string): void {
    console.log(`📢 Enviando notificación: ${message}`);
  }
}

abstract class NotificationDecorator implements Notification {
  protected notification: Notification;
  constructor(notification: Notification) {
    this.notification = notification;
  }
  send(message: string): void {
    this.notification.send(message);
  }
}

// Decoradores
class EmailNotificationDecorator extends NotificationDecorator {
  override send(message: string): void {
    super.send(message);
    this.sendEmail(message);
  }
  sendEmail(message: string): void {
    console.log(`📧 Enviando email: ${message}`);
  }
}

class SMSNotificationDecorator extends NotificationDecorator {
  override send(message: string): void {
    super.send(message);
    this.sendSMS(message);
  }
  sendSMS(message: string): void {
    console.log(`📱 Enviando SMS: ${message}`);
  }
}

function main() {
  let notification: Notification = new BaseNotification();
  notification = new EmailNotificationDecorator(notification);
  notification = new SMSNotificationDecorator(notification);
  notification.send("¡Hola, mundo!");
}

main();
