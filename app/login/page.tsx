"use client"
import React, { useEffect, useState } from 'react'; //import React from "react";

export const dynamic = 'force-dynamic'

export default function Login() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {

        fetch('api/db', {
            headers: { 
                Authorization: 'Beared WzXWHFGZEiQ6Y4C1UXCNMx5I'
            }
          })
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error.message));
    }, []); 

    if (error) {
        return <div>Error al cargar los datos: {error}</div>;
    }
    if (!data) {
        return <div>Cargando...</div>;
    }
    return (
        <div>
            <h1>Resultado de la Conexión</h1>
            <p>{JSON.stringify(data)}</p>
        </div>
    );
}
