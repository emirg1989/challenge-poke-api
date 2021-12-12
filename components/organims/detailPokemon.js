import { useContext } from "react";
import { ContextPokemonData } from "../../store/ContextPokemonData";
import IDPokemon from "../atoms/idPokemon";
import PokemonTypes from "../molecules/pokemonTypes";
import TitlePokemon from "../atoms/titlePokemon";

export default function DetailPokemon({showClose = false, handleClose}) {
  const {pokemonData} = useContext(ContextPokemonData);
  return (
       pokemonData ? 
        <div className="body_detail_pokemon">
            {showClose ? <p className="boton_close" onClick={()=> handleClose()}>X</p>: null}
            <img
                className="img_pokemon"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonData.id}.png`}
            />
            <IDPokemon id={pokemonData.id}/>
            <TitlePokemon name={pokemonData.name}/>
            <PokemonTypes types={pokemonData.types} />
            <div className="container_pokemon_abilities">
                <p className="number_pokemon text_align">ABILITIES</p>
                <ul className="list_pokemon_type">
                    {pokemonData.abilities.map((ability, index) => {
                        return <li key={index} className="pill_pokemon_ability" id={index}>{ability.ability.name}</li>
                    })}
                </ul>
            </div>
            <div className="container_pokemon_abilities">
                <p className="number_pokemon text_align">STATS</p>
                <ul className="list_pokemon_stats">
                    <li className="item_pokemon_stats">hp: {pokemonData.stats[0].base_stat}</li>
                    <li className="item_pokemon_stats">attack: {pokemonData.stats[1].base_stat}</li>
                    <li className="item_pokemon_stats">defense: {pokemonData.stats[2].base_stat}</li>
                    <li className="item_pokemon_stats">speed: {pokemonData.stats[5].base_stat}</li>
                </ul>
            </div>
        </div>
         : <div className="container_defaultaside_pokemon">
             <h3 className="title_aside_pokemon">Aún no has seleccionado un pokemon</h3>
             <p className="subtitle_aside_pokemon">el detalle del pokemon aparecera aquí una vez que lo selecciones</p>
         </div>
  )
}
