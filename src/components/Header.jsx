import React, { useState } from "react";

const Header = ({ onNavigate, activeSection }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "Sobre", href: "about" },
    { name: "Experiência", href: "experience" },
    { name: "Tecnologias", href: "skills" },
    { name: "Projetos", href: "projects" },
    { name: "Contato", href: "contact" },
  ];

  const handleNavLinkClick = (sectionId) => {
    onNavigate(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="fixed w-full z-50 glass-card">
      <nav
        className="container mx-auto px-6 py-3 flex justify-between items-center"
        aria-label="Navegação principal"
      >
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-bold text-white">
            <a
              href="#home"
              onClick={() => handleNavLinkClick("home")}
              className="hover:text-blue-500 transition"
            >
              Lucas Mrc
            </a>
          </h1>
          <span className="text-blue-400 text-sm hidden md:inline-block">
            Dev
          </span>
        </div>

        <button
          className="md:hidden text-white focus:outline-none"
          id="menu-toggle"
          aria-label="Abrir menu"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>

        <ul className="hidden md:flex space-x-8 nav-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={`#${item.href}`}
                onClick={() => handleNavLinkClick(item.href)}
                className={`text-white hover:text-blue-500 transition font-medium ${
                  activeSection === item.href ? "text-blue-500" : ""
                }`}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>

        <div
          id="mobile-menu"
          className={`md:hidden absolute inset-x-0 top-full bg-slate-800 py-4 px-6 glass-card ${
            isMobileMenuOpen ? "" : "hidden"
          }`}
        >
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={`#${item.href}`}
                  onClick={() => handleNavLinkClick(item.href)}
                  className={`block text-white hover:text-blue-500 transition ${
                    activeSection === item.href ? "text-blue-500" : ""
                  }`}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
