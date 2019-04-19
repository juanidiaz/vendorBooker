import React, { Component } from "react";
import API from "../utils/API";
import Background from "../components/Background";
import AllServices from "../components/Services/AllServices";

class Services extends Component {
  state = {
    services: [],
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res => this.setState({ services: res.data }))
      .catch(err => console.log(err));
  };

  deleteService = id => {
    API.deleteService(id)
      .then(() => this.loadServices())
      .catch(err => console.log(err));
  };

  render() {

    return (
      <div>
        <Background backgroundImage="http://amazingpetgrooming.ca/wp-content/uploads/2016/11/perro-secandose.jpg">
          <h1>Amazing Pet Grooming</h1>
          <h2>We are the best in Canada!</h2>
        </Background>
        <AllServices
          services = {this.state.services}
          text = 'Book service'
        />
      </div>
    );
  }
}

export default Services;