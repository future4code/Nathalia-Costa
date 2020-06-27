import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, ImgLogoLogin, ButtonSingIn } from '../styled';
import LogoLogin from '../../components/Imagens/Logo2.png';

const Logout = () => {
    const history = useHistory();

    const pageInicial = () => {
      history.push("/");
    };
    return (
        <LoginContainer>
            <ImgLogoLogin src={LogoLogin}/>
            <h1>LOGOUT!!!!</h1>
            <ButtonSingIn
                variant="contained"
                color={"primary"}
                onClick={pageInicial}>
            Pagina inicial
            </ButtonSingIn>
        </LoginContainer>
    );
};

export default Logout