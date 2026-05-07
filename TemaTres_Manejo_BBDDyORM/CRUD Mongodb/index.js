import express from 'express';

// ---------- CON ORM ----------
// import mongoose from 'mongoose';
// import Usuario from './models/usuario.model.js';

// ---------- SIN ORM ----------
// Se importa MongoClient para conectarse directamente a MongoDB
// ObjectId para trabajar con los id de MongoDB
import { MongoClient, ObjectId } from 'mongodb';

import dotenv from 'dotenv';

dotenv.config();

const app = express();
const puerto = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// -------------------------------
// CONEXIÓN A LA BASE DE DATOS
// -------------------------------

// URL guardada en el archivo .env
const uri = process.env.uri;

// ---------- CON ORM ----------
// mongoose.connect(uri)
//   .then(() => console.log("Conexión exitosa a la base de datos"))
//   .catch((error) => console.log("Error al conectar a la base de datos ", error));

// ---------- SIN ORM ----------

// Se crea un cliente de MongoDB usando el driver oficial
const client = new MongoClient(uri);

// Variables para usar la base de datos y la colección
let db;
let usuariosCollection;

// Función para conectar la base de datos
async function conectarDB() {
  try {
    // Se realiza la conexión con MongoDB
    await client.connect();
    console.log("Conexión exitosa a MongoDB");

    // Se selecciona la base de datos
    db = client.db("crud");

    // Se selecciona la colección usuarios
    usuariosCollection = db.collection("usuarios");

  } catch (error) {
    console.log("Error al conectar a MongoDB:", error);
  }
}
// Se ejecuta la conexión
conectarDB();

// -------------------------------
// RUTAS
// -------------------------------

app.get('/', (req, res) => {
  res.send('Bienvenido a mi API CRUD');
});

app.listen(puerto, () => {
  console.log(`Servidor escuchando en http://localhost:${puerto}`);
});




// CREAR USUARIO
app.post('/usuarios', async (req, res) => {

  try {
    // ---------- CON ----------
    // const usuario = await Usuario.create(req.body);

    // ---------- SIN ----------

    // Se guardan los datos enviados desde el body
    const nuevoUsuario = req.body;

    // insertOne inserta un documento en la colección
    const resultado = await usuariosCollection.insertOne(nuevoUsuario);

    // Se responde con el ID insertado
    res.status(201).json({
      message: 'Usuario creado',
      id: resultado.insertedId
    });

  } catch (error) {

    console.error("Error al crear el usuario:", error);

    res.status(500).json({
      error: 'Error al crear el usuario'
    });
  }
});




// OBTENER TODOS LOS USUARIOS
app.get('/usuarios', async (req, res) => {

  try {

    // ---------- CON ----------
    // const usuarios = await Usuario.find();

    // ---------- SIN ----------

    // find() obtiene todos los documentos
    // toArray() convierte el resultado a un arreglo
    const usuarios = await usuariosCollection.find().toArray();

    res.status(200).json(usuarios);

  } catch (error) {

    console.error("Error al obtener los usuarios:", error);

    res.status(500).json({
      error: 'Error al obtener los usuarios'
    });
  }
});




// OBTENER USUARIO POR ID
app.get('/usuario/:id', async (req, res) => {

  try {

    // Se extrae el ID de la URL
    const { id } = req.params;

    // ---------- CON ----------
    // const usuario = await Usuario.findById(id);

    // ---------- SIN ----------

    // findOne busca un solo documento
    // ObjectId convierte el id a formato MongoDB
    const usuario = await usuariosCollection.findOne({
      _id: new ObjectId(id)
    });

    // Si no existe el usuario
    if (!usuario) {

      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    res.status(200).json(usuario);

  } catch (error) {

    console.error("Error al obtener el usuario:", error);

    res.status(500).json({
      error: 'Error al obtener el usuario'
    });
  }
});




// ACTUALIZAR USUARIO
app.put('/usuario/:id', async (req, res) => {

  try {
    const { id } = req.params;

    // ---------- CON ----------
    // const usuario = await Usuario.findByIdAndUpdate(id, req.body);

    // ---------- SIN ----------
    // updateOne actualiza un documento
    const resultado = await usuariosCollection.updateOne(

      // Documento a buscar
      { _id: new ObjectId(id) },

      // Datos a actualizar
      { $set: req.body }
    );

    // matchedCount verifica si encontró el documento
    if (resultado.matchedCount === 0) {

      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    // Se obtiene el usuario actualizado
    const usuarioActualizado = await usuariosCollection.findOne({
      _id: new ObjectId(id)
    });

    res.status(200).json(usuarioActualizado);

  } catch (error) {
    console.error("Error al actualizar el usuario:", error);

    res.status(500).json({
      error: 'Error al actualizar el usuario'
    });
  }
});




// ELIMINAR USUARIO
app.delete('/usuario/:id', async (req, res) => {

  try {
    const { id } = req.params;

    // ---------- CON ----------
    // const usuario = await Usuario.findByIdAndDelete(id);

    // ---------- SIN ----------
    // deleteOne elimina un documento
    const resultado = await usuariosCollection.deleteOne({
      _id: new ObjectId(id)
    });

    // deletedCount verifica si se eliminó correctamente
    if (resultado.deletedCount === 0) {

      return res.status(404).json({
        error: 'Usuario no encontrado'
      });
    }

    res.status(200).json({
      message: 'Usuario eliminado'
    });

  } catch (error) {
    console.error("Error al eliminar el usuario:", error);

    res.status(500).json({
      error: 'Error al eliminar el usuario'
    });
  }
});
