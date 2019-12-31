import React from 'react';
import { connect } from 'react-redux';

import { NumberButtonsContainer, NumberButton } from './number-buttons.styles';

import { addNumberToInput } from '../../redux/calculator/calculator.actions';

const NumberButtons = ({ addNumberToInput }) => {
  return (
    <NumberButtonsContainer id='number-buttons'>
      <NumberButton
        className='number-button'
        id='one'
        onClick={() => addNumberToInput('1')}
      >
        1
      </NumberButton>
      <NumberButton
        className='number-button'
        id='two'
        onClick={() => addNumberToInput('2')}
      >
        2
      </NumberButton>
      <NumberButton
        className='number-button'
        id='three'
        onClick={() => addNumberToInput('3')}
      >
        3
      </NumberButton>
      <NumberButton
        className='number-button'
        id='four'
        onClick={() => addNumberToInput('4')}
      >
        4
      </NumberButton>
      <NumberButton
        className='number-button'
        id='five'
        onClick={() => addNumberToInput('5')}
      >
        5
      </NumberButton>
      <NumberButton
        className='number-button'
        id='six'
        onClick={() => addNumberToInput('6')}
      >
        6
      </NumberButton>
      <NumberButton
        className='number-button'
        id='seven'
        onClick={() => addNumberToInput('7')}
      >
        7
      </NumberButton>
      <NumberButton
        className='number-button'
        id='eight'
        onClick={() => addNumberToInput('8')}
      >
        8
      </NumberButton>
      <NumberButton
        className='number-button'
        id='nine'
        onClick={() => addNumberToInput('9')}
      >
        9
      </NumberButton>
      <NumberButton
        className='number-button'
        id='zero'
        onClick={() => addNumberToInput('0')}
      >
        0
      </NumberButton>
      <NumberButton
        className='number-button'
        id='decimal'
        onClick={() => addNumberToInput('.')}
      >
        .
      </NumberButton>
    </NumberButtonsContainer>
  );
};

const mapDispatchToProps = { addNumberToInput };

export default connect(null, mapDispatchToProps)(NumberButtons);
