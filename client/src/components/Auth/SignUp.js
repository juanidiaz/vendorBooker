import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authActions';
import "./SignForms.css";


class SignUp extends Component {
    state = {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        phone: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signUp(this.state);
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/client' />
        return (
            <div className="container">
                {/* <img className="logoForms" alt="logo" src="./images/logo_300.png"></img> */}
                <div className="row">
                    <div className="col-md-6 mainBox" >
                        <form className="white" onSubmit={this.handleSubmit}>
                            <h2 className="grey-text text-darken-3" style={{textAlign: "center"}}>Sign Up</h2>
                            <hr></hr>
                            <p style={{textAlign: "center"}}>Please fill out this form to create an account</p>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="firstName">First Name</label>
                                <input type="text" id='firstName' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="lastName">Last Name</label>
                                <input type="text" id='lastName' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="phone">Phone</label>
                                <input type="text" id='phone' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn-primary lighten-1 z-depth-0">Sign Up</button>
                                <div className="center red-text">
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signUp: (creds) => dispatch(signUp(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)