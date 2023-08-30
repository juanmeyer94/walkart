import React,  {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Home = () => {

  const [currentImage, setCurrentImage] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage % 5) + 1);
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const backgroundImageStyle = {
    backgroundImage: `url(/public/imagen-${currentImage}.jpg)`, // Ruta a las imágenes ajustada
  // "url('./src/image/leftside.jpg')"
  // <div class="bg-[url('/public/fondo2.png')] min-h-screen  w-full bg-cover bg-center static">
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={backgroundImageStyle}>

   {/* return (
     <div className="min-h-screen bg-cover bg-center bg-gradient-to-b from-blue-300 to-blue-500 relative">  */}

      {/* Div centrado en el margen izq */}
      <div className="absolute top-1/2 left-0 transform -translate-y-1/2 p-8">
        <h1 className="text-5xl text-white font-bold mb-4 ml-8">CALZADO</h1>
        <h1 className="text-5xl text-white font-bold mb-4 ml-8">DISEÑADO POR TI</h1>
        <button className="bg-yellow-400 text-white px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300 ml-8 mt-8">
          <Link to="/personalizar">PRUÉBALO AHORA</Link>
        </button>
      </div>
      {/* Div en el margen inferior der */}
      <div className="absolute bottom-0 right-0 mb-8 ml-8 mr-8">
        <a href="https://api.whatsapp.com/send?phone=573233247269&text=Hola!%20Quiero%20ordenar%20mi%20par%20personalizado%20%3AD" target="blank">
          <img src="https://img.icons8.com/color/48/whatsapp--v1.png" alt="WhatsApp" style={{ height: "60px" }} />
        </a>
      </div>
    </div>
  );
};

export default Home;

