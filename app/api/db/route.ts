import sql, { ConnectionPool } from "mssql";

const dbConfig = {
    user: "consulta",
    password: "consulta",
    database: "VP",
    server: "201.159.169.163\\WIN-2ODKFLFVAF3,1433",
    //port: 1433,
    //instanceName: "WIN-2ODKFLFVAF3",
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        encrypt: false,
        trustServerCertificate: true,
    },
};

let pool: ConnectionPool | null = null;

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

export async function GET() {
    try {
        const pool = await getPool();
        const result = await pool.request().query("SELECT TOP 1 rut FROM RUT");

        return Response.json({
            message: "Conexi�n exitosa",
            data: result.recordset,
        });
    } catch (err) {
        console.error("Error de conexi�n SQL", err);
        return Response.json(
            { message: "Error al conectar a la base de datos", error: Error.name },
            { status: 500 }
        );
    }
}