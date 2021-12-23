import axios from "axios";

const api = axios.create({
   //baseURL: "http://192.168.0.107:3333",
   baseURL: "http://15.228.248.199:3333",
});

export default api;