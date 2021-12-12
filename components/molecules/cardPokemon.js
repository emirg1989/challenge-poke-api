import { Card, Grid} from "@mui/material";
import React, { useContext } from "react";
import { ContextPokemonData } from "../../store/ContextPokemonData";
import IDPokemon from "../atoms/idPokemon";
import ModalPokemon from "./modalPokemon";
import PokemonTypes from "./pokemonTypes";
import TitlePokemon from "../atoms/titlePokemon";

export default function CardPokemon({pokemon}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {setPokemon} = useContext(ContextPokemonData);

  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  
  const selectPokemon = () => {
    setPokemon(pokemon);
    if(window.screen.width < 1200) {
        handleOpen();
    }
  };
  return (
    <Grid item xs={12} sm={4} md={4}>
        <Card className="card_pokemon" onClick={() => selectPokemon()}>
            <img
                className="img_pokemon"
                src={imagePokemon}
            />
            <IDPokemon id={pokemon.id}/>
            <TitlePokemon name={pokemon.name}/>
            <PokemonTypes types={pokemon.types} />
        </Card>
        <ModalPokemon handleClose={handleClose} open={open}/>
    </Grid>
  )
}
