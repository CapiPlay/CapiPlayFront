import axios from "./AxiosConfig"

const ShortsService = {
    buscar: async () => {
        try {
            const response = await axios.get("/video/buscar-reels")
        } catch(err) {
            console.error(err)
        }
    }
}

export default ShortsService