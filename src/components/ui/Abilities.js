import React,{ useEffect, useState } from 'react';
import { Loading } from '../loading/Loading';

export const Abilities = ({ abilitie }) => {


    const [dataPokemon, setDataPokemon] = useState([])
    const [lenguagePokemon, setLenguagePokemon] = useState([])
    const [dataReady, setDataReady] = useState(false)

    const getLenguageAbilitie = async (url) => {
        const res = await fetch(url)
        const data = await res.json()
        setDataPokemon(data.flavor_text_entries)
    }

    useEffect(() => {
        getLenguageAbilitie(abilitie.ability.url)
    }, []);


    useEffect(() => {
        dataPokemon.map((lenguage) => {
            if (lenguage.language.name === 'en') {
                setLenguagePokemon(lenguage.flavor_text);
                setDataReady(true)
            }
        })
    }, [dataPokemon]);


     (!dataReady) && <Loading />

    return (
        <div className='ability'>
            <h5>{abilitie.ability.name}</h5>
            
            <p>{lenguagePokemon}</p>
        </div>
    )
        
    
}



// dataPokemon.map(lenguage => {
//     (lenguage.language.name === 'es') && setLenguagePokemon(lenguage.flavor_text)
   
// })



