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

    crearNewSuperheroe(superheroe) {
        throw new Error("Método 'crearNewSuperheroe' no implementado");
    }

    modificarSuperheroe(id, datosActualizados) {
        throw new Error("Método 'crearNewSuperheroe' no implementado");
    }

    eliminarSuperheroe(idAEliminar) {
        throw new Error("Método 'crearNewSuperheroe' no implementado");
    }

    eliminarSuperheroePorName(nombreSuperheroeAEliminar) {
        throw new Error("Método 'crearNewSuperheroe' no implementado");
    }


}

export default IRepository;