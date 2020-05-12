import React from 'react';
import styled from 'styled-components';

import Fab from '@material-ui/core/Fab';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteIcon from

const TelaContainer = styled.div`
height: 100%;
width: 65%;
display: flex;
justify-content: center;
align-items: center;
`;

function TelaPrincipal() {
  return (
    <TelaContainer>
      <p>TelaPrincipal</p>
      <Fab disabled aria-label="like">
        <FavoriteIcon />
      </Fab>
    </TelaContainer>
  );
}

export default TelaPrincipal;