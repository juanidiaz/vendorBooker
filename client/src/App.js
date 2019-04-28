import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Book from "./pages/Book";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import ManageServices from "./pages/ManageServices";
import ManageUsers from "./pages/ManageUsers";
import ManageSecUsers from "./pages/ManageSecUsers";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import SignIn from "./components/Auth/SignIn";
import SignUp from "./components/Auth/SignUp";
import fireAdmin from './config/adminConfig';
import API from "./utils/API";
import "./App.css";

class App extends Component {

  state = {
    authenticated: false,
    users: []
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
    this.loadUsers();
  };

  loadUsers = () => {
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        // console.log(this.state.users);
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar 
            authenticated={this.state.authenticated} 
            users={this.state.users}
            />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              {/* <Route exact path="/clientlogin*" component={LoginClient} /> */}
              <Route exact path="/booking" component={Book} />
              <Route exact path="/client*" component={UserHome} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/admin/services" component={ManageServices} />
              <Route exact path="/admin/users" component={ManageUsers} />
              <Route exact path="/admin/pets" component={ManageSecUsers} />
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
