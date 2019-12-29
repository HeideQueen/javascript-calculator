import React from 'react';

const OperatorButtons = () => {
  return (
    <div id='operator-buttons'>
      <button className='operator-button' id='add'>
        +
      </button>
      <button className='operator-button' id='subtract'>
        -
      </button>
      <button className='operator-button' id='multiply'>
        x
      </button>
      <button className='operator-button' id='divide'>
        /
      </button>
    </div>
  );
};

export default OperatorButtons;
