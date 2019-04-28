import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import UserHome from "./pages/UserHome";
import Book from "./pages/Book";
import ManageServices from "./pages/ManageServices";
import ManageUsers from "./pages/ManageUsers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import AdminHome from "./pages/AdminHome";
import fireAdmin from './config/adminConfig';

import "./App.css";

class App extends Component {

  state = {
    authenticated: false,
  };
  componentDidMount() {
    fireAdmin.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? this.setState(() => ({
          authenticated: true,
        }))
        : this.setState(() => ({
          authenticated: false,
        }));
    });
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar authenticated={this.state.authenticated} />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              {/* <Route exact path="/clientlogin*" component={LoginClient} /> */}
              <Route exact path="/booking" component={Book} />
              <Route exact path="/client*" component={UserHome} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/admin/services*" component={ManageServices} />
              <Route exact path="/admin/users*" component={ManageUsers} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />

            </Switch>
          </Wrapper>
          <Footer />
        </div>
      </Router>

    );
  }
}
export default App;
