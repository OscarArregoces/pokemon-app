import React from 'react'
import Graphics from './Graphics';

export const Statistics = ({ dataPokemon }) => {

    const { name, id, sprites, stats } = dataPokemon;

    return (
        <div className='row'>
            <div className='col-12 compare-pokemon'>
                <h1 className="card-title">{name} #{id}</h1>
                <img
                    src={sprites.other.home.front_default}
                    alt={name}
                    title={name}

                />

                <div className='mb-5 mt-2'>
                    <Graphics stats={stats} />
                </div>

            </div>
        </div>
    )
}
