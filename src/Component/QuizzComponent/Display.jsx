import useQuizzReducer from "../../Reducer/quizzReducer";
import Answers from "./Answers";
import DisplayEnd from "./DisplayEnd";
import Question from "./Question";

const Display = () => {

    const [state, dispatch] = useQuizzReducer();
    const currentQuestion = state.questions[state.currentQuestion];
    const {score} = state

    const handleAnswerSelect = (selectedAnswer) => {
        dispatch({type: 'selectAnswer', payload: selectedAnswer})
        dispatch({type: 'nextQuestion'})
    }

    if(currentQuestion.id !== 1){
        return(
            <DisplayEnd finalScore={score} />
        )

    }
    else{
        return (
            <div>
              <span>Score : {score}/10</span>
              <Question question={currentQuestion.question} questionId={currentQuestion.id}/>
              <Answers options={currentQuestion.options} onAnswerSelect={handleAnswerSelect}/>
              {/* <button onClick={handleNextQuestion}>{currentQuestion.id !== 10 ? "Question suivante" : "Fin du Quizz"}</button>  */}
            </div>
          );
    }

  };

export default Display