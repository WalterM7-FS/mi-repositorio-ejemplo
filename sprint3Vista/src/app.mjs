import express from 'express';

import { connectDB } from './config/dbConfig.mjs';
import superHeroRoutes from './routes/superHeroRoutes.mjs';







const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

connectDB();

app.use(express.urlencoded({ extended: false}));

app.set('view engine', 'ejs'); 

/*app.use((req,res,next) => {
    console.log('información recibida', req.body);
    next();
});*/

app.use('/api', superHeroRoutes);


app.use((req, res) => {
    res.status(404).send({ mensaje: 'Ruta no encontrada' });    
});

app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});
