import { React, useState } from 'react' ;

export function Clicker() {
    let [compteur, setCompteur] = useState(0);

    function handleClick(){
        setCompteur(compteur + 1);
    }
    return (
        <div>
            <h1> Clicker </h1>
            <button onClick={handleClick}>Clic ici !</button>
            <p>{compteur}</p>
        </div>
        ) ;
}