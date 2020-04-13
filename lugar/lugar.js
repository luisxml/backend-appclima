const axios = require('axios');

const getLugarLatLgn = async (dir) => {     
    const encodedURL = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        headers: {
            'x-rapidapi-host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'x-rapidapi-key': 'bd885f8bb2msh4877c59e12e30a7p1a8ffbjsn382017c38cbe' 
        }
    });
    
    const resp = await instance.get();
    
    if(resp.data.Results.length === 0) {
        throw new Error(`No hay resultados relacionados con la direccion: ${dir}`)
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
                    
};


module.exports = {
    getLugarLatLgn
}

// console.log(encodedURL);
