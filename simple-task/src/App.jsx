import { useState } from "react";

export function App() {
    let appName = "SimpleTask";
    let task = "Faire les courses";

    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);

    setTimeout(()=>{
        setDate (new Date());
    }, 1000);

    return (
        <div>
        <h1>Simple Task</h1>
        <p>Il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
        <h2>Bravo vous avez affiché l'heure !</h2>
        <p>Ca bouge ! 🫨</p>
        <p>Nike air</p>
        <p>{count} produits dans le panier.</p>
        <button onClick={ ()=>{setCount(count+1)} } >Ajouter un produit</button>
        <p>Vous pouvez écrire</p>
        <h3>N'importe quel balises HTML</h3>
        <div>
        <label> Dans les composants React </label>
        <input type="text" name="" id="" />
        </div>
            <h1>{appName}</h1>
            <ul>
            <li>{task}</li>
            </ul>
        </div>

                  
    )
}
    