import axios from "axios";

const BASE_URL = "https://w3-ticketing.onrender.com";
const apiConn = axios.create({baseURL: BASE_URL});

export default apiConn;
