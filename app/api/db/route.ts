import { Sequelize } from "sequelize";

const sequelize = new Sequelize("VP", "consulta", "consulta", {
    host: "201.159.169.163",
    port: 1433,
    dialect: "mssql",
    dialectOptions: {
        options: {
            encrypt: true,
            trustServerCertificate: true,
        },
    },
});

async function connectToDatabase() {
    try {
        await sequelize.authenticate();
        console.log("Conexión exitosa");
        const [results, metadata] = await sequelize.query("SELECT TOP 1 rut FROM RUT");
        console.log(results);
    } catch (err) {
        console.error("Error de conexión SQL", err);
    }
}

connectToDatabase();

 