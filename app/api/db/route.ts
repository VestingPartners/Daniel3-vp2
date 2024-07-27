import sql from "mssql";
import { createPool, Pool } from 'mysql2/promise';

const dbConfig = {
  port: 1433,
  user: "consulta",
  password: "consulta",
  database: "VP",
    server: "201.159.169.163\\WIN-2ODKFLFVAF3,1433",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true, 
    trustServerCertificate: true
  }
};

let pool: Pool;

async function getPool() {
  if (!pool) {
    pool = createPool(dbConfig);
  }
  return pool;
}

export async function GET() {
  try {
    const pool = await getPool();
    const [rows] = await pool.query('SELECT TOP 1 rut FROM RUT');
    return Response.json({
      message: "Conexión exitosa",
      data: rows,
    });
  } catch (err: any) {
      console.error("Error de conexión SQL", err);
      return Response.json(
        { message: "Error al conectar a la base de datos", error: err.message },
        { status: 500 }
      );
  }
}
