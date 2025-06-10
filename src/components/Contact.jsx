import React, { useState } from "react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simula envio (substitua por fetch se quiser enviar de verdade)
    setTimeout(() => {
      setLoading(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setNotification("Mensagem enviada com sucesso!");
      setTimeout(() => setNotification(null), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6 relative inline-block">
            <span className="relative z-10 px-4 py-2">
              Entre em{" "}
              <span className="text-blue-400" style={{ fontWeight: "bold" }}>
                Contato
              </span>
            </span>
            <span className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Tem um projeto em mente ou quer trabalhar juntos? Preencha o
            formulário abaixo ou entre em contato diretamente pelas minhas redes
            sociais.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="glass-card p-8 rounded-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Informações de Contato */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white relative">
                  Informações
                  <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-2 rounded-full"></span>
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="text-blue-400 text-2xl mt-1 mr-4">
                      <i className="fas fa-map-marker-alt"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Localização</h4>
                      <p className="text-gray-400">Embu das Artes, São Paulo</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-400 text-2xl mt-1 mr-4">
                      <i className="fas fa-envelope"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <a
                        href="mailto:lucasmrc81@gmail.com"
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        lucasmrc81@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="text-blue-400 text-2xl mt-1 mr-4">
                      <i className="fas fa-phone"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Telefone</h4>
                      <a
                        href="tel:+5511940746586"
                        className="text-gray-400 hover:text-blue-400 transition"
                      >
                        +55 (11) 94074-6586
                      </a>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                  <h4 className="font-semibold text-white mb-6 relative">
                    Redes Sociais
                    <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-2 rounded-full"></span>
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="https://github.com/Lucasmrc81"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github text-lg"></i>
                    </a>
                    <a
                      href="https://linkedin.com/in/lucasmrc-dev/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin-in text-lg"></i>
                    </a>
                    <a
                      href="https://wa.me/5511940746586"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="WhatsApp"
                    >
                      <i className="fab fa-whatsapp text-lg"></i>
                    </a>
                    <a
                      href="https://instagram.com/lucasmrc81"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon"
                      aria-label="Instagram"
                    >
                      <i className="fab fa-instagram text-lg"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* Formulário de Contato */}
              <div>
                <h3 className="text-2xl font-bold mb-8 text-white relative">
                  Mande uma mensagem
                  <span className="block w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-2 rounded-full"></span>
                </h3>
                <form
                  action="https://formspree.io/f/mldnjorz"
                  method="POST"
                  className="space-y-6"
                  autoComplete="off"
                >
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Seu Nome
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 input-animation"
                        placeholder="Digite seu nome"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-400">
                        <i className="fas fa-user"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Seu Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 input-animation"
                        placeholder="Digite seu email"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-400">
                        <i className="fas fa-envelope"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Assunto
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 input-animation"
                        placeholder="Qual é o assunto?"
                      />
                      <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-blue-400">
                        <i className="fas fa-tag"></i>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Sua Mensagem
                    </label>
                    <div className="relative">
                      <textarea
                        id="message"
                        name="message"
                        rows="4"
                        required
                        className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-500 resize-none input-animation"
                        placeholder="Escreva sua mensagem aqui..."
                      ></textarea>
                      <div className="absolute top-3 right-3 pr-3 text-blue-400">
                        <i className="fas fa-comment"></i>
                      </div>
                    </div>
                  </div>
                  {/* Anti-spam */}
                  <input
                    type="text"
                    name="_gotcha"
                    style={{ display: "none" }}
                  />
                  {/* Redirecionamento opcional */}
                  <input
                    type="hidden"
                    name="_next"
                    value="https://formspree.io/f/mldnjorz"
                  />
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 btn-send flex items-center justify-center space-x-2 relative overflow-hidden"
                  >
                    <i className="fas fa-paper-plane"></i>
                    <span>Enviar Mensagem</span>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Animations */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px);}
          to { opacity: 1; transform: translateY(0);}
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default ContactSection;
