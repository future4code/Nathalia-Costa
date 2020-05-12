import React from 'react';
import styled from 'styled-components';

const PerfilContainer = styled.div`
  margin-top: 0;
  width: 100%;
  height: 25%;
  display: flex;
  justify-content:center;
`;
const Avatar = styled.img`
  height: 100px;
  width: 100px;
  align-self: center;
  border-radius: 35px;
`;
const Infos = styled.p`
  margin-left: 10px;
  align-self: center;
`;

function Perfil() {
  return (
    <PerfilContainer>
      <Avatar 
      src={'https://statig3.akamaized.net/bancodeimagens/8w/c5/sv/8wc5sv42iwrkjrkvhig4zpylv.jpg'}/>
      <Infos><b>Avatar</b> - 26 anos</Infos>
    </PerfilContainer>
  );
}

export default Perfil;