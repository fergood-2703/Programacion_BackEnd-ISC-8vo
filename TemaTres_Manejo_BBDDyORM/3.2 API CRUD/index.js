import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Usuario from './models/usuario.model.js';

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Conexion a la Base de datos MongoDB
// Define la URL 
const uri = process.env.uri;

// CONEXIÓN
mongoose.connect(uri)
  .then(() => console.log("Conexión exitosa a la base de datos"))
  .catch((error) => console.log("Error al conectar a la base de datos ", error));

// Rutas
app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});

app.post('/usuarios', async (req, res) => { //
  try {
    const usuario = await Usuario.create(req.body);
    res.status(201).json(usuario);
  } catch (error) {
    console.error("Error al crear el usuario:", error);
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
});