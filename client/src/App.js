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
import ManageCalendar from "./pages/ManageCalendar";
import ContactUs from "./pages/ContactUs";
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
    users: [],
    authUser: []
  };

  componentDidMount() {
    fireAdmin.auth().onAuthStateChanged((authenticated) => {
      authenticated
        ? (this.setState(() => ({ authenticated: true })))
        : this.setState(() => ({
          authenticated: false,
        }));
    });
    this.getAuthUser();
  };

  getAuthUser = () => {
    // console.log(`@APP.js: loading users`);
    API.getUsers()
      .then(res => {
        this.setState({ users: res.data });
        const user = { ...this.state.users.find(user => user.uid === localStorage.getItem('uid')) }
        this.setState({ authUser: user });
        // console.log(user);
      })
      .catch(err => console.log(err));
  };

  redrawNavbar = () => {
    // Force a render of the NavBar without state change...
    this.forceUpdate();
  };

  render() {
    return (
      <Router>
        <div>
          <Navbar
            redrawNavbar={this.redrawNavbar}
            authenticated={this.state.authenticated}
            authUser={this.state.authUser}
          />
          <Wrapper>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/services" component={Services} />
              <Route exact path="/contactus" component={ContactUs} />
              <Route exact path="/booking" component={Book} />
              <Route exact path="/client*" component={UserHome} />
              <Route exact path="/admin" component={AdminHome} />
              <Route exact path="/admin/services" component={ManageServices} />
              <Route exact path="/admin/users" component={ManageUsers} />
              <Route exact path="/admin/pets" component={ManageSecUsers} />
              <Route exact path="/admin/calendar" component={ManageCalendar} />
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
