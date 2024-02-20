import { Pokemon } from "./Pokemon";

export function PokemonDetail({pokemon, pokemons}){
        //    <div>
        //     <img src={pokemons.image} alt="" />
        //     <p>{pokemon.name}</p>
        //     <p>{pokemons.id}</p>
        //    </div> 
    console.log(pokemon);

    const listeTypes = pokemon.apiTypes ;

    const evolutionPoke = pokemon.apiEvolutions[0]

    let trucTypes = listeTypes.map((type, i) => {
        return(
            <img key={i} src={type.image} alt="Type du Pokemon" className="elements"/>)
            //<img src={pokemon.apiTypes[1].image} alt="" className="elements"/>
        }) ;

    // let evolutionPoke = pokemon.apiTypes.map((evolution, i) => {
    //     return (
    //         <img key={i} src={evolution.image} alt="Type du Pokemon" className="elements"/>
    //     )
    // });
    
    return (
        <div className="presentation">
            <img src={pokemon.image} alt="" />
            <h1>{pokemon.name}</h1>
            <p>Types</p>
            <p></p>
            <div>{trucTypes}</div>
            <p>Evolution</p>
            <div>{evolutionPoke ? <Pokemon pokemon={pokemons[(evolutionPoke.pokedexId)-1]}/> : <p>Ce Pokemon n'a pas d'évolution</p>}</div>
            {/* <Pokemon pokemon={pokemon} updateCurrentPokemon={updateCurrentPokemon} key={i}/> */}
            {/* <img src={pokemon.apiEvolutions[0].name} alt="" /> */}
        </div>
    )
    
}