import axios from 'axios'

const url = "http://localhost:8080/api/"

export default class API {

    //LLAMADAS USUARIO
    static async addUsuario(data) {
        try {
            const res = await axios.post(url + "addUsuario", data)
            return res.data
        } catch (error) {
            return error.response.data
        }
    }

    static async getNumeroUsuarios() {
        try {
            const res = await axios.get(url + "getNumeroUsuarios")
            return res.data
        } catch (error) {
            return error.response.data
        }
    }


    static async verificarUsuarioPorSucursal(sucursal, rut) {
        try {
            const res = await axios.get(`${url}verificarUsuarioPorSucursal/${sucursal}/${rut}`);
            return res.data;
        } catch (error) {
            return error.response.data;
        }
    }
}