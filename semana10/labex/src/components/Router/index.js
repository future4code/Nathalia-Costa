import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import ListTripsPage from "../../pages/ListTripsPage";
import SignupPage from "../../pages/SignupPage";
import LoginPage from "../../pages/LoginPage";
import LogoutPage from "../../pages/LogoutPage";
import HomePage from "../../pages/HomePage";
import AdminPage from "../../pages/AdminPage/AdminPage";
import RequestsPage from "../../pages/RequestsPage";
import CreateTripsPage from "../../pages/CreateTripsPage";
import InscricaoPage from "../../pages/InscricaoPage";

const Router = () => {
  return (
    <BrowserRouter key={Router}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list-trips" >
          <ListTripsPage />
        </Route>
        <Route exact path="/list-trips/inscricao">
          <InscricaoPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/logado">
          <AdminPage />
        </Route>
        <Route exact path="/logado/request">
          <RequestsPage />
        </Route>
        <Route exact path="/logado/create-trips-page">
          <CreateTripsPage />
        </Route>
        <Route exact path="/out">
          <LogoutPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
