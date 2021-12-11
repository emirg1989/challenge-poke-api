const baseURL = "https://pokeapi.co/api/v2";
const path = "/pokemon";
console.log(baseURL);
async function get(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  async function searchPokemonData(pokemonName){
    const url = `${baseURL}/${path}/${pokemonName}`;
    return get(url).then((pokemon) => pokemon);
  }

  async function enrichPokemons(pokemonList){
    let pokemons = await Promise.all(pokemonList.map(async pokemon => {
      let pokemonObject = await searchPokemonData(pokemon.name);
      return pokemonObject;
    }))
    return pokemons;
  }
  
  export default async function getPokemons() {
    const url = `${baseURL}/${path}?limit=151`;
    let pokemons = await get(url).then((data) => data.results);
    return await enrichPokemons(pokemons);
  }
  