//requireds
//const fs = require('fs'); //libreria existente en node
const argv = require('./config/yargs').argv;
const colors = require('colors');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let command = argv._[0];

switch (command) {

    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base)
            .then(archivo => console.log(`Archivo creado:${ archivo.green }`))
            .catch(e => console.log(e));

        break;
    default:
        console.log('comando no reconocido');

}

//console.log(argv);

//let base = '5';

//console.log(process.argv);
//let argv2 = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]

console.log('limite', argv.limite);


// let data = '';

// for (let i = 1; i <= 10; i++) {

//     data += ` ${ base } * ${ i }= ${ base * i }`;
// }

// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => { //nombre del archivo writefile , parametro contenido q se quiere grabar, el tecer parametro es un callback es decir aqui recibira el error
//     if (err) throw err;
//     console.log(`EL archivo tabla-${ base }.txt`);

// });  

// crearArchivo(base)
//     .then(archivo => console.log(`Archivo creado:${ archivo }`))
//     .catch(e => console.log(e));