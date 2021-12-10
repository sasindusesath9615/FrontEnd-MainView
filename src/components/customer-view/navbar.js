import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";
// import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  const { cart } = useGlobalContext();
  console.log(cart);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(cart.reduce((acc, curr) => acc + Number(curr.count), 0));
  }, [cart]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-light p-3"
        // style={{ backgroundColor: " #F6C06A" }}
      >
        <div className="container-fluid">
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
                    {/* <Link className="dropdown-item" to={`/CustomerSignInFood/${category.foodLink}`}> */}
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
                <Link to="/cart">
                  <div className=" position-relative">
                    <i
                      className="fa fa-shopping-cart"
                      style={{
                        padding: "14px",
                        color: "#f4633b",
                      }}
                    >
                      <span
                        className=" top-30 start-100 translate-middle badge rounded-pill bg-warning text-dark notification"
                        style={{
                          fontSize: "9px",
                          marginLeft: "4px",
                          borderRadius: "black",
                        }}
                      >
                        {cartCount}
                      </span>
                    </i>
                  </div>
                </Link>
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
    </>
  );
}

export default Navbar;
