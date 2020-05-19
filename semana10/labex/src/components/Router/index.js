import React from "react";
import ReactDOM from "react-dom";
import { Switch, Route, BrowserRouter } from "react-router-dom";


import ListTripsPage from '../../pages/ListTripsPage';
import LoginPage from '../../pages/LoginPage';
import HomePage from "../../pages/HomePage";
import AdminPage from "../../pages/AdminPage/AdminPage";
import RequestsPage from "../../pages/RequestsPage";
import CreateTripsPage from "../../pages/CreateTripsPage";


const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/list-trips-page">
          <ListTripsPage />
        </Route>
        <Route exact path="/login-page">
          <LoginPage />
        </Route>
        {/* Admin */}
        <Route exact path="/admin-page">
          <AdminPage />
        </Route>
        <Route exact path="/admin-page/request">
          <RequestsPage />
        </Route>
        <Route exact path="/admin-page/create-trips-page">
          <CreateTripsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;