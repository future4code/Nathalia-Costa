import React from "react";
import { useHistory } from "react-router-dom";
import { NavContainer, ImgLogoNav, ButtonsNav, ButtonNav } from "../styled";
import LogoNav from '../Logo2.png';

const NavAdmin = () => {
    const history = useHistory();

    const goToRequestPage = () => {
      history.push("/logado/request");
    };
    const goToCreateTripsPage = () => {
      history.push("/logado/create-trips-page");
    };
    const goToOut = () => {
      history.push("/login");
    };
  return (
      <NavContainer>
        <ImgLogoNav src={LogoNav}/>
        <ButtonsNav>
            <ButtonNav onClick={goToRequestPage}>Request</ButtonNav>
            <ButtonNav onClick={goToCreateTripsPage}>Criar Viagem</ButtonNav>
            <ButtonNav onClick={goToOut}>Sair</ButtonNav>
        </ButtonsNav>
        </NavContainer>
  );
};

export default NavAdmin;
