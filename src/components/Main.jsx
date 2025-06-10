import About from "./About";
import Experience from "./Experience";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
const Main = () => {
  return (
    <main id="main-content" className="pt-20">
      <section
        id="home"
        className="min-h-screen flex flex-col items-center justify-center text-center px-6"
      >
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Bem-vindo ao meu portfólio
        </h2>
        <p className="text-lg md:text-xl text-slate-300 max-w-xl">
          Eu sou Lucas Mrc — Engenheiro de Software e desenvolvedor Full Stack.
          Role para baixo e explore meus projetos, experiências e tecnologias.
        </p>
      </section>
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Main;
