import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NewService from "../components/Services/NewService"
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

  handleDeleteService = event => {
    let id = event.target.id
    API.deleteService(id)
      .then((deletedService) => this.loadServices())
      .catch(err => console.log(err));
  }

  handleDeleteUpdate = event => {
    console.log(event.target.id)
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
    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/client' /> 
    return (
      <div>
        <img src='/images/logo_300.png' style={{ with: '100px' }} alt='logo 300' />
        <hr />
        <div style={{ background: "white" }}>
          <Container>
            <Row>
              <Col size="md-10">
                <a href="/admin" className="badge badge-info mr-2">Administrator panel</a>
                <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
                <a href="/" className="badge badge-warning mr-2">Admin Home</a>
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
                            <p><b>Description: </b>{service.description}</p>
                            <p><b>Duration: </b>{service.duration} minutes</p>
                            <p><b>Normal price: </b>${service.price}
                              {service.specialPrice ? (<span><b> Special price: </b>${service.specialPrice}</span>) : null}
                              {service.cost ? (<span><b> Cost: </b>${service.cost}</span>) : null}</p>
                            <p>{service.images ? <img src={`/images/${service.images}`} width="200" height="300" style={{'border-radius': '8px', border:'2px solid #185586' , 'box-shadow': '3px 3px 5px grey'}} alt={''} /> : null}</p>
                            <p>{service.notes ? (<span><b>Notes: </b>${service.notes}</span>) : null}</p>
                            <button type="button" className="btn btn-danger btn-sm" onClick={this.handleDeleteService} id={service._id}>Delete</button>
                            <button type="button" className="btn btn-success btn-sm ml-4" onClick={this.handleUpdateService} id={service._id}>Update</button>
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