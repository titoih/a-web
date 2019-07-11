import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import { Layout } from 'antd';
import Header from './components/misc/Header';
import Register from './components/authentication/Register';
import Login from './components/authentication/Login';
import Test from './components/authentication/Test';
import BreadCrumb from './components/misc/BreadCrumb';
import Profile from './components/authentication/Profile';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
            <BreadCrumb />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/user/:id" component={Profile} />
              <Route exact path="/test" component={Test} />
            </Switch>
            </div>
          <Header />
        </Layout>
      </div>
    );
  }
}

export default App;
