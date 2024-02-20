import { useEffect, useState } from "react";

export function ColorPicker({onColorChange}){
    const [red,setRed] = useState(255);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);

    function updateRed(event){
        setRed(event.target.value);   
    }
    function updateGreen(event){
        setGreen(event.target.value);
    }
    function updateBlue(event){
        setBlue(event.target.value);
    }

    //Quand un des states red, green ou blue change... 
    useEffect(()=>{
        //J'envoie un objet RGB à App via la fonction onColorChange
        onColorChange({
            red : red,
            green : green,
            blue : blue
        });
    },[red,green,blue]); //Je préciee la liste des states à écouter dans un tableau


    return (
        <div>
            <label>
                Red :
                <input type="range" onInput={updateRed} max="255"/>
            </label>
            <br/>
            <label>
                Green : 
                <input type="range" onInput={updateGreen} max="255"/>
            </label>
            <br/>
            <label>
                Blue : 
                <input type="range" onInput={updateBlue} max="255"/>
            </label>
        </div>
    )
}