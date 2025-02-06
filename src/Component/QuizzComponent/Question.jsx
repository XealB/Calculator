import React from 'react';

const Question = ({question, questionId}) => {
  return (
    <div>
        <h3>Question {questionId}/10</h3>
        <h1>{question}</h1>
    </div>
    
  );
};

export default Question;