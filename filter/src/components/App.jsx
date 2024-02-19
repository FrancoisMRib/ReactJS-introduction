import { useState } from 'react'

export function App({pokemons}) {
  //Pas besoin de redéfinir la fonction
  //const [count, setCount] = useState(0)

  const [maxAttack, setMaxAttack] = useState(140);
  let filteredPokemons = pokemons.filter((pokemon)=> {
    return pokemon.stats.attack < maxAttack ;
  });
  console.log(filteredPokemons);

  const alphaPoke = filteredPokemons.sort((pokemonA, pokemonB)=>
  {
    //Ordre croissant
    return pokemonA.name.localeCompare(pokemonB.name);
    //Pour l'avoir en décroissant
    //return -(pokemonA.name.localeCompare(pokemonB.name));
  }
  );

  // const alphaPoke = filteredPokemons.sort((pokemonA, pokemonB)=>
  // //pokemonA.name.localCompare(pokemonB.name)
  // //Bon ça c'est supposé être plus simple mais ça marche pas lol
  // {
  //   if (pokemonA.name < pokemonB.name){
  //     return -1 ;
  //   }
  //   if (pokemonA.name > pokemonB.name){
  //     return 1 ;
  //   }
  //   if (pokemonA.name == pokemonB.name){
  //     return 0;
  //   }
  // }
  // );

  const pokemonsList = alphaPoke.map((pokemon, i) => {
    return (
        <div key={i}>
          <p className='cartouche'>
          <img src={pokemon.image} alt="" className="standard"/>
          <div>
            <p>{pokemon.name} : {pokemon.id}</p>
            <p>Points d'attaque : {pokemon.stats.attack}</p>
          </div>
          </p>
            
            
        </div>
    )
  });


function updateMaxAttack(event){
    const value = event.target.value ;
    setMaxAttack(value);
};

  return (
    <div>
      <h1>Filtre de Pokemons</h1>
      <p>(Nbre de fois que le code ProductsList a été regardé : 4)</p>
      <input type="range" min="18" max="140" defaultValue="140" onInput={updateMaxAttack} step="0.05" className='curseur'/>
      {pokemonsList}
    </div>
  )
}
