import useCalculatorReducer from "../../Reducer/calculatorReducer";
import NumbersButtons from "./NumbersButtons"
import SymbolsButtons from "./SymbolsButtons"




const InputFormula = () => {

    const [state, dispatch] = useCalculatorReducer();
    const {result, formula} = state;
    
    const handleClick = (value) => {
        dispatch({type: 'add', value:value}) 
    };

    const submit = () => {
      dispatch({type:'calculate'})
    }

    const reset = () => {
        dispatch({type:'reset'})
    };
      
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