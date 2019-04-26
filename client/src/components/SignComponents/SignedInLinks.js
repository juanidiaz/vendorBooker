import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";

const SignedInLinks = (props) => {

    return (
        <div>
            <ul className="right">
                <li><NavLink style={{marginTop: "10px", borderRadius: "10px"}} to='/' className="btn btn-info" onClick={props.signOut}>Logout</NavLink></li>
                <li><NavLink style={{marginTop: "10px", borderRadius: "10px"}} to='/client' className="btn btn-primary">My Account</NavLink></li>
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
