"use client"

import { motion } from "framer-motion"

const TECH_BADGES = [
  "Next.js", "Vercel", "Tailwind CSS", "v0.app", "Cursor", 
  "Claude AI", "Framer Motion", "TypeScript", "JavaScript", 
  "n8n", "Supabase", "React", "Node.js", "GPT-4"
]

export function TechTicker() {
  const items = [...TECH_BADGES, ...TECH_BADGES, ...TECH_BADGES]

  return (
    <div className="relative py-8 bg-primary/5 border-y border-border overflow-hidden">
      {/* Gradients to fade edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
      
      <div className="flex">
        <motion.div
          className="flex items-center gap-12 whitespace-nowrap px-6"
          animate={{ x: [0, -2000] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
        >
          {items.map((badge, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <span className="w-2 h-2 rounded-full bg-accent opacity-50 group-hover:opacity-100 transition-opacity"></span>
              <span className="text-foreground/60 group-hover:text-primary text-lg font-bold font-mono tracking-tighter transition-colors select-none">
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
