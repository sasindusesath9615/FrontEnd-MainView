import React from "react";
import { Link } from "react-router-dom";
// import styled from "styled-components";
// import "font-awesome/css/font-awesome.min.css";

function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light d-flex justify-content-center">
        <div>
          <Link className="navbar-brand" to="/">
            <h3>
              <b style={{ color: "orange" }}>Q</b>
              uik
            </h3>
            {/* <img src={logo} alt="logo" className="logo" /> */}
            {/* Include Logo Image */}
          </Link>
        </div>
      </nav>
    </>
  );
}
export default Navbar;

// ======================Styled Components============================
