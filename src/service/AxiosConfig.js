import axios from "axios"
import Cookies from "js-cookie"

const URL = "http://localhost:7000/api"

const axiosInstance = axios.create({
    baseURL: URL
})

const getAuthHeaders = (token) => {
    if (token) {
        return { "Authorization": `Bearer ${token}` }
    }
    return {}
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = Cookies.get("token")
        const authHeaders = getAuthHeaders(token)
        config.headers = { ...config.headers, ...authHeaders }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

export default axiosInstance
