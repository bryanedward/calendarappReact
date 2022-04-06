import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRouter = ({children}) => {
    const { checking } = useSelector(state => state.auth)
    return (
        (!checking) ? children : <Navigate to='/login' />
    )
}
