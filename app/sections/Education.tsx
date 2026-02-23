"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Educacion: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold mb-6">{t.educacion.title}</h2>
      <ul className="space-y-4 text-gray-700 md:w-2/3 flex flex-col items-center">
        <li className="mb-5 border-b-2 w-full text-center">{t.educacion.analitycs}</li>
        <li className="mb-5 border-b-2 w-full text-center">{t.educacion.fullstack}</li>
        <li className="mb-5 border-b-2 w-full text-center">{t.educacion.java}</li>
      </ul>
    </div>
  );
};

export default Educacion;

