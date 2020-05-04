const fs = require('fs'); // paquetes propios de node
const colors = require('colors');

let listarTabla = (base, limite) =>{

    console.log(`=================`.green)
    console.log(`tabla del ${base}`.green)
    console.log(`=================`.green)
    for (let i = 0; i <= limite; i++) {

        console.log(`${base} * ${i} = ${base * i }`.cyan)
     
    } 
}

let crearArchivo = (base, limite = 10) =>{
    return new Promise((resolve, reject)=>{
        
        let data = '';

        if (!Number(base) || !Number(limite)) {
            reject(`el valor introducido en base:${base} o limite:${limite} no es un numero`);
            return;
        }
        for (let i = 0; i <= limite; i++) {
            data+= `${base} * ${i} = ${base * i } \n`
         
        } 
        fs.writeFile(  `tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {
            if (err) 
                reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)
            console.log(`el archivo de la tabla-${base} al ${limite}, fue creado con exito`.cyan);
        });


    })
}


module.exports = {
    crearArchivo,
    listarTabla
}