import { Grid } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
import getPokemons from '../services/api-service';

function Home({pokemons}) {
  return (
    <div >
      <header>
        <div className="logo_header">
          <Image src="/logo-pokemon.png" width={150} height={50} />
        </div>
      </header>
      <main className="body_main">
        <h1 className="title">
          
        </h1>
        <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
          {pokemons.map(function(pokemon, i){
              return <CardPokemon pokemon={pokemon}  key={i} />;
          })}
        </Grid>
      </main>
      <aside></aside>
    </div>
  )  
}
export async function getServerSideProps() {
  const pokemons = await getPokemons();
  console.log(pokemons);
  return { props: { pokemons } }
}

export default Home;