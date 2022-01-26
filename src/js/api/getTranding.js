const axios = require('axios');
import { base_url, key } from './data';

async function getTranding(url) {
    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}

const url = base_url + 'trending/movie/week?api_key=' + key;

export default getTranding(url);
