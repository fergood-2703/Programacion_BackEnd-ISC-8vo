import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// configuración
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + "/public"));

// ruta principal
app.get("/", async (req, res) => {
  try {
    const result = await axios.get("https://api.api-onepiece.com/v2/characters/en");

    const personajes = result.data;
    const random = personajes[Math.floor(Math.random() * personajes.length)];

    res.render("index", {
      name: random.name,
      job: random.job,
      image: random.image,
    });

  } catch (error) {
    console.log(error.message);

    res.render("index", {
      name: "Error",
      job: "No se pudo cargar la API",
      image: "",
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});