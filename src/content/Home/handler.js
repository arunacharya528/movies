const axios = require('axios');

export const getMovies = () => {
    let config = {
        method: 'get',
        url: 'https://yts.mx/api/v2/list_movies.json?limit=10',
        headers: {
            'Cookie': 'PHPSESSID=k3ct6d67duhqo1iqev5imcqq4i'
        },
        maxRedirects: 0
    };

    return axios(config);
}