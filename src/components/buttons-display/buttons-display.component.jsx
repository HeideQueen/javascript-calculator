import React from 'react';

import NumberButtons from '../number-buttons/number-buttons.component';
import OperatorButtons from '../operator-buttons/operator-buttons.component';

const ButtonsDisplay = () => {
  return (
    <div id='buttons-display'>
      <NumberButtons />
      <OperatorButtons />
      <button id='equals'>=</button>
      <button id='clear'>AC</button>
    </div>
  );
};

export default ButtonsDisplay;
