import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import "../Navbar/style.css";

const SignedInLinks = (props) => {

    // let redrawNavbar = () => props.redrawNavbar();
    // redrawNavbar();

    props.redrawNavbar()

    // Get the UID value fro the local storage
    let uid = localStorage.getItem('uid');

    console.log(`Print SignComponents/SignedInLinks.js now UID=${props.authUser.uid}`);

    return (
        <ul className="navbar-nav">
            <li className="nav-item">
                <Link
                    to="/booking"
                    className={window.location.pathname === "/booking" ? "nav-link active" : "nav-link"}>
                    Book Appointment
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to={"/client/" + uid}
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    My Account
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/admin"
                    className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}>
                    Admin Panel
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/"
                    className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}
                    onClick={props.signOut}>
                    <p className="text-warning">Log out</p>
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
