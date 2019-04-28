import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "../Navbar/style.css";

const SignedInLinks = (props) => {

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link
                    to="/client"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    My Account
                    </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/admin"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    About
                    </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/client"
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
                    onClick={props.signOut}>
                    Log out
                    </Link>
            </li>
        </ul>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(signOut())
    }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
