import React, { useState, useEffect } from "react";

const coresProjeto = {
  "ia-limpa-email": "bg-blue-900",
  "Lucasmrc81.github.io": "bg-purple-900",
  "infinity-bank": "bg-green-900",
  ZapCar: "bg-blue-900",
  "Banco-do-Lucas": "bg-green-900",
  "sistema-de-login": "bg-purple-900",
  "agenda-contatos": "bg-blue-900",
  "projeto-em-react": "bg-green-900",
  "validador-cpf": "bg-purple-900",
  "api-node-express": "bg-blue-900",
};

const tagsPorProjeto = {
  "ia-limpa-email": ["Python", "API", ".env"],
  "Lucasmrc81.github.io": ["React", "CSS", "GitHub Pages"],
  "infinity-bank": ["HTML", "CSS", "JavaScript"],
  ZapCar: ["Kotlin", "Android Studio"],
  "Banco-do-Lucas": ["HTML", "CSS", "UX/UI"],
};

const descricoesPorProjeto = {
  "ia-limpa-email": "Remove e-mails inválidos e repetidos automaticamente.",
  "Lucasmrc81.github.io": "Portfólio pessoal com projetos e links.",
  "infinity-bank": "Mockup de banco digital com tela de login e dashboard.",
  ZapCar: "App de aluguel de carros feito em Kotlin.",
  "Banco-do-Lucas": "Interface bancária com design simples e intuitivo.",
};

const iconesPorProjeto = {
  ZapCar: "fas fa-car",
  "Banco-do-Lucas": "fas fa-university",
  "ia-limpa-email": "fas fa-envelope-open-text",
};

// Linguagem -> Ícone FontAwesome
const iconePorLinguagem = {
  Python: "fab fa-python",
  JavaScript: "fab fa-js",
  HTML: "fab fa-html5",
  CSS: "fab fa-css3-alt",
  Kotlin: "fas fa-mobile-alt",
  Java: "fab fa-java",
  PHP: "fab fa-php",
  "C++": "fas fa-code",
  "C#": "fas fa-code",
  default: "fas fa-folder-open",
};

function corDaTag(tag) {
  switch (tag.toLowerCase()) {
    case "python":
      return "bg-yellow-300/10 text-yellow-300";
    case "react":
      return "bg-blue-500/10 text-blue-400";
    case "html":
      return "bg-orange-500/10 text-orange-400";
    case "css":
      return "bg-sky-400/10 text-sky-300";
    case "javascript":
      return "bg-yellow-500/10 text-yellow-400";
    case "kotlin":
      return "bg-pink-500/10 text-pink-400";
    case "android studio":
      return "bg-green-500/10 text-green-400";
    case "api":
      return "bg-purple-500/10 text-purple-300";
    case "ux/ui":
      return "bg-rose-400/10 text-rose-300";
    case ".env":
      return "bg-zinc-500/10 text-zinc-300";
    case "github pages":
      return "bg-indigo-500/10 text-indigo-300";
    default:
      return "bg-white/10 text-white";
  }
}

function ProjetoCard({ repo }) {
  const cor = coresProjeto[repo.name] || "bg-blue-900";
  const tags = tagsPorProjeto[repo.name] || [];
  const descricao = descricoesPorProjeto[repo.name] || repo.description || "";
  const icone =
    iconesPorProjeto[repo.name] ||
    iconePorLinguagem[repo.language] ||
    iconePorLinguagem.default;

  return (
    <div className="w-full max-w-2xl rounded-2xl border border-white/20 overflow-hidden shadow-md transform transition-transform hover:scale-[1.02] bg-transparent mx-auto">
      {/* Cabeçalho com cor e ícone */}
      <div className={`h-32 ${cor} flex items-center justify-center`}>
        <i className={`${icone} text-white text-4xl`}></i>
      </div>

      {/* Conteúdo do card */}
      <div className="p-4 flex flex-col justify-between min-h-[200px]">
        <div>
          <h3 className="text-white text-lg font-semibold">{repo.name}</h3>
          {descricao && (
            <p className="text-white/70 text-sm mt-1 leading-tight">
              {descricao}
            </p>
          )}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-3">
          {(tags.length > 0 ? tags : [repo.language]).map(
            (tag) =>
              tag && (
                <span
                  key={tag}
                  className={`px-2 py-0.5 text-xs font-medium rounded-full ${corDaTag(
                    tag
                  )}`}
                >
                  {tag}
                </span>
              )
          )}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-4 text-sm">
          {repo.homepage && (
            <a
              href={repo.homepage}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-blue-400 hover:underline"
            >
              <i className="fas fa-globe" /> Ver Site
            </a>
          )}
          <a
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 text-white/60 hover:underline"
          >
            <i className="fab fa-github" /> Código
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ListaProjetos() {
  const [repos, setRepos] = useState([]);
  const [reposVisiveis, setReposVisiveis] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);

  useEffect(() => {
    fetch("https://api.github.com/users/lucasmrc81/repos")
      .then((res) => res.json())
      .then((data) => {
        const ordenados = data.sort(
          (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
        );

        const destaque = ordenados.filter((r) =>
          [
            "ia-limpa-email",
            "Lucasmrc81.github.io",
            "infinity-bank",
            "ZapCar",
            "Banco-do-Lucas",
          ].includes(r.name)
        );

        setRepos(ordenados);
        setReposVisiveis(destaque);
      });
  }, []);

  const handleMostrarMais = () => {
    const destaqueNomes = [
      "ia-limpa-email",
      "Lucasmrc81.github.io",
      "infinity-bank",
      "ZapCar",
      "Banco-do-Lucas",
    ];

    const destaque = repos.filter((r) => destaqueNomes.includes(r.name));
    const outros = repos.filter((r) => !destaqueNomes.includes(r.name));
    setReposVisiveis([...destaque, ...outros]);
    setMostrarTodos(true);
  };

  const handleRecolher = () => {
    const destaque = repos.filter((r) =>
      [
        "ia-limpa-email",
        "Lucasmrc81.github.io",
        "infinity-bank",
        "ZapCar",
        "Banco-do-Lucas",
      ].includes(r.name)
    );
    setReposVisiveis(destaque);
    setMostrarTodos(false);
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-12" id="projects">
      {/* Acrescenta gap maior entre os cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-16 gap-y-20">
        {reposVisiveis.map((repo) => (
          <ProjetoCard key={repo.id} repo={repo} />
        ))}
      </div>

      <div className="text-center mt-12">
        {!mostrarTodos ? (
          <button
            onClick={handleMostrarMais}
            className="inline-flex items-center px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-md transition"
          >
            <i className="fas fa-chevron-down mr-2"></i> Ver Todos os Projetos
          </button>
        ) : (
          <button
            onClick={handleRecolher}
            className="inline-flex items-center px-6 py-3 border border-red-500 text-red-500 hover:bg-red-500 hover:text-white rounded-md transition"
          >
            <i className="fas fa-chevron-up mr-2"></i> Recolher Destaques
          </button>
        )}
      </div>
    </section>
  );
}
