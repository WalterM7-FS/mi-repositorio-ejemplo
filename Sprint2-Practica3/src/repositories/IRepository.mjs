class IRepository {
    obtenerSuperheroePorID(id){
        throw new Error("Método 'obtenerPorId()' no implementado");
    }

    obtenerTodosLosSuperheroes() {
        throw new Error("Método 'obtenerTodos()' no implementado");
    }

    buscarSuperheroesPorAtributo(atributo, valor) {
        throw new Error("Método 'buscarPorAtributo()' no implementado");
    }

    obtenerSuperheroesMayoresDe30() {
        throw new Error("Método 'obtenerMayoresDe30()' no implementado");
    }
}

export default IRepository;