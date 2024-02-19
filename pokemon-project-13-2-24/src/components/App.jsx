import "./App.css";
import { useState } from "react";

import { PokemonDetail } from "./PokemonDetail" ;
import { PokemonList } from "./PokemonList";

export function App({pokemons}){
    //console.log(pokemons);
    //const bulbizarre = pokemons[0];
    //console.log(bulbizarre);

    const [currentPokemon, setCurrentPokemon] = useState(pokemons[0]);

    function updateCurrentPokemon(newPokemon) {
        setCurrentPokemon(newPokemon);
    }

    return (
        <div>
            {/* <div class="pokemon">
                <Pokemon id={bulbizarre.id} name={bulbizarre.name} image={bulbizarre.image}/>
            </div> */}
            <div className="grid">
                <PokemonList pokemons={pokemons} updateCurrentPokemon={updateCurrentPokemon}/>
                <PokemonDetail pokemon={currentPokemon}/>
            </div>
        </div>
    )
}