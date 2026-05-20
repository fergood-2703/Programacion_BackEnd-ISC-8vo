const crearObjeto = require('./objeto.js');

test('los objetos son iguales', () => {

    const objeto1 = crearObjeto();

    const objeto2 = {
        nombre: 'Fernando',
        edad: 20
    };

    expect(objeto1).toEqual(objeto2);
});