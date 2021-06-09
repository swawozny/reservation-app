import React from 'react';
import SeatsContainer from "./app/seats/components/SeatsContainer";
import {Layout} from "antd";

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Layout className="layout">
          <Header style={{backgroundColor: '#1890ff'}}>
            <div className="logo" />
          </Header>
          <Content style={{ padding: '50px 50px'}}>
            <SeatsContainer />
          </Content>
          <Footer style={{ textAlign: 'center' }}>Reservation Web APP ©2021</Footer>
      </Layout>

  );
};

export default App;
