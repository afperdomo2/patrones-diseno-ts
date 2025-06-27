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
 */

import { COLORS } from "../../../helpers/colors.ts";

//! Tarea: crear un QueryBuilder para construir consultas SQL
/**
 * Debe de tener los siguientes métodos:
 * - constructor(table: string)
 * - select(fields: string[]): QueryBuilder -- si no se pasa ningún campo, se seleccionan todos con el (*)
 * - where(condition: string): QueryBuilder - opcional
 * - orderBy(field: string, order: string): QueryBuilder - opcional
 * - limit(limit: number): QueryBuilder - opcional
 * - execute(): string - retorna la consulta SQL
 * 
 ** Ejemplo de uso:
  const usersQuery = new QueryBuilder("users") // users es el nombre de la tabla
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'Cri'")
    .orderBy("name", "ASC")
    .limit(10)
    .execute();

  console.log('Consulta: ', usersQuery);
  // Select id, name, email from users where age > 18 and country = 'Cri' order by name ASC limit 10;
 */

type Table = "users" | "products" | "orders"; // Define las tablas disponibles
type OrderDirection = "ASC" | "DESC"; // Define las direcciones de ordenamiento disponibles

class QueryBuilder {
  private table: Table;
  private fields: string[] = ["*"];
  private conditions: string[] = [];
  private orderByFields: string[] = [];
  private limitValue?: number;

  constructor(table: Table) {
    this.table = table;
  }

  select(...fields: string[]): QueryBuilder {
    this.fields = fields.length ? fields : ["*"];
    return this;
  }

  where(condition: string): QueryBuilder {
    this.conditions.push(condition);
    return this;
  }

  orderBy(field: string, order: OrderDirection = "ASC"): QueryBuilder {
    this.orderByFields.push(`${field} ${order}`);
    return this;
  }

  limit(limit: number): QueryBuilder {
    this.limitValue = limit;
    return this;
  }

  execute(): string {
    let query = `SELECT ${this.fields.join(", ")} FROM ${this.table}`;
    if (this.conditions.length) {
      query += ` WHERE ${this.conditions.join(" AND ")}`;
    }
    if (this.orderByFields.length) {
      query += ` ORDER BY ${this.orderByFields.join(", ")}`;
    }
    if (this.limitValue) {
      query += ` LIMIT ${this.limitValue}`;
    }
    return `${query};`;
  }
}

function main() {
  const adultUsersByCountry = new QueryBuilder("users")
    .select("id", "name", "email")
    .where("age > 18")
    .where("country = 'COL'")
    .orderBy("name", "ASC")
    // .orderBy("email", "ASC")
    .limit(10)
    .execute();
  console.info(
    `
    Consulta SQL:\n
    %c${adultUsersByCountry}\n`,
    COLORS.green
  );
}

main();
