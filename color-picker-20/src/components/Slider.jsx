export function Slider({name="Range", onValueChange, min=0, max=100}){

function updateValue(event) {
    //Appel de la fonction fournie par app
    onValueChange(event.target.value);
}

    return (
        <div>
            <label>
                {name}
                <input type="range" onInput={updateValue} defaultValue={10} min={min} max={max}/>
            </label>
        </div>
    )
}