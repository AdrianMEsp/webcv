"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Languages: React.FC = () => {
    const t = useTranslation();
    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">{t.idiomas.title}</h2>
            <ul className="text-gray-700"> <li>{t.idiomas.es}</li>
                <li>{t.idiomas.en}</li>
            </ul>
        </div>
    );
};

export default Languages;
