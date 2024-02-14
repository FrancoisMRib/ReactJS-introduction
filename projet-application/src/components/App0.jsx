// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import { useState } from 'react';

function App() {
  // const [count, setCount] = useState(0)
  const Afficher = "Coucou !" ;
  const [date, setDate] = useState(new Date()) ;

  setTimeout(()=>{
    setDate(new Date());
  }, 1000);

  return (
    <div>
      <h1>{Afficher}</h1>
      <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()} et nous sommes le {date.getDate()}/{date.getMonth()+1}/{date.getFullYear()}</p>
      <p>{date.getHours()}:{date.getMinutes()}:{date.getSeconds()} et nous sommes le {date.toLocaleDateString()}</p>
      <h1>Voici une jolie page web !</h1>
      <img src="https://media.routard.com/image/51/1/maurice.1608511.jpg" alt="" class='image'/>
      <h3>Et ça c'est une jolie image de quelle île ??</h3>
      <p>(réponse : c'est l'île Maurice)</p>
    </div>
    // <>
    //   <div>
    //     <a href="https://vitejs.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.jsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
