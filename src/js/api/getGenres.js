const axios = require('axios');
import { base_url, key } from './data';

export default async function getGenres() {
    const url = base_url + 'genre/movie/list?api_key=' + key;
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
