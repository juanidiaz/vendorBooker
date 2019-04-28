import React from 'react';
import { Link } from 'react-router-dom';
import "../Navbar/style.css";

const SignedOutLinks = () => {
  return (
    <div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link
            to="/signup"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            Signup
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/signin"
            className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
            Log in
          </Link>
        </li>

      </ul >
    </div >
  )
}

export default SignedOutLinks;