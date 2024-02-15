import { useState } from 'react'
import './App.css'

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='background'>
      <h1>Liste de Notes</h1>
    </div>
  )
}

//export default App
