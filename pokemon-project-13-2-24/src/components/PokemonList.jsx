//import { useEffect } from "react";
import './App.css' ;

export function PokemonList({pokemons}) {
    const pokemonsJsx = [];
    pokemons.forEach(element => {
        pokemonsJsx.push(
            (
            <div class="unique">
                    <p>{element.id}</p>
                    <p>{element.name}</p>
                    <img src={element.image} alt="" class="sprite"/>
            </div>
            )
        );
    });
    return (
        <div>
            {pokemonsJsx}
        </div>
    );   
}