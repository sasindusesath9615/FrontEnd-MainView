import React from "react";

function product({ name, address, img, img1, img2, shopImg, restaurantName }) {
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
          <div className="col-6  padding-right-remove">
            <img src={img} className=" image-size-1 border-end" alt="..."></img>
          </div>{" "}
          {/* Main image */}
          <div className="col-6  padding-left-remove">
            <div>
              <img
                src={img1}
                className=" image-size-2 border-bottom border-start"
                alt="..."
              ></img>
            </div>
            <div>
              <img
                src={img2}
                className=" image-size-3 border-top border-start"
                alt="..."
              ></img>
            </div>
          </div>
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
              <div className="col text-end"></div>
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
