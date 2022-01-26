const axios = require('axios');
import { base_url, key } from './data';

export default async function getTranding() {
    const url = base_url + 'trending/movie/week?api_key=' + key;

    try {
        return await axios.get(url);
    } catch (error) {
        console.log(error);
    }
}
