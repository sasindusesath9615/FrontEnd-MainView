import React from "react";

function product({ name, price, address, img, shopImg, restaurantName }) {
  return (
    <>
      <div className="card h-100 shadow bg-body rounded">
        <div className="row">
          <div className="row">
            <div className="col-12 ">
              {/* Restaurent name */}
              <h5 className="position-absolute restourent">{restaurantName}</h5>
              {/* Restaurent name */}

              {/* Shop image(rounded poster) */}
              <img
                src={shopImg}
                className="position-absolute border border-3 image-size-restaurant"
                alt="hhgvhgv"
              ></img>
              {/* Shop image(rounded poster) */}
            </div>
          </div>

          {/* Main image */}
          <img
            src={img}
            className="card-img-top rounded  image-size"
            alt="..."
          ></img>
          {/* Main image */}
        </div>
        {/* Card Image(Card head)*/}
        <div className="card-body">
          <div>
            <h5 className="card-title">{name}</h5>
            {/* Product name */}
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
            {/* Selling and Price */}
            <div className="row">
              <div className="col-1">
                <i className="fas fa-map-marker-alt icon-color-location"></i>
              </div>
              <div className="col-11">
                <p className="card-text">{address}</p>
              </div>
            </div>
            {/* Address */}
          </div>
        </div>
        {/* Card Body/Card Description */}
      </div>
    </>
  );
}

export default product;
