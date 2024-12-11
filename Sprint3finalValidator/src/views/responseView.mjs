export function renderizarSuperhero(superhero) {
    return {
        Nombre: superhero.nombreSuperHeroe,
        "Nombre Real": superhero.nombreReal,
        Edad: superhero.edad,
        "Planeta de Origen": superhero.planetaOrigen,
        Debilidad: superhero.debilidad,
        Poderes: superhero.poderes,
        Aliados: superhero.aliados,
        Enemigos: superhero.enemigos
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superhero => renderizarSuperhero(superhero));    
}