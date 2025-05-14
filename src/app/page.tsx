import Layout from "@/modules/layouts/layout";
import React from "react";
export default function Home() {
  return (
    <Layout>
      <main className="flex flex-col items-center justify-center min-h-screen bg-white text-black px-6 py-12">
      <section className="text-center max-w-3xl">
        <h1 className="text-5xl font-bold mb-4">Bienvenido a <span className="text-yellow-500">DeliveryPro</span></h1>
        <p className="text-lg mb-8">
          Plataforma de gestión para pedidos, usuarios y entregas. Usa el menú superior para navegar por los módulos.
        </p>
      </section>

      {/* Espacio para insertar imagen decorativa desde internet */}
      <section className="mt-10">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" // Puedes cambiar este link por cualquier imagen
          alt="Imagen de delivery"
          className="rounded-lg shadow-md w-full max-w-xl"
        />
      </section>
    </main> 

    </Layout>
  );

}
