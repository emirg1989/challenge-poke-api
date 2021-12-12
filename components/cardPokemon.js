import { Card, Grid, Modal, Slide } from "@mui/material";
import React, { useContext } from "react";
import { ContextPokemonData } from "../store/ContextPokemonData";
import DetailPokemon from "./detailPokemon";
import IDPokemon from "./idPokemon";
import PokemonTypes from "./pokemonTypes";
import TitlePokemon from "./titlePokemon";

export default function CardPokemon({pokemon}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {setPokemon} = useContext(ContextPokemonData);

  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  
  const selectPokemon = () => {
    console.log(window.screen.width);
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
        <Modal
            open={open}
            onClose={handleClose}
            style={{display:'flex',alignItems:'center',justifyContent:'center'}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            disableAutoFocus={true}
            keepMounted
        >
            <Slide direction="up" in={open} mountOnEnter unmountOnExit>
            <div className="body_modal">
                <DetailPokemon showClose={true} handleClose={handleClose} />
            </div>
            </Slide>
           
        </Modal>
    </Grid>
  )
}
