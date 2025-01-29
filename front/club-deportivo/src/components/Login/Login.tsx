"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import { useRouter } from "next/router";
import React from "react";

export default function Login() {
  const { user, error, isLoading } = useUser();

  const router = useRouter();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('https://res.cloudinary.com/dqiehommi/image/upload/v1737912176/pexels-sukh-winder-3740393-5611633_y1bx8n.jpg')] bg-cover bg-center">
      <form className="bg-black bg-opacity-80 p-8 rounded-lg shadow-md w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-6 text-white text-center">
          {user ? `Welcome ${user.name}!` : "Welcome Guest!"}
        </h2>

        {user ? (
          <>
            <p className="text-white text-center mb-4">
              You are logged in as {user.email}
            </p>
            <a
              href="/api/auth/logout"
              className="block text-center text-white bg-red-600 hover:bg-red-700 py-2 px-4 rounded transition font-bold"
            >
              LOGOUT
            </a>
          </>
        ) : (
          <>
            <div className="mb-4">
              <input
                type="email"
                placeholder="Correo electrónico:"
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="password"
                placeholder="Contraseña:"
                className="w-full px-4 py-2 bg-black text-white border border-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
                required
              />
            </div>

            <button
  type="button"
  className="w-full bg-black text-white py-2 px-4 rounded hover:bg-gray-700 transition font-bold"
  onClick={() => router.push('/api/auth/login')}
>
  LOGIN
</button>
          </>
        )}
      </form>
    </div>
  );
}
