import React from "react";
import Layout from "@/modules/layouts/layout";
import DerechaComponent from '../../modules/components/derecha.component';

export default function UserPage() {
  return (
    <Layout>
      <div className="text-black space-y-4">
        <h2 className="text-3xl font-bold">Gestión de Usuarios</h2>
        <p className="text-lg">Aquí podrás ver y gestionar todos los usuarios registrados en la plataforma.</p>

        {/* Aquí puedes agregar más contenido como una tabla o formulario */}
        <div className="bg-white p-4 rounded shadow-md border border-gray-200 h-full">
          <p className="text-gray-700">Próximamente: tabla de usuarios o funcionalidades CRUD.</p>
        </div>
        <div>
          <DerechaComponent/>
        </div>
      </div>
    </Layout>
  );
}
