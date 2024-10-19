import os from 'os'

//Obtengo la arquitectura del sistema
console.log('Arquitectura:', os.arch());

//Obtengo el tipo de sistema operativo
console.log('Plataforma:', os.platform());

//Obtengo la cantidad total de memoria
console.log('Memoria total:', os.totalmem());

//Obtengo le memoria libre
console.log('Memoria libe:', os.freemem());

//Obtengo la información de la CPU
console.log('Información de la CPU:', os.cpus());


