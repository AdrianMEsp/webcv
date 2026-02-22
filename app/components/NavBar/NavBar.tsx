"use client"
import { useLanguage } from "@/app/context/LanguageContext";
import { useTranslation } from "@/app/translations/useTranslation";
import React from "react";

const Navbar: React.FC = () => {
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
    <nav className="fixed top-0 w-full bg-white shadow-md z-50 flex justify-between px-6">
      <ul className="flex space-x-6 py-4">
        {links.map(link => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              className="text-gray-700 hover:text-blue-600 font-medium"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
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
