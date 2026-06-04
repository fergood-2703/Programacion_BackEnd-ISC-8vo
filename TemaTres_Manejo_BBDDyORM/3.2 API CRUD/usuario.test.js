import request from 'supertest';
import app from './index.js';
import Usuario from './models/usuario.model.js';
import mongoose from 'mongoose';

// Mockeamos el modelo para no necesitar MongoDB
jest.mock('./models/usuario.model.js');
jest.spyOn(mongoose, 'connect').mockResolvedValue();

// Cerramos la conexión al terminar todas las pruebas
afterAll(async () => {               
  await mongoose.connection.close();
});

// Usuario de ejemplo para las pruebas
const usuarioEjemplo = {
  _id: '6651f1a2b0e2c3d4e5f60001',
  nombre: 'Fernando',
  edad: 20,
  correo: 'fernando@correo.com',
};

// ─── POST /usuarios ───────────────────────────────────────
describe('POST /usuarios', () => {

  test('debe crear un usuario y regresar 201', async () => {
    Usuario.create.mockResolvedValue(usuarioEjemplo);

    const res = await request(app)
      .post('/usuarios')
      .send({ nombre: 'Fernando', edad: 20, correo: 'fernando@correo.com' });

    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe('Fernando');
  });

  test('debe regresar 500 si hay un error', async () => {
    Usuario.create.mockRejectedValue(new Error('Error de base de datos'));

    const res = await request(app).post('/usuarios').send({});

    expect(res.status).toBe(500);
  });

});

// ─── GET /usuarios ────────────────────────────────────────
describe('GET /usuarios', () => {

  test('debe regresar la lista de usuarios con status 200', async () => {
    Usuario.find.mockResolvedValue([usuarioEjemplo]);

    const res = await request(app).get('/usuarios');

    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].correo).toBe('fernando@correo.com');
  });

  test('debe regresar 500 si hay un error', async () => {
    Usuario.find.mockRejectedValue(new Error('Error'));

    const res = await request(app).get('/usuarios');

    expect(res.status).toBe(500);
  });

});

// ─── GET /usuario/:id ─────────────────────────────────────
describe('GET /usuario/:id', () => {

  test('debe regresar un usuario por ID con status 200', async () => {
    Usuario.findById.mockResolvedValue(usuarioEjemplo);

    const res = await request(app).get(`/usuario/${usuarioEjemplo._id}`);

    expect(res.status).toBe(200);
    expect(res.body._id).toBe(usuarioEjemplo._id);
  });

  test('debe regresar 500 si hay un error', async () => {
    Usuario.findById.mockRejectedValue(new Error('Error'));

    const res = await request(app).get('/usuario/idfalso');

    expect(res.status).toBe(500);
  });

});

// ─── PUT /usuario/:id ─────────────────────────────────────
describe('PUT /usuario/:id', () => {

  test('debe actualizar el usuario y regresar 200', async () => {
    const usuarioActualizado = { ...usuarioEjemplo, nombre: 'Omar' };
    Usuario.findByIdAndUpdate.mockResolvedValue(usuarioEjemplo);
    Usuario.findById.mockResolvedValue(usuarioActualizado);

    const res = await request(app)
      .put(`/usuario/${usuarioEjemplo._id}`)
      .send({ nombre: 'Omar' });

    expect(res.status).toBe(200);
    expect(res.body.nombre).toBe('Omar');
  });

  test('debe regresar 404 si el usuario no existe', async () => {
    Usuario.findByIdAndUpdate.mockResolvedValue(null);

    const res = await request(app)
      .put('/usuario/idfalso')
      .send({ nombre: 'Nadie' });

    expect(res.status).toBe(404);
  });

});

// ─── DELETE /usuario/:id ──────────────────────────────────
describe('DELETE /usuario/:id', () => {

  test('debe eliminar el usuario y regresar 200', async () => {
    Usuario.findByIdAndDelete.mockResolvedValue(usuarioEjemplo);

    const res = await request(app).delete(`/usuario/${usuarioEjemplo._id}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Usuario eliminado');
  });

  test('debe regresar 404 si el usuario no existe', async () => {
    Usuario.findByIdAndDelete.mockResolvedValue(null);

    const res = await request(app).delete('/usuario/idfalso');

    expect(res.status).toBe(404);
  });

});