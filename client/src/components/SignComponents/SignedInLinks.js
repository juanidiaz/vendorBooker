import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
import API from "../../utils/API";
import "../Navbar/style.css";

const SignedInLinks = (props) => {

    console.log(props.users);
    let uid = localStorage.getItem('uid');
    console.log(`@NAV: Current uid=${uid}`);

    let loadUser = (id) => {
        API.getUser(id)
            .then(res => {
                let user = res.data;
                console.log("xxxxxxxxxxx " + user)
            })
            .catch(err => console.log(err));
    };

    loadUser(uid);


    return (
        <ul className="navbar-nav">
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
                    className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
                    Admin
                    </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/"
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
