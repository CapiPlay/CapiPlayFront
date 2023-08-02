import axios from "axios"

const URL = "http://localhost:7000"

const axiosInstance = axios.create({
    baseURL: URL
})

export default axiosInstance