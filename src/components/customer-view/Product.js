import React from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../../context";

function Product({
  id,
  name,
  price,
  address,
  img,
  shopImg,
  restaurantName,
  inCart,
}) {
  const { addToCart, handledetails, removeItem } = useGlobalContext();

  return (
    <>
      <div className="card h-100 shadow bg-body rounded">
        <div className="row">
          <div className="row">
            <div className="col-12 ">
              {/* ================Restaurent name ================*/}
              <h5 className="position-absolute restourent">{restaurantName}</h5>
              {/* Restaurent name */}

              {/*================ Add to cart/In Cart button================ */}
              {inCart === true ? (
                <button
                  className="btn  position-absolute rounded-pill btn-margin in-cart-btn"
                  type="button"
                  // disabled={inCart}
                  onClick={() => removeItem(id)}
                >
                  <span>In Cart</span>
                </button>
              ) : (
                <button
                  className="btn  position-absolute rounded-pill btn-margin add-to-cart-btn"
                  type="button"
                  // disabled={inCart}
                  onClick={() => addToCart(id)}
                >
                  <span>Add to Cart</span>
                </button>
              )}

              {/*================ Add to cart/In Cart button================*/}

              <img
                src={shopImg}
                className="position-absolute border border-3 image-size-restaurant"
                alt="shop-image"
              ></img>

              {/* ================Shop image(rounded poster)================ */}
            </div>
          </div>

          <div>
            {/*================ Link to product Description ================*/}
            <Link to="/ProductDetails">
              <img
                src={img}
                className="card-img-top rounded  image-size control-product-img"
                alt="main-image"
                onClick={() => {
                  handledetails(id);
                }}
              ></img>
            </Link>
          </div>

          {/* ================Main image ================*/}
        </div>

        {/* ================Card Image(Card head)================*/}
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            {/*================ Product name================ */}
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-2">
                    <i className="fas fa-thumbs-up icon-color-like"></i>
                  </div>
                  <div className="col-10">
                    <p>(24)sellings</p>
                  </div>
                </div>
              </div>
              <div className="col text-end">
                <p>
                  <b>{price}LKR</b>
                </p>
              </div>
            </div>
            {/* ================Selling and Price ================*/}
            <div className="row">
              <div className="col-1">
                <i className="fas fa-map-marker-alt icon-color-location"></i>
              </div>
              <div className="col-11">
                <p className="card-text">{address}</p>
              </div>
            </div>
            {/*================ Address================ */}
          </div>
        </div>
        {/*================ Card Body/Card Description================ */}
      </div>
    </>
  );
}

export default Product;
