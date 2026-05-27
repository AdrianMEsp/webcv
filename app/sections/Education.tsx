"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import { motion } from "framer-motion";

const Education: React.FC = () => {
  const t = useTranslation();

  const educationList = [
    {
      title: t.educacion.university,
      institution: "UNLP Facultad de Informática",
      desc: t.educacion.analitycs,
      period: "2023 - Present"
    },
    {
      title: "Full Stack Web Developer Bootcamp",
      institution: "Soy Henry",
      desc: t.educacion.fullstack,
      period: "07/2025 – 01/2026"
    },
    {
      title: "Backend with Java",
      institution: "Soy Henry",
      desc: t.educacion.java,
      period: "01/2025 – 04/2025"
    }
  ];

  return (
    <div className="py-20 flex flex-col justify-center items-center px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-primary"
      >
        {t.educacion.title}
      </motion.h2>

      <div className="max-w-4xl w-full flex flex-col gap-6">
        {educationList.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card p-6 rounded-2xl border border-border shadow-sm flex flex-col md:flex-row gap-4 items-start"
          >
            <div className="bg-primary/10 p-3 rounded-xl text-primary">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                <h3 className="text-xl font-bold">{edu.title}</h3>
                <span className="text-sm font-mono text-foreground/50">{edu.period}</span>
              </div>
              <p className="text-accent font-semibold mb-2">{edu.institution}</p>
              <p className="text-foreground/70 text-sm leading-relaxed">{edu.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
