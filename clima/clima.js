const axios = require('axios');

const getClima = async  (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1fcf08fca2ae7cf6c315632003325908`)

    return resp.data.main.temp 
}

module.exports = {
    getClima
}