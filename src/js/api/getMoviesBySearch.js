const axios = require('axios');
import { base_url, key } from './data';

export default async function getMoviesBySearch(keyword) {
    const url = base_url + 'search/movie?api_key=' + key + '&query=' + keyword;

    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
