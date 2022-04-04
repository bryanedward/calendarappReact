import React from 'react'
import { useDispatch } from 'react-redux'
import { starLogin } from '../../actions/auth'
import { UseForms } from '../../hooks/UseForms'
import './style.css'

export const LoginScreen = () => {
    const dispatch =  useDispatch()
    const [handleValue, value] = UseForms({
        email:"brian@gmail.com",
        password:"brian",
    })
    const {email, password} = value
    const onSubmitLogin = (e) => {
        e.preventDefault()
        dispatch(starLogin(email, password))
    }
    return (
        <div className='loginscreen'>
            <div className='screen__form'>
                <div className='screen__register'>
                    <h4>Ingreso</h4>
                    <form action="" className='form__screen' onSubmit={onSubmitLogin}>
                        <input type="email" placeholder='correo' name='email' value={email} onChange={handleValue}/>
                        <input type="password" placeholder='contraseña' name='password' value={password} onChange={handleValue}/>
                        <button type='submit'>Acceder</button>
                    </form>
                </div>
                <div className='screen__login'>
                    <h4>Registro</h4>
                    <form action="" className='form__screen'>
                        <input type="text"  placeholder='nombre'/>
                        <input type="text" placeholder='correo'/>
                        <input type="text"  placeholder='contraseña'/>
                        <input type="text" placeholder='repetir contraseña'/>
                        <button type='submit'>Registrar</button>
                    </form>

                </div>
            </div>
        </div>
    )
}
