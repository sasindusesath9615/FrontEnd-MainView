import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../navbar";
import Searchbar from "../searchbar";
// import reactDom from "react-dom";
import Product from "../Product";
import { useGlobalContext } from "../../../context";

function Main() {
  // const { category } = useParams();
  const { cart, products } = useGlobalContext();

  // ===============Get Total====================================
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.count, 0)
    );
  }, [cart]);
  // ===============Get Total====================================
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
        <div>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products
              .filter((item) => item.category === "food")
              .map((item) => {
                return (
                  <div className="col" key={item.id}>
                    <Product {...item}></Product>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="container">
          <div className=" col-1 mx-auto">
            <Link to="/cart">
              <button className="btn btn-secondary btn-lg" type="button">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
