import React, { useContext } from 'react'
import { AuthContext } from '../auth/authContext'

export const PublicRoute = ({ children }) => {

    const { user } = useContext(AuthContext);
    
    return !user.logged && children;
}
