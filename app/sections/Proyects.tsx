"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Proyectos: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold mb-6">{t.proyectos.title}</h2>
      <div className="space-y-6 max-w-3xl">
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold">{t.proyectos.huellitas.name}</h3>
          <p className="text-gray-700">{t.proyectos.huellitas.desc}</p>
          <p className="text-sm text-blue-600 mt-2">Stack: React, TypeScript, TailwindCSS, JWT</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold">{t.proyectos.coffeelate.name}</h3>
          <p className="text-gray-700">{t.proyectos.coffeelate.desc}</p>
          <p className="text-sm text-blue-600 mt-2">Stack: React, Next.js, TailwindCSS, TypeScript</p>
        </div>
      </div>
    </div>
  );
};

export default Proyectos;
