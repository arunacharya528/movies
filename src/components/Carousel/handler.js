const axios = require('axios');
const apiBaseURL = "https://yts.mx/api/v2";

export const getLatestMovies = async () => {
    let config = {
        method: 'get',
        url: `${apiBaseURL}/list_movies.json?limit=10`,
        headers: {},
        maxRedirects: 0
    };

    return axios(config)
}
