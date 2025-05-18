'user client';
import React from 'react'
import Image from 'next/image';
import ProfileUser from '../profileUser/component/profileUser.component';
export default function derechaComponent() {
  return (
<div className="flex flex-row gap-6">
  {/* Tarjeta del usuario */}
  <div className="w-1/3">
    {/* Aquí va tu componente de tarjeta de usuario */}
    <div className="bg-gray-600 text-white p-4 rounded-lg text-center">
      <img
        src="https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg"
        alt="User Avatar"
        className="mx-auto rounded-md"
        width={150}
        height={150}
      />
      <h2 className="text-lg font-bold mt-2">Sergio Muñoz</h2>
      <span className="bg-gray-700 text-xs px-2 py-1 rounded">Admin</span>
    </div>
  </div>

  {/* Tabla o funcionalidades */}
  <div className="w-2/3">
    <h1 className="text-2xl font-bold mb-2">Gestión de Usuarios</h1>
    <p className="mb-4 text-gray-600">Aquí podrás ver y gestionar todos los usuarios registrados en la plataforma.</p>
    <div className="bg-white p-3 rounded shadow">
     <button className="text-black p-2 font-semibold hover:text-blue-400">eliminar</button>

    </div>
  </div>
</div>

  );
}
