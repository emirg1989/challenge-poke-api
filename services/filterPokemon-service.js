export default function filterPokemons(pokemons, copyPokemons, selection) {
    pokemons = copyPokemons;
    if(selection === 'all') return copyPokemons;
    const newPokemons = pokemons.filter(pokemon => {
        let res = pokemon.types.find(type =>type.type.name === selection);
       return res !== undefined;
    });
    return newPokemons;
  }
