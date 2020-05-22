import React from 'react';
import Logo from '../Logo2.png';
import { HomeContainer, NavHome, ButtonLogin, BodyHome, ImgLogo, ButtonVerViagens } from '../styled'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
    }
    const goToSignupPage = () => {
        history.push("/signup")
    }
    const goToListTripsPage = () => {
        history.push("/list-trips")
    }
    return (
        <HomeContainer>
            <NavHome>
                <ButtonLogin onClick={goToSignupPage}>Criar Login</ButtonLogin>
                <ButtonLogin onClick={goToLoginPage}>Fazer Login</ButtonLogin>
            </NavHome>
            <BodyHome>
                <ImgLogo src={Logo}/>
                <ButtonVerViagens onClick={goToListTripsPage}>VER VIAGENS DISPONIVEIS</ButtonVerViagens>
            </BodyHome>
        </HomeContainer>
    );
};

export default HomePage;