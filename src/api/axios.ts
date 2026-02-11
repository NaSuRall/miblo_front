import axios from "axios";

const api = axios.create({
    baseURL: "http://100.120.71.76:8000/api/",
    withCredentials: false,
});

export default api;
