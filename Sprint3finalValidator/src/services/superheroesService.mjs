import SuperHeroRepository from '../repositories/SuperHeroRepository.mjs';

export async function obtenerSuperheroePorID(id) {
    return await SuperHeroRepository.obtenerSuperheroePorID(id);    
}

export async function obtenerTodosLosSuperheroes() {
    return await SuperHeroRepository.obtenerTodosLosSuperheroes();    
}

export async function buscarSuperheroesPorAtributo(atributo, valor) {
    return await SuperHeroRepository.buscarSuperheroesPorAtributo(atributo, valor);    
}

export async function obtenerSuperheroesMayoresDe30() {
    return await SuperHeroRepository.obtenerSuperheroesMayoresDe30();    
}

export async function crearSuperheroe(superheroe) {
    return await SuperHeroRepository.crearNewSuperheroe(superheroe);    
}

export async function editarSuperheroe(id, datosActualizados) {console.log ('servicio', datosActualizados)
    return await SuperHeroRepository.modificarSuperheroe(id, datosActualizados);    
}
export async function eliminarSuperheroePorID(idAEliminar) {
    return await SuperHeroRepository.eliminarSuperheroe(idAEliminar);    
}

export async function eliminarSuperheroePorNombre(nombreSuperheroeAEliminar) {
    return await SuperHeroRepository.eliminarSuperheroePorName(nombreSuperheroeAEliminar);    
}
