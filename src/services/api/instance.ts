import axios from "axios";

const instance = axios.create({
    timeout: 20000,
});

instance.interceptors.request.use(function (config) {
    return config;
});

export default instance;