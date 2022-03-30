import React from 'react'
import './style.css'

export const LoginScreen = () => {
    return (
        <div className='loginscreen'>
            <div className='screen__form'>
                <div className='screen__register'>
                    <h4>Ingreso</h4>
                    <form action="" className='form__screen'>
                        <input type="text" placeholder='correo'/>
                        <input type="text" placeholder='contraseña'/>
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
