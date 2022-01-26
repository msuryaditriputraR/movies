const axios = require('axios');
import { base_url, key } from './data';

export default async function getMoviesByGenre(genreId) {
    const url =
        base_url + 'discover/movie?api_key=' + key + '&with_genres=' + genreId;

    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
