import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_REACT_APP_TOKEN}`, 
        'Access-Control-Allow-Origin': '*',  
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',  
        'Access-Control-Allow-Headers': 'Authorization, Content-Type',  
    },
});

export default instance;
