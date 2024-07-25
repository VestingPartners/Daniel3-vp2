import sql from "mssql";

const dbConfig = {
  port: 1433,
  user: "consulta",
  password: "consulta",
  database: "VP",
  server: "201.159.169.163",
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 60000,
  },
  options: {
    encrypt: false,
    trustServerCertificate: true
  }
};

let pool: any;

async function getPool() {
  if (!pool) {
    try {
      pool = await sql.connect(dbConfig);
    } catch (err) {
      console.error("Error al crear el pool de conexiones:", err);
      throw err;
    }
  }
  return pool;
}

function verifyToken(request: Request) {
  const token = request.headers.get('Authorization')?.split(' ')[1];
  return token === process.env.VERCEL_TOKEN;
}

export async function GET(request: Request) {


  try {
    const pool = await getPool();
    const result = await pool.request().query("SELECT top 1 rut FROM RUT");

    return Response.json({
      message: "Conexión exitosa",
      data: result.recordset,
    });
  } catch (err) {
    console.error("Error de conexión SQL", err);
    return Response.json(
      { message: "Error al conectar a la base de datos" },
      { status: 500 }
    );
  }
}