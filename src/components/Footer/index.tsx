import React from "react";
import { Layout } from "antd";
import "./styles.scss";

const Footer = () => {
  const { Footer } = Layout;

  return (
    <div>
      <Layout className="layout">
        <Footer style={{ textAlign: "center" }}>Footer</Footer>
      </Layout>
    </div>
  );
};

export default Footer;
