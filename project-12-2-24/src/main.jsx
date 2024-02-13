console.log("Hello Main !") ;

import React from 'react';
import ReactDOM from 'react-dom/client';
//Ces commandes sont comprises par la machine parce qu'on a fait npm install tt à l'heure

import { App } from "./components/App.jsx";
//Les crochets jaunes  = le destructuring operator

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<App/>);
