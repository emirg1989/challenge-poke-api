export default function filterPokemons(pokemons, copyPokemons, selection) {
    pokemons = [...copyPokemons];
    if(selection === 'all') return pokemons;
    const newPokemons = pokemons.filter(pokemon => {
        let res = pokemon.types.find(type =>type.type.name === selection);
        return res !== undefined;
    });
    return newPokemons;
  }
