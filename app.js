//const fs = require('fs'); // paquetes propios de node
//const variable = require('express') paquetes descargados desde npm
//const variable =  require('./ruta/subruta') archivos propios del programas

const { crearArchivo,listarTabla } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs').argv;
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite)
        break;
    case 'crear':
        console.log(argv.base)
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`archivo creado: ${archivo}`.blue.bgYellow))
            .catch(e => console.log(e))
        break;
    default: 'comando no reconocido'
        break;
}



