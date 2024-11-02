export default class TareasDataSource {

    obtenerTodas() {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    guardar(tareas) {
        throw new Error('Este método debe ser implementado por la subclase');
    }

    eliminar(id) {
        throw new Error('Este método debe ser implementado por la subclase');
    }


}