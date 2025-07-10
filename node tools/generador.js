const fs = require('fs');
const evaluarEdad = require('./evaluador');

// Tus datos 
const nombreCompleto = "Rigel A. Ladron de Guevara H.";
const edad = 37; // Tu edad

// Genera el contenido del archivo
const contenido = `Nombre: ${nombreCompleto}\nEdad: ${edad}\nEstatus: ${evaluarEdad(edad)}`;

// Crea el archivo
fs.writeFileSync('info.txt', contenido);
console.log('✅ Archivo info.txt creado con éxito!');