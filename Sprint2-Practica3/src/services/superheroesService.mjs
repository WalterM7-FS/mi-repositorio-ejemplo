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
