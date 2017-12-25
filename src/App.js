import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Layout, Menu, Breadcrumb, Row, Col } from 'antd';

const { Header, Content, Footer } = Layout;


class App extends Component {
  render() {
    return (
      <div className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            style={{ lineHeight: '64px' }}
          >
            <Menu.Item key="1">nav 1</Menu.Item>
            <Menu.Item key="2">nav 2</Menu.Item>
            <Menu.Item key="3">nav 3</Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>Content</div>
        </Content>
        <Footer>
          <Row>
            <Col xs={24} md={{span: 4, offset: 2}}>
              <h3 style={{paddingBottom: '10px'}}>
                Title
              </h3>
              <div>
                Could remained original brink into leering place remote with that. Blocks archives touch culminating wraith-like devastations could hideous levels have.
              </div>
            </Col>
            <Col xs={24} md={{ span: 2, offset: 2 }}>
              <h3 style={{ paddingBottom: '10px' }}>
                Jobs
              </h3>
              <div>
                <ul style={{listStyleType:'none', paddingLeft: '0px'}}>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                  <li>item 5</li>
                  <li>item 6</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={{ span: 2, offset: 1 }}>
              <h3 style={{ paddingBottom: '10px' }}>
                Trainings
              </h3>
              <div>
                <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                  <li>item 5</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={{ span: 2, offset: 1 }}>
              <h3 style={{ paddingBottom: '10px' }}>
                More
              </h3>
              <div>
                <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                  <li>item 1</li>
                  <li>item 2</li>
                  <li>item 3</li>
                  <li>item 4</li>
                  <li>item 5</li>
                  <li>item 6</li>
                </ul>
              </div>
            </Col>
            <Col xs={24} md={{ span: 4, offset: 2}}>
              <h3 style={{ paddingBottom: '10px' }}>
                Contact
              </h3>
              <div>
                <ul style={{ listStyleType: 'none', paddingLeft: '0px' }}>
                  <li>hello@website.com</li>
                  <li>+63 111 111 1234</li>
                  <li>123 St</li>
                  <li>Makati NCR</li>
                  <li>Philippines</li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row style={{ textAlign: 'center' }}>
            Ant Design ©2016 Created by Ant UED
          </Row>
        </Footer>
      </div>
    );
  }
}

export default App;
