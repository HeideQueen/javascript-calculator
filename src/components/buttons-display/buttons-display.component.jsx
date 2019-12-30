import React from 'react';
import { connect } from 'react-redux';

import { clearDisplay } from '../../redux/calculator/calculator.actions';

import NumberButtons from '../number-buttons/number-buttons.component';
import OperatorButtons from '../operator-buttons/operator-buttons.component';

const ButtonsDisplay = ({ clearDisplay }) => {
  return (
    <div id='buttons-display'>
      <NumberButtons />
      <OperatorButtons />
      <button id='equals'>=</button>
      <button id='clear' onClick={clearDisplay}>
        AC
      </button>
    </div>
  );
};

const mapDispatchToProps = { clearDisplay };

export default connect(null, mapDispatchToProps)(ButtonsDisplay);
