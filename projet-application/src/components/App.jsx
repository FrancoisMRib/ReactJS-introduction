import './App.css'
import { useState } from 'react';

export function App() {

    const [red, setRed] = useState(255);
    const [green, setGreen] = useState(255);
    const [blue, setBlue] = useState(255);
    const [opacity, setOpacity] = useState(1);

    const colorPickStyle = {
        height: 100,
        width: 100,
        backgroundColor : `rgba(${red},${green},${blue},${opacity})`,
        //backgroundColor : "rgba("+red+", "+green+","+blue+",1)",
    };
    function updateRed(event){
        const range = event.target.value;
        setRed(range);
        //console.log(range);
    };

    function updateGreen(event){
        const range = event.target.value;
        setGreen(range);
        //onsole.log(range);
    };
  
    function updateBlue(event){
        const range = event.target.value;
        setBlue(range);
        //console.log(range);
    };

    function updateOpacity(event) {
        const range = event.target.value;
        setOpacity(range);
    }

    return (
        <div>
            <h1>Color Picker</h1>
            <div style={colorPickStyle} className="coucou">
                
            </div>
            <span>Red</span>
            <input type="range" onInput={updateRed} min="0" max="255"/>
            <span>Green</span>
            <input type="range" onInput={updateGreen} min="0" max="255"/>
            <span>Blue</span>
            <input type="range" onInput={updateBlue} min="0" max="255" />
            <span>Opacity</span>
            <input type="range" onInput={updateOpacity} min="0" max="1"/>
        </div>
    )
}