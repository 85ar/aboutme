import React from "react";
import { Layout } from "antd";
import "./styles.scss";
import Header from "components/Header";
import Footer from "components/Footer";

const AppContent = () => {
  const { Content } = Layout;

  return (
    <div>
      <Header />
      <Layout>
        <Content>Content</Content>
      </Layout>
      <Footer />
    </div>
  );
};

export default AppContent;
