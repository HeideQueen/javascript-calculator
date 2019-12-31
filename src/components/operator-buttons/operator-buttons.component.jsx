import React from 'react';
import { connect } from 'react-redux';

import {
  add,
  subtract,
  multiply,
  divide
} from '../../redux/calculator/calculator.actions';

import {
  OperatorButtonsContainer,
  OperatorButton
} from './operator-buttons.styles';

const OperatorButtons = ({ add, subtract, multiply, divide }) => {
  return (
    <OperatorButtonsContainer id='operator-buttons'>
      <OperatorButton className='operator-button' id='add' onClick={add}>
        +
      </OperatorButton>
      <OperatorButton
        className='operator-button'
        id='subtract'
        onClick={subtract}
      >
        -
      </OperatorButton>
      <OperatorButton
        className='operator-button'
        id='multiply'
        onClick={multiply}
      >
        x
      </OperatorButton>
      <OperatorButton className='operator-button' id='divide' onClick={divide}>
        /
      </OperatorButton>
    </OperatorButtonsContainer>
  );
};

const mapDispatchToProps = { add, subtract, multiply, divide };

export default connect(null, mapDispatchToProps)(OperatorButtons);
