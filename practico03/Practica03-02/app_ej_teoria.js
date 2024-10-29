import express from 'express';

    const app = express();

    const PORT = 3000;

    app.get('/', (req, res) => {
        res.send('¡Hola Mundo!')
    });


    //Ruta GET para el home
    app.get('/', (req, res) => {
        res.send('Página de inicio')
    });

    app.get('/data', (req, res) => {
        res.send('Datos recibidos')
    });

    //Ruta GET con parámetro de ruta
    app.get('/user/:id', (req, res) => {
        const userId = req.params.id;
        res.send(`Perfil del usuario con ID: ${userId}`)
    });

    //Ruta GET con multiples parámetros
    app.get('/product/:category/:id', (req, res) => {
        const {category, id} = req.params;
        res.send(`Categoría: ${category}, ID del producto: ${id}`)
    });




    

    app.listen(PORT, () => {
        console.log(`Servidor corriente en http://localhost:${PORT}`);
    });


