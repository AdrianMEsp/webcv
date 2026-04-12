import Navbar from "./components/NavBar/NavBar";
import Resumen from "./sections/Resume";
import Experience from "./sections/Experience";
import Tecnologies from "./sections/Tecnologies";
import Projects from "./sections/Projects";
import Education from "./sections/Education";
import Languages from "./sections/Languages";
import Contact from "./sections/Contact";
import { TechTicker } from "./sections/Tech-ticker";

function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <main className="scroll-smooth">
        <section id="resumen"><Resumen /></section>
        <TechTicker/>
        <section id="experiencia"><Experience /></section>
        <section id="tecnologias"><Tecnologies /></section>
        <section id="proyectos"><Projects /></section>
        <section id="educacion"><Education /></section>
        <section id="idiomas"><Languages /></section>
        <section id="contacto"><Contact /></section>
      </main>
    </div>
  );
}

export default App;
