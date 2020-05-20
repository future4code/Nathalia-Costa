import React from 'react';
import Logo from '../Logo2.png';
import { HomeContainer, NavHome, ButtonLogin, BodyHome, ImgLogo, ButtonVerViagens } from '../styled'
import { useHistory } from 'react-router-dom';

const HomePage = () => {
    const history = useHistory();

    const goToLoginPage = () => {
        history.push("/login")
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