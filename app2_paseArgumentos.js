/*
  pase de parametros desde la consola.bundleRenderer.renderToStream
  Ejemplo, ejecuto desde la consola;
    node app2_paseArgumentos --base=6
*/
const { crearArchivo } = require('./multiplicar/multiplicar');


let argv = process.argv;
//el parametro es 2 porque en argv tenemos los valores en un array;
// valor 0 del array --> por un lado tenemos la ruta donde está node instalado
// valor 1 del array --> por otro lado tenemos la ruta y el  comando de la consola que hemos ejecutado el proceso
let parametro = argv[2];
console.log('parametro-->', parametro);
let base = parametro.split('=')[1];


crearArchivo(base)
  .then(archivo => console.log(`Archivo creado: ${archivo}`))
  .catch(err => console.log(err));