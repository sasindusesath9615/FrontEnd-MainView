import React from "react";
import Navbar from "../navbar";
import CartContainer from "./CartContainer";
import { useGlobalContext } from "../../../context";
import { Link } from "react-router-dom";

function Main() {
  const { cart } = useGlobalContext();
  return (
    <>
      {/* ================NAVBAR==================== */}
      <div>
        <Navbar />
      </div>
      {/* ================================================ */}
      <div className="container mb-0">
        <div className="container">
          <div className="d-grid gap-3 col-5 mx-auto">
            <div className="text-center ">
              <p>Select Payment Method</p>
            </div>
          </div>
        </div>
      </div>
      {/* ==================PAYMENT-METHOD==================== */}
      <div className="container pb-2">
        <div className="row">
          <div className="col text-center">
            <h4>
              <i className="bi bi-wallet2" style={{ color: "#ff4308" }}></i>
            </h4>

            <button
              type="button"
              className="btn btn-primary "
              style={{ width: "200px" }}
            >
              Cash On Delivery
            </button>
          </div>
          <div className="col text-center">
            <h4>
              <i className="bi bi-credit-card" style={{ color: "#ff4308" }}></i>
            </h4>

            <Link to="/CheckoutOnline">
              <button
                type="button"
                className="btn btn-primary "
                style={{ width: "200px" }}
              >
                Online(Cash/Debit Card)
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* ==================MAIN-CONTAINER===================== */}
      <div className=" container-margin">
        <CartContainer key={cart.id} {...cart} />
      </div>
      {/* ================================================ */}
    </>
  );
}

export default Main;
