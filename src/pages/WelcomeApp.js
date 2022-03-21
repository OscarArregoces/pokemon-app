import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../auth/authContext';


export const WelcomeApp = () => {


    const { user } = useContext(AuthContext)

    const [logged, setLogged] = useState(false);
    const handleLogged = () => {
        setLogged(!logged);
    }


    if (logged) return <Navigate to="/home" />
    return (
        <div className='container mt-5 welcome'>
            <h1>Bienvenido <span className='text-primarys'>{user.name}</span></h1>
            <h6 className='mt-5'>
                This web application was created for educational and entertainment purposes.
            </h6>
            <button
                className='btn btn-success mt-5'
                onClick={handleLogged}
            >Get started</button>
        </div>
    )
}
