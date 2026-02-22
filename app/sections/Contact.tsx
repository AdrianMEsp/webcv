"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";

const Contact: React.FC = () => {
    const t = useTranslation();

    return (
        <div className="min-h-screen flex flex-col justify-center items-center px-6">
            <h2 className="text-3xl font-bold mb-6">{t.contacto.title}</h2>
            <p className="text-gray-700">📍 Magdalena, Buenos Aires, Argentina</p>
            <p className="text-gray-700">📧 adrianmespindola@gmail.com</p>
            <p className="text-gray-700">📱 +54 221 566 2746</p>
            <p className="text-blue-600 mt-4">
                <a href="https://github.com/AdrianMEsp" target="_blank" rel="noopener noreferrer">GitHub</a> |{" "}
                <a href="https://linkedin.com/in/adrian-espindola" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </p>
        </div>
    )
};

export default Contact;
