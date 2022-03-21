import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

import { BsSuitHeartFill, BsFillShieldSlashFill,BsFillShieldFill } from "react-icons/bs";
import { RiSwordFill, RiRunFill } from "react-icons/ri";
import { GiPointySword } from "react-icons/gi";
import { AiFillStar } from "react-icons/ai";
import { Loading } from '../components/loading/Loading';
import { Abilities } from '../components/ui/Abilities';

export const PokemonScreen = () => {


    const location = useLocation();
    const { pathname } = location;

    /* ARREGLAR EL LASTCHAR */
    const lastChar = pathname.slice(9);
    const [pokemon, setPokemon] = useState([]);
    const [dataPokemonReady, setDataPokemonReady] = useState(false);

    const Icon = (stat) => {
        switch (stat) {
            case 'Hp':
    
                return <BsSuitHeartFill color="red" />
            case 'Attack':
    
                return <RiSwordFill color="yellow"/>
            case 'Defense':
    
                return <BsFillShieldFill color="#2980B9"/>
            case 'Special-attack':
    
                return <GiPointySword color="#D35400"/>
            case 'Special-defense':
    
                return <BsFillShieldSlashFill color="#0333A8 "/>
            case 'Speed':
    
                return <RiRunFill color="#31F10B"/>
    
            default:
                break;
        }
    }
    const getPokemon = async (lastChar) => {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${lastChar}`);
        if (res.ok) {
            const data = await res.json();
            setPokemon(data);
            setDataPokemonReady(true);

        } else {
            setDataPokemonReady(false);
        }
        
    }


    const navigate = useNavigate();

    const handleReturn = () => {
        navigate(-1)
    }

    useEffect(() => {
        
        getPokemon(lastChar);

    }, [lastChar])


    const { sprites, abilities, id, stats, name, types } = pokemon;


    if (!dataPokemonReady) {
        return <Loading />
    }
    

    return (

        <div className='container'>
            <div className='row mt-5 prueba'>

                <div className='col-5 '>
                    <img
                        src={sprites.other.home.front_default}
                        alt={name}
                        title={name}
                    />
                </div>
                <div className='col-7 '>
                    <div className="card-body">
                        <h1 className="card-title"><p>{`${name.charAt(0).toUpperCase() + name.slice(1)} # ${id} `}</p></h1>
                        <div className='types'>
                            {types.map((type, index) => (
                                <h5 className={type.type.name}  key={index} >{ type.type.name.charAt(0).toUpperCase() + type.type.name.slice(1)}</h5>
                            ))}
                        </div>
                        <table className="table table-dark table-striped">
                            <thead>
                                <tr>
                                    <th scope="col"><AiFillStar color="pink"/></th>
                                    <th scope="col">Stat</th>
                                    <th scope="col">Score</th>
                                </tr>
                            </thead>
                            <tbody>

                                {
                                    stats.map((S, index) => (
                                        <tr key={index}>

                                            <td colSpan="0">
                                                {
                                                    Icon(S.stat.name.charAt(0).toUpperCase() + S.stat.name.slice(1))
                                                }
                                            </td>
                                            <td colSpan="1"><b>{S.stat.name.charAt(0).toUpperCase() + S.stat.name.slice(1)}</b></td>
                                            <td>{S.base_stat}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>

                        <h3 className='mt-5 mb-3'>Abilities</h3>
                        <hr />
                        {
                            abilities.map((A, index) => (
                                <div className='abilities mb-5' key={index}>
                                    {/* <h5 className='ability'> {A.ability.name.charAt(0).toUpperCase() + A.ability.name.slice(1)} :</h5> */}

                                    <Abilities abilitie={ A } />
                                </div>
                            ))
                        }
                        <button
                            onClick={handleReturn}
                            className='btn btn-danger'
                        >
                            Back
                        </button>
                    </div>
                </div>

            </div>
        </div>

    )
}


{/* < div className='row mt-5' >
                <div className='col-4'>
                    <img
                        src={sprites.other.home.front_default}
                        alt={name}
                        title={name}
                        className='img-thumbnail'
                    />
                </div>

                <div className='col-8'>
                    <h3>{name}</h3>
                    <ul className='list-group list-group'>
                        <li className='list-group-item'><b>#:</b>{id}</li>
                        <li className='list-group-item'><b>Heigth:</b>{height}</li>
                        {
                            abilities.map((ability, index) => (
                                <li
                                    className='list-group-item'
                                    key={index}
                                ><b>Ability {index}:</b>{ability.name}</li>
                            ))
                        }
                    </ul>
                    <h5 className='mt-3'>Stats</h5>
                    {
                        stats.map((S, index) => (
                            <div key={index}>
                                <p>Stat:{S.stat.name}</p>
                                <p>Number:{S.base_stat}</p>
                            </div>
                        ))
                    }

                    <button
                        className='btn btn-outline-info'
                        onClick={handleReturn}
                    >
                        Back
                    </button>
                </div>
            </div > */}
