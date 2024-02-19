export function PokemonDetail({pokemon}){
        //    <div>
        //     <img src={pokemons.image} alt="" />
        //     <p>{pokemon.name}</p>
        //     <p>{pokemons.id}</p>
        //    </div> 
    console.log(pokemon);

    const listeTypes = pokemon.apiTypes ;

    let trucTypes = listeTypes.map((type, i) => {
        return(
            <img key={i} src={type.image} alt="Type du Pokemon" className="elements"/>)
            //<img src={pokemon.apiTypes[1].image} alt="" className="elements"/>
        }) 
    
        return (
        <div className="presentation">
            <img src={pokemon.image} alt="" />
            <h1>{pokemon.name}</h1>
            <p>Types</p>
            <p></p>
            <div>{trucTypes}</div>
            <p>Evolution</p>
            {/* <img src={pokemon.apiEvolutions[0].name} alt="" /> */}
        </div>
    )
    
}