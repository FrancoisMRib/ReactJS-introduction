import { React, useState } from 'react' ;

export function SearchBar(){
    //La définition d'un composant = fonction qui renvoie jsx. CAD du html pour 
    let [name, setName] = useState(null);

    //NE PAS FAIRE ça : setCompteur(compteur+1);
    //Ca renverra une erreur
    //La variable va changer, et j'utilise pour ça setCompteur
    
    function handleUserInput(event){
        // console.log("Changing...");
        // console.log(event.target.value);
        setName(event.target.value);
    }
    
    return (
    <div>
        {/* <h1> Clicker </h1>
        <button onClick={handleClick}>Clic ici !</button>
        <p>{compteur}</p> */}
        <input type="text" onChange={ handleUserInput }/>
        <p>{name}</p>
    </div>
    ) ;
} ;