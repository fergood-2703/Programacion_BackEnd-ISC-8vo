// Ejercicios 1.2.1: Sintaxis básica de Node.js
// Alumno: [Omar Fernando Puc Ek]

/* EJERCICIO A: Integrar la información de cada ejercicio en comentarios.
    Nombre: Fernando
    Fecha: 10 de Febrero de 2026
*/

console.log("=== INICIO DE LA PRÁCTICA ===");

// -----------------------------------------------------------------------------
// EJERCICIO I: Módulo de Matemáticas
// -----------------------------------------------------------------------------
const moduloMatematicas = {
    sumar: (a, b) => a + b,
    restar: (a, b) => a - b,
    multiplicar: (a, b) => a * b,
    dividir: (a, b) => (b === 0 ? "Error: División por 0" : a / b)
};

// -----------------------------------------------------------------------------
// EJERCICIO B: Declaración de tipos de datos y mostrar en consola
// -----------------------------------------------------------------------------
console.log("\n--- B. Tipos de Datos ---");

var nombre = "Fernando";         // String
let edad = 20;                   // Number (Integer)
const promedio = 95.5;           // Number (Float)
let esEstudiante = true;         // Boolean
let indefinido;                  // Undefined
let nulo = null;                 // Null

console.log("String:", nombre);
console.log("Entero:", edad);
console.log("Flotante:", promedio);
console.log("Booleano:", esEstudiante);
console.log("Undefined:", indefinido);
console.log("Null:", nulo);

// -----------------------------------------------------------------------------
// EJERCICIO C: Array con 5 elementos de diferentes tipos
// -----------------------------------------------------------------------------
console.log("\n--- C. Array Mixto ---");

const miArray = [
    "Sistemas Computacionales", // String
    2026,                       // Number
    true,                       // Boolean
    { escuela: "ITS" },         // Object
    [1, 2, 3]                   // Array
];

console.log("Array completo:", miArray);

// -----------------------------------------------------------------------------
// EJERCICIO D: Función polinómica de segundo grado (a^2 + 2ab + b^2)
// -----------------------------------------------------------------------------
console.log("\n--- D. Función Polinómica ---");

function funcionPolinomica(a, b) {
    // Calculamos el cuadrado de un binomio
    let resultado = (a * a) + (2 * a * b) + (b * b);
    return resultado;
}

let resPolinomio = funcionPolinomica(3, 2);
console.log(`Resultado del polinomio (3, 2): ${resPolinomio}`);

// -----------------------------------------------------------------------------
// EJERCICIO E: Función flecha y manipulación de string
// -----------------------------------------------------------------------------
console.log("\n--- E. Función Flecha y Strings ---");

const manipularString = (texto) => {
    // Convertimos a mayúsculas y cortamos espacios
    let procesado = texto.trim().toUpperCase();
    console.log(`Original: "${texto}" | Procesado: "${procesado}"`);
};

manipularString("   hola mundo nodejs   ");

// -----------------------------------------------------------------------------
// EJERCICIO F: Bucle del 1 al 10 en orden descendente
// -----------------------------------------------------------------------------
console.log("\n--- F. Bucle Descendente (10 al 1) ---");

let salidaBucle = "";
for (let i = 10; i >= 1; i--) {
    salidaBucle += i + " "; // Concatenamos para imprimir en una línea
}
console.log(salidaBucle);

// -----------------------------------------------------------------------------
// EJERCICIO G: Objeto institución
// -----------------------------------------------------------------------------
console.log("\n--- G. Objeto Institución ---");

const institucion = {
    nombre: "Instituto Tecnológico Superior de Felipe Carrillo Puerto",
    siglas: "ITSFCP",
    carrera: "Ingeniería en Sistemas",
    ubicacion: "Quintana Roo"
};

console.log("Objeto creado:", institucion);

// -----------------------------------------------------------------------------
// EJERCICIO H: Agregar método al objeto e imprimir descripción
// -----------------------------------------------------------------------------
console.log("\n--- H. Método del Objeto ---");

institucion.mostrarDescripcion = function() {
    return `Estudio en el ${this.siglas} ubicado en ${this.ubicacion}.`;
};

console.log(institucion.mostrarDescripcion());

// -----------------------------------------------------------------------------
// USO DEL EJERCICIO I: Usar el "módulo" matemático creado arriba
// -----------------------------------------------------------------------------
console.log("\n--- I. Uso del Módulo Matemático ---");

console.log("Suma (10 + 5):", moduloMatematicas.sumar(10, 5));
console.log("Resta (10 - 5):", moduloMatematicas.restar(10, 5));

// -----------------------------------------------------------------------------
// EJERCICIO K: Conversión Cadena a Número con manejo de errores (Try/Catch)
// (Lo pongo antes del asíncrono para mantener el orden visual en consola)
// -----------------------------------------------------------------------------
console.log("\n--- K. Manejo de Errores (Try/Catch) ---");

function convertirNumero(cadena) {
    try {
        console.log(`Intentando convertir "${cadena}"...`);
        let numero = Number(cadena);
        
        if (isNaN(numero)) {
            throw new Error("El valor no es un número válido.");
        }
        
        console.log("Conversión exitosa:", numero);
    } catch (error) {
        console.error("Error capturado:", error.message);
    }
}

convertirNumero("12345");
convertirNumero("Texto123");

// -----------------------------------------------------------------------------
// EJERCICIO J: Función asincrónica (setTimeout y Callback)
// -----------------------------------------------------------------------------
console.log("\n--- J. Asincronía (Espera 2 segundos...) ---");

function operacionAsincrona(mensaje, callback) {
    setTimeout(() => {
        console.log("...Proceso interno finalizado.");
        callback(mensaje);
    }, 2000); // Espera 2 segundos
}

// Llamada a la función asincrónica
operacionAsincrona("¡Operación completada con éxito!", (resultado) => {
    console.log("Respuesta del callback:", resultado);
    console.log("\n=== FIN DEL PROGRAMA ===");
});