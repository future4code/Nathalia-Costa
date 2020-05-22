import React, { useState } from 'react';
import { InscricaoContainer, CardInscricao, ImgLogoLogin } from "../styled";
import LogoLogin from '../Logo2.png';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const IncricaoPage = () => {
    const history = useHistory();

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
            "https://us-central1-labenu-apis.cloudfunctions.net/labeX/nathalia-julian/trips/NoIFVcOiSgTKTIPVZwXS/apply",
            body,
            {
                headers: {'Content-Type': 'application/json'}
            })
            .then(resposta => {
                setInscricao(resposta.data);
                console.log(resposta.data);
                history.push("/list-trips");
                alert(`Olá ${nameValue}, \nSua incrição foi enviada para analise. \nObrigada pelo interesse.`);
            })
            .catch(error => {
                alert("Você não pode ir com a gente :/")
                console.log("Deu erro", error);
            });
    }
    
    return (
        <InscricaoContainer>
            <button onClick={pageInicial}>Pagina inicial</button>
            <button onClick={voltarListTrips}>Voltar</button>
            <ImgLogoLogin src={LogoLogin}/>
            <CardInscricao>
                <h1>Inscrição</h1>
                <input type={"text"} placeholder={"Nome"} onChange={onChangeName}/>
                <select onChange={onChangeAge}>
                    <option>18</option>
                    <option>19</option>
                    <option>20</option>
                    <option>21</option>
                    <option>22</option>
                    <option>23</option>
                    <option>24</option>
                    <option>25</option>
                    <option>26</option>
                </select>
                <input type={"text"} placeholder={"Profissão"} onChange={onChangeProfession}/>
                <select onChange={onChangeCountry}>
                    <option value={'Brasil'}>Brasil</option>
                    <option value={'Argentina'}>Argentina</option>
                    <option value={"Estados Unidos"}>Estados Unidos</option>
                    <option value={'Canadá'}>Canadá</option>
                    <option value={'China'}>China</option>
                </select>
                <textarea placeholder={"Porque você é um bom candidato(a)?"} onChange={onChangeApplicationText}/>
                <button onClick={fazerInscricao}>Enviar</button>
            </CardInscricao>
        </InscricaoContainer>
    );
};

export default IncricaoPage