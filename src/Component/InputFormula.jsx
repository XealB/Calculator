import { useState } from "react"
import NumbersButtons from "./NumbersButtons"
import SymbolsButtons from "./SymbolsButtons"


const InputFormula = () => {

    const [formula, setFormula] = useState(""); // Initialiser à une chaîne vide
    
    const handleClick = (value) => {
        setFormula(formula + value); // Ajouter la valeur à la formule existante
    };
    const submit = () => {
        console.log(({formula}.formula).split(""))
    }
    const reset = () => {
        setFormula("")
    };

    return(
        <div>
            <input type="text" value={formula} disabled />
            <span><input type="text" disabled placeholder="= result"/></span>
            <NumbersButtons onNumberClick={handleClick}/>
            <SymbolsButtons onSymbolClick={handleClick} onSubmit={submit} onReset={reset}/>
        </div>
    )

}
export default InputFormula