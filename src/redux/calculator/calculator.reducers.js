import CalculatorActionTypes from './calculator.types';

const initialState = {
  display: 0
};

const calculatorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CalculatorActionTypes.CLEAR_DISPLAY:
      return { ...state, display: 0 };
    default:
      return state;
  }
};

export default calculatorReducer;
