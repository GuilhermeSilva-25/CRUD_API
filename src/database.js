import mysql from "mysql2/promise";

export async function connection() {
  try {
const conexao = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

    console.log("Banco de dados conectado com sucesso!");

    return conexao;
  } catch (error) {
    console.error("Erro ao conectar com o banco de dados:", error);
    throw error;
  }
}
