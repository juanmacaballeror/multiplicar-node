// const fs = require('fs'); // propio de node
// const fs = require('express'); // paquetes no nativos de node pero se han instalado en npm install
// const fs = require('./fs'); // archivos creados por nosotros
const { crearArchivo } = require('./multiplicar/multiplicar');
let base = '6';

crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch(err => console.log(err));