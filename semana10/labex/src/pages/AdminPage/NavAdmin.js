import React from "react";
import { useHistory } from "react-router-dom";
import { NavContainer, ImgLogoNav, ButtonsNav, ButtonNav } from "../styled";
import LogoNav from '../Logo2.png';

const NavAdmin = () => {
    const history = useHistory();

    const onClickSair = () => {
      localStorage.clear();
      history.push("/out");
    };
  return (
      <NavContainer>
        <ImgLogoNav src={LogoNav}/>
        <ButtonsNav>
            <ButtonNav color={"primary"} variant="contained" onClick={onClickSair}>Sair</ButtonNav>
        </ButtonsNav>
      </NavContainer>
  );
};

export default NavAdmin;
