import React from 'react';
import { connect } from 'react-redux';

const InputDisplay = ({ display, input }) => {
  console.log(input);
  return (
    <div id='display'>
      <h2>{display}</h2>
    </div>
  );
};

const mapStateToProps = state => ({
  display: state.display,
  input: state.input
});

export default connect(mapStateToProps)(InputDisplay);
