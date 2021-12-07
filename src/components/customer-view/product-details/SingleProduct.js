import React from "react";
import { useGlobalContext } from "../../../context";
import "./image.css";

function Description() {
  const { increment, decrement, addToCart, detailProduct, removeItem } =
    useGlobalContext();
  console.log(detailProduct);

  // ===============CONTROL THUMBNAILS===============
  const changeImg = (img) => {
    let ProductImg = document.getElementById("ProductImg");
    let SmallImg = document.getElementsByClassName("small-img");

    if (img === "img") {
      ProductImg.src = SmallImg[2].src;
    } else if (img === "thumb.img1") {
      ProductImg.src = SmallImg[0].src;
    } else {
      ProductImg.src = SmallImg[1].src;
    }
  };
  // ===============CONTROL THUMBNAILS===============

  // if customer press + button without adding to cart ,
  // this will automatically add to cart 
  const Increment = () => {
    if (detailProduct.count === 0) {
      addToCart(detailProduct.id);
    } else {
      increment(detailProduct.id);
    }
  };
  // if customer press - button when amount 0,
  // this will set it to 0 again
  const Decrement = () => {
    if (detailProduct.count === 0) {
      detailProduct.count = 0;
    } else {
      decrement(detailProduct.id);
    }
  };

  return (
    <>
      {/* description */}
      <div className="row">
        {/* Images */}
        <div className="col-12 col-sm-12 col-md-6 ">
          <div className="card ">
            {/*================== Main Images ==================*/}
            <img
              id="ProductImg"
              src={detailProduct.img}
              className="desc shadow rounded "
              alt={detailProduct.name}
            />
            {/*================== Main Images ==================*/}

            {/*================== Thumbnails ==================*/}
            <div className="small-img-row">
              {/*================== Thumb1 ==================*/}
              <div className="small-img-col">
                <img
                  className=" shadow rounded small-img"
                  id="SmallImg"
                  src={detailProduct.thumb.img1}
                  alt=""
                  style={{ width: "100%" }}
                  onClick={() => changeImg("thumb.img1")}
                />
              </div>
              {/*================== Thumb2 ==================*/}
              <div className="small-img-col">
                <img
                  className="shadow rounded small-img"
                  id="SmallImg"
                  src={detailProduct.thumb.img2}
                  alt=""
                  style={{ width: "100%" }}
                  onClick={() => changeImg("thumb.img2")}
                />
              </div>
              {/*================== Thumb3 ==================*/}
              <div className="small-img-col">
                <img
                  className=" shadow rounded small-img"
                  id="SmallImg"
                  src={detailProduct.img}
                  alt=""
                  style={{ width: "100%" }}
                  onClick={() => changeImg("img")}
                />
              </div>
            </div>
            {/*================== Thumbnails ==================*/}
          </div>
        </div>
        {/* Images */}

        {/* ================== DETAILS ==================*/}
        <div className="col-12 col-sm-12 col-md-6 ">
          <div className="row mb-3 mt-1">
            {/* ================== product name ==================*/}
            <div className="col">
              <h4>{detailProduct.name}</h4>
            </div>
            {/* ================== restourent name ==================*/}
            <div className="col text-end mt-1">
              <h5>{detailProduct.restaurentName}</h5>
            </div>
          </div>
          <div className="row ">
            <div className="row">
              <div className="col">
                <div className="row">
                  <div className="col-1">
                    <i className="fas fa-thumbs-up icon-color-like"></i>
                  </div>
                  <div className="col-11">
                    <p>(24)sellings</p>
                  </div>
                </div>
              </div>
            </div>
            {/* ================== address ==================*/}
            <div className="row">
              <div className="col-1">
                <i className="fas fa-map-marker-alt icon-color-location"></i>
              </div>
              <div className="col-11">
                <p className="card-text">{detailProduct.address}</p>
              </div>
            </div>
          </div>
          {/* ================== product price ==================*/}
          <div className="row my-4">
            <h3>{detailProduct.price}LKR</h3>
          </div>
          <div className="row my-2">
            <div className="row">
              <div className="col-2 col-md-3">
                <p className="pt-2">Quantity</p>
              </div>
              <div className="col-10 col-md-9">
                <div className="row">
                  {/* ================== increment quantity ==================*/}
                  <div className="col-1 col-xl-1 col-lg-1 col-md-2 col-sm-1 padding-remove">
                    <button
                      type="button"
                      className="btn border border-secondary"
                      style={{ width: "37px" }}
                      // onClick={() => increment(detailProduct.id)}
                      onClick={() => Increment(detailProduct.id)}
                    >
                      +
                    </button>
                  </div>
                  {/* ================== quantity amount ==================*/}
                  <div className="col-1 col-xl-1 col-lg-2 col-md-2 col-sm-1 padding-remove">
                    <p className="pt-2 text-center">{detailProduct.count}</p>
                  </div>
                  {/* ================== decrement quantity ==================*/}
                  <div className="col-1 col-xl-1 col-lg-2 col-md-2 col-sm-1 padding-remove">
                    <button
                      type="button"
                      className="btn border border-secondary"
                      style={{ width: "37px" }}
                      // onClick={() => decrement(detailProduct.id)}
                      onClick={() => Decrement(detailProduct.id)}
                    >
                      -
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row ">
            {/*================ Buy Now button================ */}
            <div className="col">
              <button className="btn rounded-pill  rounded-btn" type="button">
                Buy Now
              </button>
            </div>
            <div className="col text-center">
              {/*================ Add to cart/In Cart button================ */}
              {detailProduct.inCart === true ? (
                <button
                  className="btn rounded-pill rounded-btn-in-cart"
                  type="button"
                  // disabled={inCart}
                  onClick={() => removeItem(detailProduct.id)}
                >
                  <span>In Cart</span>
                </button>
              ) : (
                <button
                  className="btn rounded-pill  rounded-btn "
                  type="button"
                  // disabled={inCart}
                  onClick={() => addToCart(detailProduct.id)}
                >
                  <span>Add to Cart</span>
                </button>
              )}

              {/*================ Add to cart/In Cart button================*/}
            </div>
          </div>
        </div>
        {/* ================== DETAILS ==================*/}
      </div>
      {/* description */}

      {/* ==================ProductDetails ==================*/}
      <div>
        <div className="mt-5 text-center border product-details">
          <p>product details</p>
        </div>
      </div>
      {/*================== ProductDetails ==================*/}
    </>
  );
}

export default Description;
