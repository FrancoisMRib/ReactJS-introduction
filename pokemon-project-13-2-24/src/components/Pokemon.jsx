import './App.css' ;
//import {PokemonDetail} from "./PokemonDetail";

{/* <Pokemon pokemon={bulbizarre} onClickPokemon={(pokemon)=>{
    console.log(pokemon);
    const name = 1;
    const id = "Bulbizarre";
    const image = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png";
}}/> */}

// async function afficherPokemon() {
//     const reponse = await
//     fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100");
//     const pokemons = await pokemons.json();
//     console.log(films);
// }

export function Pokemon({pokemon, updateCurrentPokemon}) {

    // function afficherPokemon() {
    //     fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    //     let id = pokemon.id ;
    //     let name = pokemon.name ;
    //     let image = pokemon.image ;
    // }

    function changePoke() {
        updateCurrentPokemon(pokemon);
    };

    return(
        <div className="unique" onClick={changePoke}>
            <div>{pokemon.id}</div>
            <div>{pokemon.name}</div>
            <div><img src={pokemon.image} alt="" className="sprite"/></div>
        </div>
    )
}
