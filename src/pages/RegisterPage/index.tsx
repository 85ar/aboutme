import React from "react";

import Register from "components/Register";

import routeRegister from "./routes";

import "./styles.scss";

const RegisterPage = () => {
  return (
    <div>
      <Register />
    </div>
  );
};

export { routeRegister };
export default RegisterPage;
