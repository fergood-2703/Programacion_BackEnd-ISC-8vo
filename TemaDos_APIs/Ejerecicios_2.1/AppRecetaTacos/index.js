import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";
import fs from "fs";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(express.static("public"));

const recetaJSON = fs.readFileSync("./recetaTacos.json", "utf-8");
const recetasTacos = JSON.parse(recetaJSON);
console.log(recetasTacos);

// middleware
app.use(bodyParser.urlencoded({ extended: true }));

// ruta principal
app.get("/", (req, res) => {
    res.send("Servidor funcionando 🚀");
});

app.get("/receta/:type", (req, res) => {
  const tipo = req.params.type.toLowerCase();

  const tacos = recetasTacos.filter(
    r =>
      r.ingredientes.proteina.nombre.toLowerCase() === tipo
  );

  res.json(tacos);
});

app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});