"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Tecnologies: React.FC = () => {
    const t = useTranslation();
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">{t.tecnologias.title}</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                <li>JavaScript (ES6+)</li>
                <li>TypeScript</li>
                <li>React.js / Next.js</li>
                <li>TailwindCSS / Material UI</li>
                <li>Node.js / Express.js</li>
                <li>PostgreSQL / MySQL / MongoDB</li>
                <li>JWT / APIs RESTful</li>
                <li>Git / GitHub / Vercel</li>
                <li>Testing: Jest, React Testing Library, JUnit5</li>
            </ul>
        </div>
    )
};

export default Tecnologies;
