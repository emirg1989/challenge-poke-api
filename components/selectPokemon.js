import { MenuItem, Select } from "@mui/material";

export default function SelectPokemon({type, handleChange}) {
  const pokemonTypes = ["all", "grass", "fire", "poison", "water", "bug", "normal", "electric", "ground", "fairy", "psychic", "dragon"];
  return (
    <div className="container_select_type">
        <p className="title_select_type">Selected: </p>
        <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={type}
            label="type"
            onChange={handleChange}
        >
            {pokemonTypes.map((type) => {
                return <MenuItem value={type}>{type}</MenuItem>;
            })}
        </Select>
    </div>
  )
}
