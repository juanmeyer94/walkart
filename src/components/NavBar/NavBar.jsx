import { Button } from "@/components/ui/button";
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between items-center text-3xl font-extrabold w-full font-mono bg-zinc-100 p-4">
      <img src={logo} alt="Air White" className="h-[60px] w-[150px] rounded-[30%] lg:mx-auto lg:ml-0" />
      <div className="flex space-x-12 items-center">
        <Link to="/" >
          <button className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-2xl font-medium px-5 py-2.5 text-center mr-2 mb-3 dark:text-white dark:focus:ring-gray-800 shadow-lg"
          style={{
            backgroundColor: location.pathname === "/" ? "black" : "",
            color: location.pathname === "/" ? "white" : "",
          }}>INICIO</button>
        </Link>
        <Link to="/models" >
          <button className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-2xl font-medium px-5 py-2.5 text-center mr-2 mb-3 dark:text-white dark:focus:ring-gray-800 shadow-lg"
          style={{
            backgroundColor: location.pathname === "/models" ? "black" : "",
            color: location.pathname === "/models" ? "white" : "",
          }}>CREACIONES</button>
        </Link>
        <Link to="/aboutus" >
          <button className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-2xl font-medium px-5 py-2.5 text-center mr-2 mb-3 dark:text-white dark:focus:ring-gray-800 shadow-lg"
          style={{
            backgroundColor: location.pathname === "/aboutus" ? "black" : "",
            color: location.pathname === "/aboutus" ? "white" : "",
          }}>NOSOTROS</button>
        </Link>
        <Link to="/contact" >
          <button className="text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-2xl font-medium px-5 py-2.5 text-center mr-2 mb-3 dark:text-white dark:focus:ring-gray-800 shadow-lg"
          style={{
            backgroundColor: location.pathname === "/contact" ? "black" : "",
            color: location.pathname === "/contact" ? "white" : "",
          }}>CONTACTOS</button>
        </Link>
        <Link to="/makeitreal">
          <button className="bg-yellow-400 hover:bg-yellow-500 text-black text-2xl px-6 py-2 rounded-full shadow-lg transition duration-300 mb-3"
          style={{
            backgroundColor: location.pathname === "/makeitreal" ? "black" : "",
            color: location.pathname === "/makeitreal" ? "white" : "",
          }}>HAZLO REAL</button>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;





