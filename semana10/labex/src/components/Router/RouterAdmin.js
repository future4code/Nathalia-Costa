import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import AdminPage from "../../pages/AdminPage/AdminPage";
import RequestsPage from "../../pages/RequestsPage";
import CreateTripsPage from "../../pages/CreateTripsPage";
import NavAdmin from "../../pages/AdminPage/NavAdmin";
import RouterLogin from "./RouterLogin";

const RouterAdmin = () => {
  return (
    <BrowserRouter>
      <NavAdmin/>
      <Switch>
        <Route exact path="/logado">
          <AdminPage />
        </Route>
        <Route exact path="/logado/request">
          <RequestsPage />
        </Route>
        <Route exact path="/logado/create-trips-page">
          <CreateTripsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default RouterAdmin;
