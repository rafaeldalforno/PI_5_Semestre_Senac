import axios from "axios";

const api = axios.create({
    baseURL: 'https://pingrestaurantsapi.azurewebsites.net/swagger'
});

export default api;