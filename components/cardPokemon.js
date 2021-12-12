import { Card, Grid } from "@mui/material";

export default function CardPokemon({pokemon}) {
  const imagePokemon = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  return (
    <Grid item xs={12} sm={4} md={4}>
        <Card className="card_pokemon">
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
    </Grid>
  )
}
