import React from "react";
import "./Mhbody.css";
import home4 from "../../images/images/home4.png";
import { Link } from "react-router-dom";

function SellerSection() {
  return (
    <>
      <div className="row">
        <div className="col-12 col-lg-6 col-md-6 order-sm-2 order-lg-1 order-md-1">
          <img src={home4} alt="home" className=" py-5 sub-image " />
        </div>
        <div className="col-12 col-lg-6 col-md-6 order-sm-1 order-lg-2 order-md-2">
          <h1 className="py-3 home-heading">
            <strong>
              {" "}
              <span style={{ color: "black" }}> Want To </span>
              <span style={{ color: "#F5643C" }}> Find More </span>{" "}
            </strong>
            <br />
            <strong>
              {" "}
              <span style={{ color: "#F5643C" }}> Customers </span>
            </strong>
            <strong> Register Your </strong>
            <strong> Shop/Restaurent </strong>
          </h1>

          <p className="py-4 home-paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est porta
            porttitor i suspendisse luctus aliquet bibendum varius.Cras mr
            adipiscing elit. Est porta porttitor interdum tempus. Turpis aliquam
          </p>

          {/* Linkkkkk HEREEEEEEE */}

          <div className="py-4">
            <Link to="/SignInSeller">
              <button className="btn  btn-default home-button">Join Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default SellerSection;
