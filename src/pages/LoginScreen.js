import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { useForm } from '../hooks/useForm';
import { types } from '../types/types';

export const LoginScreen = () => {
    const navigate = useNavigate();
    const { dispatch } = useContext(AuthContext);

    const initialForm = {
        name: ''
    };

    const [formValues, handleInputChange, reset] = useForm(initialForm);

    const handleLogin = () => {

        const lastPath = localStorage.getItem('last path') || "/pokemon-app"
        const action = {
            type: types.login,
            payload: formValues
        }
        const input = document.querySelector('input')

        if (input.value != '') {
            dispatch(action);

            navigate(lastPath, {
                replace: true
            });
         } 
    }

    return (
        <form className=" mt-5 login" onChange={handleInputChange}>
            <h1>What's your name?</h1>
            <hr />
            <input
                type='text'
                autoComplete='off'
                name='name'
            />
            <button
                className="btn btn-success mt-3"
                onClick={handleLogin}
            >
                Login
            </button>
        </form>
    )

}