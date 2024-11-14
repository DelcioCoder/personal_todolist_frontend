import React from "react";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

export const Links = [
  {
    name: "Activities",
    icon: <FaBrain />,
  },

  {
    name: "Notes",
    icon: <FaBookOpen />,
  },
  {
    name: "Admin",
    icon: <RiAdminFill />,
  },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="bg-black  h-12 shadow-lg">
        {/* div principal */}
        <div className="container mx-auto flex justify-between items-center   h-full">
          {/* Logo */}
          <div className="text-white text-2xl font-bold mx-5">WORKBRAIN</div>

          {/* Links desktop */}
          <div className="hidden md:flex mx-5 space-x-10">
            {Links.map((link, i) => {
              return (
                <a
                  key={i}
                  href="#"
                  className="flex gap-3 text-white hover:text-gray-600 transition duration-200"
                >
                  {link.icon} {link.name}
                </a>
              );
            })}

            {/* Botão de login */}
            <div className="bg-blue-600 rounded-xl mx-5 p-2 w-36 text-center transition duration-200 transform hover:scale-105 cursor-pointer">
              <button className="text-white cursor-pointer transition duration-200 hover:opacity-70">
                Login
              </button>
            </div>
          </div>

          {/* Botão do menu - Mobile */}
          <div className="md:hidden mx-4">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {isOpen ? <MdClose /> : <HiMenuAlt2 />}
            </button>
          </div>
        </div>

        {/* Menu mobile */}
        {isOpen && (
          <div className="md:hidden  w-full space-y-6">
            <ul className="flex flex-col bg-black  py-3 text-white text-sm">
              {Links.map((link, i) => (
                <li key={i} className="list-none px-4 my-3">
                  <a
                    href="#"
                    className="block hover:text-gray-600 transition duration-200"
                    onClick={toggleMenu}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}
