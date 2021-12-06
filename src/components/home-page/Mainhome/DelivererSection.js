import React from "react";
import "./Mhbody.css";
import home3 from "../../images/images/home3.png";
import { Link } from "react-router-dom";

function DelivererSection() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-5 col-md-6">
          <h1 className="py-3 home-heading">
            <strong>
              {" "}
              <span style={{ color: "black" }}> Want To </span>
              <span style={{ color: "white" }}> Earn Extra </span>{" "}
            </strong>

            <br />
            <strong>
              {" "}
              <span style={{ color: "white" }}> With Us </span>
              <span style={{ color: "black" }}> Join As a </span>{" "}
            </strong>
            <br />
            <strong> Delivery Boy </strong>
          </h1>

          <p className="py-4 home-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta
            porttitor i suspendisse luctus aliquet bibendum varius.Cras mr
            adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam
          </p>
          
          {/* Linkkkkk HEREEEEEEE */}
          <div className="py-4">
            <Link to="/SignInDeliverer">
              <button className="btn  btn-default home-button">
                Apply Now
              </button>
            </Link>
          </div>
        </div>

        <div className="col-12 col-lg-7 col-md-6 text-center">
          <img src={home3} alt="home" className="py-5 sub-image" />
        </div>
      </div>
    </>
  );
}

export default DelivererSection;
