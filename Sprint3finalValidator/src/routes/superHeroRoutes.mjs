import express from 'express';
import { obtenerSuperheroePorIdController, obtenerTodosLosSuperheroesController, buscarSuperheroesPorAtributoController, obtenerSuperheroesMayoresDe30Controller, crearSuperheroesController, modificarSuperheroesController, eliminarSuperheroePorIdController, eliminarSuperheroePorNombreController } from '../controllers/superheroesController.mjs';
import { registerValidationRules } from '../validationRules.mjs';
import { handleValidationErrors } from '../errorMiddleware.mjs';


const router = express.Router();

router.get('/heroes', obtenerTodosLosSuperheroesController);
router.get('/heroes/:id', obtenerSuperheroePorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperheroesPorAtributoController);
router.get('/heroes/buscar/mayores-30', obtenerSuperheroesMayoresDe30Controller);
router.post('/update/crear', registerValidationRules(), handleValidationErrors, crearSuperheroesController);
router.put('/update/:id', modificarSuperheroesController);
router.delete('/deleteid/:id', eliminarSuperheroePorIdController);
router.delete('/deletename/:nombre', eliminarSuperheroePorNombreController);

export default router;
