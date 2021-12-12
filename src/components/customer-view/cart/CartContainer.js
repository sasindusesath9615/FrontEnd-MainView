import React, { useState, useEffect } from "react";
import Product from "./CartProduct";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../../context";

function Container() {
  const { cart, clearCart } = useGlobalContext();
  console.log(cart);

  // ===============Get Total====================================
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0)
    );
  }, [cart]);
  // ===============Get Total====================================

  // ==============THIS IS WHAT HAPPENS WHEN CART IS EMPTY================
  if (cart.length === 0) {
    return (
      <section
        className="cart"
        style={{ textAlign: "center", marginTop: "140px" }}
      >
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
      {/* ========================================================================= */}
      <div className="row justify-content-center">
        <div className="col-8 col-lg-10 col-xl-10 col-md-12 col-sm-12 text-center bg-color-white border ">
          <div className="col">
            <div className="row my-3 align-items-center d-flex justify-content-between">
              <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-6 text-center"></div>
              <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-6 text-center"></div>
              <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 text-center"></div>
              <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-2 text-center"></div>
              {/* Price All */}
              <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-2 text-center">
                <p className="pt-2">{total}LKR</p>
              </div>
              <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-2 text-center">
                {/* Remove All Item from Cart(clear cart) */}
                <h5 className="text-center">
                  <button className="btn btn-light" onClick={() => clearCart()}>
                    <i className="bi bi-trash" style={{ color: "red" }}></i>
                  </button>
                </h5>
                {/* Remove All Item from Cart(clear cart) */}
              </div>
            </div>
          </div>
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
