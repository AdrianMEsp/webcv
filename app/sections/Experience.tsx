"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import { motion } from "framer-motion";

const Experience: React.FC = () => {
  const t = useTranslation();

  const technologies = [
    "v0", "TypeScript", "JavaScript", "LLM", "Embedding", 
    "Chat AI SDK Vercel", "Chatkit", "Tailwind", "Vercel", "GitHub"
  ];

  return (
    <div className="py-20 flex flex-col justify-center items-center px-6 bg-secondary/30">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-primary"
      >
        {t.experiencia.title}
      </motion.h2>

      <div className="max-w-4xl w-full">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative pl-8 border-l-2 border-primary/30"
        >
          {/* Dot */}
          <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
          
          <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold">{t.experiencia.protolylat.role}</h3>
                <p className="text-accent font-semibold">{t.experiencia.protolylat.company}</p>
              </div>
              <p className="text-sm text-foreground/60 md:text-right mt-1 md:mt-0 font-mono">
                {t.experiencia.protolylat.period}
              </p>
            </div>
            
            <p className="text-foreground/80 mb-6 leading-relaxed">
              {t.experiencia.protolylat.desc}
            </p>

            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;
