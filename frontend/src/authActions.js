import axios from 'axios'

const authActions = {
    crearUsuario:  (nuevoUsuario) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/signUp', nuevoUsuario)
            if (!respuesta.data.success) {
                return respuesta.data.errores
            }
            dispatch({
                type: 'LOG_USER',
                payload: respuesta.data.success ? respuesta.data.respuesta : null
            })
        }
    },
    loguearUsuario: (usuarioEntrante) => {
        return async (dispatch, getState) => {
            const respuesta = await axios.post('http://localhost:4000/api/user/signIn', usuarioEntrante)
            dispatch({
                type: 'LOG_USER', 
                payload: respuesta.data.success ? respuesta.data.respuesta : null})
        }
    },
    desloguearUsuario: () => {
        return (dispatch, getState) => {
            dispatch({type: 'LOGOUT_USER'})
        }
    },

    loginForzadoPorLS: (usuarioLS) => {
        return (dispatch, getState) => {

            dispatch({type: 'LOG_USER', payload: usuarioLS})
        }
    },
    fetchearPaises: () => {
        return async (dispatch, getState) => {
            const respuesta = await axios.get('https://restcountries.eu/rest/v2/all')
            return respuesta.data
        }
    }
}

export default authActions