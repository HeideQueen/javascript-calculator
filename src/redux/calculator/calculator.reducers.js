import CalculatorActionTypes from './calculator.types';

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
        display:
          action.payload === '0' && state.display === '0'
            ? state.display
            : action.payload === '.' && state.display.includes('.')
            ? state.display
            : state.display === '0' || isNaN(state.display)
            ? action.payload
            : state.display + action.payload,
        input:
          action.payload === '0' && state.input === '0'
            ? state.input
            : action.payload === '.' &&
              state.input[state.input.length - 1] === '.'
            ? state.input
            : state.input === '0'
            ? action.payload
            : state.input + action.payload
      };
    case CalculatorActionTypes.ADD:
      return {
        ...state,
        display: '+',
        input: isNaN(state.input[state.input.length - 1])
          ? state.input.replace(state.input[state.input.length - 1], '+')
          : state.input + '+'
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
        input: isNaN(state.input[state.input.length - 1])
          ? state.input.replace(state.input[state.input.length - 1], '*')
          : state.input + '*'
      };
    case CalculatorActionTypes.DIVIDE:
      return {
        ...state,
        display: '/',
        input: isNaN(state.input[state.input.length - 1])
          ? state.input.replace(state.input[state.input.length - 1], '/')
          : state.input + '/'
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
