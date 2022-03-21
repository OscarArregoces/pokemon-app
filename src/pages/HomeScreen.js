import React, { useState, useEffect } from 'react'
import { PokemonList } from '../components/pokemon/PokemonList';
import './index.css'


export const HomeScreen = () => {

    const [currentPage, setcurrentPage] = useState('https://pokeapi.co/api/v2/pokemon');
    const [nextPage, setNextPage] = useState([]);
    const [prevPage, setPrevPage] = useState([]);
    const [dataPokemon, setDataPokemon] = useState([]);

    useEffect(() => {

        getAllPokemons()
        
    }, [currentPage])


    const getAllPokemons = async () => {

        setDataPokemon([]);

        const res = await fetch(currentPage);
        const data = await res.json();
        const { next, previous, results } = data;


        for (let i = 0; i < results.length; i++) {

            const res = await fetch(results[i].url)
            const data = await res.json();

            setDataPokemon(dataPokemon => [...dataPokemon, data])
        }


        setNextPage(next);
        setPrevPage(previous);
    }

    const loadNextPage = () => {
        setcurrentPage(nextPage)
    };
    const loadPrevPage = () => {
        setcurrentPage(prevPage)
    };

    return (

        <div className='container mt-3 p-3'>
            <PokemonList
                dataPokemon={dataPokemon}
                loadNextPage={nextPage ? loadNextPage : null}
                loadPrevPage={prevPage ? loadPrevPage : null}
            />
        </div>


    )
}