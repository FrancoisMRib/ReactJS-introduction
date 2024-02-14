import { useState } from 'react' ;
import './App.css';


export function App() {
  const [date, setDate] = useState(new Date()) ;

  const [red, setRed] = useState(255);
  const [green, setGreen] = useState(255);
  const [blue, setBlue] = useState(255);
  const [opacity, setOpacity] = useState(1);

  const changeColor = {
    height: 100,
    width: 100,
    backgroundColor: `rgba(${red}, ${green}, ${blue}, ${opacity})`
  };

  function updateRed(e) {
    setRed (e.target.value) ;
  };
  function updateGreen(e) {
    setGreen (e.target.value) ;
  };
  function updateBlue(e) {
    setBlue (e.target.value) ;
  };
  function updateOpacity(e) {
    setOpacity (e.target.value) ;
  };


  setTimeout(()=> {
    setDate (new Date());
  }, 1000);

  return (
    <div className='jambon'>
      <h1>Allez, deuxième essai !!</h1>
      <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
      <h1>Slide-Color</h1>
      <div style={changeColor} className='jambon'>

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

