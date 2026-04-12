"use client";
import { useLanguage } from "@/app/context/LanguageContext";
import { useTheme } from "@/app/context/ThemeContext";
import { useTranslation } from "@/app/translations/useTranslation";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslation();
  const { language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { id: "resumen", label: t.navbar.resumen },
    { id: "experiencia", label: t.navbar.experiencia },
    { id: "tecnologias", label: t.navbar.tecnologias },
    { id: "proyectos", label: t.navbar.proyectos },
    { id: "educacion", label: t.navbar.educacion },
    { id: "idiomas", label: t.navbar.idiomas },
    { id: "contacto", label: t.navbar.contacto },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "py-3 glass shadow-lg shadow-primary/5" : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        
        {/* Logo/Name */}
        <div className="text-xl font-bold tracking-tighter text-primary">
          AE<span className="text-accent">.</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {links.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="text-sm font-bold text-foreground/70 hover:text-primary transition-colors uppercase tracking-widest px-2 py-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center bg-secondary hover:bg-accent hover:text-white rounded-xl transition-all shadow-sm border border-border"
            title="Toggle Theme"
          >
            {!mounted ? (
              <div className="w-5 h-5" />
            ) : theme === "light" ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 9h-1m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
              </svg>
            )}
          </button>

          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="w-10 h-10 flex items-center justify-center font-bold text-xs bg-secondary hover:bg-primary hover:text-white rounded-xl transition-all shadow-sm border border-border"
            title="Switch Language"
          >
            {language === "es" ? "EN" : "ES"}
          </button>

          {/* Burger Button (Mobile) */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground hover:bg-secondary rounded-xl transition-all"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border md:hidden"
          >
            <ul className="flex flex-col p-6 space-y-4">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className="block text-lg font-bold text-foreground/80 hover:text-primary transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
