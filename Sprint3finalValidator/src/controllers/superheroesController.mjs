import { isObjectIdOrHexString } from 'mongoose';
import { obtenerSuperheroePorID, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearSuperheroe, editarSuperheroe, eliminarSuperheroePorID, eliminarSuperheroePorNombre } from '../services/superheroesService.mjs';
import { renderizarSuperhero, renderizarListaSuperheroes } from '../views/responseView.mjs';


export async function obtenerSuperheroePorIdController(req, res) {
    
    const {id} = req.params;
        
    const esHexadecimal = isObjectIdOrHexString(id)? true : false;
    
    if(esHexadecimal){
        
        const superheroe = await obtenerSuperheroePorID (id);
            if(superheroe) {
            res.send(renderizarSuperhero(superheroe));
            } else {
            res.status(404).send({ mensaje: 'Superhéroe no encontrado'});
            }
    } else {res.status(404).send({ mensaje: 'Valor ingresado incorrecto: ingrese un valor del tipo hexadecimal'}); 
    }
    

}

export async function obtenerTodosLosSuperheroesController(req, res) {
    const superheroes = await obtenerTodosLosSuperheroes();
    res.send(renderizarListaSuperheroes(superheroes));        
}

export async function buscarSuperheroesPorAtributoController(req, res) {
    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperheroesPorAtributo(atributo, valor);

    if(superheroes.length > 0) {
        res.send(renderizarListaSuperheroes(superheroes));
    } else {
        res.status(404).send({ mensaje: 'No se encontraron superhéroes con ese atributo'});
    }
}

export async function obtenerSuperheroesMayoresDe30Controller(req, res) {
    const superheroes= await obtenerSuperheroesMayoresDe30();
    res.send(renderizarListaSuperheroes(superheroes));
}

export async function crearSuperheroesController(req, res) {
    const superheroe = req.body;
    const newSuperheroe = await crearSuperheroe(superheroe);
    console.log(newSuperheroe);
    res.send('Superhéroe creado satisfactoriamente', renderizarSuperhero(newSuperheroe));
    
}

export async function modificarSuperheroesController(req, res) {
    try { 
        const {id} = req.params;
        const datosActualizados = {...req.body};
        //console.log('datos', datosActualizados) OK
        const superheroeActualizado = await editarSuperheroe(id, datosActualizados);
        
        if(!superheroeActualizado){
            return res.estatus(404).json({mensaje: 'Superhéroe no actualizado' });
        }
        //req.flash('sucess_msg', 'Superhéroe actualizado exitosamente');
        return res.status(200).send({mensaje: 'Superhéroe actualizado correctamente'});

    } catch (error) {
        res.status(500).json({mensaje: 'Error interno del servidor', error: error.message});
    }
}


export async function eliminarSuperheroePorIdController(req, res) {
    const idAEliminar = req.params.id;
    const esHexadecimal = isObjectIdOrHexString(idAEliminar)?true:false;
    if(esHexadecimal) {
    const superheroeEliminado = await eliminarSuperheroePorID(idAEliminar);
    console.log(superheroeEliminado);
    res.send(renderizarSuperhero(superheroeEliminado));
    } else {res.status(404).send({ mensaje: 'Valor ingresado incorrecto: ingrese un valor del tipo hexadecimal'}); 
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    const nombreSuperheroeAEliminar = String(req.params.nombre);
    console.log(nombreSuperheroeAEliminar);
    const superheroeEliminado = await eliminarSuperheroePorNombre(nombreSuperheroeAEliminar);
    console.log(superheroeEliminado);
    res.send(renderizarSuperhero(superheroeEliminado));
}