import Layout from '@/modules/layouts/layout'
import React from 'react'
import DeliveryPersonPage from '../deliveryPerson/page';
  const deliveryPeople = [
  { id: 1, name: "Carlos Pérez", status: "Disponible" },
  { id: 2, name: "Ana Gómez", status: "En ruta" },
  { id: 3, name: "Luis Torres", status: "Ocupado" },
];
export default function DeliveryPage() {
  return (
    
   /*<DeliveryPersonPage/>*/

    <Layout>
     
      <div className="text-black bg-white space-y-6">
        <h2 className="text-3xl font-bold">Panel de Entregas</h2>
        <section>
          <DeliveryPersonPage/>

        </section>

        <section className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <h3 className="text-2xl font-semibold mb-4">Repartidores Activos</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {deliveryPeople.map((person) => (
              <div key={person.id} className="border border-gray-300 p-4 rounded-lg bg-neutral-50">
                <h4 className="font-bold text-lg">{person.name}</h4>
                <p className="text-sm text-gray-700">Estado: <span className="font-medium">{person.status}</span></p>
              </div>
            ))}
          </div>
        </section>
      </div> 
    </Layout>
  );
}
