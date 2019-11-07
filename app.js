//Cela me cree un objet lugar avec tout ce qui est exorte dans lugar/lugar
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Nombre de la ciudad',
        demand: true
    }
}).argv;

//lugar.getLugarLatLng( argv.direccion)
//    .then( a => console.log(a));
//clima.getClima(43.72, 10.4)
//      .then (a => console.log(a))
//      .catch(e => console.log(`${e.response.status} - ${e.response.statusText} - ${e.response.config.url}`))

const getInfo = async (direccion ) => {
    try {
        const coords = await lugar.getLugarLatLng( direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${coords.direccion} es de ${temp}.;`
    } catch (error) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);