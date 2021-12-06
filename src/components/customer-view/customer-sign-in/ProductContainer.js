import React from "react";
import { Link, useParams } from "react-router-dom";

// import reactDom from "react-dom";
import Product from "../Product";

import { useGlobalContext } from "../../../context";

function Container() {
  const { category } = useParams();
  const { products, loading } = useGlobalContext();

  return (
    <>
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
    </>
  );
}

export default Container;
