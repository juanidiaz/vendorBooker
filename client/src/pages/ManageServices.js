import React, { Component } from "react";
import NewService from "../components/Services/NewService"
import { ReadService, UpdateService } from "../components/Services/CRUDService"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import "./index.css"

class ManageServices extends Component {
  state = {
    services: [],
    adding: false,
    editing: false,
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

  handleAddService = () => {
    this.setState({ adding: true })
  }

  handleCancel = () => {
    this.setState({ adding: false });
  }

  handleCancelUpdate = () => {
    this.setState({ updating: false });
  }

  handleDeleteService = event => {
    let id = event.target.id
    API.deleteService(id)
      .then((deletedService) => {
        alert(`Service "${deletedService.data.name}" was deleted!`)
        this.loadServices();
      })
      .catch(err => console.log(err));
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

  handleUpdateService = event => {
    // console.log(event.target);
    this.setState({ updating: true });
  }

  handleClickOnAccordion = event => {
    console.log(event.target.id);
    this.setState({ updating: false });
    this.loadServices();
  }

  handleValueUpdate = (event, id) => {
    const nextServices = this.state.services.map(service => {
      const { name, value } = event.target;
      // This line will RETURN the result of evaluating the `_id` of the service and, if 
      // it's the same as the one that is being modified then it will make a copy of 
      // the whole `service` but updating the key `[name]` with the new `value`. If it 
      // is NOT the same `_id` then just copy that `service` without any changes.
      return service._id === id ? { ...service, ...{ [name]: value } } : { ...service }

      // The three lines below do THE SAME but in three lines :-)
      // if (service._id === id) {
      //   return { ...service, ...{ [name]: value } }
      // } else { return { ...service } }
    });
    this.setState({ services: nextServices })
  };

  handleUpdateClick = (event, id) => {

    const updatedService = { ...this.state.services.find(service => service._id === id) }
    const { name, value } = event.target;
    updatedService[name] = value;

    console.log(updatedService);
    API.updateService(updatedService._id, updatedService)
      .then(res => {
        alert(`Service "${updatedService.name}" was updated!`)
        this.setState({ updating: false });
        this.loadServices();
      })
      .catch(err => console.log(err));
  }

  render() {
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/client' /> 
    return (
      <div>
        <h1>
          {/* <img src='/images/logo_300.png' style={{ width: '150px', marginLeft: '10px', marginTop: '10px' }} alt='logo 300' /> */}
          &nbsp;&nbsp;&nbsp;&nbsp;Administrator panel
        </h1>
        {/* <hr /> */}
        <div style={{ background: "white" }}>
          <Container>
            <Row>
              <Col size="md-10">
                <div>
                  <a href="/admin" className="badge badge-info mr-2">Administrator panel</a>
                  {/* <a href="/admin/services" className="badge badge-warning mr-2">Manage Services</a> */}
                  <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
                  <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a>
                  <a href="/admin/calendar" className="badge badge-warning mr-2">Manage Bookings</a>
                  
                </div>
                <h2 style={{ color: "black" }}>
                  Managing Services
              </h2>
                <hr />
                {!this.state.adding ? (
                  <div className="accordion" id="accordionExample">
                    {this.state.services.map(service =>
                      <div className="card" key={service._id}>
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${service._id}`}
                              aria-expanded="true" aria-controls='xxx'>
                              {service.name}
                            </button>
                          </h2>
                        </div>
                        <div id={`A${service._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">

                            {!this.state.updating ? (
                              <ReadService
                                service={service}
                                handleUpdateService={this.handleUpdateService}
                              />
                            ) : (
                                <UpdateService
                                  service={service}
                                  handleValueUpdate={this.handleValueUpdate}
                                  handleUpdateClick={this.handleUpdateClick}
                                  handleCancelUpdate={this.handleCancelUpdate}
                                  color='warning'
                                  colorCancel='danger'
                                />
                              )}
                          </div>
                        </div>
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
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      authError: state.auth.authError,
      auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ManageServices);