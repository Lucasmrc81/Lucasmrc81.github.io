import React from "react";

// Experiências reais
const experiences = [
  {
    title: "Infinity Bank",
    company: "Projeto Pessoal",
    years: "2023",
    description:
      "Desenvolvimento de um banco digital funcional utilizando HTML, CSS e JavaScript. O projeto inclui funcionalidades como consulta de saldo, pagamentos, transferências e extrato bancário. Foco em interfaces responsivas e interações dinâmicas, demonstrando habilidades na criação de soluções completas e bem estruturadas.",
    icon: "fas fa-briefcase",
    tags: ["HTML", "CSS", "JavaScript", "Banco Digital"],
  },
  {
    title: "ZapCar",
    company: "Projeto Pessoal",
    years: "2023",
    description:
      "Projeto pessoal que consiste em um banco digital funcional desenvolvido com HTML, CSS e JavaScript. Inclui funcionalidades como consulta de saldo, pagamentos, transferências e extrato bancário. Por meio desse projeto, aprimorei minhas habilidades em interfaces responsivas e interações dinâmicas, consolidando meu conhecimento em desenvolvimento front-end.",
    icon: "fas fa-car",
    tags: ["HTML", "CSS", "JavaScript", "Front-end"],
  },
];

// Formações reais
const educations = [
  {
    title: "Engenharia de Software",
    institution: "Cruzeiro do Sul",
    years: "2025 - 2028",
    icon: "fas fa-university",
    description:
      "Engenharia de Software é a área da tecnologia dedicada ao desenvolvimento, manutenção e otimização de sistemas computacionais. O foco está na criação de soluções escaláveis, seguras e eficientes, utilizando boas práticas, metodologias ágeis e inovação para atender às demandas do mercado.",
    tags: ["Engenharia de Software", "Metodologias Ágeis", "Inovação"],
  },
  {
    title: "Back-End com Java",
    institution: "Dio.me",
    years: "2024",
    icon: "fas fa-server",
    description:
      "Desenvolvimento Back-End com Java é a área focada na construção da lógica, desempenho e segurança de sistemas. Utiliza Java para criar APIs, gerenciar bancos de dados e implementar arquiteturas escaláveis, garantindo eficiência e robustez para aplicações web e empresariais.",
    tags: ["Java", "APIs", "Banco de Dados", "Back-End"],
  },
  {
    title: "Formação Android Developer",
    institution: "Dio.me",
    years: "2024",
    icon: "fab fa-android",
    description:
      "A Formação Android Developer é um curso completo para quem deseja aprender a desenvolver aplicativos Android com Kotlin. Aborda desde os conceitos básicos até práticas avançadas, como arquitetura de software, consumo de APIs, banco de dados local e Firebase. Ideal para quem quer criar apps modernos, escaláveis e eficientes, seguindo as melhores práticas do mercado.",
    tags: ["Android", "Kotlin", "Firebase", "Mobile"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-stretch">
          {/* Coluna da Esquerda: Formação */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-12 md:mb-16 relative">
              <span className="bg-slate-800 px-4 py-2 rounded-md inline-block">
                Formação
              </span>
              <span className="absolute bottom-0 left-0 right-0 mx-auto md:mx-0 md:left-0 w-20 h-1 bg-purple-500 hidden md:block"></span>
            </h2>
            <div className="max-w-3xl mx-auto md:mx-0 grid gap-8 items-stretch">
              {educations.map((edu, idx) => (
                <div
                  key={idx}
                  className="glass-card p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 border-l-4 border-purple-500 h-full flex flex-col"
                  style={{ minHeight: "340px" }}
                >
                  <div className="flex items-center mb-4">
                    <div className="text-purple-500 text-2xl mr-4">
                      <i className={edu.icon}></i>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {edu.title}
                      </h3>
                      <p className="text-gray-400">
                        {edu.institution} • {edu.years}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{edu.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {edu.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-900 text-purple-300 text-xs px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Coluna da Direita: Experiência */}
          <div>
            <h2 className="text-3xl font-bold text-center md:text-left mb-12 md:mb-16 relative">
              <span className="bg-slate-800 px-4 py-2 rounded-md inline-block">
                Experiência
              </span>
              <span className="absolute bottom-0 left-0 right-0 mx-auto md:mx-0 md:left-0 w-20 h-1 bg-blue-500 hidden md:block"></span>
            </h2>
            <div className="max-w-3xl mx-auto md:mx-0 grid gap-8 items-stretch">
              {experiences.map((exp, idx) => (
                <div
                  key={idx}
                  className="relative h-full flex flex-col"
                  style={{ minHeight: "340px" }}
                >
                  <div className="timeline-dot"></div>
                  <div className="glass-card p-6 rounded-lg experience-card md:ml-8 hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col">
                    <div className="flex items-center mb-4 experience-title">
                      <div className="text-blue-500 text-xl md:text-2xl mr-4">
                        <i className={exp.icon}></i>
                      </div>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-white">
                          {exp.title}
                        </h3>
                        <p className="text-gray-400 text-sm md:text-base">
                          {exp.company} {exp.years && `• ${exp.years}`}
                        </p>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                      {exp.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-blue-900 text-blue-300 text-xs px-3 py-1 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
