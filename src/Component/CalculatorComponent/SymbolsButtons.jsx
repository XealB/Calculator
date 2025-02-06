const SymbolsButtons = ({onSymbolClick, onSubmit, onReset}) => {


    const buttonsSymbols = () => { 
        var arr = ["+","-","*"]
        return arr.map((i) => {
            return <button value={i} onClick={()=> onSymbolClick(i)}>{i}</button>
        })
    }

    return(
        <div>
            {buttonsSymbols()}
            <span>
                <button onClick={()=> {onReset()}}>CE</button>
                <button onClick={()=> {onSubmit()}}>=</button>
            </span>
        </div>
    )
}
export default SymbolsButtons;