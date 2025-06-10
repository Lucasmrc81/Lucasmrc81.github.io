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
            Sou um engenheiro de software em formação e desenvolvedor full
            stack, com uma paixão profunda por tecnologia, inovação e automação
            de sistemas. Ao longo da minha jornada, busco constantemente evoluir
            minhas habilidades para criar soluções tecnológicas robustas,
            eficientes e escaláveis.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Tenho como objetivo transformar ideias em soluções impactantes e
            acessíveis, capazes de atender às necessidades reais, simplificar
            processos e melhorar a experiência do usuário. Meu compromisso é
            impulsionar a inovação e contribuir para o avanço tecnológico por
            meio da criação de sistemas que proporcionem valor e resultados
            concretos.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">1,5</div>
              <div className="text-gray-400">Anos de experiência</div>
            </div>

            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">8+</div>
              <div className="text-gray-400">Projetos concluídos</div>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">10+</div>
              <div className="text-gray-400">Tecnologias dominadas</div>
            </div>
            <div className="text-center">
              <div className="text-blue-500 text-3xl font-bold mb-2">100%</div>
              <div className="text-gray-400">Focado na qualidade</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
