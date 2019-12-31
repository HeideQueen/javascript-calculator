import React from 'react';
import { connect } from 'react-redux';

import { DisplayContainer, Display } from './input-display.styles';

const InputDisplay = ({ display }) => {
  return (
    <DisplayContainer id='display'>
      <Display>{display}</Display>
    </DisplayContainer>
  );
};

const mapStateToProps = state => ({
  display: state.display
});

export default connect(mapStateToProps)(InputDisplay);
