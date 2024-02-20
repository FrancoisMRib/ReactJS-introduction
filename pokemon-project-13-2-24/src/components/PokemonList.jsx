//import { useEffect } from "react";
import './App.css' ;
import {Pokemon} from "./Pokemon";

export function PokemonList({pokemons, updateCurrentPokemon}) {
    const pokemonsJsx = [];
    pokemons.forEach((pokemon,i) => {
        pokemonsJsx.push(
            (
                <Pokemon pokemon={pokemon} updateCurrentPokemon={updateCurrentPokemon} key={i}/>
            // <div class="unique">
            //         <p>{element.id}</p>
            //         <p>{element.name}</p>
            //         <img src={element.image} alt="" class="sprite"/>
            // </div>
            )
        );
    });
    return (
        <div className='scroll'>
            {pokemonsJsx}
        </div>
    );   
}