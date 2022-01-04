import Login from "components/Login";
import React from "react";

import routeLogin from "./routes";
import "./styles.scss";

const LoginPage = () => {
  return (
    <div>
      <Login />
    </div>
  );
};

export { routeLogin };
export default LoginPage;
