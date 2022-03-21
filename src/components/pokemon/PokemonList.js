
import React from 'react';
import { PokemonCard } from './PokemonCard';

export const PokemonList = React.memo(({ dataPokemon, loadNextPage, loadPrevPage }) => {


    return (

        <div className='row'>
            {
                dataPokemon.map((dataP, index) => (
                    <PokemonCard
                        key={index}
                        idPokemon={dataP}
                    />
                ))
            }

            <div className="my-3 pagination">
                {loadPrevPage && <button className='btn btn-danger mx-3' onClick={loadPrevPage}>Back</button>}
                {loadNextPage && <button className='btn btn-success' onClick={loadNextPage}>Next</button>}
            </div>

        </div>
    )
})

