import { useState } from "react"
import NumbersButtons from "./NumbersButtons"
import SymbolsButtons from "./SymbolsButtons"


const InputFormula = () => {

    const [formula, setFormula] = useState(""); 

    const [result, setResult] = useState("");
    
    const handleClick = (value) => {
        setFormula(formula + value); 
    };
    const submit = () => {
        calculSimple(combineDigits({formula}.formula))
        //console.log(calculComplex(combineDigits({formula}.formula)))
    }
    const reset = () => {
        setFormula("")
        setResult("")
    };

    const combineDigits = (arr) => {
        const result = [];
        let currentNumber = "";
    
        for (const item of arr) {
          if (/\d/.test(item)) {
            currentNumber += item;
          } else {
            if (currentNumber !== "") {
              result.push(currentNumber);
              currentNumber = "";
            }
            result.push(item);
          }
        }
        if (currentNumber !== "") {
          result.push(currentNumber);
        }
        return result;
      };

      const calculSimple = (arr) => {

        const value1 = arr[0]
        const operateur1 = arr[1]
        const value2 = arr[2]
        let resultCalcul = 0

        switch(operateur1){
            case "-":
                resultCalcul =  parseInt(value1) - parseInt(value2)
                break
            case "+":
                resultCalcul = parseInt(value1) + parseInt(value2)
                break
            case "x":
                resultCalcul = parseInt(value1) * parseInt(value2) //ne fonctionne pas avec les valeur negatives... operateur a revoir
                break
        }
        setResult(resultCalcul)
        setFormula(resultCalcul)
      }

    //   const calculComplex = (arr) => {

    //     const number = arr.filter((index) => index % 2 === 0);
    //     const operator = arr.filter((index) => index % 2 !== 0);
    //     const length = arr.length
    //     console.log(length)
    
    //     for(i=0; i<length; i++){
    //         console.log(number[i])
    //     }

    //   }
    // tentative de faire plusieurs calcul en une ligne...nat1...sucessless
      
      
    return(
        <div>
            <input type="text" value={formula} disabled />
            <span>=<input type="text" disabled value={result}/></span>
            <NumbersButtons onNumberClick={handleClick}/>
            <SymbolsButtons onSymbolClick={handleClick} onSubmit={submit} onReset={reset}/>
        </div>
    )

}
export default InputFormula