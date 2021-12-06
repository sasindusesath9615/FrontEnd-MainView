import React from "react";
import { Link } from "react-router-dom";
// css
import "./Mhbody.css";

import home2 from "../../images/images/home2.png";
import icon1 from "../../images/images/icon1.png";
import icon2 from "../../images/images/icon2.png";
import icon3 from "../../images/images/icon3.png";

function OrderNowSection() {
  return (
    <>
      <div className="row">
        <div className="col-sm-12 col-md-6 col-lg-6 order-sm-2 order-lg-1 order-md-1">
          <img src={home2} alt="shopping" className="py-5 sub-image" />
        </div>

        <div className="col-sm-12 col-md-6 col-lg-6 order-sm-1  order-lg-2 order-md-2">
          <h1 className="py-3  home-heading">
            <strong>
              <span style={{ color: "#FE432E" }}>Simple Process </span>
              <span>To</span>
              <br />
              Make Order Your Favourite Foods/
            </strong>
          </h1>

          <br />
          <p className="process">
            <b>Step 1</b>{" "}
            <span style={{ paddingLeft: "5px" }}>
              <img src={icon1} alt="location" className="processlogo" />
            </span>
            <span style={{ paddingLeft: "5px" }}> Set Your Location Frist</span>
          </p>
          <p className="process">
            <b>Step 2</b>{" "}
            <span style={{ paddingLeft: "5px" }}>
              <img src={icon3} alt="location" className="processlogo" />{" "}
            </span>
            <span style={{ paddingLeft: "5px" }}>
              {" "}
              Choose the Food You Want to Order
            </span>
          </p>
          <p className="process">
            <b>Step 3</b>{" "}
            <span style={{ paddingLeft: "5px" }}>
              <img src={icon2} alt="location" className="processlogo" />{" "}
            </span>
            <span style={{ paddingLeft: "5px" }}>
              {" "}
              Confirm Order with Payment Method
            </span>
          </p>

          <div className="py-4">
            <Link to="/CustomerSignInMain">
              <button className="btn home-button">Order Now</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default OrderNowSection;
