import axios from "axios"
import Cookies from "js-cookie"

const URL = "http://10.4.96.50:7000/api"

const axiosInstance = axios.create({
    baseURL: URL
})

const getAuthHeaders = (token) => {
    if (token) {
        return { "Authorization": `Bearer ${token}` }
    }
    return {}
}

const getToken = () => {
    const userToken = Cookies.get("token")
    if(userToken) {
        return userToken
    }
    const tokenAnonimo = Cookies.get("anonimo")
    return tokenAnonimo
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        const authHeaders = getAuthHeaders(token)
        config.headers = { ...config.headers, ...authHeaders }
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

axiosInstance.interceptors.response.use((response) => {
    return response
}, (error) => {
    return Promise.reject(error)
})

export default axiosInstance
