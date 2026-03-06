import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));
console.log(__dirname);

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var nombreEquipo = "";

function registrador(req, res, next) {
  console.log(req.body);
  nombreEquipo = req.body["mascota"] + req.body["adjetivo"];
  next();
}

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/submit", registrador, (req, res) => {
  res.send(`El nombre de tu equipo es:\n<h1>${nombreEquipo}</h1>`);
});

app.listen(port, () => {
  console.log(`Servidor ejecutandose en el puerto ${port}`);
});
