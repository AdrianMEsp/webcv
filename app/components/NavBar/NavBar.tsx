"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTranslation } from "@/app/translations/useTranslation";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslation();
  const { language, toggleLanguage } = useLanguage();

  const links = [
    { id: "resumen", label: t.navbar.resumen },
    { id: "tecnologias", label: t.navbar.tecnologias },
    { id: "proyectos", label: t.navbar.proyectos },
    { id: "educacion", label: t.navbar.educacion },
    { id: "idiomas", label: t.navbar.idiomas },
    { id: "contacto", label: t.navbar.contacto },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex items-center justify-between px-6">
      
      {/* Burger Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm
           text-gray-500 rounded-lg md:hidden hover:bg-gray-200 focus:outline-none focus:ring-2
           focus:ring-blue-400"
      >
        <svg className="w-5 h-5" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Overlay*/}
      {isMenuOpen && (
        <div className="fixed inset-0 md:hidden" 
        onClick={() => setIsMenuOpen(false)}
        ></div>
      )}

      {/* Menu */}
      <ul
        className={`flex-col md:mt-2 mt-50 md:flex border border-gray-500 md:border-0
          md:flex-row md:space-x-6 py-4 absolute md:static left-0 w-full 
          md:w-auto bg-white transition-all duration-300 ${
          isMenuOpen ? "flex" : "hidden"
        }`}
      >
        {links.map((link) => (
          <li key={link.id} className="px-4 py-2 md:px-0 md:py-0">
            <a
              href={`#${link.id}`}
              className="block text-gray-700 hover:text-blue-600 font-medium"
              onClick={() => setIsMenuOpen(false)} // cerrar menú al hacer click
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Language*/}
      <button
        onClick={toggleLanguage}
        className="m-2 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {language === "es" ? "EN" : "ES"}
      </button>
    </nav>
  );
};

export default Navbar;
