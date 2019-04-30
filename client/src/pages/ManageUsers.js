import React, { Component } from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import NewUser from "../components/Users/NewUser"
import { ReadUser, UpdateUser } from "../components/Users/CRUDUser"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./index.css"
import { connect } from 'react-redux';
import { signUp } from '../store/actions/authActions';
import { Redirect } from 'react-router-dom';

class ManageUsers extends Component {
  state = {
    users: [],
    pets: [],
    newUser: [],
    adding: false,
    updating: false
  };

  componentDidMount() {
    const { auth } = { ...this.props };
    if (!auth.uid) return <Redirect to='/client' />

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

  handleAddUser = () => {
    this.setState({ adding: true })
  }

  handleCancel = () => {
    this.setState({ adding: false });
  }

  handleCancelUpdate = () => {
    this.setState({ updating: false });
  }

  handleDeleteUser = event => {
    let id = event.target.id
    API.deleteUser(id)
      .then((deletedUser) => {
        alert(`${deletedUser.data.userType} "${deletedUser.data.firstName} ${deletedUser.data.lastName}" was deleted!`);
        this.loadUsers();
      })
      .catch(err => console.log(err));
  }

  handleSubmitNewUser = () => {
    API.addUser(this.state.newUser)
      .then(res => {
        alert(`New ${this.state.newUser.userType} "${this.state.newUser.firstName} ${this.state.newUser.lastName}" was created!`)
        this.setState({ adding: false });
        this.loadUsers();
      })
      .catch(err => console.log(err));
  };

  handleUpdateUser = event => {
    // console.log(event.target);
    this.setState({ updating: true });
  }

  handleClickOnAccordion = event => {
    this.setState({ updating: false });
    this.loadUsers();
  }

  handleValueUpdate = (event, id) => {
    const nextUsers = this.state.users.map(user => {
      const { name, value } = event.target;
      // console.log(`name: ${event.target.name} - value: ${event.target.value}`)

      // This line will RETURN the result of evaluating the `_id` of the pet and, if 
      // it's the same as the one that is being modified then it will make a copy of 
      // the whole `user` but updating the key `[name]` with the new `value`. If it 
      // is NOT the same `_id` then just copy that `user` without any changes.
      return user._id === id ? { ...user, ...{ [name]: value } } : { ...user }

      // The three lines below do THE SAME but in three lines :-)
      // if (user._id === id) {
      //   return { ...user, ...{ [name]: value } }
      // } else { return { ...user } }
    });
    this.setState({ users: nextUsers })
  };

  handleAddValueUpdate = (event) => {
    // console.log(`name=${event.target.name}     value=${event.target.value}`)
    const { name, value } = event.target;
    const newUser = { ...this.state.newUser };
    newUser[name] = value;
    this.setState({ newUser: newUser })
  };

  handleUpdateClick = (event, id) => {

    const updatedUser = { ...this.state.users.find(user => user._id === id) }
    const { name, value } = event.target;
    updatedUser[name] = value;

    console.log(updatedUser);
    API.updateUser(updatedUser._id, updatedUser)
      .then(res => {
        alert(`${updatedUser.userType} "${updatedUser.firstName} ${updatedUser.lastName}" was updated!`)
        this.setState({ updating: false });
        this.loadUsers();
      })
      .catch(err => console.log(err));
  };

  // returnPet = id => {
  //   API.getSecUser(id)
  //     .then(pet => {
  //       console.log(pet.data)
  //       return pet.data;
  //     })
  //     .catch(err => console.log(err));
  // };

  render() {
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
                  {/* <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a> */}
                  <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a>
                  <a href="/admin/calendar" className="badge badge-warning mr-2">Manage Bookings</a>
                  
                </div>
                <h2 style={{ color: "black" }}>
                  Managing Users
              </h2>
                <hr />
                {!this.state.adding ? (
                  <div>

                    <Accordion>
                      <h4 style={{ color: "black" }}>Client list <small>(users)</small></h4>
                      {this.state.users.map(user => user.userType === 'user' ? (

                        <Card key={user._id}>
                          <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey={user._id} onClick={this.handleClickOnAccordion}>
                              {user.firstName} {user.lastName}
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={user._id}>
                            <Card.Body>
                              {!this.state.updating ? (
                                <ReadUser
                                  user={user}
                                  pets={this.state.pets}
                                  returnPet={this.returnPet}
                                  handleUpdateUser={this.handleUpdateUser}
                                />
                              ) : (
                                  <UpdateUser
                                    user={user}
                                    handleValueUpdate={this.handleValueUpdate}
                                    handleUpdateClick={this.handleUpdateClick}
                                    handleCancelUpdate={this.handleCancelUpdate}
                                    color='warning'
                                    colorCancel='danger'
                                  />
                                )}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ) : null)}

                      <hr />

                      <h4 style={{ color: "red" }}>Non-customer list <small>(admin or staff)</small></h4>
                      {this.state.users.map(user => user.userType === 'vendor' || user.userType === 'staff' ? (
                        <Card key={user._id}>
                          <Card.Header>
                            <Accordion.Toggle as={Card.Header} eventKey={user._id} onClick={this.handleClickOnAccordion}>
                              {user.firstName} {user.lastName}
                            </Accordion.Toggle>
                          </Card.Header>
                          <Accordion.Collapse eventKey={user._id}>
                            <Card.Body>
                              {!this.state.updating ? (
                                <ReadUser
                                  user={user}
                                  pets={this.state.pets}
                                  returnPet={this.returnPet}
                                  handleUpdateUser={this.handleUpdateUser}
                                />
                              ) : (
                                  <UpdateUser
                                    user={user}
                                    handleValueUpdate={this.handleValueUpdate}
                                    handleUpdateClick={this.handleUpdateClick}
                                    handleCancelUpdate={this.handleCancelUpdate}
                                    color='warning'
                                    colorCancel='danger'
                                  />
                                )}
                            </Card.Body>
                          </Accordion.Collapse>
                        </Card>
                      ) : null)}
                    </Accordion>

                    <hr />
                    <Button
                      onClick={this.handleAddUser}
                      color='primary'
                    >Add a new user
                  </Button>

                  </div>
                ) : (
                    <div>
                      <NewUser
                        newUser={this.state.newUser}
                        handleAddValueUpdate={this.handleAddValueUpdate}
                        handleSubmitNewUser={this.handleSubmitNewUser}
                        handleCancel={this.handleCancel}
                        color='warning'
                        colorCancel='danger'
                      >
                      </NewUser>
                    </div>
                  )}
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  };
};

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

export default connect(mapStateToProps, mapDispatchToProps)(ManageUsers);