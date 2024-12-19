export function renderizarSuperhero(superhero) {
    return {
        nombreSuperHeroe: superhero.nombreSuperHeroe,
        nombreReal: superhero.nombreReal,
        edad: superhero.edad,
        "Planeta de Origen": superhero.planetaOrigen,
        Debilidad: superhero.debilidad,
        poderes: superhero.poderes,
        Aliados: superhero.aliados,
        Enemigos: superhero.enemigos
    };
}

export function renderizarListaSuperheroes(superheroes) {
    return superheroes.map(superhero => renderizarSuperhero(superhero));    
}

