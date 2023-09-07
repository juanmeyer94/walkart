import React, { useState } from "react";

const Dashboard = () => {

  const data = [
    {
      name: "Personalizada",
      image: "https://i8.amplience.net/i/jpl/jd-333404-a-142a4d23278b7f965af65f04f5b71cbc",
      description: "Las Zapatillas Elegantes son la última tendencia en el mundo de la moda. Diseñadas para aquellos que buscan un estilo único y moderno.",
      category: "Running",
      order: 1,
      client: "Ivan Soria",
      price: 129.99,
      mail: "ivan.soria@example.com",
      phone: "+1 (123) 456-7890",
      state: "Pendiente"
    },
    {
      name: "ZapatoX",
      image: "https://i8.amplience.net/i/jpl/jd-384756-a-2e905306fd9911bae4fac5e70e97034b",
      description: "Un zapato elegante para ocasiones especiales.",
      category: "Formal",
      order: 2,
      client: "Maria Rodriguez",
      price: 89.99,
      mail: "maria.rodriguez@example.com",
      phone: "+1 (234) 567-8901",
      state: "Pendiente"
    },
    {
      name: "AirMax",
      image: "https://i8.amplience.net/i/jpl/jd-334384-a-f52db0f270800d1f572a833ce7a69db7",
      description: "Las AirMax te brindan comodidad y estilo en cada paso.",
      category: "Running",
      order: 3,
      client: "Carlos Gonzalez",
      price: 109.99,
      mail: "carlos.gonzalez@example.com",
      phone: "+1 (345) 678-9012",
      state: "Pendiente"
    },
    {
      name: "Personalizada",
      image: "https://i8.amplience.net/i/jpl/jd-456302-a-373ae0f8f8ea5cfbda6cedcc4522c0d1",
      description: "Las UrbanFlex son perfectas para la vida urbana y activa.",
      category: "Casual",
      order: 4,
      client: "Ana Lopez",
      price: 79.99,
      mail: "ana.lopez@example.com",
      phone: "+1 (456) 789-0123",
      state: "Pendiente"
    },
    {
      name: "Elegance",
      image: "https://i8.amplience.net/i/jpl/jd-148787-a-06d1f43f232cc3100bc6909c050f86c1",
      description: "Elegancia y estilo se fusionan en estas zapatillas.",
      category: "Formal",
      order: 5,
      client: "Pedro Martinez",
      price: 99.99,
      mail: "pedro.martinez@example.com",
      phone: "+1 (567) 890-1234",
      state: "Pendiente"
    },
    {
      name: "ActiveStep",
      image: "https://i8.amplience.net/i/jpl/jd-474052-a-5678ebe878aa36d624ee5259549c3ee4",
      description: "ActiveStep te acompaña en tus aventuras al aire libre.",
      category: "Outdoor",
      order: 6,
      client: "Laura Smith",
      price: 149.99,
      mail: "laura.smith@example.com",
      phone: "+1 (678) 901-2345",
      state: "Pendiente"
    },
    {
      name: "Personalizada",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
      description: "ColorBurst añade un toque vibrante a tu estilo diario.",
      category: "Casual",
      order: 7,
      client: "John Johnson",
      price: 69.99,
      mail: "john.johnson@example.com",
      phone: "+1 (789) 012-3456",
      state: "Pendiente"
    },
    {
      name: "SkyRide",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
      description: "SkyRide: la comodidad elevada a un nuevo nivel.",
      category: "Running",
      order: 8,
      client: "Sara Davis",
      price: 119.99,
      mail: "sara.davis@example.com",
      phone: "+1 (890) 123-4567",
      state: "Pendiente"
    },
    {
      name: "WaveGlide",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
      description: "WaveGlide: zapatillas que te hacen sentir en las nubes.",
      category: "Running",
      order: 9,
      client: "Daniel Brown",
      price: 139.99,
      mail: "daniel.brown@example.com",
      phone: "+1 (901) 234-5678",
      state: "Pendiente"
    },
    {
      name: "TrekPro",
      image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
      description: "TrekPro: listas para conquistar cualquier sendero.",
      category: "Outdoor",
      order: 10,
      client: "Sophia Wilson",
      price: 159.99,
      mail: "sophia.wilson@example.com",
      phone: "+1 (012) 345-6789",
      state: "Pendiente"
    },
  ];


  const [statuses, setStatuses] = useState(
    data.map(() => ({ status: "Pendiente", isOpen: false }))
  );

  const [selectedItem, setSelectedItem] = useState(null);

  const handleStatusChange = (index, status) => {
    const newStatuses = [...statuses];
    newStatuses[index] = { status, isOpen: false };
    setStatuses(newStatuses);
  };

  const toggleDropdown = (index) => {
    const newStatuses = [...statuses];
    newStatuses[index] = {
      ...newStatuses[index],
      isOpen: !newStatuses[index].isOpen,
    };
    setStatuses(newStatuses);
  };

  const openDetailModal = (item) => {
    setSelectedItem(item);
    // Aquí puedes mostrar el modal con la información detallada del objeto seleccionado
  };

  const getStatusButtonStyle = (status) => {
    switch (status) {
      case "Pendiente":
        return "bg-red-500 hover:bg-red-600 text-white";
      case "Realizado":
        return "bg-yellow-500 hover:bg-yellow-600 text-white";
      case "Enviado":
        return "bg-green-500 hover:bg-green-600 text-white";
      default:
        return "bg-gray-500 hover:bg-gray-600 text-white";
    }
  };

  const [isImageLarge, setIsImageLarge] = useState(false);

  const toggleImageSize = () => {
    setIsImageLarge(!isImageLarge);
  };


  return (
    <div className="p-4">
      <table className="w-full bg-white border rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-2 px-4 text-center">Pedido</th>
            <th className="py-2 px-4 text-center">Cliente</th>
            <th className="py-2 px-4 text-center">Zapatilla</th>
            <th className="py-2 px-4 text-center">Estado</th>
            <th className="py-2 px-4 text-center">Detalle</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={item.order} className="border-b hover:bg-gray-100">
              <td className="py-2 px-4 text-center">{item.order}</td>
              <td className="py-2 px-4 text-center">{item.client}</td>
              <td className="py-2 px-4 text-center">{item.name}</td>
              <td className="py-2 px-4 relative text-center">
  <div className="relative inline-block text-left">
    <button
      onClick={() => toggleDropdown(index)}
      className={`focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center ${getStatusButtonStyle(statuses[index].status)}`}
    >
      {statuses[index].status || "Select"}
      <svg
        className={`w-2.5 h-2.5 ml-2.5 transition-transform ${statuses[index].isOpen ? "rotate-180" : ""
        }`}
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="m1 1 4 4 4-4"
        />
      </svg>
    </button>
    {statuses[index].isOpen && (
      <div className="absolute z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
        <ul className="py-2 text-sm text-gray-700">
          <li>
            <button
              onClick={() => handleStatusChange(index, "Pendiente")}
              className="block px-4 py-2 hover:bg-gray-100 text-red-500"
            >
              Pendiente
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStatusChange(index, "Realizado")}
              className="block px-4 py-2 hover:bg-gray-100 text-yellow-500"
            >
              Realizado
            </button>
          </li>
          <li>
            <button
              onClick={() => handleStatusChange(index, "Enviado")}
              className="block px-4 py-2 hover:bg-gray-100 text-green-500"
            >
              Enviado
            </button>
          </li>
        </ul>
      </div>
    )}
  </div>
</td>

              <td className="py-2 px-4 text-center">
                <button
                  className="focus:ring-4 focus:ring-blue-700 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white"

                  // className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onClick={() => openDetailModal(item)}
                >
                  Detalle
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl font-semibold">{selectedItem.name}</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setSelectedItem(null)}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">×</span>
                </button>
              </div>
              <div className="relative p-6 flex-auto">
                <div className="grid grid-cols-2 gap-4">
                  <p className="text-lg">Cliente: {selectedItem.client}</p>
                  <p className="text-lg">Mail: {selectedItem.mail}</p>
                  <p className="text-lg">Phone: {selectedItem.phone}</p>
                  <p className="text-lg">Estado: {selectedItem.state}</p>
                  <p className="text-lg">Descripción: {selectedItem.description}</p>
                  <div className={`col-span-2 ${isImageLarge ? 'cursor-pointer' : ''}`}>
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className={`w-${isImageLarge ? '64' : '32'} h-${isImageLarge ? '64' : '32'} mx-auto mb-4 cursor-pointer hover:scale-150 transform duration-300`}
                      onClick={toggleImageSize}
                    />
                    
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                <button
                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={() => setSelectedItem(null)}
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Dashboard;
