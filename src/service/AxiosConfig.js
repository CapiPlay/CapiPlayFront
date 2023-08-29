import axios from "axios"
import Cookies from "js-cookie"

const URL = "http://10.4.96.50:7000"

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
    return Cookies.get("anonimo")
}

axiosInstance.interceptors.request.use(
    (config) => {
        const token = getToken()
        const authHeaders = getAuthHeaders(token)
        console.log(authHeaders)
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
