import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Auth from "./pages/Auth";
import UserHome from "./pages/UserHome";
import AdminHome from "./pages/AdminHome";
import ManageServices from "./pages/ManageServices";
import ManageUsers from "./pages/ManageUsers";
import Book from "./pages/Book";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import "./App.css";

function App() {
  return (

  <Router>
  <div>
    <Navbar />
    <Wrapper>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/auth*" component={Auth} />
      <Route exact path="/user/*" component={UserHome} />
      <Route exact path="/admin/" component={AdminHome} />
      <Route exact path="/admin/services" component={ManageServices} />
      <Route exact path="/admin/users" component={ManageUsers} />
      <Route exact path="/book" component={Book} />
    </Wrapper>
    <Footer />
  </div>
</Router>
);
}

export default App;