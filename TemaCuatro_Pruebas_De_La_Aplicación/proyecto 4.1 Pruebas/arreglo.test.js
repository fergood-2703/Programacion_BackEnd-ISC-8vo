const frutas = require('./arreglo.js');

test('el arreglo contiene uva', () => {
    expect(frutas()).toContain('uva');
});
