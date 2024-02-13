import './App.css' ;

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

export function Pokemon({id, name, image}) {

    // function afficherPokemon() {
    //     fetch("https://pokebuildapi.fr/api/v1/pokemon/limit/100")
    //     .then(response => response.json())
    //     .then(data => console.log(data))
    //     .catch(error => console.error(error));
    //     let id = pokemon.id ;
    //     let name = pokemon.name ;
    //     let image = pokemon.image ;
    // }
    return(
        <div class="unique">
            <p>{id}</p>
            <p>{name}</p>
            <img src={image} alt="" class="sprite"/>
        </div>
    )
}
