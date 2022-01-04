import React from "react";
import { Layout } from "antd";
import "./styles.scss";

const Header = () => {
  const { Header } = Layout;

  return (
    <div>
      <Layout>
        <Header>Header</Header>
      </Layout>
    </div>
  );
};

export default Header;
