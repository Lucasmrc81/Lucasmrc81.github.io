import React from "react";

const certifications = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle",
    date: "Out 2025",
    icon: "fas fa-cloud",
    iconColor: "text-red-400",
    badgeColor: "bg-red-900",
    tagColor: "bg-red-900 text-red-300",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    date: "Out 2025",
    icon: "fas fa-robot",
    iconColor: "text-red-400",
    badgeColor: "bg-red-900",
    tagColor: "bg-red-900 text-red-300",
  },
  {
    title: "IBM AI Associate Data Scientist",
    issuer: "IBM",
    date: "Set 2025",
    icon: "fas fa-brain",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-900",
    tagColor: "bg-blue-900 text-blue-300",
  },
  {
    title: "Finance & Accounting Essentials",
    issuer: "IBM",
    date: "Ago 2025",
    icon: "fas fa-chart-line",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-900",
    tagColor: "bg-blue-900 text-blue-300",
  },
  {
    title: "IBM Garage Essentials",
    issuer: "IBM",
    date: "Ago 2025",
    icon: "fas fa-cogs",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-900",
    tagColor: "bg-blue-900 text-blue-300",
  },
  {
    title: "IBM Agile Explorer",
    issuer: "IBM",
    date: "Ago 2025",
    icon: "fas fa-sync-alt",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-900",
    tagColor: "bg-blue-900 text-blue-300",
  },
  {
    title: "Enterprise Design Thinking Practitioner",
    issuer: "IBM",
    date: "Ago 2025",
    icon: "fas fa-lightbulb",
    iconColor: "text-blue-400",
    badgeColor: "bg-blue-900",
    tagColor: "bg-blue-900 text-blue-300",
  },
];

const CertificacoesSection = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-slate-800/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 relative">
          <span className="bg-slate-800 px-4 py-2 rounded-md inline-block">
            Certificações
          </span>
          <span className="absolute bottom-0 left-0 right-0 mx-auto w-20 h-1 bg-blue-500"></span>
        </h2>

        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="glass-card p-6 rounded-lg hover:scale-[1.02] transition-transform duration-300 border-l-4 flex flex-col"
              style={{
                borderColor: cert.issuer === "Oracle" ? "#f87171" : "#3b82f6",
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className={`text-2xl mt-1 ${cert.iconColor}`}>
                  <i className={cert.icon}></i>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm leading-snug mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-gray-400 text-xs">{cert.date}</p>
                </div>
              </div>
              <div className="mt-auto">
                <span className={`text-xs px-3 py-1 rounded-full ${cert.tagColor}`}>
                  {cert.issuer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificacoesSection;