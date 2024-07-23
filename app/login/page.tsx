"use client"
import React, { useEffect, useState } from 'react'; //import React from "react";
import Link from "next/link";
import Image from "next/image";
export  function page() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Asume que tu endpoint de la API es '/api/db'
        fetch('/api/db')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Error en la respuesta de la red');
                }
                return response.json();
            })
            .then((data) => setData(data))
            .catch((error) => setError(error.message));
    }, []); // El array vacío asegura que el efecto se ejecute solo una vez al montar el componente

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
export default function Login() {
    const apiSecret_server = process.env.SERVER_DANIEL;
    const apiSecret_database = process.env.DATABASE_DANIEL;
    const apiSecret_user = process.env.USER_DANIEL;
    const apiSecret_password = process.env.PASSWORD_DANIEL;

  return (
    <div className="flex h-screen">
      {/* Left side - Full-screen Image */}
      <div className="hidden lg:block w-1/2 relative">
        <Image
          src="/Vesting Partners.png"
          layout="fill"
          objectFit="cover"
          alt="Vesting Partners"
          priority
        />
        <div className="absolute bottom-4 left-4 text-white text-lg font-semibold">
                  Vesting Partners
        </div>
      </div>

      {/* Right side - Login Form */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center px-8 bg-gray-50">
        <div className="w-full max-w-md">
          <h1 className="text-2xl font-semibold text-[#25567c] mb-8 text-center">
            VESTING PARTNERS
          </h1>

          <div className="bg-white p-8 rounded-lg shadow-sm w-full">
            <h2 className="text-xl mb-6 text-center">
              Sign in with{" "}
              <span className="font-semibold text-[#25567c]">
                Vesting Partners
              </span>
            </h2>

            <form className="space-y-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#25567c] text-white py-2 px-4 rounded-md hover:bg-[#1e4569] transition duration-300"
              >
                Iniciar Sesion
              </button>
            </form>

            <div className="mt-4 text-center">
              <Link
                href="/forgot-password"
                className="text-sm text-blue-600 hover:underline"
              >
                Cambia tu contraseña
              </Link>
            </div>
          </div>

          <p className="mt-8 text-center text-sm text-gray-600 max-w-md">
            Bienvenido a Vesting Partners, el portal de inversionistas de
            Vesting. Este sitio web es de uso exclusivo para los actuales y
            potenciales inversionistas. Para más información o para solicitar
            acceso, por favor contacte a{" "}
            <a
              href="mailto:contacto@vestingpartners.cl"
              className="text-blue-600 hover:underline"
            >
              contacto@vestingpartners.cl
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}