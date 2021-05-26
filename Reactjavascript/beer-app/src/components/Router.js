import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import history from "../../src/utils/history";
import * as routes from "../constants/routes";
import Main from "./main/Main";
import Favourites from "./favourites/Favourites";

// const Favourites = () => <h2>Favourite Page</h2>;

const Router = () => (
  <BrowserRouter history={history}>
    <Switch>
      <Route exact path={routes.HOME} component={Main} />
      <Route exact path={routes.FAVOURITES} component={Favourites} />
    </Switch>
  </BrowserRouter>
);
export default Router;
