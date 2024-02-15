import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './components/App'
import {Tableau} from './components/Tableau'
import {Array} from './components/Array'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Tableau />
    <Array />
  </React.StrictMode>,
)
