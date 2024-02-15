import './App.css';
//import {Products} from './Products.jsx';

export function Array() {
    const ordis = [
        {name : "Lenovao thinkpas T440", image: "https://www.etudestech.com/wp-content/uploads/2023/08/adobestock_621380970-1536x1024.jpeg", price: 2300},
        {name : "Dell latitude", image: "https://www.afbshop.fr/media/4e/de/1f/1697708709/Firefly%20PC%20fixe%20vs%20PC%20portable%20plac%C3%A9%20au%20fond%20d%E2%80%99une%20for%C3%AAt%20magnifique%20et%20luxuriante%2C%20atmosph%C3%A8re%20et%20%C3%A9cl.jpg", price: 1300},
        {name : "Alienware", image: "https://www.etudestech.com/wp-content/uploads/2023/08/adobestock_621380970-1536x1024.jpeg", price: 1500},
        {name : "Asus très cher", image: "https://www.afbshop.fr/media/4e/de/1f/1697708709/Firefly%20PC%20fixe%20vs%20PC%20portable%20plac%C3%A9%20au%20fond%20d%E2%80%99une%20for%C3%AAt%20magnifique%20et%20luxuriante%2C%20atmosph%C3%A8re%20et%20%C3%A9cl.jpg", price: 2900}
    ];

    //NON NON EN FAIT Ici il y avait du code qui est parti dans Products.jsx
    //Je transforme mes strings en balises
    const ordisBalises = ordis.map((ordi, i) => {
        return (
            <div key={i}>
                <img src={ordi.image} alt="" className="ordinatueurs"/>
                <p> {ordi.name} vaut {ordi.price} </p>
            </div>
        )
        
    
    }) ;

    return (
        <div>
            <h3>Tableau des ordinateurs</h3>
            {ordisBalises}
        </div>
    )
}