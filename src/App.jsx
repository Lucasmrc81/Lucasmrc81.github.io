import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import HeroSection from "./components/HomeSection.jsx";
import AboutSection from "./components/About.jsx";
import SkillsSection from "./components/Skills.jsx";
import ExperienceSection from "./components/Experience.jsx";
import ProjectsSection from "./components/Projects.jsx";
import ContactSection from "./components/Contact.jsx";
import ParticlesBackground from "./components/ParticlesBackground.jsx";

function App() {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
