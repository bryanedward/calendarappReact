import Swal from "sweetalert2"
import { fetchSinToken } from "../components/helpers/fetch"
import { types } from "../types/types"

export const starLogin = (email, password) => {
    return async (dispatch) => {
        const resp = await fetchSinToken('api', { email, password }, 'POST')
        const body = await resp.json()
        if (body.ok) {
            localStorage.setItem('token', body.token)
            localStorage.setItem('token-init-data', new Date().getTime())
            dispatch(login({
                uid: body.uid,
                name: body.name
            }))
        }else{
            Swal.fire({
                icon: 'error',
                title: 'Datos incorrectos',
                text: 'vuelva intentar',
              })
        }
    }
}

const login = (user) => ({
    type: types.authLogin,
    payload: user
})