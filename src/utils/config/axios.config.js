import axios from 'axios';

//default config for axios
export default axios.create(
    {
        baseURL: 'https://api.chucknorris.io/jokes/random',
        responseType: 'json',
        timeout: 5000,
    }
)