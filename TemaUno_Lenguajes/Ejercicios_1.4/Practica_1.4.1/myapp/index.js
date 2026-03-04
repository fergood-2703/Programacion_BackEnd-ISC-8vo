import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1> Bienvenidos a mi pagina web by Fernando </h1>")
});

app.get("/about", (req, res) => {
    res.send("<h1> Acerca de ... </h1>")
});

app.use((req, res) => {
    res.status(404).send("<h1> 404 not Found </h1>")
});

app.listen(port, () => {
    console.log("Servidor corriendo en http://localhost:3000/");
});

app.get("/", (req, res) => {
    console.log(req);
});

