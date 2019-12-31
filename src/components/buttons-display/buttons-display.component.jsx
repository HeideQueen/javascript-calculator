import React from 'react';
import { connect } from 'react-redux';

import { ButtonsContainer, Wrapper, Button } from './buttons-display.styles';

import {
  clearDisplay,
  equals
} from '../../redux/calculator/calculator.actions';

import NumberButtons from '../number-buttons/number-buttons.component';
import OperatorButtons from '../operator-buttons/operator-buttons.component';

const ButtonsDisplay = ({ clearDisplay, equals }) => {
  return (
    <ButtonsContainer id='buttons-display'>
      <Wrapper>
        <Button id='clear' onClick={clearDisplay}>
          AC
        </Button>
        <Button primary id='equals' onClick={equals}>
          =
        </Button>
      </Wrapper>
      <OperatorButtons />
      <NumberButtons />
    </ButtonsContainer>
  );
};

const mapDispatchToProps = { clearDisplay, equals };

export default connect(null, mapDispatchToProps)(ButtonsDisplay);
