import React from "react";
import { Search } from "lucide-react";
import { ShoppingCart } from "lucide-react";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "About",
    link: "/#",
  },
  {
    id: 3,
    name: "Shop",
    link: "/#",
  },
];

const Navbar = () => {
  return (
    <div className="container flex items-center justify-between">
      {/*Logo and links */}

      <div className="relative z-40 bg-white duration-200 dark:bg-gray-900 dark:text-white">
        <div className="py-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="tracking-wides text-2xl font-semibold uppercase text-primary sm:text-3xl"
            >
              Farma-nada
            </a>

            {/*Items menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold duration-200 hover:text-gray-600 dark:text-white dark:hover:text-gray-500"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar right section / Seccion derecha del navbar */}
      <div className="flex items-center justify-between gap-4">
        {/* Seccion de busqueda/Searh bar section */}
        <div className="group relative hidden sm:block">
          <input
            type="text"
            placeholder="Buscar..."
            className="w-0 rounded-full px-3 py-1 transition-all duration-300 focus:outline-none group-hover:w-[300px] group-hover:border group-hover:border-gray-500 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 group-hover:dark:bg-gray-800"
          />
          <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-600 duration-200 group-hover:text-primary dark:text-gray-400" />
        </div>
        {/*Order Button Section */}
        <button className="relative p-3">
          <ShoppingCart className="text-xl text-gray-600 hover:text-gray-400 dark:text-gray-300" />
          <div className="iems-center absolute right-0 top-0 flex h-4 w-4 justify-center rounded-full bg-red-500 text-xs text-white">
            4
          </div>
        </button>
        {/* Modo oscuro/Dark mode section */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
