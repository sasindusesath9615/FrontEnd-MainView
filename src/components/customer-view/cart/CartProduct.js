import React from "react";
import { useGlobalContext } from "../../../context";

function Product({ id, name, price, address, img,count }) {
  
  const { increment,decrement,removeItem } = useGlobalContext();

  return (
    <>
      <div className="row my-3 align-items-center d-flex justify-content-between">
        {/* Image */}
        <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-2 col-6 text-center">
          <img
            src={img}
            className=" border border-1 image-size-product"
            alt="hhgvhgv"
          ></img>
        </div>
        {/* Image */}

        {/* Product-name */}
        <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-4 col-6 text-center">
          <h5>{name}</h5>
        </div>
        {/* Product-name */}

        {/* Address */}
        <div className="col-5 col-xl-5 col-lg-5 col-md-5 col-sm-6 col-12 text-center">
          {/* <div className="row">
            <div className="col-1">
              <i className="fas fa-map-marker-alt pt-2 icon-color-location"></i>
            </div>
            <div className="col-11 my-0">
              <p className="pt-2">Address,address,address,Matara</p>
            </div>
          </div> */}
          <div className="row">
            <p className="pt-2">
              <i className="fas fa-map-marker-alt pt-2 icon-color-location"></i>{" "}
              {address}
            </p>
          </div>
        </div>
        {/* Address */}

        {/* increse/decrese count */}
        <div className="col-2 col-xl-2 col-lg-2 col-md-2 col-sm-3 col-2 text-center">
          <div>
            <button
              type="button"
              className="btn-group btn-group-sm  rounded-pill btn-outline-dark"
              role="group"
              onClick={() => increment(id)}
            >
              <i className="bi bi-arrow-up-short"></i>
            </button>

            <p className="m-2">{count}</p>

            <button
              type="button"
              className="btn-group btn-group-sm  rounded-pill btn-outline-dark"
              onClick={() => decrement(id)}
            >
              <i className="bi bi-arrow-down-short"></i>
            </button>
          </div>
        </div>
        {/* increse/decrese count */}

        {/* Price */}
        <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-2 text-center">
          <p className="pt-2">{price}LKR</p>
        </div>
        {/* Price */}
        {/* Delete icon */}
        <div className="col-1 col-xl-1 col-lg-1 col-md-1 col-sm-3 col-2 text-center">
          <h5 className="text-center">
            <button className="btn btn-light" onClick={() => removeItem(id)}>
              <i className="bi bi-trash" style={{ color: "red" }}></i>
            </button>
          </h5>
        </div>
        {/* Delete icon */}
      </div>
      {/* <hr /> */}
    </>
  );
}

export default Product;
