import { useState } from "react";

export function Compteur() {
    const [date, setDate] = useState(new Date()) ;
    const [isRunning, setIsRunning] = useState(false);

    const [t0, setT0] = useState(0);

    function start(){
        setT0(Date.now())
        setIsRunning(true)
    }

    setTimeout(() => {
        if(isRunning) {
            setDate(new Date(Date.now()- t0));
        }
    }, 1000);

    let secondes = date.getSeconds();
    if(date.getSeconds() < 10){
        secondes = "0"+date.getSeconds();
    };

    // function dateChrono() {
    //     new Date(Date.now() - t0);
    // };

    return (
        <div>
            <h3>Horloge/Chronomètre</h3>
            <p>{date.getMinutes()}:{date.getSeconds()}</p>
            <button onClick={start}>Lancer</button>
        </div>
    )
}