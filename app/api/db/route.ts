//@ts-nocheck
import sql from 'mssql'

const apiSecret_server = process.env.SERVER_DANIEL;
const apiSecret_database = process.env.DATABASE_DANIEL;
const apiSecret_user = process.env.USER_DANIEL;
const apiSecret_password = process.env.PASSWORD_DANIEL;
const apiSecret_port = process.env.PORT_DANIEL;

const dbConfig = {
    user: apiSecret_user,
    password: apiSecret_password,
    database: apiSecret_database,
    server: apiSecret_server,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false
    }
}

let pool;

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
            message: "Conexión exitosa",
            data: result.recordset,
        });
    } catch (err) {
        console.error("Error de conexión SQL", err);
        return Response.json(
            { message: "Error al conectar a la base de datos", error: err.message },
            { status: 500 }
        );
    }
}