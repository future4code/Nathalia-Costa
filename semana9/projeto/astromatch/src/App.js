import React from 'react';
import styled from 'styled-components';

import Nav from './components/Nav/Nav';
import TelaPrincipal from './components/TelaPrincipal';


const AppContainer = styled.div `
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80vh;
  width: 65vw;
  margin-right: auto;
  margin-left: auto;
  border-radius: 20px;
  background: #5dc1b9;
`;

function App() {
  return (
    <AppContainer>
      <Nav />
      <TelaPrincipal/>
    </AppContainer>
  );
}

export default App;
