import { connection } from "./database.js";

export class EstudanteDAO {
  async getAll() {
    /** @type {import("mysql2/promise").Connection} */
    let conn;
    try {
      conn = await connection();
      const sql = "SELECT * FROM estudante";

      const [rows] = await conn.query(sql);

      return rows;
    } catch (error) {
      console.error("Erro ao buscar todos os estudantes:", error);
      throw error;
    } finally {
      if (conn) conn.end();
    }
  }

  async getById(id) {
    /** @type {import("mysql2/promise").Connection} */
    let conn;
    try {
      conn = await connection();

      const sql = "SELECT * FROM estudante WHERE id = ?";

      const [rows] = await conn.query(sql, [id]);

      return rows[0];
    } catch (error) {
      console.error(`Erro ao buscar estudante ${id}:`, error);
      throw error;
    } finally {
      if (conn) conn.end();
    }
  }

  async create(nome, email) {
    /** @type {import("mysql2/promise").Connection} */
    let conn;
    try {
      conn = await connection();
      const sql = "INSERT INTO estudante (nome, email) VALUES (?, ?)";

      const [result] = await conn.query(sql, [nome, email]);

      return { id: result.insertId, nome, email };
    } catch (error) {
      console.error("Erro ao inserir estudante:", error);
      throw error;
    } finally {
      if (conn) conn.end();
    }
  }

  async update(id, nome, email) {
    /** @type {import("mysql2/promise").Connection} */
    let conn;
    try {
      conn = await connection();

      const dadosParaAtualizar = { nome, email };
      const sql = "UPDATE estudante SET ? WHERE id = ?";

      const [result] = await conn.query(sql, [dadosParaAtualizar, id]);

      return result.affectedRows;
    } catch (error) {
      console.error(`Erro ao atualizar estudante ${id}:`, error);
      throw error;
    } finally {
      if (conn) conn.end();
    }
  }

  async delete(id) {
    /** @type {import("mysql2/promise").Connection} */
    let conn;
    try {
      conn = await connection();
      const sql = "DELETE FROM estudante WHERE id = ?";

      const [result] = await conn.query(sql, [id]);

      return result.affectedRows;
    } catch (error) {
      console.error(`Erro ao deletar estudante ${id}:`, error);
      throw error;
    } finally {
      if (conn) conn.end();
    }
  }
}
