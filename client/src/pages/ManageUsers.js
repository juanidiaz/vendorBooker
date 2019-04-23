import React, { Component } from "react";
// import { Link } from "react-router-dom";
import NewUser from "../components/Users/NewUser"
import Button from "../components/Button";
import { Col, Row, Container } from "../components/Grid";
import API from "../utils/API";

class ManageUsers extends Component {
  state = {
    users: [],
    adding: false,
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

  deleteUser = id => {
    API.deleteUser(id)
      .then(() => this.loadUsers())
      .catch(err => console.log(err));
  };

  handleAddUser = () => {
    this.setState({ adding: true })
  }

  handleCancel = () => {
    this.setState({ adding: false });
  }

  handleSubmitNewUser = (newUser) => {
    API.addUser(newUser)
      .then(res => {
        alert(`New ${newUser.userType} "${newUser.firstName} ${newUser.lastName}" was created!`)
        this.setState({ adding: false });
        this.loadUsers();
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
              <div>
                <a href="/admin" class="badge badge-info mr-2">Administrator panel</a>
                <a href="/admin/services" class="badge badge-warning mr-2">Manage Services</a>
                <a href="/" class="badge badge-warning mr-2">Admin Home</a>
              </div>
              <h2>
                Managing Users
              </h2>
              <hr />
              {!this.state.adding ? (
                <div>
                  {this.state.users.map(user => user.userType === 'user' ? (
                    <div className="alert alert-primary" role="alert" id={user._id}>
                      {user.firstName} {user.lastName}
                    </div>) : null
                  )}
                  <hr />
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
    );
  }
}

export default ManageUsers;