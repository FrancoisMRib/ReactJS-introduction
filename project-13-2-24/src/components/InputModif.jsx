import { useState } from "react" ;

export function InputMod() {
    let [word, setWord] = useState("un texte");

    function handleMod(event){
        setWord(event.target.value);
    }
    return (
        <div>
            <input type="text" onChange={ handleMod } />
            <p>{word}</p>
        </div>
        ) ;
}