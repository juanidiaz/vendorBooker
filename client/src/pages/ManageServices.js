import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewService from "../components/Services/NewService"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class ManageServices extends Component {
  state = {
    services: [],
    adding: false,
  };

  componentDidMount() {
    this.loadServices();
  }

  loadServices = () => {
    API.getServices()
      .then(res => {
        this.setState({ services: res.data });
        // console.log(this.state.services);
      })
      .catch(err => console.log(err));
  };

  deleteService = id => {
    API.deleteService(id)
      .then(() => this.loadServices())
      .catch(err => console.log(err));
  };

  handleAddService = () => {
    this.setState({ adding: true })
  }

  handleCancel = () => {
    this.setState({ adding: false });
  }

  handleSubmitNewService = (newService) => {
    API.addService(newService)
      .then(res => {
        alert(`New service "${newService.name}" was created!`)
        this.setState({ adding: false });
        this.loadServices();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        <img src='/images/logo_300.png' style={{ with: '100px' }} alt='logo 300' />
        <hr />
        <Container>
          <Row>
            <Col size="md-10">
            <Link to="/admin/services">Services</Link> | 
            <Link to="/admin/users"> Users</Link>
              <h2>
                Managing Services
              </h2>
              <hr />
              {!this.state.adding ? (
                <div>
                  {this.state.services.map(service =>
                    <div className="alert alert-primary" role="alert" id={service._id}>
                      {service.name}
                    </div>
                  )}
                  <hr />
                  <Button
                    onClick={this.handleAddService}
                    color='primary'
                  >Add a new service</Button>
                </div>
              ) : (
                  <div>
                    <NewService
                      handleSubmitNewService={this.handleSubmitNewService}
                      handleCancel={this.handleCancel}
                      color='warning'
                      colorCancel='danger'
                    >
                    </NewService>
                  </div>
                )}
            </Col>
          </Row>
        </Container>

      </div>
    );
  }
}

export default ManageServices;