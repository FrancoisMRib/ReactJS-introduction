import { useState } from 'react';

import './App.css';

export function App() {
  //const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date(0));
  const [isRunning, setIsRunning] = useState(false);

  const [t0, setT0] = useState(0);

  function start(){
    setT0(Date.now())
    setIsRunning(true)
  };

  setTimeout(()=>{
    if(isRunning) {
      setDate(new Date(Date.now()- t0));
    }
  }, 1000);

  let secondes = date.getSeconds();
  if(date.getSeconds() < 10){
    secondes = "0"+ date.getSeconds();
  };

  function dateChrono() { 
    new Date(Date.now() - t0); 
  };

  return (
    <div>
      <h1>Chronomètre</h1>
      {/* <p>{dateChrono}</p> */}
      <p>{date.getMinutes()}:{date.getSeconds()}</p>
      <button onClick={ start }>Start</button>
    </div>
  )
}

//export default App
