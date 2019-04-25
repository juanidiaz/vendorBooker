import React, { Component } from "react";
import NewUser from "../components/Users/NewUser"
import { ReadUser, UpdateUser } from "../components/Users/CRUDUser"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";
import "./index.css"

class ManageUsers extends Component {
  state = {
    users: [],
    adding: false,
    updating: false
  };

  componentDidMount() {
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

  handleSubmitNewUser = newUser => {
    API.addUser(newUser)
      .then(res => {
        alert(`New ${newUser.userType} "${newUser.firstName} ${newUser.lastName}" was created!`)
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
    event.preventDefault();
    const nextUsers = this.state.users.map(user => {
      const { name, value } = event.target;
      // This line will RETURN the result of evaluating the `_id` of the user and, if 
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
                  {/* <a href="/admin/users" className="badge badge-warning mr-2">Manage Users</a> */}
                  <a href="/admin/pets" className="badge badge-warning mr-2">Manage Pets</a>
                </div>
                <h2 style={{ color: "black" }}>
                  Managing Users
              </h2>
                <hr />
                {!this.state.adding ? (
                  <div className="accordion" id="accordionExample">
                    <h4 style={{ color: "black" }}>Client list <small>(users)</small></h4>
                    {this.state.users.map(user => user.userType === 'user' ? (
                      <div className="card" key={user._id}>
                        <div className="card-header" id="headingOne">
                          <h2 className="mb-0">
                            <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${user._id}`}
                              aria-expanded="true" aria-controls='xxx'>
                              <span onClick={this.handleClickOnAccordion}>{user.firstName} {user.lastName}</span>
                            </button>
                          </h2>
                        </div>
                        <div id={`A${user._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                          <div className="card-body">
                            {!this.state.updating ? (
                              <ReadUser
                                user={user}
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
                          </div>
                        </div>
                      </div>
                    ) : null)}
                    <hr />
                    <div className="accordion" id="accordionExample">
                      <h4 style={{ color: "red" }}>Non-customer list <small>(admin or staff)</small></h4>
                      {this.state.users.map(user => user.userType === 'vendor' || user.userType === 'staff' ? (
                        <div className="card" key={user._id}>
                          <div className="card-header" id="headingOne">
                            <h2 className="mb-0">
                              <button className="btn btn-link" type="button" data-toggle="collapse" data-target={`#A${user._id}`}
                                aria-expanded="true" aria-controls='xxx'>
                                <span onClick={this.handleClickOnAccordion}>{user.firstName} {user.lastName}</span>&nbsp;&nbsp;
                                <span className="badge badge-pill badge-secondary">{user.userType}</span>
                              </button>
                            </h2>
                          </div>
                          <div id={`A${user._id}`} className="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">
                            <div className="card-body">
                              {!this.state.updating ? (
                                <ReadUser
                                  user={user}
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
                            </div>
                          </div>
                        </div>
                      ) : null)}
                      <hr />
                    </div>
                    <Button
                      onClick={this.handleAddUser}
                      color='primary'
                    >Add a new user</Button>
                  </div>
                ) : (
                    <div>
                      <NewUser
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
  }
}

export default ManageUsers;