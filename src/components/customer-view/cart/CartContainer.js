import React from "react";
import Product from "./CartProduct";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";

function Container() {
  const { cart } = useGlobalContext();
  console.log(cart);
  // ==============THIS IS WHAT HAPPENS WHEN CART IS EMPTY================
  if (cart.length === 0) {
    return (
      <section className="cart" style={{ textAlign: "center" }}>
        <strong>Your Cart</strong>
        <p>is currently empty</p>
      </section>
    );
  }
  // =====================================================================
  return (
    <section>
      <div>
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
            {/* =================cash on delivery===================== */}
            <div className="col text-center">
              {/* ===icon=== */}
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
            {/* =================cash on delivery===================== */}

            {/* =================Online (Credit/Debit)===================== */}
            <div className="col text-center">
              {/* ===icon=== */}
              <h4>
                <i
                  className="bi bi-credit-card"
                  style={{ color: "#ff4308" }}
                ></i>
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
            {/* =================Online (Credit/Debit)===================== */}
          </div>
        </div>
      </div>
      {/* ===================================================================================== */}
      {/* ===================PRODUCT MAPPING HEREEE============================== */}
      <div className="row justify-content-center">
        <div className="col-8 col-lg-10 col-xl-10 col-md-12 col-sm-12 text-center bg-color-white border ">
          <strong>Your Cart</strong>
          {cart.map((item) => {
            return (
              <div className="col" key={item.id}>
                <Product {...item}></Product>
              </div>
            );
          })}
        </div>
      </div>
      {/* ========================================================================= */}
      <div className="container">
        <div className="col text-center">
          {/* <button
            type="button"
            className="btn btn-secondary "
            style={{ width: "200px" }}
          >
            Order Now
          </button> */}
        </div>
      </div>
    </section>
  );
}

export default Container;
