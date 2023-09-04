import { Button } from "@/components/ui/button";
import logo from "../Images/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {

   



    return (
        <div className="flex flex-col lg:flex-row text-3xl font-extrabold w-full font-mono bg-zinc-100 p-4">
            <img src={logo} alt="Air White" className="h-[80px] w-[250px] rounded-[30%] mx-auto lg:mx-0 lg:self-center" />
            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-12 items-center mt-4 lg:mt-0">
                <Link to="/" >
                <Button className="hover:text-gray-500 text-2xl" variant="ghost">INICIO</Button>
                </Link>
                <Button className="hover:text-gray-500 text-2xl" variant="ghost">CREACIONES</Button>
                <Button className="hover:text-gray-500 text-2xl" variant="ghost">NOSOTROS</Button>
                <Button className="hover:text-gray-500 text-2xl" variant="ghost">CONTACTOS</Button>
                <Link to="/personalizar">
                <Button className="hover:text-gray-500 text-2xl bg-yellow-400 hover:bg-yellow-500 transition duration-300" variant="ghost">MAKE IT REAL</Button>
                </Link>
            </div>
        </div>
    );
}

export default NavBar;

