import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App'
import {Tableau} from './components/Tableau'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Tableau />
  </React.StrictMode>,
)
