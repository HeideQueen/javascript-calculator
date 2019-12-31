import React from 'react';

import InputDisplay from './components/input-display/input-display.component';
import ButtonsDisplay from './components/buttons-display/buttons-display.component';

import { AppContainer, Title } from './App.styles';

const App = () => {
  return (
    <AppContainer className='App'>
      <Title>Queen's Calculator</Title>
      <InputDisplay />
      <ButtonsDisplay />
    </AppContainer>
  );
};

export default App;
