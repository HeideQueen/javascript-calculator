import React from 'react';
import { connect } from 'react-redux';

import {
  clearDisplay,
  equals
} from '../../redux/calculator/calculator.actions';

import NumberButtons from '../number-buttons/number-buttons.component';
import OperatorButtons from '../operator-buttons/operator-buttons.component';

const ButtonsDisplay = ({ clearDisplay, equals }) => {
  return (
    <div id='buttons-display'>
      <NumberButtons />
      <OperatorButtons />
      <button id='equals' onClick={equals}>
        =
      </button>
      <button id='clear' onClick={clearDisplay}>
        AC
      </button>
    </div>
  );
};

const mapDispatchToProps = { clearDisplay, equals };

export default connect(null, mapDispatchToProps)(ButtonsDisplay);
