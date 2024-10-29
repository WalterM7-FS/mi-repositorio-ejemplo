
import {leerSuperheroes, agregarSuperheroes} from './utils.mjs';


	const archivoOriginal ='./superheroes.txt';
	const archivoNuevos ='./agregarSuperheroes.txt';
	
	agregarSuperheroes(archivoOriginal, archivoNuevos);

    const superheroes = leerSuperheroes(archivoOriginal);
    console.log('Superhéroes ordenados:');
    console.log(superheroes);



