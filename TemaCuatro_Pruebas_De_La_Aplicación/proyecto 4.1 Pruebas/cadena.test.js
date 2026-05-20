const mensaje = require('./cadena.js');

test('la cadena contiene mi nombre', () => {
    expect(mensaje()).toMatch('Fernando');
});
