
import sql from 'mssql'

const apiSecret_server = process.env.SERVER_DANIEL;
const apiSecret_database = process.env.DATABASE_DANIEL;
const apiSecret_user = process.env.USER_DANIEL;
const apiSecret_password = process.env.PASSWORD_DANIEL;
const apiSecret_port = process.env.PORT_DANIEL;

const dbConfig = {
    user: "consulta",
    password: "consulta",
    database: "VP",
    server: "201.159.169.163\WIN-2ODKFLFVAF3",
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false
    }
}
export default async function handler(req, res) {
    let pool
    try {
        pool = await sql.connect(dbConfig)
        const result = await pool.request().query('SELECT top 1 rut from RUT') // Ejemplo de consulta
        console.log(result)
        res.status(200).json({ message: 'Conexión exitosa', data: result.recordset })
    } catch (err) {
        console.error('Error de conexión SQL', err)
        res.status(500).json({ message: 'Error al conectar a la base de datos' })
    } finally {
        pool?.close() // cierra la conexión
    }
}
