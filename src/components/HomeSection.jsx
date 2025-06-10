import React from "react";
import fotoPerfil from "../assets/perfil.png";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="pt-32 pb-20 px-6 min-h-screen flex items-center"
    >
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/5 lg:w-1/3 mb-10 md:mb-0 transform scale-100 hover:scale-105 transition duration-500">
            {/* Utilize uma imagem em assets/images, ou mantenha o placeholder.
                Se for de assets, use: src="/assets/images/lucas_mrc.jpg" */}
            <img
              src={fotoPerfil}
              alt="Lucas Mrc"
              className="w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-4 border-blue-500 shadow-lg shadow-blue-500/50 mx-auto"
            />
          </div>

          <div className="md:w-1/2 md:pl-12 md:ml-16 glass-card p-8 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              <span className="text-blue-500">Olá, eu sou</span> Lucas Mrc
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6 typing-effect">
              Engenheiro de Software
            </h2>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-slate-700 px-4 py-2 rounded-full flex items-center">
                <i className="fab fa-java text-blue-400 mr-2 text-xl"></i>
                <span className="text-sm">Java</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full flex items-center">
                <i className="fab fa-js text-yellow-400 mr-2 text-xl"></i>
                <span className="text-sm">JavaScript</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full flex items-center">
                <i className="fas fa-code text-green-400 mr-2 text-xl"></i>
                <span className="text-sm">Kotlin</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full flex items-center">
                <i className="fab fa-react text-blue-300 mr-2 text-xl"></i>
                <span className="text-sm">React</span>
              </div>
              <div className="bg-slate-700 px-4 py-2 rounded-full flex items-center">
                <i className="fab fa-git-alt text-orange-500 mr-2 text-xl"></i>
                <span className="text-sm">Git</span>
              </div>
            </div>

            <div className="flex space-x-4">
  <a
    href="#contact"
    className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition flex items-center"
  >
    <i className="fas fa-paper-plane mr-2"></i> Contate-me
  </a>
  <a
    href="/curriculo.pdf"  
    className="border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white px-6 py-3 rounded-md transition flex items-center"
    download="Lucas_Curriculo.pdf" 
  >
    <i className="fas fa-file-download mr-2"></i> Download CV
  </a>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
