import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startLogOut } from '../../actions/auth'
import { EventLogOut } from '../../actions/note'
import './style.css'

export const Navbar = () => {

    const disptach = useDispatch()
    const { name } = useSelector(state => state.auth)

    const btnLogOut = () => {
        disptach(startLogOut())
        disptach(EventLogOut())
    }

    return (
        <div className='navbar'>
            <span>
                {name}
            </span>
            <button onClick={btnLogOut}>
                Salir
            </button>
        </div>
    )
}
