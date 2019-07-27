import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom'
import { Layout } from 'antd';
import Header from './components/misc/Header';
import Register from './components/authentication/Register';
import PrivateRoute from './guards/PrivateRoute';
import Login from './components/authentication/Login';
import ReviewsList from './components/reviews/ReviewsList';
import ReviewsPost from './components/reviews/ReviewsPost';
import BreadCrumb from './components/misc/BreadCrumb';
import Profile from './components/authentication/Profile';
import ListFriends from './components/friends/ListFriends';
import Search from './components/search/Search';
import Favourites from './components/favourites/Favourites';
import Avatar from './components/authentication/images/Avatar';
import Edit from './components/authentication/Edit';
import { withAuthConsumer } from './context/AuthStore';

const {  Content } = Layout;


class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout className="layout">
        <Content style={{display:'block',clear:"both"}}>
            <BreadCrumb />
            <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
            <PrivateRoute exact path="/" component={() => (
            <Redirect to="/reviews" />
            )} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <PrivateRoute exact path="/user/:id" component={Profile} />
              <PrivateRoute exact path="/reviews" component={ReviewsList} />
              <PrivateRoute exact path="/post" component={ReviewsPost} />
              <PrivateRoute exact path="/friends" component={ListFriends} />
              <PrivateRoute exact path="/search" component={Search} />
              <PrivateRoute exact path="/favourites" component={Favourites} />
              <PrivateRoute exact path="/upload" component={Avatar} />
              <PrivateRoute exact path="/edit/:id" component={Edit} />
            </Switch>
            </div>
        </Content>
        <Header style={{clear:'both'}}/>
        </Layout>
      </div>
    );
  }
}

export default withAuthConsumer(App);
