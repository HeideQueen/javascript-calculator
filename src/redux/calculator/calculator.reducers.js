import CalculatorActionTypes from './calculator.types';

const initialState = {
  display: 0,
  input: ''
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CalculatorActionTypes.CLEAR_DISPLAY:
      return { ...state, display: 0, input: '' };
    case CalculatorActionTypes.ADD_NUMBER_TO_INPUT:
      return {
        ...state,
        input: Number(state.input + action.payload),
        display: Number(state.input + action.payload)
      };
    default:
      return state;
  }
};

export default calculatorReducer;
