"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Educacion: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold mb-6">{t.educacion.title}</h2>
      <ul className="space-y-4 text-gray-700 w-1/2 flex flex-col items-center">
        <li>{t.educacion.analitycs}</li>
        <li>{t.educacion.fullstack}</li>
        <li>{t.educacion.java}</li>
      </ul>
    </div>
  );
};

export default Educacion;

