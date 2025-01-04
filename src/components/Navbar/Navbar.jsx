import React from "react";

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
    <div className="container">
      {/*Logo and links */}

      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40">
        <div className="py-4">
          <div className="flex justify-between items-center">
            <a
              href="#"
              className="text-primary 
                        font-semibold 
                        tracking-wides
                        text-2xl uppercase 
                        sm:text-3xl"
            >
              Farmanada
            </a>

            {/*Items menu */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-6">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a href={data.link}>{data.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/*Navbar right section / Seccion derecha del navbar */}
    </div>
  );
};

export default Navbar;
