import { Link, useLocation } from "react-router-dom";

const NavDash = () => {
  const location = useLocation();

  return (
    <div className="bg-zinc-100 p-2">
      <div className="flex justify-center items-center space-x-8">
        <Link to="/dashboard">
        <button
  className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl font-medium px-4 py-2 text-center dark:text-white dark:focus:ring-gray-800 shadow-lg`}
  style={{
    backgroundColor: location.pathname === "/dashboard" ? "black" : "",
    color: location.pathname === "/dashboard" ? "white" : "",
  }}
>
            LISTA DE PEDIDOS
          </button>
        </Link>
        <Link to="/dashboard/post">
        <button
  className={`text-gray-900 border border-white hover:border-gray-200 dark:border-gray-900 dark:bg-gray-900 dark:hover:border-gray-700 bg-white focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-full text-xl font-medium px-4 py-2 text-center dark:text-white dark:focus:ring-gray-800 shadow-lg`}
  style={{
    backgroundColor: location.pathname === "/dashboard/post" ? "black" : "",
    color: location.pathname === "/dashboard/post" ? "white" : "",
  }}
>
            NUEVO MODELO
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavDash;
