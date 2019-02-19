const argv = require('./config/yargs').argv;

const { createFile, listarTabla } = require('./multiplicar/multiplicar');
const colors = require('colors');

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        createFile(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado:`, colors.green(archivo)));
        .catch(e => console.log(e))
        break;
    default:
        console.log('Comando no reconocido');
}