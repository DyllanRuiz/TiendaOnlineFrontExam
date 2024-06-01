import axios from "axios";
const URL = "tiendaonlinebackend-production.up.railway.app/api/";


export default axios.create({
    baseURL: URL
});