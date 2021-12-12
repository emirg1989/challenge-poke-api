import { createContext, useState } from "react";

export const ContextPokemonData = createContext();

export const PokemonProvider = (props) => {
    const [pokemonData, setPokemonData] = useState(null);

    const setPokemon = (pokemon) => {
        setPokemonData(pokemon);
    }

    const value = {
        pokemonData,
        setPokemon,
    };

    return (
        <ContextPokemonData.Provider value={value}>
            {props.children}
        </ContextPokemonData.Provider>
    );
};