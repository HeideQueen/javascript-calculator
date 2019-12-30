export const handleDisplay = (display, payload) => {
  return payload === '0' && display === '0'
    ? display
    : payload === '.' && display.includes('.')
    ? display
    : display === '0' || isNaN(display)
    ? payload
    : display + payload;
};

export const handleInput = (input, payload) => {
  return payload === '0' && input === '0'
    ? input
    : payload === '.' && input[input.length - 1] === '.'
    ? input
    : input === '0'
    ? payload
    : input + payload;
};

export const handleNumberInput = (input, operator) => {
  return input[input.length - 1] === '-' && isNaN(input[input.length - 2])
    ? input.replace(/.{2}$/, operator)
    : isNaN(input[input.length - 1])
    ? input.replace(input[input.length - 1], operator)
    : input + operator;
};
