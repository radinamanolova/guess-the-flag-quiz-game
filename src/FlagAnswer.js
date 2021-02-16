import React from 'react';
import StyledButton from './StyledButton';
import './FlagAnswer.css';

const FlagAnswer = ({ correct, answer, onNext }) => (
  <div className='flag-answer'>
    {correct ? (
      <p className='correct'>Correct!: {answer }</p>
    ) : (
        <p className='incorrect'>Incorrect! Correct Answer: {answer }</p>
      )
    }
    <StyledButton text="NEXT" onClick={ onNext } />
  </div>
);

export default FlagAnswer;