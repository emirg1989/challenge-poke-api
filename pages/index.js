import { useEffect, useState } from 'react';
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
    <div className="container">
      <main>
        <h1 className="title">
          pokemon
        </h1>
        <ul>
          {pokemons.map(function(pokemon, i){
              return <li  key={i}>{pokemon.name}</li>;
          })}
        </ul>
      </main>

      <style jsx>{``}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        h3 {
          color: black;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
