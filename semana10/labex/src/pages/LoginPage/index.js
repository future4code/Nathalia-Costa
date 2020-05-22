import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { LoginContainer, TextLogin, BoxLogin, ImgLogoLogin, InputLogin, LinkRecuperarSenha, ButtonSingIn } from '../styled';
import LogoLogin from '../Logo2.png';

const Login = () => {
    const [emailValue, setEmail] = useState("");
    const [senhaValue, setSenha] = useState("");

    const onChangeEmail = event => {
        setEmail(event.target.value)
    };
    const onChangeSenha = event => {
        setSenha(event.target.value)
    };
    // const onClickSingin = () => {
    //     const login = {
    //         email: emailValue,
    //         password: senhaValue 
    //     };
    //     console.log(login)
    //     history.push("/logado")
    //     alert(`Olá ${emailValue}, \nVocê será redirecionado para sua Page Administrativa!!`)
    // };
    const history = useHistory();
    const pageInicial = () => {
        history.push("/");
      };

    const fazerLogin = (emailValue, senhaValue) => {
        const body = {
            email: emailValue,
            password: senhaValue
        };
        
        axios
            .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/login",
            body,
            {
                headers: {
                Authorization: "nathalia-julian"
                }
            }
            )
            .then(resposta => {
            console.log(body);
            history.push("/logado");
            alert(`Olá ${emailValue}, \nVocê será redirecionado para sua Page Administrativa!!`);
            })
            .catch(error => {
            console.log("Deu erro");
            });
    }
    return (
        <LoginContainer>
            <button onClick={pageInicial}>Voltar</button>
            <ImgLogoLogin src={LogoLogin}/>
            <BoxLogin>
                <TextLogin>Login</TextLogin>
                <InputLogin onChange={onChangeEmail} type={"email"} placeholder={"Email"}/>
                <InputLogin onChange={onChangeSenha}type={"password"} placeholder={"Senha"}/>
                <LinkRecuperarSenha href={'#'}>Esqueci a senha</LinkRecuperarSenha>
                <ButtonSingIn onClick={fazerLogin}>Sign in</ButtonSingIn>
            </BoxLogin>
            
        </LoginContainer>
    );
};

export default Login