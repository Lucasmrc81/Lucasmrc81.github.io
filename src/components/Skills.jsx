import React from "react";

const curatedSkills = [
  {
    name: "Python",
    percent: 60,
    color: "purple",
    icon: "fab fa-python",
    iconColor: "text-yellow-400",
  },
  {
    name: "JavaScript",
    percent: 20,
    color: "blue",
    icon: "fab fa-js",
    iconColor: "text-yellow-300",
  },
  {
    name: "React",
    percent: 10,
    color: "blue",
    icon: "fab fa-react",
    iconColor: "text-cyan-400",
  },
  {
    name: "Node.js",
    percent: 5,
    color: "blue",
    icon: "fab fa-node-js",
    iconColor: "text-green-400",
  },
  {
    name: "HTML",
    percent: 3,
    color: "purple",
    icon: "fab fa-html5",
    iconColor: "text-orange-400",
  },
  {
    name: "CSS",
    percent: 2,
    color: "purple",
    icon: "fab fa-css3-alt",
    iconColor: "text-blue-300",
  },
];

const barColors = [
  // Escuro, claro, escuro, claro, ...
  "bg-purple-700",
  "bg-purple-300",
  "bg-blue-700",
  "bg-blue-300",
  "bg-purple-700",
  "bg-purple-300",
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-6 bg-slate-900">
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
              className="glass-card p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 border-l-4"
              style={{
                borderColor: skill.color === "purple" ? "#8b5cf6" : "#3b82f6",
              }}
            >
              <div className="text-center mb-4">
                <i
                  className={`${skill.icon} text-4xl mb-2 ${skill.iconColor}`}
                ></i>
                <h3 className="text-xl font-bold text-white mt-2">
                  {skill.name}
                </h3>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
                <div
                  className={`h-2 rounded-full ${
                    barColors[idx % barColors.length]
                  }`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
              {/* porcentagem removida */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
