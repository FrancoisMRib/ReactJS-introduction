import { useState } from 'react'

import './App.css';
import {Cars} from "./Cars";
import {Compteur} from "./Compteur" ;

export function App() {
  //const [count, setCount] = useState(0)

  return (
    <div>
      <p>Voici la liste de nos produits</p>
      <Compteur/>
      <Cars />
    </div>
  )
}

