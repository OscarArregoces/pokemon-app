import React from 'react'
import { Route, Routes } from 'react-router-dom';

import { Nabvar } from '../components/ui/nabvar'
import { CompararScreen } from "../pages/CompararScreen";
import { PokemonScreen } from "../pages/PokemonScreen";
import { SearchScreen } from "../pages/SearchScreen";
import { WelcomeApp } from "../pages/WelcomeApp";
import { HomeScreen } from '../pages/HomeScreen';

export const DashboardRoutes = () => {
    return (
        <>
            <Nabvar />
            <div>
                <Routes>
                    <Route path="home" element={<HomeScreen />} />
                    <Route path="pokemon/:pokemonId" element={<PokemonScreen />} />
                    <Route path="comparar-pokemones" element={<CompararScreen />} />
                    <Route path="pokemon-app" element={<WelcomeApp />} />
                    <Route path="search" element={<SearchScreen />} />


                    <Route path="/" element={<HomeScreen />} />
                </Routes>
            </div>
        </>
    )
}
