"use client"
import React from "react";
import { useTranslation } from "../translations/useTranslation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

// Placeholder for images if not available
import agentTor from "@/app/assets/AgentTor.jpg";
import aichat from "@/app/assets/aichat.jpg";
import aiproduct from "@/app/assets/aiproductt.jpg";
import buildin from "@/app/assets/buildin.jpg";
import next from "@/app/assets/next.jpg";
import confeccaocafe from "@/app/assets/confeccaocafe.jpg";
import ecommy from "@/app/assets/ecommy.jpg";

const Projects: React.FC = () => {
  const t = useTranslation();

  const projectList = [
    {
      id: "aisdk",
      name: t.proyectos.aisdk.name,
      desc: t.proyectos.aisdk.desc,
      link: "https://chatbot-aisdk.vercel.app/",
      stack: ["React", "Next.js", "Vercel AI SDK", "TypeScript"],
      image: aichat
    },
    {
      id: "productbuilder",
      name: t.proyectos.productbuilder.name,
      desc: t.proyectos.productbuilder.desc,
      link: "https://aiproductbuilder.protolylat.com/",
      stack: ["Next.js", "TailwindCSS", "v0", "AI"],
      image: aiproduct
    },
    {
      id: "nextjs",
      name: t.proyectos.nextjs.name,
      desc: t.proyectos.nextjs.desc,
      link: "https://buildinnextjs.protolylat.com/",
      stack: ["Next.js 15", "React 19", "TailwindCSS"],
      image: next
    },
    {
      id: "n8n",
      name: t.proyectos.n8n.name,
      desc: t.proyectos.n8n.desc,
      link: "https://buildinn8n.protolylat.com/",
      stack: ["n8n", "Automation", "Workflows", "API"],
      image: buildin
    },
    {
      id: "chatbot",
      name: t.proyectos.chatbot.name,
      desc: t.proyectos.chatbot.desc,
      link: "https://chatbotv2-eight.vercel.app/", // Keep original link from file
      stack: ["React", "Next.js", "Supabase", "GPT-4.1 Nano"],
      image: agentTor
    },
    {
      id: "confeccaocafe",
      name: t.proyectos.confeccaocafe.name,
      desc: t.proyectos.confeccaocafe.desc,
      link: "https://confeccaocafedobrasil.protolylat.com/",
      stack: ["React 19", "Next.js", "TailwindCSS", "OpenCode"],
      image: confeccaocafe
    },
    {
      id: "ecommy",
      name: t.proyectos.ecommy.name,
      desc: t.proyectos.ecommy.desc,
      link: "https://ecommy.protolylat.com/",
      stack: ["React 19", "Next.js", "TailwindCSS", "OpenCode"],
      image: ecommy
    },
    /* {
      id: "huellitas",
      name: t.proyectos.huellitas.name,
      desc: t.proyectos.huellitas.desc,
      link: "#",
      stack: ["React", "TypeScript", "TailwindCSS", "JWT"],
      image: null
    },
    {
      id: "coffeelate",
      name: t.proyectos.coffeelate.name,
      desc: t.proyectos.coffeelate.desc,
      link: "#",
      stack: ["React", "Next.js", "TailwindCSS", "TypeScript"],
      image: null
    } */
  ];

  return (
    <div className="py-20 flex flex-col justify-center items-center px-6">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-12 text-primary"
      >
        {t.proyectos.title}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full">
        {projectList.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 shadow-sm flex flex-col"
          >
            {project.image && (
              <div className="relative h-48 w-full overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.name} 
                  fill 
                  className="object-cover scale-110 group-hover:scale-125 transition-transform duration-500"
                />
              </div>
            )}
            
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.name}
              </h3>
              <p className="text-foreground/70 text-sm mb-4 line-clamp-3">
                {project.desc}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6 mt-auto">
                {project.stack.map(tech => (
                  <span key={tech} className="text-[10px] uppercase tracking-wider font-bold text-accent bg-accent/10 px-2 py-0.5 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              {project.link !== "#" && (
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-semibold text-white bg-primary rounded-xl hover:bg-primary/90 transition-colors gap-2"
                >
                  {t.proyectos.viewProject}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
