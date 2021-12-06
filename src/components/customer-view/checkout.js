import React from "react";
import { Link } from "react-router-dom";

function checkout() {
  return (
    <>
      <div className="container">
        <div className=" col-1 mx-auto">
          <Link to="/CheckoutCOD">
            <button className="btn btn-secondary btn-lg" type="button">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default checkout;
