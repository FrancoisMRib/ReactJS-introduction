import {useState} from "react" ;

export function Cars() {
    //const [name, setName] = useState(null);
    const cars = [
        {name: "Citroën DS 19", date: "1965", image: "https://www.citromuseum.com/typo3temp/_processed_/csm_ds_Daniel_Denis_01_d4bd2af1df.jpg"},
        {name: "Bugatti Royale", date: "1928", image:"https://looksmartmodels.com/wp-content/uploads/2016/01/Bugatti-Weinberger-Royale.jpg"},
        {name: "Cadillac Eldorado Biarritz", date: "1955", image:"https://heacockclassic.com/wp-content/uploads/1959-Cadillac-Eldorado-Biarritz.jpg"}
    ];
    const [maxDate, setMaxDate] = useState(2000);
    const filteredCars = cars.filter((car)=> {
        return car.date < maxDate ;
    });

    //Détail de la fonction map
    /*function map(array, cb){
        let results = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const result = cb(element, i, array);
            results.push(result);
        };
        return results ;
    };*/

    const carsList = filteredCars.map((car, i) => {
        return (
            <div key={i}>
                <img src={car.image} alt="" className="standard"/>
                <p>La voiture est une {car.name} de {car.date}</p>
            </div>
        )
    });

    function updateMaxDate(event){
        const value = event.target.value ;
        setMaxDate(value);
    };

    return (
        <div>
            <h2>Liste des voitures</h2>
            <p>{maxDate}</p>  
            <input type="range" min="1920" max="1970" defaultValue="2000" onInput={updateMaxDate} /> 
            {carsList}         
        </div>
    )
}