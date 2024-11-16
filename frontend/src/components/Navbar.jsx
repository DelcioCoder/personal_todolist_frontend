import React from "react";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FaBrain } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { RiAdminFill } from "react-icons/ri";

import { Link as RouterLink } from "react-router-dom";

import { motion, AnimatePresence } from "framer-motion";


export const Links = [
  {
    name: "Activities",
    icon: <FaBrain />,
    to: "/activities",
  },

  {
    name: "Notes",
    icon: <FaBookOpen />,
    to: "/notes",
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
        {/* motion.div principal */}
        <motion.div className="container mx-auto flex justify-between items-center   h-full">
          {/* Logo */}
          <motion.div className="text-white text-2xl font-bold mx-5">WORKBRAIN</motion.div>

          {/* Links desktop */}
          <motion.div className="hidden md:flex mx-5 space-x-10">
            {Links.map((link, i) => {
              return (
                <RouterLink
                  key={i}
                  to={link.to}
                  className="flex gap-3 text-white text-md mt-2 font-extralight hover:text-gray-600 transition duration-200"
                >
                  {link.icon} {link.name}
                </RouterLink>
              );
            })}

            {/* Botão de login */}
            <motion.div className="bg-blue-600 rounded-xl mx-5 p-2 w-36 text-center transition duration-200 transform hover:scale-105 cursor-pointer">
              <button className="text-white cursor-pointer transition duration-200 hover:opacity-70">
                <RouterLink to="/login">
                    Login
                </RouterLink>
              </button>
            </motion.div>
          </motion.div>

          {/* Botão do menu - Mobile */}
          <motion.div className="md:hidden mx-4">
            <button onClick={toggleMenu} className="text-white text-3xl">
              {isOpen ? <MdClose /> : <HiMenuAlt2 />}
            </button>
          </motion.div>
        </motion.div>

        {/* Menu mobile */}
        <AnimatePresence>
          {isOpen && (
            <motion.div key="box" exit={{opacity:0}} className="md:hidden  w-full space-y-6 z-50 relative">
              <motion.ul className="flex flex-col bg-black  py-3 text-white text-sm">
                {Links.map((link, i) => (
                  <motion.li key={i} className="list-none px-4 my-3">
                    <motion.a
                      href="#"
                      className="block hover:text-gray-600 transition duration-200"
                      onClick={toggleMenu}
                    >
                      {link.name}
                    </motion.a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
