import { useState } from 'react'
import './App.css'

export function App() {
  const [date, setDate] = useState(new Date()) ;

  const[red, setRed] = useState(255);
  const[green, setGreen] = useState(255);
  const[blue, setBlue] = useState(255);
  const[opacity, setOpacity] = useState(255);

  const colorPickUse = {
    height:100,
    width:100,
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`
  };

  function updateRed(event) {
    //const range = event.target.value ;
    //setRed(range);
    setRed(event.target.value);
  } ;
  function updateGreen(event) {
    const range = event.target.value ;
    setGreen(range);
  } ;
  function updateBlue(event) {
    const range = event.target.value ;
    setBlue(range);
  } ;
  function updateOpacity(event) {
    const range = event.target.value ;
    setOpacity(range);
  } ;

  setTimeout(()=> {
    setDate(new Date()) ;
  }, 1000);

  return (
    <div>
      <h1>Cette fois-ci, sans filet</h1>
      <h2>Heure</h2>
      <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
      <h2>Slider des couleurs</h2>
      <div style={colorPickUse} className='image'>

      </div>
      <span>Rouge</span>
      <input type="range" onInput={updateRed} min="0" max="255"/>
      <span>Vert</span>
      <input type="range" onInput={updateGreen} min="0" max="255"/>
      <span>Bleu</span>
      <input type="range" onInput={updateBlue} min="0" max="255"/>
      <span>Opacité</span>
      <input type="range" onInput={updateOpacity} min="0" max="1" step="0.01"/>
    </div>
  )
}

//export default App
