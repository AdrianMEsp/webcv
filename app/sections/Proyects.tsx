"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import Link from "next/link";
import chat from "@/app/assets/AgentTor.jpg"
import Image from "next/image";

const Proyectos: React.FC = () => {
  const t = useTranslation();

  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6">
      <h2 className="text-3xl font-bold mb-6">{t.proyectos.title}</h2>
      <div className="space-y-6 max-w-3xl">

        {/* Chatbot */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold">{t.proyectos.chatbot.name}</h3>
          <p className="text-gray-700">{t.proyectos.chatbot.desc}</p>
          <p className="text-sm text-blue-600 mt-2">Stack: React, Next.js,
            TailwindCSS, TypeScript, Supabase, LLM GPT4.1 nano</p>
          <div className="flex flex-col justify-center">
            <Link
              href="https://chatbotv2-eight.vercel.app/"
              className="inline-block mt-3 border-2 rounded-2xl
              px-4 py-2 hover:bg-blue-400 mx-auto text-center"
              target="_blank" rel="noopener noreferrer"
            >
              Go to Chatbot
            </Link>
            <Image className="bg-gray-500 m-2" width={1200} height={1200} alt="chat" src={chat}></Image>
          </div>

        </div>

        {/* Huellitas */}
        <div className="p-4 border rounded-lg shadow-sm bg-white">
          <h3 className="text-xl font-semibold">{t.proyectos.huellitas.name}</h3>
          <p className="text-gray-700">{t.proyectos.huellitas.desc}</p>
          <p className="text-sm text-blue-600 mt-2">Stack: React, TypeScript, TailwindCSS, JWT</p>
        </div>

        {/* CoffeeLate */}
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
