"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Resumen: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h1 className="text-4xl font-bold mb-4">{t.resumen.title}</h1>
      <h2 className="text-xl text-blue-600 mb-6">{t.resumen.subtitle}</h2>
      <p className="max-w-2xl text-center text-gray-700">{t.resumen.description}</p>
    </div>
  );
};

export default Resumen;
