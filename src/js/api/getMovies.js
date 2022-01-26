const axios = require('axios');
import { base_url, key } from './data';

export default async function getMovies() {
    const url = base_url + 'discover/movie?api_key=' + key;
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
