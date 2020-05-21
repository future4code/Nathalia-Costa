import React from 'react';
import { InscricaoContainer, CardInscricao, ImgLogoLogin } from "../styled";
import LogoLogin from '../Logo2.png';
import { useHistory } from 'react-router-dom';

const IncricaoPage = () => {
    const history = useHistory();

    const pageInicial = () => {
      history.push("/");
    };
    const voltarListTrips = () => {
      history.push("/list-trips");
    };

    return (
        <InscricaoContainer>
            <button onClick={pageInicial}>Pagina inicial</button>
            <button onClick={voltarListTrips}>Voltar</button>
            <ImgLogoLogin src={LogoLogin}/>
            <CardInscricao>
                <h1>Inscrição</h1>
                <input type={"text"} placeholder={"Nome"}/>
                <select>
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
                <input type={"text"} placeholder={"Profissão"}/>
                <select>
                    <option>Brasil</option>
                    <option>Argentina</option>
                    <option>Estados Unidos</option>
                    <option>França</option>
                    <option>México</option>
                    <option>Canadá</option>
                </select>
                <select>
                    <option>Planeta1</option>
                    <option>Planeta2</option>
                    <option>Planeta3</option>
                </select>
                <textarea placeholder={"Porque você é um bom candidato(a)?"}/>
                <button>Enviar</button>
            </CardInscricao>
        </InscricaoContainer>
    );
};

export default IncricaoPage