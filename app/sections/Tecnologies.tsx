"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import { motion } from "framer-motion";

const Tecnologies: React.FC = () => {
    const t = useTranslation();
    
    const techStack = [
        { category: "Frontend", items: ["JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "TailwindCSS", "Material UI"] },
        { category: "Backend", items: ["Node.js", "Express.js", "PostgreSQL", "MySQL", "MongoDB", "JWT", "RESTful APIs"] },
        { category: "Tools & DevOps", items: ["Git", "GitHub", "Vercel", "Jest", "React Testing Library", "JUnit5", "n8n"] }
    ];

    return (
        <div className="py-20 flex flex-col justify-center items-center px-6 bg-secondary/20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-primary text-center"
            >
                {t.tecnologias.title}
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl w-full">
                {techStack.map((group, idx) => (
                    <motion.div 
                        key={group.category}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:border-primary/30 transition-colors"
                    >
                        <h3 className="text-lg font-bold mb-4 text-accent border-b border-border pb-2">{group.category}</h3>
                        <ul className="space-y-2">
                            {group.items.map(item => (
                                <li key={item} className="flex items-center gap-2 text-foreground/80">
                                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    )
};

export default Tecnologies;
