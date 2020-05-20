import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import ListTripsPage from '../../pages/ListTripsPage';
import LoginPage from '../../pages/LoginPage';
import HomePage from "../../pages/HomePage";
import RotarAdmin from "../../pages/AdminPage";


const RouterLogin = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list-trips-page">
          <ListTripsPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/logado">
          <RotarAdmin/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouterLogin;