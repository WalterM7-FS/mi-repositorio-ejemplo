import express from 'express';
import { Router } from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroesController, modificarSuperheroesController, eliminarSuperheroePorIdController, eliminarSuperheroePorNombreController, obtenerSuperheroePorIdControllerEjs } from '../controllers/superheroesController.mjs';
import { editarSuperheroe, eliminarSuperheroePorID, obtenerTodosLosSuperheroes } from '../services/superheroesService.mjs';
import { registerValidationRules, preprocesarDatos } from '../validationRules.mjs';
import { handleValidationErrors } from '../errorMiddleware.mjs';
import { isObjectIdOrHexString } from 'mongoose';


const router = express.Router();



router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/update/crear', preprocesarDatos, registerValidationRules(), handleValidationErrors, crearSuperheroesController);
router.post('/update/:id', preprocesarDatos, registerValidationRules(), handleValidationErrors, modificarSuperheroesController);
router.delete('/deleteid/:id', eliminarSuperheroePorIdController);

router.delete('/deletename/:nombre', eliminarSuperheroePorNombreController);

router.get('/crear', (req,res) => { 
    const SuperHero = "";
    res.render('addSuperheroe', {errors: [], SuperHero})
});

router.post('/deleteid', async (req, res) => {
    const idAEliminar = (req.body); // Obtener el ID desde el cuerpo de la petición
        console.log(idAEliminar)
        const superheroeEliminado = await eliminarSuperheroePorID(idAEliminar);
        console.log(superheroeEliminado);
        res.redirect('heroes');
   
});

router.post('/editarid', async (req,res) => { 
    const idAEditar = (req.body);
    console.log(idAEditar);
    const superheroe = await obtenerSuperheroePorIdControllerEjs(idAEditar);
    console.log({superheroe});
    res.render('editSuperheroe', {superheroe});
});



export default router;
