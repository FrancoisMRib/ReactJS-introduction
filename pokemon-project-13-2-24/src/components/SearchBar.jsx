import { Pokemon } from "./Pokemon";
import { React, useState } from "react";

export function SearchBar(){

//La définition d'un composant = fonction qui renvoie jsx. CAD du html pour 
let [name, setName] = useState(null);

fetch("https://pokebuildapi.fr/api/v1/pokemon/Gruikui")
.then(response=>response.json())
.then(pokemons=>{
pokemons.forEach(pokemon=>{
console.log(pokemon.name);
});
});

function handleUserInput(event){
    // console.log("Changing...");
    // console.log(event.target.value);
    setName(event.target.value);
}

    return (
        <div>
            <input type="text" onChange={ handleUserInput }/>
            <p>{name}</p>
        </div>
    )
}