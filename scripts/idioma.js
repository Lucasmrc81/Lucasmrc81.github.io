function atualizarTextos(language) {
  const tituloSobre = document.getElementById("titulo-sobre");
  const textoSobre = document.getElementById("texto-sobre");
  const tituloProjetos = document.getElementById("titulo-projetos");
  const textoProjetos = document.getElementById("texto-projetos");
  const tituloContato = document.getElementById("titulo-contato");
  const textoContato = document.getElementById("texto-contato");
  const linkSobre = document.getElementById("link-sobre");
  const linkProjetos = document.getElementById("link-projetos");
  const linkContato = document.getElementById("link-contato");
  const botoesProjeto = document.querySelectorAll(".botao-projeto");

  if (language === "en") {
    tituloSobre.innerText = "About me 🚀";
    textoSobre.innerHTML =
      "I’m Lucas Marcio, a technology and innovation enthusiast. I started my professional journey in mobile app development and, over time, I became passionate about areas such as software architecture, systems engineering, and cloud computing. Every project I take on is an opportunity to learn something new and contribute to more efficient and impactful solutions. I’m married and a pet parent (they’re an important part of my life and always by my side, whether working or keeping me company during moments of rest). I like to dedicate myself fully to everything I do, and when I set my mind to a project, I can guarantee that I won’t stop until I finish it. This determination is something that motivates me both in my work and my hobbies. In addition to my passion for technology, I’m a fan of series like <strong>Friends</strong> and <strong>Tapas e Beijos</strong>. I love binge-watching episodes of these comedies, which help me relax and have a good laugh. In my free time, I also enjoy playing, especially <strong>GTA</strong> and <strong>Fortnite</strong>. For me, it’s a great way to unwind and have fun with friends. I believe technology has an enormous transformative power, and I’m constantly seeking ways to use my knowledge to positively impact people’s lives and the businesses around me. Working with innovation is not only challenging but one of the most rewarding things for me. In short, I’m someone who loves challenges, values teamwork, and believes in the positive impact of technology. I’m always open to new opportunities, collaborations, and exchanging ideas. If you share this vision or have an exciting project in mind, let me know, I’m always ready for new challenges!";
    tituloProjetos.innerText = "My Projects";
    textoProjetos.innerText =
      "Check out some of the projects I have developed.";
    tituloContato.innerText = "Contact";
    textoContato.innerText = "Contact me through social media or email.";
    linkSobre.innerText = "Home";
    linkProjetos.innerText = "Projects";
    linkContato.innerText = "Contact";
    botoesProjeto[0].innerText = "🔗 View ZapCar Project";
    botoesProjeto[1].innerText = "🔗 View Mrc81 Bank Project";
    botoesProjeto[2].innerText = "🔗 View API Project";
    botoesProjeto[3].innerText = "🔗 View infinity-bank Project";
  } else {
    tituloSobre.innerText = "Sobre mim 🚀";
    textoSobre.innerHTML =
      "Sou Lucas Marcio, um entusiasta da tecnologia e da inovação. Iniciei minha trajetória profissional no desenvolvimento de aplicativos móveis e, com o tempo, me apaixonei por áreas como arquitetura de software, engenharia de sistemas e computação em nuvem. Cada projeto que abraço é uma oportunidade de aprender algo novo e contribuir para soluções mais eficientes e impactantes. Sou casado e pai de pets (eles são parte importante da minha vida e sempre estão ao meu lado, seja para trabalhar ou para me acompanhar nos momentos de descanso). Gosto de me dedicar ao máximo em tudo o que faço e, quando coloco um projeto na cabeça, posso garantir que não paro até terminá-lo. Essa determinação é algo que me motiva tanto no trabalho quanto nos meus hobbies. Além da minha paixão pela tecnologia, sou fã de séries como <strong>Friends</strong> e <strong>Tapas e Beijos</strong>. Eu amo maratonar episódios dessas comédias, que me fazem relaxar e dar boas risadas. No meu tempo livre, também gosto de jogar, principalmente <strong>GTA</strong> e <strong>Fortnite</strong>. Para mim, é uma ótima maneira de descontrair e me divertir com amigos. Acredito que a tecnologia tem um enorme poder de transformação e estou constantemente buscando maneiras de usar o meu conhecimento para impactar positivamente a vida das pessoas e os negócios ao meu redor. Trabalhar com inovação, além de desafiador, é uma das coisas mais gratificantes para mim. Em resumo, sou uma pessoa que gosta de desafios, valoriza o trabalho em equipe e acredita no impacto positivo da tecnologia. Estou sempre aberto a novas oportunidades, colaborações e trocas de ideias. Se você compartilha dessa visão ou tem algum projeto bacana em mente, me avise, estou sempre pronto para novos desafios!";
    tituloProjetos.innerText = "Meus Projetos";
    textoProjetos.innerText = "Confira alguns dos projetos que desenvolvi.";
    tituloContato.innerText = "Contato";
    textoContato.innerText =
      "Entre em contato comigo através das redes sociais ou e-mail.";
    linkSobre.innerText = "Sobre mim";
    linkProjetos.innerText = "Projetos";
    linkContato.innerText = "Contato";
    botoesProjeto[0].innerText = "🔗 Ver Projeto ZapCar";
    botoesProjeto[1].innerText = "🔗 Ver Projeto Mrc81 Bank";
    botoesProjeto[2].innerText = "🔗 Ver Projeto de API";
    botoesProjeto[3].innerText = "🔗 Ver Projeto infinity-bank";
  }
}

window.mudarIdioma = function (event) {
  if (event) event.preventDefault();
  const newLanguage =
    document.documentElement.lang === "pt-br" ? "en" : "pt-br";
  localStorage.setItem("selectedLanguage", newLanguage);
  document.documentElement.lang = newLanguage;
  atualizarTextos(newLanguage);
};

const savedLanguage = localStorage.getItem("selectedLanguage") || "pt-br";
document.documentElement.lang = savedLanguage;
atualizarTextos(savedLanguage);
