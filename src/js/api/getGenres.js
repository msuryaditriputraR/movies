const axios = require('axios');
import { base_url, key } from './data';

async function getGenres(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

const url = base_url + 'genre/movie/list?api_key=' + key;

export default getGenres(url);
