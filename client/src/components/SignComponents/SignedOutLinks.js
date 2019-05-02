import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/style.css";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/signin"
            className={window.location.pathname === "/signin" ? "nav-link active" : "nav-link"}>
            Log in
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link
            to="/admin"
            className={window.location.pathname === "/admin" ? "nav-link active" : "nav-link"}>
            Admin Panel
          </Link>
        </li> */}
      </ul >
    </div >
  )
}

export default SignedOutLinks;