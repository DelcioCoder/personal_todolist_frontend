import React from "react";
import { motion } from "framer-motion";
import { Link as RouterLink } from "react-router-dom";

export default function LoginButton({ isAuthenticated, isOpen, setIsOpen }) {
  return (
    <>
      <motion.div className="bg-blue-600 rounded-xl mx-5 p-2 w-36 text-center transition duration-200 transform hover:scale-105 cursor-pointer">
        {isAuthenticated() ? (
          <RouterLink
            to="/"
            onClick={() => {
              localStorage.removeItem("token"); // remove o token do localStorage
              setIsOpen(!isOpen); // fecha o menu de navegação
              window.location.href = "/"; // Redireciona o usuário para a página home
            }}
            className="text-white font-bold cursor-pointer transition duration-200 hover:opacity-70"
          >
            Logout
          </RouterLink>
        ) : (
          <RouterLink
            onClick={() => setIsOpen(!isOpen)}
            to="/login"
            className="text-white font-bold transition duration-200 hover:opacity-70"
          >
            Login
          </RouterLink>
        )}
      </motion.div>
    </>
  );
}
