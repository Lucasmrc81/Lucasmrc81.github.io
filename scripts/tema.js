function mudarTema() {
  const body = document.body;
  body.classList.toggle("dark-mode");

  body.style.fontFamily = body.classList.contains("dark-mode")
    ? "Courier New, monospace"
    : "Arial, sans-serif";

  const darkModeButton = document.querySelector(".darck img");
  darkModeButton.src = body.classList.contains("dark-mode")
    ? "imagem/light.png"
    : "imagem/dark.png";

  const botaoProjeto = document.querySelector(".botao-projeto");
  if (botaoProjeto) {
    botaoProjeto.innerText = body.classList.contains("dark-mode")
      ? "🔮 Ver Projeto ZapCar"
      : "🔗 Ver Projeto ZapCar";
  }

  localStorage.setItem("modoEscuro", body.classList.contains("dark-mode"));
}

document.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("modoEscuro") === "true") {
    mudarTema();
  }
});
