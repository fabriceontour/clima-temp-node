const axios = require('axios');

// Pour mettre un await dans une fonction. Celle ci doit etre async. Et donc elle retourne une promise
// Car une fonction async retourne une Promise
const getClima = async (lat, lng) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=1bfa93f3ca8ccc07b702f92184e03b7d&units=metric`)

    return resp.data.main.temp;
}


module.exports = {
    getClima
}