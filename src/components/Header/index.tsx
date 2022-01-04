import React from "react";
import { Layout, Menu } from "antd";
import "./styles.scss";
import { NavLink } from "react-router-dom";
import { routeMain as routeMainPage } from "pages/MainPage";
import { routeLogin as routeLoginPage } from "pages/LoginPage";
import { routeRegister as routeRegisterPage } from "pages/RegisterPage";
const Header = () => {
  const { Header } = Layout;

  return (
    <div>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["1"]}>
            <Menu.Item key="1">
              <NavLink to={routeMainPage}>Главная</NavLink>
            </Menu.Item>
            <Menu.Item key="2">
              <NavLink to={routeLoginPage}>Войти</NavLink>
            </Menu.Item>
            <Menu.Item key="3">
              <NavLink to={routeRegisterPage}>Регистрация</NavLink>
            </Menu.Item>
          </Menu>
        </Header>
      </Layout>
    </div>
  );
};

export default Header;
