import { Button } from "@/components/ui/button"

 
const NavBar = () => {
    return (
        <div className="columns-5 flex space-x-6 justify-center bg-zinc-100">
        
        <div className="mr-14"><h1>WALKART</h1></div>
        <div><Button className="hover:text-gray-500" variant="ghost">INICIO</Button></div>
        <div><Button className="hover:text-gray-500" variant="ghost">CREACIONES</Button></div>
        <div><Button className="hover:text-gray-500" variant="ghost">NOSOTROS</Button></div>
        <div><Button className="hover:text-gray-500" variant="ghost">CONTACTOS</Button></div>
        <div><Button className="text-2xl" variant="ghost">🛒</Button></div>
        
        </div>
    )
}

export default NavBar; 