import baseApi from "../../../apis/base.apis.js";

export const obtenerTokens = async (data) => {
    return await baseApi.post('jwt/create', data)
}