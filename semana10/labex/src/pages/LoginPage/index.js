import React from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
    const history = useHistory();

    const goToAdminPage = () => {
        history.push("/admin-page")
    }
    return (
        <div>
            <h1>Login</h1>
            <button onClick={goToAdminPage}>Sign in</button>
        </div>
    );
};

export default Login