import axios from "axios";
const URL = "https://tiendaonlinebackend-production.up.railway.app/api/";
// const URL = "http://localhost:3000/api/";


export default axios.create({
    baseURL: URL
});