import CalculatorActionTypes from './calculator.types';

export const clearDisplay = () => ({
  type: CalculatorActionTypes.CLEAR_DISPLAY
});

export const addNumberToInput = number => ({
  type: CalculatorActionTypes.ADD_NUMBER_TO_INPUT,
  payload: number
});

export const add = () => ({
  type: CalculatorActionTypes.ADD
});

export const subtract = () => ({
  type: CalculatorActionTypes.SUBTRACT
});

export const multiply = () => ({
  type: CalculatorActionTypes.MULTIPLY
});

export const divide = () => ({
  type: CalculatorActionTypes.DIVIDE
});

export const equals = () => ({
  type: CalculatorActionTypes.EQUALS
});
