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
      <Background>
        <img src="/images/logo_300.png" style={{ width: "200px" }} alt="main logo" />
      </Background>

        <AllServices
          services = {this.state.services}
          color= 'info'
          text = 'Book service'
        />
      </div>
    );
  }
}

export default Services;