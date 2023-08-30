import React from "react";
import { Link } from "react-router-dom";

const modelos = [
  {
    name: "Dra",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    description: "Una zapatilla de estilo único y moderno.",
    category: "Running",
  },
  {
    name: "ZapatoX",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    description: "Un zapato elegante para ocasiones especiales.",
    category: "Formal",
  },
  {
    name: "AirMax",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    description: "Las AirMax te brindan comodidad y estilo en cada paso.",
    category: "Running",
  },
  {
    name: "UrbanFlex",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    description: "Las UrbanFlex son perfectas para la vida urbana y activa.",
    category: "Casual",
  },
  {
    name: "Elegance",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    description: "Elegancia y estilo se fusionan en estas zapatillas.",
    category: "Formal",
  },
  {
    name: "ActiveStep",
    image: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
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
  return (
    <div>
      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        {modelos.map((modelo, index) => (
          <button
            key={index}
            type="button"
            className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-base font-medium px-5 py-2.5 text-center mr-3 mb-3 dark:text-white dark:focus:ring-gray-800`}
          >
            {modelo.name}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {modelos.map((modelo, index) => (
          <div key={index}>
            <img className="h-auto max-w-full rounded-lg" src={modelo.image} alt={modelo.name} />
            <p className="mt-2">{modelo.description}</p>
            <p className="text-gray-600">{modelo.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Models;
