import { useState } from 'react';

import './App.css';

export function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date()) ;

  const[red, setRed] = useState(255);
  const[green, setGreen] = useState(255);
  const[blue, setBlue] = useState(255);
  const[opacity, setOpacity] = useState(255);

  setTimeout(()=> {
    setDate(new Date()) ;
  }, 1000);

  const changeColor = {
    height: 100,
    width: 200,
    backgroundColor: `rgba(${red},${green},${blue},${opacity})`
  } ;

  function changeRed(e) {
    setRed(e.target.value)
  };
  function changeGreen(e) {
    setGreen(e.target.value)
  };
  function changeBlue(e) {
    setBlue(e.target.value)
  };
  function changeOpacity(e) {
    setOpacity(e.target.value)
  };

  return (
    <div>
      <h1>Voici ma page du matin</h1>
      <p>Il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
      <button onClick={() => setCount((count) => count + 1)}>Ajouter 1</button>
      <p>{count}</p>
      <div style={changeColor} className='carré'>

      </div>
      <p>Régler le rouge</p>
      <input type="range" onInput={changeRed} min="0" max="255"/>
      <p>Régler le vert</p>
      <input type="range" onInput={changeGreen} min="0" max="255"/>
      <p>Régler le bleu</p>
      <input type="range" onInput={changeBlue} min="0" max="255"/>
      <p>Régler l'opacité'</p>
      <input type="range" onInput={changeOpacity} min="0" max="1" step="0.01"/>
      <p>Nombre d'erreurs de syntaxe : 4</p>
      <p>Fini : 9h40</p>
    </div>
  )
}

// export default App
