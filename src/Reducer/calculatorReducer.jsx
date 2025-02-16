import { useReducer } from "react";

const initialState = {
    result: "",
    formula: ""
}

const reducer = (state, action) => {
    switch (action.type){
        case 'reset' :
            return initialState;
        case 'add':
            return {...state, formula:state.formula+action.value}
        case 'calculate':
            try{
                const resultat = eval(state.formula);
                return {
                    result:resultat,
                    formula:resultat
                }
            }
            catch(error) {
                return{
                    ...state, 
                    result:"Calcul non valide",
                }
            }
         default:
             return initialState;
    }
}

const useCalculatorReducer = () => useReducer(reducer, initialState)

export default useCalculatorReducer