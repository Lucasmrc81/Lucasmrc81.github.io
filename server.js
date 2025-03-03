const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

let visitCount = 0;

// Carregar a contagem de visitas do arquivo
if (fs.existsSync("visitCount.txt")) {
  visitCount = parseInt(fs.readFileSync("visitCount.txt", "utf8"), 10);
}

// Endpoint para obter a contagem de visitas
app.get("/api/visit-count", (req, res) => {
  res.json({ count: visitCount });
});

// Endpoint para incrementar a contagem de visitas
app.post("/api/increment-visit", (req, res) => {
  visitCount++;
  fs.writeFileSync("visitCount.txt", visitCount.toString());
  res.json({ count: visitCount });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
