import React from "react";
import { useParams } from "react-router-dom";

const DetailDash = ({ data }) => {
  // Obtén el orderId de los parámetros de la URL
  const { orderId } = useParams();

  // Encuentra el pedido correspondiente en la lista de datos
  const selectedItem = data.find((item) => item.order.toString() === orderId);

  if (!selectedItem) {
    // Si no se encuentra el pedido, puedes mostrar un mensaje de error o redirigir a otra página
    return <div>El pedido no se encuentra.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-semibold mb-4">Detalle del Pedido</h1>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            src={selectedItem.image}
            alt={selectedItem.name}
            className="w-64 h-64 mx-auto mb-4"
          />
        </div>
        <div>
          <p className="text-lg">Cliente: {selectedItem.client}</p>
          <p className="text-lg">Mail: {selectedItem.mail}</p>
          <p className="text-lg">Teléfono: {selectedItem.phone}</p>
          <p className="text-lg">Estado: {selectedItem.state}</p>
          <p className="text-lg">Descripción: {selectedItem.description}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailDash;

