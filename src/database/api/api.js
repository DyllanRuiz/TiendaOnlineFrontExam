import axios from "axios";
const URL = "https://tienda-online-front-exam-9j586zg6l-dyllan-ruizs-projects.vercel.app/api/";


export default axios.create({
    baseURL: URL
});