import React from 'react';
import {Layout} from "antd";
import MenuItems from "./MenuItems";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function App() {
  return (
      <Router>
          <Layout className="layout">
              <Header style={{backgroundColor: '#1890ff'}}>
                <div className="logo">
                    <h1 style={{color: "white"}}>ReservationApp</h1>
                </div>

              </Header>
              <Content style={{ padding: '50px 50px'}}>
                  <Switch>
                      {MenuItems.map((item, index) => {
                          return (<Route key={index} exact path={item.url} component={item.componentName}/>)
                      })}
                  </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Reservation Web APP ©2021</Footer>
          </Layout>
      </Router>
  );
};

export default App;
