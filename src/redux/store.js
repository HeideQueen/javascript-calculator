import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

import calculatorReducer from './calculator/calculator.reducers';

const store = createStore(calculatorReducer, applyMiddleware(logger));

export default store;
