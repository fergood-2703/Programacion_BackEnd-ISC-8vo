function promesaCorrecta() {
    return Promise.resolve('Promesa resuelta');
}

function promesaIncorrecta() {
    return Promise.reject('Promesa rechazada');
}

module.exports = {
    promesaCorrecta,
    promesaIncorrecta
};