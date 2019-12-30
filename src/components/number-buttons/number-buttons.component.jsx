import React from 'react';
import { connect } from 'react-redux';

import { addNumberToInput } from '../../redux/calculator/calculator.actions';

const NumberButtons = ({ addNumberToInput }) => {
  return (
    <div id='number-buttons'>
      <button
        className='number-button'
        id='zero'
        onClick={() => addNumberToInput('0')}
      >
        0
      </button>
      <button
        className='number-button'
        id='one'
        onClick={() => addNumberToInput('1')}
      >
        1
      </button>
      <button
        className='number-button'
        id='two'
        onClick={() => addNumberToInput('2')}
      >
        2
      </button>
      <button
        className='number-button'
        id='three'
        onClick={() => addNumberToInput('3')}
      >
        3
      </button>
      <button
        className='number-button'
        id='four'
        onClick={() => addNumberToInput('4')}
      >
        4
      </button>
      <button
        className='number-button'
        id='five'
        onClick={() => addNumberToInput('5')}
      >
        5
      </button>
      <button
        className='number-button'
        id='six'
        onClick={() => addNumberToInput('6')}
      >
        6
      </button>
      <button
        className='number-button'
        id='seven'
        onClick={() => addNumberToInput('7')}
      >
        7
      </button>
      <button
        className='number-button'
        id='eight'
        onClick={() => addNumberToInput('8')}
      >
        8
      </button>
      <button
        className='number-button'
        id='nine'
        onClick={() => addNumberToInput('9')}
      >
        9
      </button>
      <button
        className='number-button'
        id='decimal'
        onClick={() => addNumberToInput('.')}
      >
        .
      </button>
    </div>
  );
};

const mapDispatchToProps = { addNumberToInput };

export default connect(null, mapDispatchToProps)(NumberButtons);
