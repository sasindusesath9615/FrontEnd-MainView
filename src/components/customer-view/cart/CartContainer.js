import React from "react";
import Product from "./CartProduct";
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
      <div className="row justify-content-center">
        <div className="col-8 col-lg-10 col-xl-10 col-md-12 col-sm-12 text-center bg-color-white border ">
          <div>
            <strong>Your Cart</strong>
            {cart.map((item) => {
              return (
                <div className="col" key={item.id}>
                  <Product {...item } ></Product>
                </div>
              );
            })}
          </div>
        </div>
      </div>
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
