import React from "react";

const curatedSkills = [
  {
    name: "Java",
    percent: 80,
    color: "blue",
    icon: "fab fa-java",
    iconColor: "text-red-400",
    usedAt: ["IBM", "Projeto EVA"],
  },
  {
    name: "Angular",
    percent: 75,
    color: "purple",
    icon: "fab fa-angular",
    iconColor: "text-red-500",
    usedAt: ["IBM"],
  },
  {
    name: "Kotlin",
    percent: 70,
    color: "blue",
    icon: "fas fa-code",
    iconColor: "text-purple-400",
    usedAt: ["IBM", "ZapCar"],
  },
  {
    name: "React Native",
    percent: 70,
    color: "purple",
    icon: "fab fa-react",
    iconColor: "text-cyan-400",
    usedAt: ["IBM"],
  },
  {
    name: "Flutter",
    percent: 60,
    color: "blue",
    icon: "fas fa-mobile-alt",
    iconColor: "text-blue-400",
    usedAt: ["Projeto Pessoal", "DIO"],
  },
  {
    name: "Spring Boot",
    percent: 65,
    color: "purple",
    icon: "fas fa-leaf",
    iconColor: "text-green-400",
    usedAt: ["IBM"],
  },
  {
    name: "Node.js",
    percent: 40,
    color: "blue",
    icon: "fab fa-node-js",
    iconColor: "text-green-400",
    usedAt: ["IBM", "Projetos Pessoais"],
  },
  {
    name: "JavaScript",
    percent: 50,
    color: "purple",
    icon: "fab fa-js",
    iconColor: "text-yellow-300",
    usedAt: ["IBM", "Projetos Pessoais"],
  },
  {
    name: "Python",
    percent: 45,
    color: "blue",
    icon: "fab fa-python",
    iconColor: "text-yellow-400",
    usedAt: ["Projeto EVA", "ia-limpa-email"],
  },
  {
    name: "React",
    percent: 40,
    color: "purple",
    icon: "fab fa-react",
    iconColor: "text-cyan-300",
    usedAt: ["Portfólio"],
  },
  {
    name: "MySQL",
    percent: 28,
    color: "blue",
    icon: "fas fa-database",
    iconColor: "text-blue-300",
    usedAt: ["IBM"],
  },
  {
    name: "Git / CI/CD",
    percent: 70,
    color: "purple",
    icon: "fab fa-git-alt",
    iconColor: "text-orange-400",
    usedAt: ["IBM", "Projetos Pessoais"],
  },
  {
    name: "Insomnia",
    percent: 28,
    color: "blue",
    icon: "fas fa-flask",
    iconColor: "text-purple-300",
    usedAt: ["IBM"],
  },
];

const barColors = [
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
  "bg-purple-700",
  "bg-blue-700",
];

const getPlaceIcon = (place) => {
  if (place === "IBM") return "fas fa-building";
  if (place === "DIO") return "fas fa-graduation-cap";
  return "fas fa-folder-open";
};

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="bg-slate-800 px-4 py-2 rounded-md inline-block">
            Minhas Tecnologias
          </span>
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-1 bg-purple-500"></span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {curatedSkills.map((skill, idx) => (
            <div
              key={idx}
              className="glass-card p-5 rounded-lg hover:scale-[1.02] transition-transform duration-300 border-l-4 flex flex-col"
              style={{
                borderColor: skill.color === "purple" ? "#8b5cf6" : "#3b82f6",
              }}
            >
              {/* Ícone e nome */}
              <div className="text-center mb-3">
                <i className={`${skill.icon} text-4xl mb-2 ${skill.iconColor}`}></i>
                <h3 className="text-lg font-bold text-white mt-2">{skill.name}</h3>
              </div>

              {/* Barra de progresso com % na frente */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex-1 bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${barColors[idx % barColors.length]}`}
                    style={{ width: `${skill.percent}%` }}
                  ></div>
                </div>
                <span className="text-xs text-gray-400 whitespace-nowrap">{skill.percent}%</span>
              </div>

              {/* Tags com ícone */}
              <div className="mt-auto flex flex-wrap gap-1 justify-center">
                {skill.usedAt.map((place, i) => (
                  <span
                    key={i}
                    className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-slate-700 text-gray-300"
                  >
                    <i className={`${getPlaceIcon(place)} text-gray-400`} style={{ fontSize: "10px" }}></i>
                    {place}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;