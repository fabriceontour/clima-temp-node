const axios = require('axios');

const getLugarLatLng = async ( dir) => {
    const encodeUrl = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodeUrl}`,
        headers: {'X-RapidAPI-Key': '38dca2e227msh1736d600a4d92cbp141222jsn77632fed1b6b'}
      });
    
    const resp = await instance.get();

    if ( resp.data.Results.length === 0) {
        throw new Error (`No hay resultados para ${dir}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;

    return {
        direccion,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}

