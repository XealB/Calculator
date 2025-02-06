import React from 'react';

const Answers = ({ options, onAnswerSelect }) => {
  return (
    <div>
      {options.map((option, index) => (
        <button key={index} onClick={() => onAnswerSelect(option)}>
          {option}
        </button>
      ))}
    </div>
  );
};

export default Answers;