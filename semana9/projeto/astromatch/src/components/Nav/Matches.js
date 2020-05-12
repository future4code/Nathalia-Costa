import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

const MatchesContainer = styled.div`
border: 1px dotted white;
width: 100%;
height: 75%;
text-align: center;
`;

const FabReset = styled(Fab)`
`;

function Matches() {
  return (
    <MatchesContainer>
      <h3>Matches</h3>
      <FabReset variant="extended">
        Resetar
      </FabReset>
    </MatchesContainer>
  );
}

export default Matches;