import axios from "./AxiosConfig"

const ShortsService = {
    buscar: async () => {
        try {
            const response = await axios.get("/api/video/buscar-reels")
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
}

export default ShortsService