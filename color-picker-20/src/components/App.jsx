import { useState } from "react";
import { ColorPicker } from "./ColorPicker";
import { Slider } from "./Slider";
import { Content } from "./Content";
import "./App.css";

export function App(){
  
  //const [styleContent,setStyleContent] = useState({color : "red"});
  const [styleContent,setStyleContent] = useState({color : "rgba(255,0,0,1"});

    function updateTextSize(newSize){
      //console.log(newSize);
      setStyleContent({
        ...styleContent, //Je conserve les anciens styles
        fontSize : `${newSize}px` //J'ajoute les nouveaux
      })
    } ;

    function updateInterLettrage(newValue){
      setStyleContent({
        ...styleContent,
        letterSpacing : `${newValue}px`
      })
    };

    function updatePadding(newValue){
      setStyleContent({
        ...styleContent,
        padding : `${newValue}px`
      })
    };

    function updateRadius(newValue){
      setStyleContent({
        ...styleContent,
        borderRadius : `${newValue}px`
      })
    };
    
    function updateColor(newColor){
        setStyleContent({
            ...styleContent,
            color : `rgb(${newColor.red},${newColor.green},${newColor.blue})`
        });
    } ;

    function updateBackgroundColor(newColor){
      setStyleContent({
          ...styleContent,
          backgroundColor : `rgb(${newColor.red},${newColor.green},${newColor.blue})`
      });
  } ;

    return (
        <div className="app">
          <h1 className="rendu">SKYBLOG</h1>
          <h2 className="rendu">Réglages de la couleur</h2>
            <ColorPicker onColorChange={updateColor}/>
          <h2 className="rendu">Réglages de la couleur du fond</h2>
            <ColorPicker onColorChange={updateBackgroundColor} />
          <h2 className="rendu">Réglages de la zone d'écriture</h2>
            <Slider name="Taille du texte" min={0} max={100} onValueChange={updateTextSize}/>
            <Slider name="Interlettrage" min={0} max={100} onValueChange={updateInterLettrage}/>
            <Slider name="Padding" min={0} max={100} onValueChange={updatePadding}/>
            <Slider name="Radius" onValueChange={updateRadius}/>
          <h2 className="rendu">Zone d'écriture</h2>
            <Content style={styleContent}/>
        </div>
    )
}

/*import { useState } from 'react'
import './App.css'

export function App() {
  const [opacity, setOpacity] = useState(1);
  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);

  const changeColor = {
    height : 100,
    width: 200,
    backgroundColor: `rgb(${red}, ${green}, ${blue}, ${opacity})`
    //backgroundColor: "rgb("+red+"," +green+"," +blue+"," +opacity+")"
  }

  function changeRed(event) {
    setRed (event.target.value)
  };
  function changeGreen(event) {
    setGreen (event.target.value)
  };
  function changeBlue(event) {
    setBlue (event.target.value)
  };
  function changeOpacity(event) {
    setOpacity (event.target.value)
  };

  return (
    <div>
      <div style={changeColor} className='carre'>

      </div>
      <p>Régler le rouge</p>
      <input type="range" onInput={changeRed} min="0" max="255"/>
      <p>Régler le bleu</p>
      <input type="range" onInput={changeBlue} min="0" max="255"/>
      <p>Régler le vert</p>
      <input type="range" onInput={changeGreen} min="0" max="255"/>
      <p>Régler l'opacité'</p>
      <input type="range" onInput={changeOpacity} min="0" max="1" step="0.05"/>
    </div>
  )
}*/
