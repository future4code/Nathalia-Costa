import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import { LoginContainer, TextLogin, BoxLogin, ImgLogoLogin, InputLogin, LinkRecuperarSenha, ButtonSingIn } from '../styled';
import LogoLogin from '../Logo2.png';

const Login = () => {
    const [emailValue, setEmail] = useState("");
    const [senhaValue, setSenha] = useState("");
    const [loginValue, setLoginValue] = useState("");

    const onChangeEmail = event => {
        setEmail(event.target.value)
    };
    const onChangeSenha = event => {
        setSenha(event.target.value)
    };
    // const onClickSignup = () => {
    //     const login = {
    //         email: emailValue,
    //         password: senhaValue 
    //     };
    //     console.log(login)
    //     history.push("/logado")
    //     alert(`Bem vindo ${emailValue}, \nVocê será redirecionado para fazer o Login.`)
    // };
    const history = useHistory();
    const pageInicial = () => {
        history.push("/");
      };

    const criarLogin = (emailValue, senhaValue) => {
        const body = {
            email: emailValue,
            password: senhaValue
        };
        axios
            .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/signup",
            body,
            {
                headers: {
                    Authorization: "nathalia-julian"
                }
            })
            .then(resposta => {
            setLoginValue(resposta.data)
            history.push("/logado")
            alert(`Bem vindo ${emailValue}, \nVocê será redirecionado para fazer o Login.`)
            console.log("Deu certo!!", body);
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
                <TextLogin>Signup</TextLogin>
                <InputLogin onChange={onChangeEmail} type={"email"} placeholder={"Email"}/>
                <InputLogin onChange={onChangeSenha}type={"password"} placeholder={"Senha"}/>
                <ButtonSingIn onClick={criarLogin}>Criar</ButtonSingIn>
            </BoxLogin>
            
        </LoginContainer>
    );
};

export default Login