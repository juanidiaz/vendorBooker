import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Login from "./components/Auth/Login";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
// import LoginClient from "./pages/LoginClient";
import UserHome from "./pages/UserHome";
import Book from "./pages/Book";
import AdminHome from "./pages/AdminHome";
import ManageServices from "./pages/ManageServices";
import ManageUsers from "./pages/ManageUsers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";

import "./App.css";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends Component {
  render() {
    return (

      <Router>
        <Security issuer='https://dev-915604.okta.com/oauth2/default'
          client_id='0oah46iesrGxpg0bj356'
          redirect_uri={window.location.origin + '/implicit/callback'}
          onAuthRequired={onAuthRequired} >
          <div className="App"></div>
          <div>
            <Navbar />
            <Wrapper>
              <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/login*" render={() => <Login baseUrl='https://dev-915604.okta.com' />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
              {/* <Route exact path="/clientlogin*" component={LoginClient} /> */}
              <SecureRoute exact path="/admin" component={AdminHome} />
              <SecureRoute exact path="/admin/services" component={ManageServices} />
              <SecureRoute exact path="/admin/users" component={ManageUsers} />
              <Route exact path="/booking" component={Book} />
              <Route exact path="/client*" component={UserHome} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />

              </Switch>
            </Wrapper>
            <Footer />
          </div>
        </Security>
      </Router>
    );
  }
}
export default App;