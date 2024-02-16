import { useState } from "react";

export function App() {
    let appName = "SimpleTask";
    let task = "Faire les courses";

    const [date, setDate] = useState(new Date());
    const [count, setCount] = useState(0);
    const [tasks,setTasks] = useState([
        "Faire mes devoirs",
        "Apprendre à conduire",
        "Faire à manger"
        ]);
            
    function onAddTask(event){
        event.preventDefault(); // J'annule le rechargement de la page
        const newtask = (new FormData(event.target)).get("task");
        setTasks([
            ...tasks,
            newtask
            ]);
    }

    setTimeout(()=>{
        setDate (new Date());
    }, 1000);

    // la fonction map renvoi chaque éléments du state, encapsuler dans une balise <li>
    const tasksElements = tasks.map((task,i)=><li key={i}>{task}</li>);
    return (
        <div>
        <h1>Simple Task</h1>
        <form onSubmit={onAddTask}>
            <input type="text" name="task" />
            <button>Ajouter</button>
        </form>
        <ul>
            {tasksElements}
        </ul>   
        
        <p>Il est {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</p>
        <h2>Bravo vous avez affiché l'heure !</h2>
        <p>Ca bouge ! 🫨</p>
        <p>Nike air</p>
        <p>{count} produits dans le panier.</p>
        <button onClick={ ()=>{setCount(count+1)} } >Ajouter un produit</button>
        <p>Vous pouvez écrire</p>
        <h3>N'importe quelles balises HTML</h3>
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
