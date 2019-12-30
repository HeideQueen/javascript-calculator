import CalculatorActionTypes from './calculator.types';

import {
  handleDisplay,
  handleInput,
  handleNumberInput
} from './calculator.utils';

const initialState = {
  display: '0',
  input: '0'
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CalculatorActionTypes.CLEAR_DISPLAY:
      return { ...state, display: '0', input: '0' };

    case CalculatorActionTypes.ADD_NUMBER_TO_INPUT:
      return {
        ...state,
        display: handleDisplay(state.display, action.payload),
        input: handleInput(state.input, action.payload)
      };

    case CalculatorActionTypes.ADD:
      return {
        ...state,
        display: '+',
        input: handleNumberInput(state.input, '+')
      };

    case CalculatorActionTypes.SUBTRACT:
      return {
        ...state,
        display: '-',
        input: state.input + '-'
      };

    case CalculatorActionTypes.MULTIPLY:
      return {
        ...state,
        display: 'x',
        input: handleNumberInput(state.input, '*')
      };

    case CalculatorActionTypes.DIVIDE:
      return {
        ...state,
        display: '/',
        input: handleNumberInput(state.input, '/')
      };

    case CalculatorActionTypes.EQUALS:
      return {
        ...state,
        display: eval(state.input),
        input: String(eval(state.input))
      };

    default:
      return state;
  }
};

export default calculatorReducer;
