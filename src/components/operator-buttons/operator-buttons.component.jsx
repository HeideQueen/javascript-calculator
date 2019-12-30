import React from 'react';
import { connect } from 'react-redux';

import {
  add,
  subtract,
  multiply,
  divide
} from '../../redux/calculator/calculator.actions';

const OperatorButtons = ({ add, subtract, multiply, divide }) => {
  return (
    <div id='operator-buttons'>
      <button className='operator-button' id='add' onClick={add}>
        +
      </button>
      <button className='operator-button' id='subtract' onClick={subtract}>
        -
      </button>
      <button className='operator-button' id='multiply' onClick={multiply}>
        x
      </button>
      <button className='operator-button' id='divide' onClick={divide}>
        /
      </button>
    </div>
  );
};

const mapDispatchToProps = { add, subtract, multiply, divide };

export default connect(null, mapDispatchToProps)(OperatorButtons);
