import React from 'react';
import { Link } from 'react-router-dom';


import '../styles/pokemonCard.css';

export const PokemonCard = ({ idPokemon }) => {

  return (

    <div className='col-3'>
      <div className="card-group">
        <div className="card mb-1" >
          <img src={idPokemon.sprites.other.home.front_default} className="card-img-top" alt={idPokemon.name} />
          <div className="card-body">
            <h5 className="card-title">#{idPokemon.id}</h5>
            <p className="card-text"> {idPokemon.name.charAt(0).toUpperCase() + idPokemon.name.slice(1)}</p>

            <Link to={`/pokemon/${idPokemon.id}`} className="btn btn-dark">Ver</Link>
          </div>
        </div>
      </div>

    </div>
  )
}





