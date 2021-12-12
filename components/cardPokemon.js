import { Card, Grid, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useContext } from "react";
import { ContextPokemonData } from "../store/ContextPokemonData";

export default function CardPokemon({pokemon}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {setPokemon} = useContext(ContextPokemonData);

  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  
  const selectPokemon = () => {
    setPokemon(pokemon);
  };
  return (
    <Grid item xs={12} sm={4} md={4}>
        <Card className="card_pokemon" onClick={() => selectPokemon()}>
            <img
                className="img_pokemon"
                src={imagePokemon}
            />
            <h3 className="number_pokemon">N° {pokemon.id}</h3>
            <p className="title_pokemon">{pokemon.name}</p>
            <div>
                <ul className="list_pokemon_type">
                    {pokemon.types.map((type, index) => {
                        return <li key={index} className="pill_pokemon_type" id={index}>{type.type.name}</li>
                    })}
                </ul>
            </div>
        </Card>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <h1>hola soy un modal</h1>
        </Modal>
    </Grid>
  )
}
