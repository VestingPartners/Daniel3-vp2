import sql from "mssql";

const dbConfig = {
    user: "consulta",
    password: "consulta",
    database: "VP",
    server: "201.159.169.163",
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: true,
        trustServerCertificate: true,
    },
};

let pool: sql.ConnectionPool;

async function getPool() {
    if (!pool) {
        pool = await sql.connect(dbConfig);
    }
    return pool;
}

export async function GET() {
    try {
        const pool = await getPool();
        const result = await pool.request().query('SELECT TOP 1 rut FROM RUT');
        return new Response(JSON.stringify({
            message: "Conexión exitosa",
            data: result.recordset,
        }), {
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (err: any) {
        console.error("Error de conexión SQL", err);
        return new Response(JSON.stringify({
            message: "Error al conectar a la base de datos",
            error: err.message,
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
