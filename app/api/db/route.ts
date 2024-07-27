import sql from "mssql";
import { createPool, Pool } from 'mysql2/promise';

const config = {
    server: '201.159.169.163\\WIN-2ODKFLFVAF3',
    authentication: {
        type: 'default',
        options: {
            userName: 'consulta',
            password: 'consulta'
        }
    },
    options: {
        port: 1433,
        database: 'VP',
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
