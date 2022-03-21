import React from 'react'
import { CompararData } from '../components/comparar/compararData'

export const CompararScreen = () => {
    return (
        <div className='container mt-3 prueba comparar' >
            <div className='row pt-2'>
                <CompararData />
                <CompararData />
            </div>
        </div>
    )
}
