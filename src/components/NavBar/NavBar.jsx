import { Button } from "@/components/ui/button";
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center text-3xl font-extrabold w-full font-mono bg-zinc-100 p-4">
      <img src={logo} alt="Air White" className="h-[80px] w-[250px] rounded-[30%] lg:mx-auto lg:ml-0" />
      <div className="flex space-x-12 items-center">
        <Link to="/" >
          <button className="hover:text-gray-500 text-2xl focus:outline-none" variant="ghost">INICIO</button>
        </Link>
        <Link to="/models" >
          <button className="hover:text-gray-500 text-2xl focus:outline-none">CREACIONES</button>
        </Link>
        <Link to="/aboutus" >
          <button className="hover:text-gray-500 text-2xl focus:outline-none">NOSOTROS</button>
        </Link>
        <Link to="/contact" >
          <button className="hover:text-gray-500 text-2xl focus:outline-none">CONTACTOS</button>
        </Link>
        <Link to="/makeitreal">
        <button className="bg-yellow-400 text-black text-2x1 px-6 py-2 rounded-full shadow-lg hover:bg-yellow-500 transition duration-300">MAKE IT REAL</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;




