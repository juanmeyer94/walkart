import React, { useState } from "react";

const modelos = [
  {
    name: "Shadow",
    image: "https://i8.amplience.net/i/jpl/jd-333404-a-142a4d23278b7f965af65f04f5b71cbc",
    description: "Las Zapatillas Elegantes son la última tendencia en el mundo de la moda. Diseñadas para aquellos que buscan un estilo único y moderno.",
    category: "Running",
  },
  {
    name: "ZapatoX",
    image: "https://i8.amplience.net/i/jpl/jd-384756-a-2e905306fd9911bae4fac5e70e97034b",
    description: "Un zapato elegante para ocasiones especiales.",
    category: "Formal",
  },
  {
    name: "AirMax",
    image: "https://i8.amplience.net/i/jpl/jd-334384-a-f52db0f270800d1f572a833ce7a69db7",
    description: "Las AirMax te brindan comodidad y estilo en cada paso.",
    category: "Running",
  },
  {
    name: "UrbanFlex",
    image: "https://i8.amplience.net/i/jpl/jd-456302-a-373ae0f8f8ea5cfbda6cedcc4522c0d1",
    description: "Las UrbanFlex son perfectas para la vida urbana y activa.",
    category: "Casual",
  },
  {
    name: "Elegance",
    image: "https://i8.amplience.net/i/jpl/jd-148787-a-06d1f43f232cc3100bc6909c050f86c1",
    description: "Elegancia y estilo se fusionan en estas zapatillas.",
    category: "Formal",
  },
  {
    name: "ActiveStep",
    image: "https://i8.amplience.net/i/jpl/jd-474052-a-5678ebe878aa36d624ee5259549c3ee4",
    description: "ActiveStep te acompaña en tus aventuras al aire libre.",
    category: "Outdoor",
  },
  {
    name: "ColorBurst",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    description: "ColorBurst añade un toque vibrante a tu estilo diario.",
    category: "Casual",
  },
  {
    name: "SkyRide",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    description: "SkyRide: la comodidad elevada a un nuevo nivel.",
    category: "Running",
  },
  {
    name: "WaveGlide",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    description: "WaveGlide: zapatillas que te hacen sentir en las nubes.",
    category: "Running",
  },
  {
    name: "TrekPro",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    description: "TrekPro: listas para conquistar cualquier sendero.",
    category: "Outdoor",
  },
];

const Models = () => {
  const [hoveredModel, setHoveredModel] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedModel, setSelectedModel] = useState(null);

  const uniqueCategories = ["Todos", ...new Set(modelos.map((modelo) => modelo.category))];

  const filteredModelos = selectedCategory === "Todos" ? modelos : modelos.filter((modelo) => modelo.category === selectedCategory);

  const handleModelClick = (index) => {
    setSelectedModel(index);
  };

  const handleCloseModal = () => {
    setSelectedModel(null);
  };

  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {uniqueCategories.map((category, index) => (
          <button
            key={index}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {filteredModelos.map((modelo, index) => (
          <div
            key={index}
            className="relative cursor-pointer"
            onMouseEnter={() => setHoveredModel(index)}
            onMouseLeave={() => setHoveredModel(null)}
            onClick={() => handleModelClick(index)}
          >
            <img
              className={`h-auto max-w-full rounded-lg transition-opacity ${hoveredModel === index ? "opacity-75" : "opacity-100"
                }`}
              src={modelo.image}
              alt={modelo.name}
            />
            {hoveredModel === index && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white rounded-lg">
                {modelo.name}
              </div>
            )}
          </div>
        ))}
      </div>



      {selectedModel !== null && (
  <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
    <div className="bg-white rounded-lg shadow-lg w-full md:w-3/4 lg:w-2/3 xl:w-1/2 flex">
      <div className="p-4 flex-shrink-0 w-1/2">
        <img
          src={filteredModelos[selectedModel].image}
          alt={filteredModelos[selectedModel].name}
          className="w-32 h-32 mx-auto mb-4"
        />
        <h3 className="text-2xl font-bold mb-2">
          {filteredModelos[selectedModel].name}
        </h3>
        <p className="mb-2 text-gray-600">
          Categoría: {filteredModelos[selectedModel].category}
        </p>
        <p className="mb-4">{filteredModelos[selectedModel].description}</p>
      </div>
      <div className="p-4 flex-grow">
        <form>
      <h1 className="text-2xl font-bold text-center mt-4 mb-4">¿Te gustó este diseño?</h1>
          <div className="relative z-0 w-full mb-6 group">
            
            <input
              type="email"
              name="floating_email"
              id="floating_email"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Mail
            </label>
          </div>
          <div className="relative z-0 w-full mb-6 group">
            <input
              type="text"
              name="floating_first_name"
              id="floating_first_name"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Nombre
            </label>
          </div>

          <div className="relative z-0 w-full mb-6 group">
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              name="floating_phone"
              id="floating_phone"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_phone"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              N° Celular
            </label>

          <div className="relative z-0 w-full mt-4 mb-6 group">
            <textarea
              name="floating_description"
              id="floating_description"
              className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              required
            />
            <label
              htmlFor="floating_description"
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              ¿Querés algún detalle diferente?
            </label>
          </div>
          
          </div>
          <div className="flex justify-end mt-4">
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-lg mr-2"
              onClick={handleCloseModal}
            >
              Cerrar
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
)}


    </div>
  );
};

export default Models;