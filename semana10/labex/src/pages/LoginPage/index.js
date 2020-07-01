import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import {
  LoginContainer,
  FabLogin,
  TextLogin,
  BoxLogin,
  ImgLogoLogin,
  InputLogin,
  LinkRecuperarSenha,
  ButtonSingIn,
} from "../styled";
import Fab from "@material-ui/core/Fab";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LogoLogin from "../../components/Imagens/Logo2.png";

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian";
const Login = () => {
  const [emailValue, setEmail] = useState("");
  const [senhaValue, setSenha] = useState("");
  const [LoginValue, setLogin] = useState("");
  const [token, setToken] = useState("");

  const onChangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const onChangeSenha = (event) => {
    setSenha(event.target.value);
  };

  const history = useHistory();
  const pageInicial = () => {
    history.push("/");
  };

  const fazerLogin = async () => {
    const body = {
      email: emailValue,
      password: senhaValue,
    };

    axios
      .post(`${baseUrl}/login`, body)
      .then((resposta) => {
        localStorage.setItem("token", resposta.data.token);
        setLogin(resposta.data.login);
        console.log(resposta.data.login);
        history.push("/logado");
        alert(
          `Olá ${emailValue}, \nVocê será redirecionado para sua Page Administrativa!!`
        );
      })
      .catch((error) => {
        alert("Você não possui cadastro com a gente :/");
        console.log("Deu erro", error);
      });
  };
  return (
    <LoginContainer>
      <FabLogin variant="extended" onClick={pageInicial}>
        <ArrowBackIcon />
        Voltar
      </FabLogin>
      <ImgLogoLogin src={LogoLogin} />
      <BoxLogin>
        <TextLogin>Login</TextLogin>
        <InputLogin
          onChange={onChangeEmail}
          type={"email"}
          placeholder={"Email"}
        />
        <InputLogin
          onChange={onChangeSenha}
          type={"password"}
          placeholder={"Senha"}
        />
        <LinkRecuperarSenha href={"#"}>Esqueci a senha</LinkRecuperarSenha>
        <ButtonSingIn
          variant="contained"
          color={"primary"}
          onClick={fazerLogin}
        >
          Sign in
        </ButtonSingIn>
      </BoxLogin>
    </LoginContainer>
  );
};

export default Login;
