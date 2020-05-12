import React from 'react';
import styled from 'styled-components';
import Fab from '@material-ui/core/Fab';

const MatchesContainer = styled.div`
  border: 1px dotted white;
  width: 100%;
  height: 75%;
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const MatchesDiv = styled.div`
  width: 100%;
  height: 85%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const CardChips = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  width: 90%;
  background: #dcdcdc;
  border-radius: 15px;
  margin: 5px;
`;
const ButtonResetar = styled.div`
  height: 15%;
`;

function Matches() {
  return (
    <MatchesContainer>
      <MatchesDiv>
        <CardChips>         
          <p>match1</p>
        </CardChips>
        <CardChips>         
          <p>match2</p>
        </CardChips>
      </MatchesDiv>
      <ButtonResetar>
        <Fab variant="extended">
          Resetar
        </Fab>
      </ButtonResetar>
    </MatchesContainer>
  );
}

export default Matches;