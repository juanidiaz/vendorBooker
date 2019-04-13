import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (

  <Router>
  <div>
    <Navbar />
    <Wrapper>
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
    </Wrapper>
    <Footer />
  </div>
</Router>
);
}

export default App;