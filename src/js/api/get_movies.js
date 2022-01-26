const axios = require('axios');
import { base_url, key } from './data';

async function getMovies(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

const url = base_url + 'discover/movie?api_key=' + key;

export default getMovies(url);
