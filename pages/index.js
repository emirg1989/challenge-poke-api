import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
import getPokemons from '../services/api-service';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(()=>{
    getPokemons().then((data) => {
      console.log(data);
      setPokemons(data);
    });
  }, []);

  return (
    <div className="body_main">
      <main >
        <h1 className="title">
          pokemon
        </h1>
        <ul>
          {pokemons.map(function(pokemon, i){
              return <CardPokemon pokemon={pokemon}  key={i} />;
          })}
        </ul>
      </main>
    </div>
  )
}
