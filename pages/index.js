import { Card, Grid, MenuItem, Select } from '@mui/material';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CardPokemon from '../components/cardPokemon';
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
    setType(event.target.value);
    const newPokemon = filterPokemons(pokemons, copyPokemons, event.target.value);
    console.log("newPokemon: ", newPokemon);
    setPokemons(newPokemon);
  };

  return (
    <div>
      <header>
        <div className="logo_header">
          <Image src="/logo-pokemon.png" width={150} height={50} />
        </div>
      </header>
      <main className="body_main">
      <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
        <Grid item xs={12} sm={4} md={8}>
          <div>
            <div>
              <div>
              <h1>Pokedex</h1>
              </div>
              <div>
              <p>Seleccionado: </p>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={type}
                label="type"
                onChange={handleChange}
              >
                <MenuItem value="all">All</MenuItem>
                <MenuItem value="grass">Grass</MenuItem>
                <MenuItem value="fire">Fire</MenuItem>
                <MenuItem value="poison">Poison</MenuItem>
                <MenuItem value="water">Water</MenuItem>
                <MenuItem value="bug">Bug</MenuItem>
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="electric">Electric</MenuItem>
                <MenuItem value="ground">Ground</MenuItem>
                <MenuItem value="fairy">Fairy</MenuItem>
                <MenuItem value="psychic">Psychic</MenuItem>
                <MenuItem value="dragon">Dragon</MenuItem>
              </Select>
              </div>
            </div>
            <Grid container spacing={2} columns={{ xs: 4, sm: 8, md: 12 }}>
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
