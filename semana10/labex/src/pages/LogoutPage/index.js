import React from 'react';
import { LoginContainer, ImgLogoLogin } from '../styled';
import LogoLogin from '../Logo2.png';
import { useHistory } from 'react-router-dom';

const Logout = () => {
    const history = useHistory();

    const pageInicial = () => {
      history.push("/");
    };
    return (
        <LoginContainer>
            <ImgLogoLogin src={LogoLogin}/>
            LOGOUT!!!!
            <button onClick={pageInicial}>Pagina inicial</button>
        </LoginContainer>
    );
};

export default Logout