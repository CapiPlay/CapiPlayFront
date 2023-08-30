import axios from "./AxiosConfig";

const ShortsService = {
  /*TODO: RETIRAR**/
  buscar: async () => {
    try {
      const response = await axios.get("/api/video/buscar-shorts");
      return response.data;
    } catch (err) {
      console.error(err);
    }
  },

  buscarUUID: async (uuid) => {
    try {
      const response = await axios.get("/api/video/buscar-completo/" + uuid);
      return response;
    } catch (err) {
      console.error(err);
    }
  },
};

export default ShortsService;
