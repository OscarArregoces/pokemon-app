import React, { useState, useEffect } from 'react'
import { useForm } from '../../hooks/useForm'
import { Statistics } from './statistics';

export const CompararData = () => {

    const initialForm = {
        pokemon: ''
    };

    const [formValues, handleInputChange] = useForm(initialForm);
    const [dataPokemon, setDataPokemon] = useState([]);
    const [nameReady, setNameReady] = useState(false);
    const [dataReady, setDataReady] = useState(false);

    const { pokemon } = formValues;

    useEffect(() => {
        function getPokemon() {
            fetch('https://pokeapi.co/api/v2/pokemon/1')
                .then(r => r.json())
                .then(data => {
                    setDataPokemon(data)
                    setDataReady(true)
                })
        }
        getPokemon()
    }, []);

    useEffect(() => {
        function getPokemon(pokemon) {
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
                .then(r => r.json())
                .then(data => {
                    setDataPokemon(data)
                    setDataReady(true)
                })
                .catch(error => console.error(error));
        }
        
        
        if (pokemon) {
            getPokemon(pokemon)
        }
    }, [pokemon]);


    const handleSearch = (e) => {
        e.preventDefault();
        setNameReady(true);
    }

    return (
        <div className='col-6'>
            <form onSubmit={handleSearch}>
                <input
                    type='text'
                    placeholder='Pokemon'
                    value={pokemon}
                    autoComplete='off'
                    name='pokemon'
                    onChange={handleInputChange}
                    className='input-compare'
                />
                {/* <button
                    type='submit'
                    className='btn btn-success ms-3'
                >Search</button> */}
                <hr />
                {
                    (dataReady) && <Statistics dataPokemon={dataPokemon} />
                }
            </form>
        </div>
    )
}
