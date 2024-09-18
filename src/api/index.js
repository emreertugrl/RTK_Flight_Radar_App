import axios from "axios";

const api = axios.create({
  baseURL: "https://flight-radar1.p.rapidapi.com",

  headers: {
    "x-rapidapi-key": "eed126f9bcmshc5525da323f2af8p1ab61fjsn34753381407b",
    "x-rapidapi-host": "flight-radar1.p.rapidapi.com",
  },
});
export default api;
