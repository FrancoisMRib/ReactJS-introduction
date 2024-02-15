import './App.css';

export function Tableau() {

    const voitures = [
        "Citroën 2cv",
        "Renault Cinq",
        "Peugeot 104"
    ];


    //1re version, très JS
    // let ordisElements = [];
    // for (let i = 0; i < ordis.length ; i++) {
    //     ordisElements.push( <p>{ordis[i]}</p> )
    // }

    //2e version, entre-deux
    // let ordisElements = [];
    // ordis.forEach(ordi=>{
    //     ordisElements.push( <p>{ordi}</p> )
    // })

    //Version finale avec une map qui transforme mes strings en <p> </p>
    const voituresElements = voitures.map((voiture,i)=>{
        return <p key={i}>{voiture}</p>;
    });

    return (
        <div>
            <h3>Tableau des voitures</h3>
            {voituresElements}
        </div>
    )
}