import express from 'express';
import mongoose from 'mongoose';


const app = express();
const puerto = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});