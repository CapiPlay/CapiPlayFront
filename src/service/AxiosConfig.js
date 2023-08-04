import axios from "axios"

const URL = "http://localhost:8082/api"

const axiosInstance = axios.create({
    baseURL: URL
})

export default axiosInstance