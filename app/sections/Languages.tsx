"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import { motion } from "framer-motion";

const Languages: React.FC = () => {
    const t = useTranslation();

    const languages = [
        { name: t.idiomas.esName, level: t.idiomas.esLevel, percent: 100 },
        { name: t.idiomas.enName, level: t.idiomas.enLevel, percent: 70 },
    ];

    return (
        <div className="py-20 flex flex-col justify-center items-center px-6 bg-secondary/10">
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 text-primary"
            >
                {t.idiomas.title}
            </motion.h2>

            <div className="max-w-2xl w-full flex flex-col gap-8">
                {languages.map((lang, idx) => (
                    <motion.div
                        key={lang.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                    >
                        <div className="flex justify-between mb-2 items-end">
                            <span className="text-xl font-bold">{lang.name}</span>
                            <span className="text-sm font-medium text-accent">{lang.level}</span>
                        </div>
                        <div className="w-full h-3 bg-card rounded-full overflow-hidden border border-border">
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${lang.percent}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: 0.3 }}
                                className="h-full bg-linear-to-r from-primary to-accent"
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
};

export default Languages;
