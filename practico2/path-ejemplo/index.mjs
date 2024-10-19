import path from 'path';

//Definición ruta del archivo ejemplo
const filePath = './data/example.txt';

//Obtengo el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//Obtengo el nombre del archivo sin extensión
const baseName = path.basename(filePath, '.txt');
console.log('Extensión del archivo:', baseName);

//Obtengo la extensión del archivo 
const extName = path.extname(filePath);
console.log('Extensión del archivo:', extName);

//Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva ruta:', newPath);




