import React from "react";
import "./Mhbody.css";
import home1 from "../../images/images/home1.png";
import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-5 col-md-6">
          <h1 className="py-3 home-heading">
            <strong>
              {" "}
              <span style={{ color: "#FD402C" }}> Get </span>
              <span style={{ color: "black" }}> Product </span>{" "}
            </strong>

            <br />
            <strong>
              {" "}
              <span style={{ color: "black" }}> In A </span>
              <span style={{ color: "#FD402C" }}> Easy Way </span>{" "}
            </strong>

            <br />
          </h1>

          <p className="py-4 home-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta
            porttitor i suspendisse luctus aliquet bibendum varius.Cras mr
            adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam
          </p>

          {/* Linkkkkk HEREEEEEEE */}
          <div className="py-4">
            <Link to="/SignIn">
              <button className="btn  btn-default home-button">
                Register Now
              </button>
            </Link>
          </div>
        </div>

        <div className="col-12 col-lg-7 col-md-6 text-center">
          <img src={home1} alt="home" className="home-image " />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
