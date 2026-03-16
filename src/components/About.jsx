import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="bg-slate-800 px-4 py-2 rounded-md">Quem sou Eu</span>
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-1 bg-blue-500"></span>
        </h2>

        <div className="max-w-4xl mx-auto glass-card p-8 rounded-xl">
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Sou estudante de Engenharia de Software e desenvolvedor Full Stack,
            atualmente estagiário na{" "}
            <span className="text-blue-400 font-semibold">IBM</span>, onde atuo
            no desenvolvimento de aplicações corporativas utilizando Angular,
            Node.js e Java com Spring Boot. Trabalho com integração de APIs
            REST, CI/CD e arquitetura modular em projetos reais de grande escala.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Além da IBM, desenvolvo projetos pessoais como a assistente virtual{" "}
            <span className="text-blue-400 font-semibold">EVA</span>, que combina
            Python, NLP e inteligência artificial. Tenho experiência com
            desenvolvimento mobile em Kotlin, Flutter e React Native, e busco
            constantemente evoluir minhas habilidades para criar soluções que
            gerem valor real para pessoas e negócios.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">+8</div>
              <div className="text-gray-400">Meses na IBM</div>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">8+</div>
              <div className="text-gray-400">Projetos concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">13+</div>
              <div className="text-gray-400">Tecnologias dominadas</div>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">7</div>
              <div className="text-gray-400">Certificações</div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;