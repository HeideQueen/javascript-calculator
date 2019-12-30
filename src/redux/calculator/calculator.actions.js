import CalculatorActionTypes from './calculator.types';

export const clearDisplay = () => ({
  type: CalculatorActionTypes.CLEAR_DISPLAY
});

export const addNumberToInput = number => ({
  type: CalculatorActionTypes.ADD_NUMBER_TO_INPUT,
  payload: number
});
