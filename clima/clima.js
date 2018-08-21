const axios = require('axios');


const getClima = async(lat, lng) => {

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=a4601b3bbaebf2ca794dce4a2c79812f`)

    return resp.data.main.temp;

}
module.exports = {
    getClima
}