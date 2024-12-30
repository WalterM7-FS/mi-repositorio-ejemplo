import {body} from 'express-validator';



export const registerValidationRules = () => { return [
    
    body('nombreSuperHeroe')
    .trim()
    .notEmpty().withMessage('Nombre del Superheroe es requerido')
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
    .custom(value => value >= 0).withMessage('Introduzca un valor de edad válido (no se admite valores negativos)'), 
    
    body('poderes')
    .notEmpty()
    .withMessage('El o los poderes del Superheroe es requerido')
    .trim()
    .isArray({ min: 1}).withMessage('Este campo debe ser un arreglo y al menos debe contener un elemento')
    .custom(value => value.every( str => typeof str === 'string' && str.trim().length >= 3 && str.trim().length <= 60)).withMessage('Introduzca para cada elemento del arreglo un texto entre 3 y 60 caracteres'),
];
};


export const preprocesarDatos = (req, res, next) => {
    if (req.body.poderes && typeof req.body.poderes === 'string') {
        // Transforma el string en un array, eliminando espacios adicionales
        req.body.poderes = req.body.poderes.split(',').map(poder => poder.trim());
    } else {
        // Si no existe el campo, lo inicializa como un array vacío
        req.body.poderes = [];
    }

    if (req.body.aliados && typeof req.body.aliados === 'string') {
        // Transforma el string en un array, eliminando espacios adicionales
        req.body.aliados = req.body.aliados.split(',').map(aliado => aliado.trim());
    } else {
        // Si no existe el campo, lo inicializa como un array vacío
        req.body.aliados = [];
    }

    if (req.body.enemigos && typeof req.body.enemigos === 'string') {
        // Transforma el string en un array, eliminando espacios adicionales
        req.body.enemigos = req.body.enemigos.split(',').map(enemigo => enemigo.trim());
    } else {
        // Si no existe el campo, lo inicializa como un array vacío
        req.body.enemigos = [];
    }
    next();
};
