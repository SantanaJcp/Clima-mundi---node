const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coordenadas = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `el clima en ${coordenadas.direccion} es de ${temp}°C`;


    } catch (e) {
        return `la ciudad ${direccion} ha sido encontrada`
    }



}
getInfo(argv.direccion)
    .then(mensaje => console.log(mensaje))
    .catch(e => console.log(e));