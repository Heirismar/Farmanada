import React from "react";
import { Search} from 'lucide-react';

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
    <div className="container flex justify-between items-center">
      {/*Logo and links */}

      <div className="bg-white 
                      dark:bg-gray-900 
                      dark:text-white 
                      duration-200 
                      relative z-40">
        <div className="py-4">
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-primary 
                        font-semibold 
                        tracking-wides
                        text-2xl uppercase 
                        sm:text-3xl"
            >
              Farma-nada
            </a>

            {/*Items menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link} 
                    className="inline-block px-4
                              font-semibold 
                              hover:text-gray-600 
                              dark:text-white 
                              duration-200 
                              dark:hover:text-gray-500">{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar right section / Seccion derecha del navbar */}
      <div className="flex justify-between items-center gap-4">
      {/* Seccion de busqueda/Searh bar section */ }
      <div className="relative group hidden sm:block">
                <input type="text" placeholder="Buscar..."
                  className="
                  search-bar
                  "/>
                  <Search 
                  className="text-xl text-gray600
                  dark:text-gray-400
                  "
                  />
                
      {/* Modo oscuro/Dark mode section */ }
      <div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
