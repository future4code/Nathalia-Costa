import React from 'react';
import Logo from '../logo-labex.jpg';
import { HomeContainer, NavHome, ButtonLogin, BodyHome, ImgLogo, ButtonVerViagens } from '../styled'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login-page")
    }
    const goToListTripsPage = () => {
        history.push("/list-trips-page")
    }
    return (
        <HomeContainer>
            <NavHome>
                <ButtonLogin onClick={goToLoginPage}>Login</ButtonLogin>
            </NavHome>
            <BodyHome>
                <ImgLogo src={Logo}/>
                <ButtonVerViagens onClick={goToListTripsPage}>VER VIAGENS DISPONIVEIS</ButtonVerViagens>
            </BodyHome>
            
        </HomeContainer>
    );
};

export default HomePage;