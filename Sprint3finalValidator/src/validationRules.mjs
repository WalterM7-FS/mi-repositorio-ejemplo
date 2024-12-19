import {body} from 'express-validator';



export const registerValidationRules = () => {
    console.log('prueba');
    return [
    body('nombreSuperHeroe')
    .notEmpty().withMessage('Nombre del Superheroe es requerido')
    .trim()
    .isLength({min: 3, max:60}).withMessage('El nombre del Superhéro debe tener como mínimo 3 caracteres y como máximo 60 caracteres'),
    
    body('nombreReal')
    .notEmpty()
    .withMessage('Nombre real del Superheroe es requerido')
    .trim()
    .isLength({min: 3, max:60}).withMessage('El nombre real del Superhéro debe tener como mínimo 3 caracteres y como máximo 60 caracteres'),
    
    body('edad')
    .notEmpty().withMessage('La edad del Superheroe es requerida')
    .isNumeric().withMessage('La edad debe ser un número')
    .trim()
    .custom(value => value >= 0).withMessage('Introduzca un valor válido (no se admite valores negativos)'), 
    
    body('poderes')
    .notEmpty()
    .withMessage('El o los poderes del Superheroe es requerido')
    .trim()
    .isArray({ min: 1}).withMessage('Este campo es requerido')
    .custom(value => value.every( str => typeof str === 'string' && str.trim().length >= 3 && str.trim().length <= 60)).withMessage('Introduzca un texto entre 3 y 60 caracteres'),
];};



