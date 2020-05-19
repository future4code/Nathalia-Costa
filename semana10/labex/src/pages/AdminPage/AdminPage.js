import React from 'react';
import { useHistory } from 'react-router-dom';

const AdminPage = () => {
    const history = useHistory();

    const goToRequestPage = () => {
        history.push("/admin-page/request")
    }
    const goToCreateTripsPage = () => {
        history.push("/admin-page/create-trips-page")
    }
    return (
        <div>
            <h1>AdminPage</h1>
            <button onClick={goToRequestPage}>Request</button>
            <button onClick={goToCreateTripsPage}>Criar Viagem</button>
        </div>
    );
};

export default AdminPage