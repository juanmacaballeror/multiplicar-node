// comando para ejecutarlo; "node .\app-yargs.js listar --limite 30 --base=3 o tb node .\app-yargs.js listar -l=30 -b=3"
const { argv } = require('./config/yargs');

const colors = require('colors');

//console.log('argv---->', argv);

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

  case 'listar':
    listarTabla(argv.base, argv.limite);
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${archivo.green}`))
      .catch(err => console.log(err));
    break;
  default: console.log('Comando no reconocido');
}



// let base = '6';

