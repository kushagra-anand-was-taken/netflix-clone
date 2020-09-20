import axios from "axios";

const axiosm = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});
export default axiosm;
