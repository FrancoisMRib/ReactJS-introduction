export function Tableau() {

    const ordis = [
        {name : "Lenovao thinkpas T440", price: 2300},
        {name : "Dell latitude", price: 2300},
        {name : "Alienware", price: 2300},
        {name : "Asus très cher", price: 2300}
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

    //Version finale avec une map qui transforme mes strinfs en <p> </p>
    const ordisElements = ordis.map(ordi=>{
        return <p>{ordi}</p>;
    });

    const ordisBalises = ordis.map((ordi, i) => <p key={i} > {ordi.name} </p>)

    return (
        <div>
            <h1>Tableau</h1>
            {ordisElements}
        </div>
    )
}