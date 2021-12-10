import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [category] = useState({
    foodLink: "food",
    groceryLink: "grocery",
    healthcareLink: "healthcare",
  });
  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-lg navbar-light p-3"
        style={{ backgroundColor: " #F6C06A" }}
      >
        <div className="container-fluid">
          {/* Brand Logo-Link */}
          <Link className="navbar-brand" to="/">
            <h3>
              <b style={{ color: "orange" }}>Q</b>
              uik
            </h3>
            {/* <img src={logo} alt="logo" className="logo" /> */}
            {/* Include Logo Image */}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          {/**Including Toggle Menu */}

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/*Center side Links*/}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item ">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item ">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#category"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{ borderRadius: "3%" }}
                >
                  <li>
                    <Link className="dropdown-item" to="/CustomerSignInFood">
                      Food
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/CustomerSignInGrocery">
                      Grocery
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/CustomerSignInHealthcare"
                    >
                      Healthcare
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            {/*Center side Links*/}

            {/* Right Side Links*/}
            <ul className="navbar-nav">
              <li className="nav-item">
                <i
                  className="fa fa-shopping-cart"
                  style={{ padding: "12px" }}
                ></i>
              </li>
              <li className="nav-item">
                <Link to="/LogIn">
                  <button type="button" className="btn login-button">
                    Log In
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SignIn">
                  <button type="button" className="btn signup-button">
                    Sign Up
                  </button>{" "}
                </Link>
              </li>
            </ul>
            {/* Right Side Links*/}
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default Navbar;
