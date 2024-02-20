import "./App.css";
import { useState } from "react";

import { PokemonDetail } from "./PokemonDetail" ;
import { PokemonList } from "./PokemonList";
import { SearchBar } from "./SearchBar";

export function App({pokemons}){
    //console.log(pokemons);
    //const bulbizarre = pokemons[0];
    //console.log(bulbizarre);

    const [currentPokemon, setCurrentPokemon] = useState(pokemons[0]);
    //const evolutionPoke = pokemons.apiEvolutions[0].name;
    const [searchBar, setSearchBar] = useState("");

    // if (evolutionPoke.length > 0) {
    //     pokemons = 
    // }

    function updateCurrentPokemon(newPokemon) {
        setCurrentPokemon(newPokemon);
    };

    function handleSearch(event){
        setSearchBar(event.target.value);
    };
    console.log(pokemons);
    const filteredPokemons = pokemons.filter(pokemon => pokemon.name.includes(searchBar));
    console.log(filteredPokemons);

    return (
        <div>
            {/* <div class="pokemon">
                <Pokemon id={bulbizarre.id} name={bulbizarre.name} image={bulbizarre.image}/>
            </div> */}
            <input type="text" value={searchBar} onInput={handleSearch}/>
            <div className="grid">
                <PokemonList pokemons={pokemons} updateCurrentPokemon={updateCurrentPokemon}/>
                <PokemonDetail pokemon={currentPokemon} pokemons={pokemons}/>
                {/*evolution={evolution}*/} 
            </div>
        </div>
    )
}