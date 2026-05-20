const numero = require('./diferente.js');

test('10 no es igual a 20', () => {
    expect(numero()).not.toBe(20);
});