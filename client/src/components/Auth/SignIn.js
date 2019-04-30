import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authActions';
import { Redirect } from 'react-router-dom';


class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.signIn(this.state)
    }
    render() {
        const { authError, auth } = this.props;
        if (auth.uid) return <Redirect to='/client' />

        return (
            <div className="container">
                {/* <img className="logoForms" alt="logo" src="./images/logo_300.png"></img> */}
                <div className="row">
                    <div className="col-md-6">
                        <form className="white" onSubmit={this.handleSubmit} style={{ marginBottom: "50px" }}>
                            <h2 className="grey-text text-darken-3" style={{ textAlign: "center" }}>Sign In</h2>
                            <hr></hr>
                            <div className="input-field">
                                <label htmlFor="email">Email</label>
                                <input type="email" id='email' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <label htmlFor="password">Password</label>
                                <input type="password" id='password' onChange={this.handleChange} />
                            </div>
                            <div className="input-field">
                                <button className="btn-primary lighten-1 z-depth-0">Login</button>
                                <div className="center red-text">
                                    {authError ? <p>{authError}</p> : null}
                                </div>
                            </div>
                            <hr style={{ marginTop: "30px" }}></hr>
                            <p style={{ textAlign: "center", marginTop: "15px" }}>Don't have an account yet? Click <a href="/signup">here</a>  to register</p>
                            <p style={{ textAlign: "center" }}>Connect with us <a href="https://www.facebook.com/amazingpetgroomingmilton/" target="blank"><img style={{ width: "25px", marginLeft: "5px" }} alt="Facebook Logo" src="./images/facebook_circle.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "25px", marginLeft: "10px" }} alt="google Logo" src="./images/google-icon-circle.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "25px", marginLeft: "10px" }} alt="Twitter Logo" src="./images/Twitter-icon.png"></img></a><a href="https://search.google.com/local/writereview?placeid=ChIJ236qSQZvK4gRRRWenmxtYaE" target="blank"><img style={{ width: "25px", marginLeft: "10px" }} alt="google Logo" src="./images/instagram-icon.png"></img></a></p>
                        </form>
                    </div>

                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authError: state.auth.authError,
        auth: state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (creds) => dispatch(signIn(creds))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)