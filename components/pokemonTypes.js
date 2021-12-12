import { MenuItem, Select } from "@mui/material";

export default function PokemonTypes({types}) {
  return (
    <div>
        <ul className="list_pokemon_type">
            {types.map((type, index) => {
                return <li key={index} className="pill_pokemon_type" id={index}>{type.type.name}</li>
            })}
        </ul>
    </div>
  )
}