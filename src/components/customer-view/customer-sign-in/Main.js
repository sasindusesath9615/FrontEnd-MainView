import React, { useEffect, useState } from "react";
import Navbar from "../navbar";
import ProductContainer from "./ProductContainer";
import Searchbar from "../searchbar";
import { useGlobalContext } from "../../../context";

function Main() {
  const { cart } = useGlobalContext();

  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0)
    );
  }, [cart]);
  return (
    <>
      <div>
        <Navbar />
      </div>
      <div className="container container-margin">
        <Searchbar />
      </div>
      <div className="container ">
        <div className="container">
          <div className="d-grid gap-3 col-3 mx-auto">
            <div className="text-center">
              <h4>
                <i className="fas fa-hamburger icon-color-food"></i> Food
                {/* <i className="fas fa-balance-scale icon-color-grocery"></i>
              Grocery
              <i className="fas fa-medkit icon-color-health"></i> Healthcare */}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container ">
        <div className="d-flex flex-row-reverse  mb-3 ">
          <div className="p-2 price-dev-width">
            <strong>Rs.{total}</strong>
          </div>
          <div className="p-2 price-dev-width">Total : </div>
        </div>
      </div>
      <div className="container container-margin">
        <ProductContainer />
      </div>
    </>
  );
}

export default Main;
