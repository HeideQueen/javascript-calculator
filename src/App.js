import React from 'react';

import InputDisplay from './components/input-display/input-display.component';
import ButtonsDisplay from './components/buttons-display/buttons-display.component';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <h1>Queen's Calculator</h1>
      <InputDisplay />
      <ButtonsDisplay />
    </div>
  );
};

export default App;
