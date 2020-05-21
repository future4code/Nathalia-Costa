import React from 'react';
import { useHistory } from 'react-router-dom';
import { LoginContainer, TextLogin, BoxLogin, ImgLogoLogin, InputLogin, LinkRecuperarSenha, ButtonSingIn } from '../styled';
import LogoLogin from '../Logo2.png';

const Login = () => {
    const history = useHistory();

    const goToAdminPage = () => {
        history.push("/logado")
        alert("Olá Labenauta, \nVocê será redirecionado para sua Page Administrativa!!")
    }
    const pageInicial = () => {
        history.push("/");
      };
    return (
        <LoginContainer>
            <button onClick={pageInicial}>Voltar</button>
            <ImgLogoLogin src={LogoLogin}/>
            <BoxLogin>
                <TextLogin>Login</TextLogin>
                <InputLogin type={"email"} placeholder={"Email"}/>
                <InputLogin type={"password"} placeholder={"Senha"}/>
                <LinkRecuperarSenha>Esqueci a senha</LinkRecuperarSenha>
                <ButtonSingIn onClick={goToAdminPage}>Sign in</ButtonSingIn>
            </BoxLogin>
            
        </LoginContainer>
    );
};

export default Login