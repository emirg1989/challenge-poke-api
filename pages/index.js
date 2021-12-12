import { Card, Grid, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
import SelectPokemon from '../components/selectPokemon';
import getPokemons from '../services/api-service';
import filterPokemons from '../services/filterPokemon-service';

export default function Home() {
  const [pokemons, setPokemons] = useState([]);
  const [copyPokemons, setCopyPokemons] = useState([]);
  const [type, setType] = useState("all");

  useEffect(()=>{
    getPokemons().then((data) => {
      console.log(data);
      setPokemons(data);
      setCopyPokemons(data);
    });
  }, []);

  const handleChange = (event) => {
    const typeSelected = event.target.value
    setType(typeSelected);
    const newListPokemon = filterPokemons(pokemons, copyPokemons, typeSelected);
    setPokemons(newListPokemon);
  };

  return (
    <div>
      <header>
        <div className="logo_header">
          <Image src="/logo-pokemon.png" width={150} height={50} />
        </div>
      </header>
      <main className="body_main">
      <Grid container spacing={2} columns={{ xs: 4, sm: 4, md: 12 }}>
        <Grid item xs={12} sm={4} md={8}>
          <div>
            <Grid container>
              <Grid item xs={12} sm={12} md={6}>
                <h1 className="title_page">Pokedex</h1>
              </Grid>
              <Grid item xs={12} sm={12} md={6}>
                <SelectPokemon type={type} handleChange={handleChange} />
              </Grid>
            </Grid>
            <Grid p={2} container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
              {pokemons.map(function(pokemon, i){
                  return <CardPokemon pokemon={pokemon}  key={i} />;
              })}
            </Grid>
          </div>
          </Grid>
          <Grid item xs={0} sm={0} lg={4}>
            <Card className="card_aside"><h3 className="title_aside">Detalle del Pokemon</h3></Card>
        </Grid>
        </Grid>
      </main>
    </div>
  )
}
