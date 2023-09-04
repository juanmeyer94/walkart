import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import imagen1 from "./images/imagen1.jpg";
import imagen2 from "./images/imagen2.jpg";
import imagen3 from "./images/imagen3.jpg";
import imagen4 from "./images/imagen4.jpg";

const Home = () => {
  const getImageSource = (imageNumber) => {
    switch (imageNumber) {
      case 1:
        return imagen1;
      case 2:
        return imagen2;
      case 3:
        return imagen3;
      case 4:
        return imagen4;
      default:
        return imagen1;
    }
  };

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 4) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(${getImageSource(currentImage)})`,
  };

  return (
    <div className="min-h-screen bg-cover bg-center relative" style={backgroundImageStyle}>
      
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-8">
        <h1 className="text-5xl text-white font-bold mb-4 ml-8">CALZADO</h1>
        <h1 className="text-5xl text-white font-bold mb-4 ml-8">DISEÑADO POR TI</h1>
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 ml-8 mt-8">
          <Link to="/personalizar">PRUÉBALO AHORA</Link>
        </button>
      </div>

      <div className="absolute bottom-0 right-0 mb-4 md:mb-8 mr-4 md:mr-8">
        <a href="https://api.whatsapp.com/send?phone=573233247269&text=Hola!%20Quiero%20ordenar%20mi%20par%20personalizado%20%3AD" target="blank">
          <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" className="h-12 md:h-16" />
        </a>
      </div>
    </div>
  );
};

export default Home;


