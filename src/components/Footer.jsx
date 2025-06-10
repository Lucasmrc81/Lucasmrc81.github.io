import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 text-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
        {/* Seção da Esquerda: Nome e Título */}
        <div className="flex flex-col items-center md:items-start mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white">
            Lucas <span className="text-blue-500">Mrc</span>
          </h2>
          <p className="text-sm mt-1">
            <span className="text-white">
              Engenheiro de Software& Desenvolvedor Full Stack{" "}
            </span>
          </p>
        </div>
        <div className="flex justify-center space-x-6 mb-4 md:mb-0 order-first md:order-none">
          <a
            href="https://github.com/Lucasmrc81"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <i className="fab fa-github text-xl"></i>
          </a>
          <a
            href="https://linkedin.com/in/lucasmrc-dev/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in text-xl"></i>
          </a>
          <a
            href="https://wa.me/5511940746586"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white hover:text-blue-500 transition"
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp text-xl"></i>
          </a>
          <a
            href="https://instagram.com/lucasmrc81"
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon text-white text-xl hover:text-blue-500 transition"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram text-xl"></i>
          </a>
        </div>

        {/* Seção da Direita: Copyright e Desenvolvido com */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <p className="text-gray-400 text-sm">
            &copy; 2025 Lucas Mrc. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm mt-1">
            Desenvolvido com <i className="fas fa-heart text-red-500"></i> e
            muita cafeína
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
