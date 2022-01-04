import React from "react";
import { Layout } from "antd";
import routeMain from "./routes";
import "./styles.scss";

const MainContent = () => {
  const { Content } = Layout;
  return (
    <div>
      <Layout className="site-layout-content">
        <Content>Контент</Content>
      </Layout>
    </div>
  );
};

export { routeMain };
export default MainContent;
