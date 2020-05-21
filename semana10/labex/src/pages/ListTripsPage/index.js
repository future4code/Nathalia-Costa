import React from 'react';
import { ListTripsContainer } from "../styled";
import { useHistory } from 'react-router-dom';

const ListTrips = () => {
    const history = useHistory();

    const pageInicial = () => {
      history.push("/");
    };
    const pageInscricao = () => {
      history.push("/list-trips/inscricao");
    };
    return (
        <ListTripsContainer>
            <button onClick={pageInicial}>Pagina inicial</button>
            <button onClick={pageInscricao}>Inscreva-se</button>
            <h1>Viagens disponiveis</h1>
            <div>
                VIAGENS ...
            </div>
        </ListTripsContainer>
    );
};

export default ListTrips