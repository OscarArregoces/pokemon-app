import React, { useEffect, useState } from 'react'
import { PokemonScreen } from '../components/pokemon/PokemonWanted';
import { useForm } from '../hooks/useForm';

export const SearchScreen = () => {

    const [formValues, handleInputChange, reset] = useForm({
        searchText: ''
    });
    const { searchText } = formValues;
    const [pokemonWanted, setPokemonWanted] = useState('bulbasaur');
    const [dataPokemon, setDataPokemon] = useState([]);
    const [dataReady, setDataReady] = useState(false);


    useEffect(() => {
        getPokemonWanted(pokemonWanted);
    }, [pokemonWanted])

    const handleSearch = (e) => {
        e.preventDefault();
        console.log(searchText)
        setPokemonWanted(searchText.toLowerCase());
        getPokemonWanted(pokemonWanted);
    }
    const getPokemonWanted = async (pokemon) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        if (res.ok) {
            const data = await res.json();
            setDataPokemon(data);
            setDataReady(true);
        } else {
            alert(`${pokemon} no es un Pokemon.`)
            throw new Error('Problemas en la peticion del SearchScreen')
        }

    }

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-12'>
                    <h1>Find your favorite pokemon</h1>
                    <form onSubmit={handleSearch}>
                        <input
                            type='text'
                            name='searchText'
                            value={searchText}
                            placeholder={pokemonWanted}
                            autoComplete='off'
                            onChange={handleInputChange}
                        />

                        <button
                            className='btn btn-success btn-lg mx-2'
                            type='submit'
                        >Search</button>
                    </form>
                </div>
            </div>
            <div>

                {
                    (dataReady) &&
                    <PokemonScreen idPokemon={dataPokemon} />

                }

            </div>
        </div>
    )
}
