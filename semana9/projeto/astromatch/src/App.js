import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div `
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
`

function App() {
  return (
    <AppContainer>
      console.log(oiii)
    </AppContainer>
  );
}

export default App;
