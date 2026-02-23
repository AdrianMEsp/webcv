import React from "react";
import Navbar from "./components/NavBar/NavBar";
import Resumen from "./sections/Resume";
import Languages from "./sections/Languages";
import Tecnologies from "./sections/Tecnologies";
import Contact from "./sections/Contact";
import Education from "./sections/Education";
import Proyects from "./sections/Proyects";
import FloatingChat from "./components/FloatingChat/FloatingChat";

function App() {
  return (
    <div className="font-sans bg-gray-50 text-gray-900">
      <Navbar />
      <main className="scroll-smooth">
        <section id="resumen"><Resumen /></section>
        <section id="tecnologias"><Tecnologies /></section>
        <section id="proyectos"><Proyects /></section>
        <section id="educacion"><Education /></section>
        <section id="idiomas"><Languages /></section>
        <section id="contacto"><Contact /></section>
        <section id="chat">
        <FloatingChat />
      </section>
      </main>
    </div>
  );
}

export default App;
