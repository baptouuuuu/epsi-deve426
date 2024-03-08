import { sql } from "../internal/sql";

export function getUserById(userId) {
  return sql`SELECT * FROM USER WHERE Id = ${userId}`;
} 
