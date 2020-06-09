import React from 'react';
import { NavContainer, BoxTop, Logo, BoxBottom, ButtonNav} from '../Styled'

import Perfil from './Perfil';
import Imagem from './logo/astromatch.png';

function Nav(props) {
  return (
    <NavContainer>
      <BoxTop>
        <Logo src={Imagem} />
        <Perfil />
      </BoxTop>
      <BoxBottom>
        <ButtonNav variant="extended" onClick={props.onClick} >
          {props.textButton}        
        </ButtonNav>
        <ButtonNav onClick={props.onClickResetar}>
          Resetar
        </ButtonNav>
      </BoxBottom>
    </NavContainer>
  );
}

export default Nav;
