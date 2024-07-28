import { Connection, Request } from "tedious";

const config = {
    authentication: {
        options: {
            userName: "consulta",
            password: "consulta",
        },
        type: "default",
    },
    server: "201.159.169.163",
    options: {
        database: "VP",
        encrypt: true,
        trustServerCertificate: true,
        rowCollectionOnRequestCompletion: true,
    },
};

const connection = new Connection(config);

connection.on("connect", (err) => {
    if (err) {
        console.error("Error de conexión SQL", err);
    } else {
        const request = new Request("SELECT TOP 1 rut FROM RUT", (err, rowCount, rows) => {
            if (err) {
                console.error("Error en la consulta SQL", err);
            } else {
                console.log(rows);
            }
            connection.close();
        });

        connection.execSql(request);
    }
});

connection.connect();