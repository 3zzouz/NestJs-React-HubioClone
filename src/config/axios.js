import axios from "axios";

const axiosapi = axios.create({
  baseURL: process.env.REACT_APP_SERVER_DOMAIN,
});

axiosapi.defaults.withCredentials = true;
export default axiosapi;
