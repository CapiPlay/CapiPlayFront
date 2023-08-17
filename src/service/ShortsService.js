import axios from "./AxiosConfig"

const ShortsService = {
    buscar: async () => {
        try {
            const response = await axios.get("/api/video/buscar-shorts")
            return response.data
        } catch (err) {
            console.error(err)
        }
    },

    buscarUUID: async (uuid) => {
        try {
            const response = await axios.get("/api/video/buscar-completo/" + uuid)
            return response.data
        } catch (err) {
            console.error(err)
        }
    }
}

export default ShortsService