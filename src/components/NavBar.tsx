import { useState } from "react";
import { LuMenu } from "react-icons/lu";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white flex items-center justify-between h-14 px-4 py-8">
      {/* Botón solo visible en pantallas pequeñas */}
      <button
        onClick={toggleMenu}
        className={`cursor-pointer lg:hidden ${isOpen ? "z-20" : "block"}`}
      >
        <LuMenu fontSize={34} />
      </button>

      {/* Título centrado en móvil, alineado a la izquierda en lg */}
      <Link
        to="/"
        className="bangers-font text-3xl text-center absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:text-left lg:ml-16"
      >
        PROMOTOOLS
      </Link>
      {/* <Link
        to="/"
        className="absolute left-1/2 transform -translate-x-1/2 lg:static lg:transform-none lg:text-left lg:ml-20"
      >
        <img
          src="/PromoToolsLogo2.png"
          alt="Logo"
          className="w-44 h-auto"
        />
      </Link> */}

      {/* Navegación */}
      <nav
        className={`z-10 absolute top-20 left-0 w-full h-svh bg-white opacity-95 text-black flex flex-col items-center justify-center transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      lg:static lg:h-auto lg:w-auto lg:bg-transparent lg:opacity-100 lg:flex lg:flex-row lg:translate-x-0`}
      >
        <ul className="flex text-center flex-col gap-16 text-3xl font-semibold bayon lg:flex-row lg:gap-8 lg:text-base lg:text-white">
          {[
            { label: "Inicio", path: "/" },
            { label: "Servicios", path: "/servicios" },
            { label: "Nosotros", path: "/nosotros" },
          ].map((item, idx) => (
            <li key={idx} className="group relative">
              <Link to={item.path} onClick={toggleMenu} className="relative lg:text-lg">
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
}
