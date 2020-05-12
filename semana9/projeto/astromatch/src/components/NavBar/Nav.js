import React from 'react';
import styled from 'styled-components';

import Perfil from './Perfil';
import Matches from './Matches'

const NavContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  height: 100%;
  border-right: 1px dotted white;
`;

function Nav() {
  return (
      <NavContainer>
        <Perfil />
        <Matches />
      </NavContainer>
  );
}

export default Nav;
