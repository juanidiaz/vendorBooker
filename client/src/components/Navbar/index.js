import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-light" id="nav">
      <Link className="navbar-brand" to="/">
        Amazing Pet Grooming
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/about"
              className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className={window.location.pathname === "/services" ? "nav-link active" : "nav-link"}
            >
              Services
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/booking"
              className={window.location.pathname === "/booking" ? "nav-link active" : "nav-link"}
            >
              Book Appointment
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/login"
              className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
              Login
            </Link>

          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
