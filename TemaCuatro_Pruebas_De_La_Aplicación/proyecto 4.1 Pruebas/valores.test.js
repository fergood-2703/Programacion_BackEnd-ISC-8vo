const valores = require('./valores.js');

test('el valor es null', () => {
    expect(valores.valorNulo()).toBeNull();
});

test('el valor es undefined', () => {
    expect(valores.valorIndefinido()).toBeUndefined();
});

test('el valor está definido', () => {
    expect(valores.valorDefinido()).toBeDefined();
});