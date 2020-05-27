import React, { useState } from 'react';
import { InscricaoContainer, CardInscricao, ImgLogoLogin, InputInscricao, ButtonInscricao } from "../styled";
import LogoLogin from '../Logo2.png';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';



const IncricaoPage = (props) => {
    const history = useHistory();
    const pathParams = useParams();
    
    const pageInicial = () => {
      history.push("/");
    };
    const voltarListTrips = () => {
      history.push("/list-trips");
    };
    const [nameValue, setName] = useState("");
    const [ageValue, setAge] = useState("");
    const [applicationTextValue, setApplicationText] = useState("");
    const [professionValue, setProfession] = useState("");
    const [countryValue, setCountry] = useState("");
    const [inscricao, setInscricao] = useState([]);

    const onChangeName = event => {
        setName(event.target.value)
    };
    const onChangeAge = event => {
        setAge(event.target.value)
    };
    const onChangeApplicationText = event => {
        setApplicationText(event.target.value)
    };
    const onChangeProfession = event => {
        setProfession(event.target.value)
    };
    const onChangeCountry = event => {
        setCountry(event.target.value)
    };

    const fazerInscricao = () => {
        const body = {
            name: nameValue,
            age: ageValue,
            applicationText: applicationTextValue,
            profession: professionValue,
            country: countryValue
        };
        

        axios
            .post(
            `https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/${pathParams.id}/apply`,
            body,
            {
                headers: {'Content-Type': 'application/json'}
            })
            .then(resposta => {
                setInscricao(resposta.data);
                console.log(resposta.data);
                history.push("/list-trips/");
                alert(`Olá ${nameValue}, \nSua incrição foi enviada para analise. \nObrigada pelo interesse.`);
            })
            .catch(error => {
                alert("Você não pode ir com a gente :/")
                console.log("Deu erro", error);
            });
    }
    
    return (
        <InscricaoContainer>
            <ButtonInscricao color={"primary"} variant="contained" onClick={pageInicial}>Pagina inicial</ButtonInscricao>
            <ButtonInscricao color={"primary"} variant="contained" onClick={voltarListTrips}>Voltar</ButtonInscricao>
            <ImgLogoLogin src={LogoLogin}/>
            <CardInscricao>
                <h1>Inscrição</h1>
                <InputInscricao color={"primary"} type={"text"} label={"Nome"} onChange={onChangeName}/>
                <InputInscricao select label="Idade" value={ageValue} onChange={onChangeAge}>
                    <option value={""}></option>
                    <option value={"18"}>18</option>
                    <option value={"19"}>19</option>
                    <option value={"20"}>20</option>
                    <option value={"21"}>21</option>
                    <option value={"22"}>22</option>
                    <option value={"23"}>23</option>
                    <option value={"24"}>24</option>
                    <option value={"25"}>25</option>
                    <option value={"26"}>26</option>
                </InputInscricao>
                <InputInscricao type={"text"} label={"Profissão"} onChange={onChangeProfession}/>
                <InputInscricao select label="Pais" value={countryValue} onChange={onChangeCountry}>
                    <option value={''}></option>
                    <option value={'Brasil'}>Brasil</option>
                    <option value={'Argentina'}>Argentina</option>
                    <option value={'Estados Unidos'}>Estados Unidos</option>
                    <option value={'Canadá'}>Canadá</option>
                    <option value={'China'}>China</option>
                </InputInscricao>
                <InputInscricao placeholder={"Porque você é um bom candidato(a)?"} onChange={onChangeApplicationText}/>
                <ButtonInscricao variant="contained" color={'primary'} onClick={fazerInscricao}>Enviar</ButtonInscricao>
            </CardInscricao>
        </InscricaoContainer>
    );
};

export default IncricaoPage