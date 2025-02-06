const NumbersButtons = ({onNumberClick}) => {

    const buttons = () => { 
        var arr = [1,2,3,4,5,6,7,8,9,0]
        return arr.map((i) => {
            return <button value={i} onClick={()=> onNumberClick(i)}>{i}</button>
        })
    }

    return(
        <div>
            {buttons()}
        </div>
    )

}
export default NumbersButtons;