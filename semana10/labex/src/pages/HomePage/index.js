import React from 'react';
import Logo from '../Logo2.png';
import { HomeContainer, NavHome, ButtonLogin, BodyHome, ImgLogo, TextoHome, ButtonVerViagens } from '../styled'
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    button: {
      margin: theme.spacing(1),
    },
  }));

const HomePage = () => {
    const classes = useStyles();
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
                <ButtonLogin className={classes.button} variant="contained" color={'primary'} onClick={goToSignupPage}>Criar Login</ButtonLogin>
                <ButtonLogin variant="contained" color={'primary'} onClick={goToLoginPage}>Fazer Login</ButtonLogin>
            </NavHome>
            <BodyHome>
                <ImgLogo src={Logo}/>
                <TextoHome>"Encontre as melhores viagens espaciais!"</TextoHome>
                <ButtonVerViagens variant="contained" color={'primary'} onClick={goToListTripsPage}>VER VIAGENS DISPONIVEIS</ButtonVerViagens>
            </BodyHome>
        </HomeContainer>
    );
};

export default HomePage;