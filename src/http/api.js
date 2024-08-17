import axios from 'axios';

const api =  axios.create({
    baseURL: "http://laravel_api.test/api/v1"
})

export default api;