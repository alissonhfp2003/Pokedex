import  axios from "axios";

const api = axios.create({
    //aqui eu crio uma url base para quando for usar a api eu apenas digitar api.get 
    baseURL: 'https://pokeapi.co/api/v2/'
})

export default api;
