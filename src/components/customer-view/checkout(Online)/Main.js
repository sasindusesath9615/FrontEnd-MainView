import React from "react";
import Navbar from "../navbar";
import Deliverer from "./deliverer";
import { useGlobalContext } from "../../../context";

function Main() {
  const { deliverer } = useGlobalContext();
  console.log(deliverer);
  return (
    <>
      {/* =========================================================================== */}
      <div>
        <Navbar />
      </div>
      {/* =========================================================================== */}
      <div className="container container-margin">
        <div className="row justify-content-center">
          <div className="col-11 col-sm-12 col-md-8 col-lg-8 col-xl-8 bg-color-deliverer border">
            <div>
              <p className="text-center">Pick your Deliverer</p>
              {deliverer.map((item) => {
                return (
                  <div className="col" key={item.id}>
                    <Deliverer {...item}></Deliverer>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* =========================================================================== */}

      {/* =========================================================================== */}
      <div className="container container-margin">
        <div className="container">
          <div className="col text-center">
            <button
              type="button"
              className="btn btn-secondary "
              style={{ width: "200px" }}
            >
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
      {/* =========================================================================== */}
    </>
  );
}

export default Main;
