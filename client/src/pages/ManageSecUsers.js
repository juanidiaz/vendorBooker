import React, { Component } from "react";
// import Accordion from 'react-bootstrap/Accordion'
// import Card from 'react-bootstrap/Card';
import NewSecUser from "../components/SecUsers/NewSecUser"
import { ReadSecUser, UpdateSecUser } from "../components/SecUsers/CRUDSecUser"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./index.css"
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class ManageSecUsers extends Component {
  state = {
    users: [],
    pets: [],
    newPet: [],
    adding: false,
    updating: false
  };

  componentDidMount() {
    this.loadSecUsers();
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

  loadSecUsers = () => {
    API.getSecUsers()
      .then(res => {
        this.setState({ pets: res.data });
        // console.log(this.state.pets);
      })
      .catch(err => console.log(err));
  };

  handleAddSecUser = () => {
    this.setState({ adding: true })
  }

  handleCancel = () => {
    this.setState({ adding: false });
  }

  handleCancelUpdate = () => {
    this.setState({ updating: false });
  }

  handleDeleteSecUser = event => {
    let id = event.target.id
    API.deleteSecUser(id)
      .then((res) => {
        console.log(res.data);
        alert(`${res.data.petName}'s (${res.data.petBreed}) register was deleted!`)
        this.loadSecUsers();
      })
      .catch(err => console.log(err));
  }

  handleSubmitNewSecUser = () => {
    API.addSecUser(this.state.newPet)
      .then((res) => {
        // console.log(res.data)
        alert(`A new ${this.state.newPet.petType} register was created for "${this.state.newPet.petName}" (${this.state.newPet.petBreed}).`)
        return API.updateUser(this.state.newPet.userId, { $push: { petIds: res.data._id } }, { new: true });
      })
      .then(() => {
        this.setState({ adding: false });
        this.loadSecUsers();
      })
      .catch(err => console.log(err));
  };

  handleUpdateSecUser = event => {
    // console.log(event.target);
    this.setState({ updating: true });
  }

  handleClickOnAccordion = event => {
    this.setState({ updating: false });
    this.loadSecUsers();
  }

  handleValueUpdate = (event, id) => {
    const nextSecUsers = this.state.pets.map(pet => {
      const { name, value } = event.target;
      // console.log(`name: ${event.target.name} - value: ${event.target.value}`)

      // This line will RETURN the result of evaluating the `_id` of the pet and, if 
      // it's the same as the one that is being modified then it will make a copy of 
      // the whole `pet` but updating the key `[name]` with the new `value`. If it 
      // is NOT the same `_id` then just copy that `pet` without any changes.
      return pet._id === id ? { ...pet, ...{ [name]: value } } : { ...pet }

      // The three lines below do THE SAME but in three lines :-)
      // if (pet._id === id) {
      //   return { ...pet, ...{ [name]: value } }
      // } else { return { ...pet } }
    });
    this.setState({ pets: nextSecUsers })
  };

  handleAddValueUpdate = (event) => {
    // console.log(`name=${event.target.name}     value=${event.target.value}`)
    const { name, value } = event.target;
    const newSecUser = { ...this.state.newPet };
    newSecUser[name] = value;
    this.setState({ newPet: newSecUser })
  };

  handleUpdateClick = (event, id) => {

    const updatedSecUser = { ...this.state.pets.find(pet => pet._id === id) }
    const { name, value } = event.target;
    updatedSecUser[name] = value;
    if (updatedSecUser.userId) { updatedSecUser.petOwner = updatedSecUser.userId }
    console.log(updatedSecUser)
    API.updateSecUser(updatedSecUser._id, updatedSecUser)
      .then((res) => {
        // console.log(res.data)
        // alert(`A new ${this.state.newPet.petType} register was created for "${this.state.newPet.petName}" (${this.state.newPet.petBreed}).`)
        return API.updateUser(updatedSecUser.userId, { $push: { petIds: res.data._id } }, { new: true });
      })
      .then(res => {
        alert(`${updatedSecUser.petName}'s (${updatedSecUser.petBreed}) register was updated!`)
        this.setState({ updating: false });
        this.loadSecUsers();
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
                  <a href="/admin/services" className="badge badge-warning mr-2">Manage Services</a>
                  <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
                  {/* <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a> */}
                  <a href="/admin/calendar" className="badge badge-warning mr-2">Manage Bookings</a>
                  
                </div>
                <h2 style={{ color: "black" }}>
                  Managing pets
              </h2>
                <hr />
                {!this.state.adding ? (
                  <div className="accordion" id="accordionExample">
                    <h4 style={{ color: "black" }}>Dog's</h4>
                    {this.state.pets.map(pet => pet.petType.toLowerCase() === 'dog' ? (
                      <div className="card" key={pet._id}>
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${pet._id}`}
                              aria-expanded="true" aria-controls='xxx'>
                              <span onClick={this.handleClickOnAccordion}>{pet.petName} ({pet.petBreed})</span>
                            </button>
                          </h2>
                        </div>
                        <div id={`A${pet._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            {!this.state.updating ? (
                              <ReadSecUser
                                users={this.state.users}
                                pet={pet}
                                handleUpdateSecUser={this.handleUpdateSecUser}
                                handleDeleteSecUser={this.handleDeleteSecUser}
                              />
                            ) : (
                                <UpdateSecUser
                                  pet={pet}
                                  users={this.state.users}
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
                    ) : null)}
                    <hr />
                    <div className="accordion" id="accordionExample">
                      <h4 style={{ color: "black" }}>Cat's</h4>
                      {this.state.pets.map(pet => pet.petType.toLowerCase() === 'cat' ? (
                        <div className="card" key={pet._id}>
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${pet._id}`}
                                aria-expanded="true" aria-controls='xxx'>
                                <span onClick={this.handleClickOnAccordion}>{pet.petName} ({pet.petBreed})</span>
                              </button>
                            </h2>
                          </div>
                          <div id={`A${pet._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                              {!this.state.updating ? (
                                <ReadSecUser
                                  users={this.state.users}
                                  pet={pet}
                                  handleUpdateSecUser={this.handleUpdateSecUser}
                                  handleDeleteSecUser={this.handleDeleteSecUser}
                                />
                              ) : (
                                  <UpdateSecUser
                                    pet={pet}
                                    users={this.state.users}
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
                      ) : null)}
                      <hr />
                    </div>
                    <Button
                      onClick={this.handleAddSecUser}
                      color='primary'
                    >Add a new pet</Button>
                  </div>
                ) : (
                    <div>
                      <NewSecUser
                        newPet={this.state.newPet}
                        users={this.state.users}
                        handleAddValueUpdate={this.handleAddValueUpdate}
                        handleSubmitNewSecUser={this.handleSubmitNewSecUser}
                        handleCancel={this.handleCancel}
                        color='warning'
                        colorCancel='danger'
                      >
                      </NewSecUser>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  };
};

const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSecUsers);
