import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {

    return (
        <div>
            <ul className="right">
                <li><NavLink to='/' className="signOutBtn" onClick={props.signOut}>Logout</NavLink></li>
                <li><NavLink to='/client' className="signInBtn">My Account</NavLink></li>
            </ul>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
