import React from "react";

function deliverer({ profileImg, name }) {
  return (
    <>
      <div className="row">
        <div className="col-lg-6 col-xl-6 col-4 col-md-5 col-sm-5">
          <div className="row">
            <div className="col-3">
              <i
                className="fas fa-circle padding-acive-logo"
                style={{ color: "green" }}
              ></i>
            </div>
            {/* ===========================Profile Image=========================== */}
            <div className="col-9" style={{ padding: "14px" }}>
              <img
                src={profileImg}
                className=" border border-1 image-size-product "
                alt="hhgvhgv"
              ></img>
            </div>
            {/* ====================================================== */}
          </div>
        </div>
        <div className="col-lg-6 col-xl-6 col-8 col-md-7 col-sm-7">
          {/* ===========================Name=========================== */}
          <div className="row p-2">
            {/* <p className="align-self-center">Amarabandu ruupasinghe</p> */}
            {name}
          </div>
          {/* ====================================================== */}
          {/* ===========================Reting=========================== */}
          <div className="row">
            <div className="col-1">
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="col-1">
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="col-1">
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="col-1">
              <i className="bi bi-star"></i>
            </div>
            <div className="col-1">
              <i className="bi bi-star"></i>
            </div>
          </div>
          {/* ====================================================== */}
        </div>
      </div>
      <hr />
    </>
  );
}

export default deliverer;
