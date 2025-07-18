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
 */

/**
 * 1. Completen las clases SalesReport e InventoryReport para implementar
 * la interfaz Report, generando el contenido de cada reporte en el método generate.
 *
 * 2. Implementen las clases SalesReportFactory e InventoryReportFactory
 * para crear instancias de SalesReport y InventoryReport, respectivamente.
 *
 * 3. Prueben el programa generando diferentes tipos de reportes usando
 * el prompt para seleccionar el tipo de reporte.
 */
import { COLORS } from "../../../helpers/colors.ts";

// 1. Definir la interfaz Report
interface Report {
  generate(): void;
}

// 2. Clases concretas de Reportes
// Implementar SalesReport e InventoryReport

class SalesReport implements Report {
  generate(): void {
    console.info("%cGenerando reporte de ventas...", COLORS.yellow);
  }
}

class InventoryReport implements Report {
  generate(): void {
    console.info("%cGenerando reporte de inventario...", COLORS.green);
  }
}

// 3. Clase Base ReportFactory con el Método Factory

abstract class ReportFactory {
  protected abstract createReport(): Report; // Método Factory

  generateReport(): void {
    const report = this.createReport();
    report.generate();
  }
}

// 4. Clases Concretas de Fábricas de Reportes

class SalesReportFactory extends ReportFactory {
  createReport(): Report {
    return new SalesReport();
  }
}

class InventoryReportFactory extends ReportFactory {
  createReport(): Report {
    return new InventoryReport();
  }
}

// 5. Código Cliente para Probar

function main() {
  let reportFactory: ReportFactory;

  const reportType = prompt("¿Qué tipo de reporte deseas? (sales/inventory)");

  switch (reportType) {
    case "sales":
      reportFactory = new SalesReportFactory();
      break;
    case "inventory":
      reportFactory = new InventoryReportFactory();
      break;
    default:
      throw new Error("Tipo de reporte no válido.");
  }

  reportFactory.generateReport();
}

main();
