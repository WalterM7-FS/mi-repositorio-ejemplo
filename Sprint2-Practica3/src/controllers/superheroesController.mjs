import { isObjectIdOrHexString } from 'mongoose';
import { obtenerSuperheroePorID, obtenerTodosLosSuperheroes, buscarSuperheroesPorAtributo, obtenerSuperheroesMayoresDe30 } from '../services/superheroesService.mjs';
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