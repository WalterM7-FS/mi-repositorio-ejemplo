const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://waltermarchioli:1RBy2lxAIERn4Qj2@clusterwam.1rmqx.mongodb.net/PracticaSuperHeroe?retryWrites=true&w=majority&appName=ClusterWAM', {
    useNewUrlParser: true,
    useUnifiedTopology: true

})
.then(() => console.log('Conexión exitosa a MongoDB'))
.catch(error => console.error('Error al conectar a MongoDB:', error));

const superheroSchema = new mongoose.Schema({
    nombreSuperHeroe: { type: String, required: true },
    nombreReal: { type: String, required: true },
    edad: { type: Number, min: 0 },
    planetaOrigen: { type: String, default: 'Desconocido' },
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type: Date, default: Date.now }
});

const SuperHero = mongoose.model('SuperHero', superheroSchema);

async function insertSuperHero(){
    const hero = new SuperHero({
        nombreSuperHeroe:'Spiderman',
        nombreReal: 'Peter Parker',
        edad: 25,
        planetaOrigen: 'Tierra',
        debilidad: 'Radioactiva',
        poderes: ['Trepar paredes', 'Sentido arácnido', 'Sueper fuerza', 'Agilidad'],
        aliados: ['Iroman'],
        enemigos: ['Duende verde']
    })

    await hero.save();
    console.log('Superhéroe insertado', hero);
}

insertSuperHero();

async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe},
        {$set: {edad: 26}}
    );
    console.log('Resultado de la aplicación:', result);
}

updateSuperHero('Spiderman');

async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne(
        {nombreSuperHeroe: nombreSuperHeroe});
        console.log('Superhéroe elminado:', result);
}

deleteSuperHero('Spiderman');

async function findSuperHeroes() {
    const heroes = await SuperHero.find({planetaOrigen: 'Tierra'});
        console.log('Superhéroes encontrados:', heroes);
}

findSuperHeroes('Spiderman');