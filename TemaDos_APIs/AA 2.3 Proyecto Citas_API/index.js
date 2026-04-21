import express from "express";
import axios from "axios";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

// configurar ejs
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

// archivos estáticos
app.use(express.static(__dirname + "/public"));

// ruta principal
app.get('/', async (req, res) => {
    try {
        const result = await axios.get('https://api.animechan.io/v1/quotes/random');

        const quote = result.data.data.content;
        const character = result.data.data.character.name;

        res.render('index', {
            quote: quote,
            character: character,
        });

        console.log(result.data);

    } catch (error) {
        if (error.response) {
            console.log(error.response.data);
        } else {
            console.log('Error:', error.message);
        }
        
        res.render('index',{
            quote: "No se pudo optener una cita en estemomento",
            character: "Desconocido",

        });
    }
});

// levantar servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});