const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para optener el clima',
        demand: true
    }
}).argv;

// console.log(argv.direccion);
// lugar.getLugarLatLgn(argv.direccion)
     // .then(console.log);

// clima.getClima(39, 80)
//      .then(console.log)
//      .catch(console.log)


const getInfo = async (direccion) => {

    try {
        const coords = await lugar.getLugarLatLgn(direccion);
        console.log(coords);
        const temp = await clima.getClima(coords.lat, coords.lng);
        console.log(temp);
        const grados = temp - 273.15;
        return `La temperatura actual de ${direccion} es de ${grados} C`;
    }
    catch {
        `No se puede obtener la temperatura actual de ${direccion}`;
    }
}


getInfo(argv.direccion)
       .then(console.log)
       .catch()
        