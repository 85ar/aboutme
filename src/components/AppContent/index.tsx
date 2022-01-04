import React from "react";

import MainPage, { routeMain as routeMainPage } from "pages/MainPage";
import LoginPage, { routeLogin as routeLoginPage } from "pages/LoginPage";
import RegisterPage, {
  routeRegister as routeRegisterPage,
} from "pages/RegisterPage";

import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";
import { Redirect, Route, Switch } from "react-router-dom";

const AppContent = () => {
  return (
    <div>
      <Header />
      <main>
        <Switch>
          <Route exact path={routeMainPage()} component={MainPage} />
          <Route exact path={routeLoginPage()} component={LoginPage} />
          <Route exact path={routeRegisterPage()} component={RegisterPage} />
          <Redirect
            to={{
              pathname: routeMainPage(),
            }}
          />
        </Switch>
      </main>
      <Footer />
    </div>
  );
};

export default AppContent;
