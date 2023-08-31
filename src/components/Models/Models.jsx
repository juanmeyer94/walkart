import React, { useState } from "react";
import { Link } from "react-router-dom";

const modelos = [
  {
    name: "Shadow",
    image: "https://i8.amplience.net/i/jpl/jd-333404-a-142a4d23278b7f965af65f04f5b71cbc",
    description: "Una zapatilla de estilo único y moderno.",
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
  
    const uniqueCategories = ["Todos", ...new Set(modelos.map((modelo) => modelo.category))];
  
    const filteredModelos = selectedCategory === "Todos" ? modelos : modelos.filter((modelo) => modelo.category === selectedCategory);
  
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
              className="relative"
              onMouseEnter={() => setHoveredModel(index)}
              onMouseLeave={() => setHoveredModel(null)}
            >
              <img
                className={`h-auto max-w-full rounded-lg transition-opacity ${
                  hoveredModel === index ? "opacity-75" : "opacity-100"
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
      </div>
    );
  };
  
  export default Models;