const numero = require('./numeros.js');

test('10 es mayor que 5', () => {
    expect(numero()).toBeGreaterThan(5);
});

test('10 es menor que 20', () => {
    expect(numero()).toBeLessThan(20);
});

test('10 es mayor o igual que 10', () => {
    expect(numero()).toBeGreaterThanOrEqual(10);
});