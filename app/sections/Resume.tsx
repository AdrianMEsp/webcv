"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import { motion } from "framer-motion";

const Resumen: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-[80vh] flex flex-col justify-center pt-20 xs:pt-10  items-center px-6 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold tracking-wider uppercase mb-6 inline-block border border-primary/20">
          {t.resumen.header}
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight text-foreground">
          {t.resumen.title}
        </h1>
        <h2 className="text-2xl md:text-3xl font-medium text-accent mb-8">
          {t.resumen.subtitle}
        </h2>
        <p className="max-w-2xl text-lg text-foreground/70 leading-relaxed mb-10">
          {t.resumen.description}
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#contacto" 
            className="px-8 py-3 bg-primary text-primary-foreground font-bold rounded-2xl hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
          >
            {t.navbar.contacto}
          </a>
          <a 
            href="#proyectos" 
            className="px-8 py-3 bg-card text-foreground font-bold rounded-2xl border border-border hover:border-primary/50 transition-all"
          >
            {t.navbar.proyectos}
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Resumen;
