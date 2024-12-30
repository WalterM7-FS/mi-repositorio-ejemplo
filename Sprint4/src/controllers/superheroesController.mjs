import { isObjectIdOrHexString } from 'mongoose';
import { obtenerSuperheroePorID, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30, crearSuperheroe, editarSuperheroe, eliminarSuperheroePorID, eliminarSuperheroePorNombre } from '../services/superheroesService.mjs';
import { renderizarSuperhero, renderizarListaSuperheroes } from '../views/responseView.mjs';
import { validationResult } from 'express-validator';


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
    //res.send(renderizarListaSuperheroes(superheroes));        
    
    res.render('dashboard', {superheroes, title: 'Lista de Superhéroes'});
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
    const errores = validationResult(req);
        if (!errores.isEmpty()) {
             return res.status(400).render('addSuperheroe', { errors: errores.array(), SuperHero: req.body }); 
        }
    const superheroe = req.body; 
    const newSuperheroe = await crearSuperheroe(superheroe); //{ superheroes: await obtenerTodosLosSuperheroes() }
    res.redirect('../heroes');
     
}


export async function modificarSuperheroesController(req, res) {
    try { 
        const {id} = req.params;
        const datosActualizados = {...req.body};
        console.log('datos', datosActualizados);
        const superheroeActualizado = await editarSuperheroe(id, datosActualizados);
        
        if(!superheroeActualizado){
            return res.estatus(404).json({mensaje: 'Superhéroe no actualizado' });
        }
        //req.flash('sucess_msg', 'Superhéroe actualizado exitosamente');
        /*return res.status(200).send({mensaje: 'Superhéroe actualizado correctamente'});*/
        res.redirect('../heroes');
            
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
    const superheroes = await obtenerTodosLosSuperheroesController();
    console.log('estamos en el controlador borrar superhero por renderizar de nuevo')
            res.render('dashboard', {superheroes} );
    
    /*res.send(renderizarSuperhero(superheroeEliminado));*/
    } else {res.status(404).send({ mensaje: 'Valor ingresado incorrecto: ingrese un valor del tipo hexadecimal'}); 
    }
}

export async function eliminarSuperheroePorNombreController(req, res) {
    const nombreSuperheroeAEliminar = String(req.params.nombre);
    console.log(nombreSuperheroeAEliminar);
    const superheroeEliminado = await eliminarSuperheroePorNombre(nombreSuperheroeAEliminar);
    console.log('estoy en controlardor eliminar ');
    const superheroes = await obtenerTodosLosSuperheroesController();
            res.render('dashboard', {superheroes} );
    
}

export async function obtenerSuperheroePorIdControllerEjs(id) {
    
    /*const {id} = req.params;
        console.log(id);
    const esHexadecimal = isObjectIdOrHexString(id)? true : false;
    console.log(esHexadecimal);
    if(esHexadecimal){*/
        
        const superheroe = await obtenerSuperheroePorID (id);
        return superheroe;
        /*    if(superheroe) {
                console.log(superheroe);
            return superheroe;
            } else {
            res.status(404).send({ mensaje: 'Superhéroe no encontrado'});
            }
    } else {res.status(404).send({ mensaje: 'Valor ingresado incorrecto: ingrese un valor del tipo hexadecimal'}); 
    }*/
}



