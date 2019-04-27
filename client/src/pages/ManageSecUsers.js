import React, { Component } from "react";
import NewSecUser from "../components/SecUsers/NewSecUser"
import { ReadSecUser, UpdateSecUser } from "../components/SecUsers/CRUDSecUser"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./index.css"

class ManageSecUsers extends Component {
  state = {
    users: [],
    pets: [],
    adding: false,
    updating: false
  };

  componentDidMount() {
    this.loadSecUsers();
    this.loadUsers();
  }

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
      .then((deletedSecUser) => {
        alert(`${deletedSecUser.petName}'s (${deletedSecUser.petBreed}) register was deleted!`)
        this.loadSecUsers();
      })
      .catch(err => console.log(err));
  }

  handleSubmitNewSecUser = newSecUser => {
    API.addSecUser(newSecUser)
      .then(res => {
        alert(`A new ${newSecUser.petType} register was created for "${newSecUser.name}" (${newSecUser.petBreed}).`)
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

  handleUpdateClick = (event, id) => {

    const updatedSecUser = { ...this.state.pets.find(pet => pet._id === id) }
    const { name, value } = event.target;
    updatedSecUser[name] = value;

    console.log(updatedSecUser);
    API.updateSecUser(updatedSecUser._id, updatedSecUser)
      .then(res => {
        alert(`${updatedSecUser.petName}'s (${updatedSecUser.petBreed}) register was updated!`)
        this.setState({ updating: false });
        this.loadSecUsers();
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1><img src='/images/logo_300.png' style={{ width: '150px', marginLeft: '10px', marginTop: '10px' }} alt='logo 300' />
          &nbsp;&nbsp;&nbsp;&nbsp;Administrator panel</h1>
        <hr />
        <div style={{ background: "white" }}>
          <Container>
            <Row>
              <Col size="md-10">
                <div>
                  <a href="/admin" className="badge badge-info mr-2">Administrator panel</a>
                  <a href="/admin/services" className="badge badge-warning mr-2">Manage Services</a>
                  <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a>
                  {/* <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a> */}
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
                                pet={pet}
                                handleUpdateSecUser={this.handleUpdateSecUser}
                                users={this.state.users}
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
                                  pet={pet}
                                  handleUpdateSecUser={this.handleUpdateSecUser}
                                />
                              ) : (
                                  <UpdateSecUser
                                    pet={pet}
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
                        users={this.state.users}
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

export default ManageSecUsers;