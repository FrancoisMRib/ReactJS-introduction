import "./App.css";

import {Pokemon } from "./Pokemon" ;
import { PokemonList } from "./PokemonList";

export function App({pokemons}){
    console.log(pokemons);
    const bulbizarre = pokemons[0];
    console.log(bulbizarre);
    return (
        <div>
            {/* <div class="pokemon">
                <Pokemon id={bulbizarre.id} name={bulbizarre.name} image={bulbizarre.image}/>
            </div> */}
            <div>
                <PokemonList pokemons={pokemons}/>
            </div>
        </div>
    )
}