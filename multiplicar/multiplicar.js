const fs = require('fs');
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('-----------------------'.green);
    console.log(`tabla  de ${ base }`.green);
    console.log('-----------------------------'.green);
    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i }= ${ base * i }`);

    }

}

//  module.exports. se puede agregar como modulo directamente o bien solo agregarlo como objeto como aparece abajo
//promesas
let crearArchivo = (base) => {

    return new Promise((resolve, reject) => { //reject ejecuta la funcion se dispara y sigue corriendo el codigo

        if (!Number(base)) {
            reject(`el valor introducido ${ base } no es un numero`);
            return;
        }

        let data = '';

        for (let i = 1; i <= 10; i++) {

            data += ` ${ base } * ${ i }= ${ base * i }`;
        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => { //fs.writeFile(file,data[,opcion],callback)

            if (err) reject(err);
            else
                resolve(`tabla-${base}.txt`);

        });
    });
}

module.exports = {
    crearArchivo,
    listarTabla
}