const promesa = require('./promesa.js');

test('la promesa se resuelve correctamente', async () => {
    await expect(promesa.promesaCorrecta()).resolves.toBe('Promesa resuelta');
});

test('la promesa es rechazada', async () => {
    await expect(promesa.promesaIncorrecta()).rejects.toBe('Promesa rechazada');
});