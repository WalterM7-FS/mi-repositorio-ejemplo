import { isObjectIdOrHexString } from "mongoose";
import SuperHero from "../models/SuperHero.mjs";
import IRepository from "./IRepository.mjs";

import DBSuperHero from '../models/SuperHero.mjs';



class SuperHeroRepository extends IRepository {
    async obtenerSuperheroePorID(id) {
        try {
            return await SuperHero.findById(id);
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
        
    }

    async obtenerTodosLosSuperheroes(){ 
        return SuperHero.find()};
    

    async buscarSuperheroesPorAtributo(atributo, valor) {
        try{
            if(atributo != 'edad'){
            const query =
             {[atributo]: new RegExp(valor, 'i')};
            return await SuperHero.find(query);
            } else {
                const query = {[atributo]: valor}
                return await SuperHero.find(query);
            }
        } catch (error) {
            
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
     
    }

    async obtenerSuperheroesMayoresDe30() {
        try{
        return await SuperHero.find({edad: {$gt:30}, planetaOrigen: 'Tierra', $expr: {$gte: [{$size: "$poderes"}, 2]}
        });
    
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
    }

    async crearNewSuperheroe(superheroe) {
        try{
            SuperHero.create(superheroe);
            return await superheroe;
            
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
    }

    async modificarSuperheroe(id, datosActualizados) {
        console.log('Datos Actualizados:', datosActualizados);

        try{
            const superheroeActualizado = await SuperHero.findByIdAndUpdate(
                id, datosActualizados, {new: true}
            );
            console.log(superheroeActualizado)
            return superheroeActualizado;
                
               
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
    }

    
    async eliminarSuperheroe(idAEliminar) {
        try{
            //const idSuperheroeaEliminar = String(idAEliminar);
            const superheroeEliminado = SuperHero.deleteOne( idAEliminar );
           return await superheroeEliminado;
            
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
    }


    async eliminarSuperheroePorName(nombreSuperheroeAEliminar) {
        try{
            const superheroeEliminado = SuperHero.deleteOne({ nombreSuperHeroe: nombreSuperheroeAEliminar });
            return await superheroeEliminado;
            
        } catch (error) {
            console.error('Error al obtener los héroes:', error);
            throw error;
        }
    }


}
 export default new SuperHeroRepository();